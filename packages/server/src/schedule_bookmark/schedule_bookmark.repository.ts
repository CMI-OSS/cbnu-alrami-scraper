import { ScheduleBookmark } from "src/commons/entities/scheduleBookmark.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ScheduleBookmark)
export class ScheduleBookmarkRepository extends Repository<ScheduleBookmark> {
  async countByArticle(scheduleId: number): Promise<number> {
    return this.createQueryBuilder("schedulebookmark")
      .where("schedulebookmark.schedule_id = :scheduleId", { scheduleId })
      .getCount();
  }

  async existsByUserAndArticle(
    userId: number,
    scheduleId: number,
  ): Promise<number> {
    return this.createQueryBuilder("schedulebookmark")
      .where("schedulebookmark.user_id = :userId", { userId })
      .andWhere("schedulebookmark.schedule_id = :scheduleId", { scheduleId })
      .getCount();
  }
}