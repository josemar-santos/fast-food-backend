import { BaseEntity } from "src/modules/common/core/entity";
import { ModificationType } from "../helpers/types/modification-type";

export class ExtraEntity extends BaseEntity {

    name: string;
    addionalPrice: string;
    food: string;
    modificationType: ModificationType;

    static builder() {
        return new ExtraEntity();
    }

    setName(name: string): ExtraEntity {
        this.name = name;
        return this;
    }

    setAddionalPrice(price: string): ExtraEntity {
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