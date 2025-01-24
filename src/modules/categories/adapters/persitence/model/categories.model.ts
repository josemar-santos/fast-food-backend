import { BaseModel } from 'src/modules/common/adapters/models/baseModel';
import { FoodModel } from 'src/modules/foods/adapters/persistence/model/food.model';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'categories' })
export class CategoryModel extends BaseModel {
  @Column({
    name: 'category_name',
    length: 150,
  })
  name: string;

  @Column({
    name: 'category_description',
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    name: 'category_avatar',
    length: 150,
  })
  avatar: string;

  @OneToMany(() => FoodModel, (food) => food.category)
  foods: FoodModel[];
}
