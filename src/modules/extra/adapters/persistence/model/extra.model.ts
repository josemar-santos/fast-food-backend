import { BaseModel } from "src/modules/common/adapters/models/baseModel";
import { ModificationType } from "src/modules/extra/domain/helpers/types/modification-type";
import { FoodModel } from "src/modules/foods/adapters/persistence/models/food.model";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'extras'
})
export class ExtraModel extends BaseModel {


    constructor(
        name: string,
        price: number,
        modification: ModificationType,
        food: FoodModel
    ) {
        super()
    }
    
    @Column({
        name: 'extra_name',
        type: 'varchar',
        length: 100
    })
    name: string;

    @Column({
        name: 'extra_price',
        type: 'decimal',
    })
    price: number;

    @Column({
        type: 'enum',
        enum: ModificationType,
    })
    modification: ModificationType;

    @ManyToOne(() => FoodModel, (food) => food.extras)
    food: FoodModel;
}