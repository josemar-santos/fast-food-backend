import { ExtraRepository } from "src/modules/extra/ports/repository/extra.repository";
import { ICreateExtra } from "../../helpers/types/create-extra";
import { ExtraEntity } from "../../entities/extra";
import { FoodRepository } from "src/modules/foods/ports/repositories/food.repository";
import { CustomerConflictException } from "src/modules/common/core/exceptions/conflict.exception";
import { CustomerNotFoundExecption } from "src/modules/common/core/exceptions/not-found.exception";

export class CreateExtraUseCase {

    constructor(
        private readonly extraRepository: ExtraRepository,
        private readonly foodRepository: FoodRepository
    ) {}

    async exec(
        data: ICreateExtra
    ) {

        const existFood = await this.foodRepository.findById(data.food);

        if(!existFood) {
            throw new CustomerNotFoundExecption("Food not found")
        }
        const existExtra = await this.extraRepository.existExtra(data.food, data.name);

        if(existExtra) {
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