import { BaseEntity } from "src/modules/common/core/entity";

export class CategoryEntity extends BaseEntity {
  name: string;
  description?: string;
  avatar: string;


  static builder(): CategoryEntity {
    return new CategoryEntity();
  }

  setName(name: string): CategoryEntity {
    this.name = name;
    return this;
  }

  setAvatar(avatar: string): CategoryEntity {
    this.avatar = avatar;
    return this;
  }

  setDescription(description?: string): CategoryEntity {
    this.description = description;
    return this;
  }

}
