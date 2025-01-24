import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateExtraUseCase } from 'src/modules/extra/domain/use-cases/createExtra-usecase/create-extra.usecase';
import { CreateExtraDto } from '../../Dto/create-extra';

@Controller('extra')
export class CreateExtraController {

    constructor(private readonly createExtraUseCase: CreateExtraUseCase) {}

    @HttpCode(HttpStatus.CREATED)
    @Post()
    index(
        @Body() data: CreateExtraDto
    ) {
        return this.createExtraUseCase.exec(data)
    }
}
