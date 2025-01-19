import { CategoryModel } from 'src/modules/categories/adapters/persitence/models/categories.model';
import { BaseModel } from 'src/modules/common/adapters/models/baseModel';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({
  name: 'foods',
})
export class FoodModel extends BaseModel {
  @Column({
    name: 'food_name',
    length: 150,
  })
  name: string;

  @Column({
    name: 'food_price',
    type: 'decimal',
  })
  price: number;

  @Column({
    name: 'prepareTime',
    length: 6,
  })
  prepareTime: string;

  @ManyToOne(() => CategoryModel, (category) => category.foods)
  category: CategoryModel;

  @Column({
    name: 'food_description',
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    name: 'food_avatar',
    length: 150,
  })
  url: string;
}
