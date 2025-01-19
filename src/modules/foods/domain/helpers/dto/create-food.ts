import { Image } from 'src/modules/common/core/image';

export interface CreateFoodDto {
  name: string;
  category: string;
  price: number;
  prepareTime: string;
  description?: string;
  url: Image;
}
