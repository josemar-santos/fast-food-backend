import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtraEntity } from "src/modules/extra/domain/entities/extra";
import { ExtraRepository } from "src/modules/extra/ports/repository/extra.repository";
import { ExtraModel } from "../model/extra.model";
import { Repository } from "typeorm";
import { FoodMapper } from "src/modules/foods/adapters/persistence/mapper/food.mapper";
import { FoodEntity } from "src/modules/foods/domain/entities/food";
import { FoodRepository } from "src/modules/foods/ports/repositories/food.repository";
import { FoodModel } from "src/modules/foods/adapters/persistence/models/food.model";
import { ExtraMapper } from "../mapper/extra.mapper";

@Injectable()
export class ExtraRepositoryImplementation implements ExtraRepository {

    constructor(
        @InjectRepository(ExtraModel)
        private readonly extraRepository: Repository<ExtraModel>,
        @InjectRepository(FoodModel)
        private readonly foodRepository: Repository<FoodModel>,
        private readonly mapper: ExtraMapper
      ) {}
      
    async existExtra(food: string, extraName: string): Promise<boolean> {

        return this.extraRepository.existsBy({
            food: { id: food },
            name: extraName
        });
    }

    async save(entity: ExtraEntity): Promise<ExtraEntity> {


        const food = await this.foodRepository.findOne({ where: { id: entity.food}, relations: { category: true } });

        const data = new ExtraModel();
        data.name = entity.name;
        data.price = entity.addionalPrice;
        data.food = food;
        data.modification = entity.modificationType;
        const extra = await this.extraRepository.save(data);

        return this.mapper.toEntity(extra);
    }

}