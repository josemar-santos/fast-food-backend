import { BadRequestException, Injectable } from '@nestjs/common';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { format, join, parse } from 'path';
import { Image } from 'src/modules/common/core/image';
import { UploadService } from 'src/modules/common/ports/services/upload-service/upload.service';

@Injectable()
export class UploadServiceImplementation implements UploadService {
  private readonly basePath = join(process.cwd(), 'uploads');

  constructor() {
    if (!existsSync(this.basePath)) {
      mkdirSync(this.basePath, { recursive: true });
    }
  }

  private generateUniqueFilename(originalname: string): string {
    const fileInfo = parse(originalname);
    let filename = originalname;
    let counter = 1;

    while (existsSync(join(this.basePath, filename))) {
      filename = format({
        dir: '',
        name: `${fileInfo.name}_${counter}`,
        ext: fileInfo.ext,
      });
      counter++;
    }

    return filename;
  }

  upload(image: Image): Promise<string> {
    const filename = this.generateUniqueFilename(image.filename);
    const filePath = join(this.basePath, filename);

    return new Promise((resolve, reject) => {
      const writeStream = createWriteStream(filePath);

      writeStream.write(image.buffer);
      writeStream.end();

      writeStream.on('finish', () => resolve(filename));
      writeStream.on('error', (err) =>
        reject(new BadRequestException(err.message)),
      );
    });
  }
}
