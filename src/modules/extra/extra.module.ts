import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExtraModel } from "./adapters/persistence/model/extra.model";
import { CreateExtraController } from './adapters/http/controller/create-extra/create-extra.controller';
import { CreateExtraUseCase } from "./domain/use-cases/createExtra-usecase/create-extra.usecase";
import { ExtraRepository } from "./ports/repository/extra.repository";
import { FoodRepository } from "../foods/ports/repositories/food.repository";
import { FoodModule } from "../foods/food.module";
import { ExtraRepositoryImplementation } from "./adapters/persistence/repositories/extra.repository";
import { ExtraMapper } from "./adapters/persistence/mapper/extra.mapper";
import { ListExtraController } from './adapters/http/controller/list-extra/list-extra.controller';
import { ListExtraUseCase } from "./domain/use-cases/listExtra-usecase/list-extra.usecase";

@Module({
    imports: [
        TypeOrmModule.forFeature([ExtraModel]),
        FoodModule
    ],
    controllers: [CreateExtraController, ListExtraController],
    providers: [
        ExtraMapper,
        {
            provide: ExtraRepository,
            useClass: ExtraRepositoryImplementation
        },
        {
            provide: CreateExtraUseCase,
            useFactory: (extraRepository: ExtraRepository, foodRepository: FoodRepository)=> {
                return new CreateExtraUseCase(extraRepository, foodRepository)
            },
            inject: [ExtraRepository, FoodRepository]
        },
        {
            provide: ListExtraUseCase,
            useFactory: (extraRepository: ExtraRepository)=> {
                return new ListExtraUseCase(extraRepository)
            },
            inject: [ExtraRepository]
        }
    ]
})
export class ExtraModule {

}