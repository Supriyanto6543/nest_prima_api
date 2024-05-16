import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCommentDto: CreateCommentDto) {
    const createComment = await this.prisma.comment.create({
      data: createCommentDto,
    });
    return {
      statusCode: 200,
      data: createComment,
    };
  }

  async findAll() {
    const dataComment = await this.prisma.comment.findMany({});
    return {
      statusCode: 200,
      data: dataComment,
    };
  }

  async findOne(id_comment: number) {
    const findComment = await this.prisma.comment.findFirst({
      where: {
        id_comment,
      },
    });
    return {
      statusCode: 200,
      data: findComment,
    };
  }

  async update(id_comment: number, updateCommentDto: UpdateCommentDto) {
    const updateComment = await this.prisma.comment.update({
      data: updateCommentDto,
      where: {
        id_comment,
      },
    });
    return {
      statusCode: 200,
      data: updateComment,
      message: `Successfull update data ${id_comment}`,
    };
  }

  async remove(id_comment: number) {
    const deleteComment = await this.prisma.comment.delete({
      where: {
        id_comment,
      },
    });
    return {
      statusCode: 200,
      data: deleteComment,
    };
  }
}
