import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  comment_title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  comment_description: string;
}
