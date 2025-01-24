import { Controller, Get, Param, ParseUUIDPipe, Query } from '@nestjs/common';
import { ExtraPageProps } from '../../Dto/extraPage';
import { ListExtraUseCase } from 'src/modules/extra/domain/use-cases/listExtra-usecase/list-extra.usecase';

@Controller('extra')
export class ListExtraController {

    constructor(private readonly listExtraUseCase: ListExtraUseCase) {}

    @Get(':food_id')
    index(
        @Param('food_id', new ParseUUIDPipe()) food_id: string,
        @Query() props: ExtraPageProps
    ) {
        return this.listExtraUseCase.exec(props.page, props.perPage, food_id)
    }
}
