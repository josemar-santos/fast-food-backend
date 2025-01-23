import { ExtraRepository } from "src/modules/extra/ports/repository/extra.repository";
import { CreateExtraDto } from "../../helpers/dto/create-extra";
import { ExtraEntity } from "../../entities/extra";
import { FoodRepository } from "src/modules/foods/ports/repositories/food.repository";
import { CustomerConflictException } from "src/modules/common/core/exceptions/conflict.exception";

export class CreateExtraUseCase {

    constructor(
        private readonly extraRepository: ExtraRepository,
        private readonly foodRepository: FoodRepository
    ) {}

    async exec(
        data: CreateExtraDto
    ) {
        const existFood = await this.extraRepository.existExtra(data.food, data.name);

        if(existFood) {
            throw new CustomerConflictException("Extra just exist");
        }

        const extra = ExtraEntity.builder()
            .setName(data.name)
            .setAddionalPrice(data.price)
            .setModificationType(data.modification)
            .setFood(data.food);

        return this.extraRepository.save(extra)

    }
}