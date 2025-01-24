import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { FindOneFoodUseCase } from 'src/modules/foods/domain/use-cases/findOne-food-usecase/findOne-food.usecase';

@Controller('food')
export class FindOneFoodController {

    constructor(private readonly findOneUseCase: FindOneFoodUseCase) {}

    @Get(':id')
    index(
        @Param('id', new ParseUUIDPipe()) id: string
    ) {
        return this.findOneUseCase.execute(id);
    }
}
