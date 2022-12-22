import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TreeRepository } from "typeorm";

import {
  NotFoundBoardException,
  NotFoundParentBoardException,
} from "./board.exception";
import { CreateBoardDto } from "./dto/create-board.dto";
import { UpdateBoardDto } from "./dto/update-board.dto";
import { Board } from "./entities/board.entity";

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: TreeRepository<Board>,
  ) {}

  async create(createBoardDto: CreateBoardDto) {
    const parentBoard =
      createBoardDto.parentBoardId &&
      (await this.findOne(createBoardDto.parentBoardId));

    const board = this.boardRepository.create({
      ...createBoardDto,
      ...(parentBoard && { parent: parentBoard }),
    });

    return this.boardRepository.save(board);
  }

  findByIds(ids: number[]) {
    return this.boardRepository.createQueryBuilder().whereInIds(ids).getMany();
  }

  findAll() {
    return this.boardRepository.findTrees({
      relations: [ "children" ],
    });
  }

  async findOne(id: number) {
    const board = await this.boardRepository.findOne({
      where: { id },
      relations: { parent: true, children: true },
    });
    if (!board) throw new NotFoundBoardException();

    return board;
  }

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    try {
      if (typeof updateBoardDto.parentBoardId !== "undefined")
        await this.findOne(updateBoardDto.parentBoardId);
    } catch (error) {
      throw new NotFoundParentBoardException();
    }

    return this.boardRepository.update(id, updateBoardDto);
  }

  async remove(id: number) {
    const board = await this.findOne(id);

    return this.boardRepository.remove(board);
  }
}
