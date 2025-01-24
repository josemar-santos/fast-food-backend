import { Controller, Delete, Param, ParseUUIDPipe } from '@nestjs/common';
import { DeleteFoodUseCase } from 'src/modules/foods/domain/use-cases/delete-food-usecase/delete-food.usecase';

@Controller('food')
export class DeleteFoodController {

    constructor(private readonly deleteUseCase: DeleteFoodUseCase) {}

    @Delete(':id')
    index(
        @Param('id', new ParseUUIDPipe()) id: string
    ) {
        return this.deleteUseCase.execute(id);
    }
}
