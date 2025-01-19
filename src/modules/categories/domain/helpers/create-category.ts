import { Image } from "src/modules/common/core/image";

export interface CreateCategoyPayload {
  name: string;
  description?: string;
  avatar: Image;
}