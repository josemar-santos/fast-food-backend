import { CategoryModel } from 'src/modules/categories/adapters/persitence/models/categories.model';
import { BaseModel } from 'src/modules/common/adapters/models/baseModel';
import { ExtraModel } from 'src/modules/extra/adapters/persistence/model/extra.model';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

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

  @ManyToOne(() => CategoryModel, (category) => category.foods)
  category: CategoryModel;

  @OneToMany(() => ExtraModel, (extra) => extra.food)
  extras: ExtraModel[];
}
