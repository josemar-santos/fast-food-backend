import { BaseEntity } from "src/modules/common/core/entity";
import { FoodEntity } from "src/modules/foods/domain/entities/food";
import { ModificationType } from "../helpers/types/modification-type";

export class ExtraEntity extends BaseEntity {

    name: string;
    addionalPrice: number;
    food: string;
    modificationType: ModificationType;

    static builder() {
        return new ExtraEntity();
    }

    setName(name: string): ExtraEntity {
        this.name = name;
        return this;
    }

    setAddionalPrice(price: number): ExtraEntity {
        this.addionalPrice = price;
        return this;
    }

    setFood(food: string): ExtraEntity {
        this.food = food;
        return this;
    }

    setModificationType(modification: ModificationType): ExtraEntity {
        this.modificationType = modification;
        return this;
    }
}