import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateFoodDto } from '../../dto/create-food';
import { CreateFoodUseCase } from 'src/modules/foods/domain/use-cases/create-food-usecase/create-food.usecase';
import { ImageMapper } from 'src/modules/common/adapters/mapper/image.mapper';

@Controller('food')
export class CreateFoodController {
  constructor(private readonly createfoodUseCase: CreateFoodUseCase) {}
  @UseInterceptors(FileInterceptor('avatar'))
  @Post()
  async index(
    @Body() body: CreateFoodDto,
    @UploadedFile() avatar: Express.Multer.File,
  ) {
    const food = await this.createfoodUseCase.exec({
      name: body.name,
      description: body.description,
      url: ImageMapper.toImage(avatar),
      prepareTime: body.prepareTime,
      price: body.price,
      category: body.category,
    });


    return food;
  }
}
