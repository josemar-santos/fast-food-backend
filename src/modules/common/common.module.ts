import { Module } from '@nestjs/common';
import { UploadService } from './ports/services/upload-service/upload.service';
import { UploadServiceImplementation } from './adapters/services/upload-service/upload.service';

@Module({
  providers: [
    { provide: UploadService, useClass: UploadServiceImplementation },
  ],
  exports: [UploadService],
})
export class CommonModule {}
