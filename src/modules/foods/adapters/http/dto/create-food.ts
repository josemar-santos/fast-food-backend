import {
  IsCurrency,
  IsMilitaryTime,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateFoodDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsCurrency()
  price: number;

  @IsNotEmpty()
  @IsMilitaryTime()
  prepareTime: string;

  @IsOptional()
  @IsString()
  description?: string;
}
