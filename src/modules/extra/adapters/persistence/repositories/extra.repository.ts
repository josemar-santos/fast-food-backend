import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtraEntity } from "src/modules/extra/domain/entities/extra";
import { ExtraRepository } from "src/modules/extra/ports/repository/extra.repository";
import { ExtraModel } from "../model/extra.model";
import { Repository } from "typeorm";
import { FoodMapper } from "src/modules/foods/adapters/persistence/mapper/food.mapper";
import { FoodEntity } from "src/modules/foods/domain/entities/food";
import { FoodRepository } from "src/modules/foods/ports/repositories/food.repository";

@Injectable()
export class ExtraRepositoryImplementation implements ExtraRepository {

    constructor(
        @InjectRepository(ExtraModel)
        private readonly repository: Repository<ExtraModel>,
        private readonly foodRepository: FoodRepository,
        private readonly foodMapper: FoodMapper
      ) {}
      
    async existExtra(food: string, extraName: string): Promise<boolean> {

        return this.repository.existsBy({
            food: { id: food },
            name: extraName
        });
    }
    async save(entity: ExtraEntity): Promise<ExtraEntity> {
        /*const data = await this.foodRepository.findById(entity.id);
        const food = await this.foodMapper.toModel(data);
        const { name, addionalPrice, modificationType } = entity;

        const extra = new ExtraModel(name, addionalPrice, modificationType, food);

        await this.repository.save(extra);

        return food*/

        throw new Error();
    }

}