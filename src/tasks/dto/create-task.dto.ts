import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  task_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  task_description: string;
}
