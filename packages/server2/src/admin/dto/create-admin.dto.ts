import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { CreateBoardAuthorityDto } from "src/board-authority/dto/create-board-authority.dto";
import { UpdatableCommonEntityKeys } from "src/common/entity";

import { AdminAuthorityType } from "../admin.constant";
import { Admin } from "../entities/admin.entity";

export class CreateAdminDto extends OmitType(Admin, [
  ...UpdatableCommonEntityKeys,
  "boards",
]) {
  @IsString()
  loginId: string;

  @IsString()
  password: string;

  @IsString()
  nickname: string;

  @IsEnum(AdminAuthorityType)
  @IsOptional()
  authoirty?: AdminAuthorityType;

  @ApiProperty({ type: [ CreateBoardAuthorityDto ] })
  @IsOptional()
  boards: CreateBoardAuthorityDto[];
}
