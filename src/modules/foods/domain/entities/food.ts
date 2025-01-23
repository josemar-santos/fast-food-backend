import { BaseEntity } from "src/modules/common/core/entity";
import { ResponseFood } from "../helpers/interfaces/reponse-food";
import { CategoryEntity } from "src/modules/categories/domain/entities/categories";

export class FoodEntity extends BaseEntity {
  name: string;
  price: number;
  prepareTime: string;
  description?: string;
  category: string;
  url: string;

  static builder(): FoodEntity {
    return new FoodEntity();
  }

  setPrice(price: number): FoodEntity {
    this.price = price;
    return this;
  }

  setPrepareTime(time: string): FoodEntity {
    this.prepareTime = time;
    return this;
  }

  setDescription(description?: string): FoodEntity {
    this.description = description;
    return this;
  }

  setCategory(category: string): FoodEntity {
    this.category = category;
    return this;
  }

  setUrl(url: string): FoodEntity {
    this.url = url;
    return this;
  }

  setName(name: string): FoodEntity {
    this.name = name;
    return this;
  }
}
