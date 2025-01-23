import { MimeTypeException } from './exceptions/mimetype.exception';

export class Image {
  filename: string;
  mimetype: string;
  buffer?: Buffer;
  size: number;

  private readonly allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];

  static builder(): Image {
    return new Image();
  }

  setFileName(filename: string): Image {
    this.filename = filename;

    return this;
  }

  setSize(size: number): Image {
    this.size = size;
    return this;
  }

  setMimeType(mimetype: string): Image {
    if (!this.allowedMimeTypes.includes(mimetype)) {
      throw new MimeTypeException();
    }

    this.mimetype = mimetype;
    return this;
  }

  setBuffer(buffer: Buffer): Image {
    this.buffer = buffer;
    return this;
  }
}
