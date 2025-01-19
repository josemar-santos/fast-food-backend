import { Image } from "src/modules/common/core/image";

export abstract class UploadService {
    abstract upload(image: Image): Promise<string>;
}