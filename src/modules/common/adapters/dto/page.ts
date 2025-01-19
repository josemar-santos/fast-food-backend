import { Transform } from 'class-transformer';
import { Min, IsInt } from 'class-validator';

export class PaginationQueryDto {
  @IsInt()
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10))
  page: number = 1;

  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  perPage: number = 5;
}
