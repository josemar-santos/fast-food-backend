import {
  IsBoolean,
  IsEnum,
  IsMilitaryTime,
  IsOptional,
  IsString,
} from 'class-validator';
import { PaginationQueryDto } from 'src/modules/common/adapters/dto/page';
import {
  Order,
  Sort,
} from 'src/modules/foods/domain/helpers/interfaces/search-params';

export class PageProps extends PaginationQueryDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  deleted: boolean = false;

  @IsOptional()
  @IsString()
  @IsMilitaryTime()
  prepareTime: string;

  @IsOptional()
  @IsString()
  category: string;

  @IsOptional()
  @IsEnum(Order)
  order: Order = Order.NAME;

  @IsOptional()
  @IsEnum(Sort)
  sort: Sort = Sort.GROWING;
}
