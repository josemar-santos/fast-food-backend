import { FoodEntity } from "src/modules/foods/domain/entities/food";
import { ExtraEntity } from "../../domain/entities/extra";

export abstract class ExtraRepository {
    abstract existExtra(food: string, extraName: string): Promise<boolean>;
    abstract save(extra: ExtraEntity): Promise<ExtraEntity>;
}