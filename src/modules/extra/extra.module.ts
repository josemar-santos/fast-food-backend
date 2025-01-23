import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExtraModel } from "./adapters/persistence/model/extra.model";

@Module({
    imports: [TypeOrmModule.forFeature([ExtraModel])]
})
export class ExtraModule {

}