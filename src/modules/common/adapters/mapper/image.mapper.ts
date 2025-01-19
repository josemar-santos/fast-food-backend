import { Image } from '../../core/image';

export class ImageMapper {
  static toImage(image: Express.Multer.File): Image {
    return Image.builder()
      .setFileName(image.originalname)
      .setMimeType(image.mimetype)
      .setBuffer(image.buffer)
      .setSize(image.size);
  }
}
