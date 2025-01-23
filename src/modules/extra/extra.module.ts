import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExtraModel } from "./adapters/persistence/model/extra.model";
import { CreateExtraController } from './adapters/http/controller/create-extra/create-extra.controller';
import { CreateExtraUseCase } from "./domain/use-cases/createExtra-usecase/createExtra.usecase";
import { ExtraRepository } from "./ports/repository/extra.repository";
import { FoodRepository } from "../foods/ports/repositories/food.repository";
import { FoodModule } from "../foods/food.module";
import { ExtraRepositoryImplementation } from "./adapters/persistence/repositories/extra.repository";
import { ExtraMapper } from "./adapters/persistence/mapper/extra.mapper";

@Module({
    imports: [
        TypeOrmModule.forFeature([ExtraModel]),
        FoodModule
    ],
    controllers: [CreateExtraController],
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
        }
    ]
})
export class ExtraModule {

}