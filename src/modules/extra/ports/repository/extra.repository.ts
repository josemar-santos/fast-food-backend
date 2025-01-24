import { Page } from "src/modules/common/core/page";
import { ExtraEntity } from "../../domain/entities/extra";

export abstract class ExtraRepository {
    abstract existExtra(food: string, extraName: string): Promise<boolean>;
    abstract save(extra: ExtraEntity): Promise<ExtraEntity>;
    abstract findAll(page: number, perPage: number, food_id: string): Promise<Page<ExtraEntity>>;
}