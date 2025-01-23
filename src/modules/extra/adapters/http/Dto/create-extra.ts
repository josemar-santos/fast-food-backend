import { IsCurrency, IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { ICreateExtra } from "src/modules/extra/domain/helpers/types/create-extra";
import { ModificationType } from "src/modules/extra/domain/helpers/types/modification-type";

export class CreateExtraDto implements ICreateExtra {

    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsCurrency()
    price: number;

    @IsNotEmpty()
    @IsUUID()
    food: string;

    @IsNotEmpty()
    @IsEnum(ModificationType)
    modification: ModificationType;


}