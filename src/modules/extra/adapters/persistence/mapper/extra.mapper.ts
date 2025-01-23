import { Mapper } from "src/modules/common/core/mapper";
import { ExtraEntity } from "src/modules/extra/domain/entities/extra";
import { ExtraModel } from "../model/extra.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ExtraMapper extends Mapper<ExtraEntity, ExtraModel> {
    protected convert(data: ExtraModel): ExtraEntity {
        return ExtraEntity.builder()
            .setId(data.id)
            .setAddionalPrice(data.price)
            .setFood(data.food.id)
            .setModificationType(data.modification)
            .setName(data.name)
            .setCreatedAt(data.createdAt)
            .setUpdatedAt(data.updatedAt)
            .setDeleted(data.deleted)
    }

    toEntity(data: ExtraModel): ExtraEntity {
        return this.convert(data);
    }
}