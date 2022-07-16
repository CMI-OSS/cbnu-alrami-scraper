import { Subscribe } from "src/commons/entities/subscribe.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Subscribe)
export class SubscribeRepository extends Repository<Subscribe> {
  async existsByUserAndBoard(userId: number, boardId: number): Promise<number> {
    return this.createQueryBuilder("subscribe")
      .where("subscribe.user_id = :userId", { userId })
      .andWhere("subscribe.board_id = :boardId", { boardId })
      .getCount();
  }
}
