import { Body, Controller, Inject, Post, UseGuards } from "@nestjs/common";
import { AdminCreateDto } from "src/admin/dto/adminCreate.dto";
import { Public } from "src/commons/decorators/public.decorator";
import { UserField } from "src/commons/decorators/userField.decorator";
import { LocalGuard } from "src/commons/guards/local.guard";

import { AuthService } from "./auth.service";
import { AdminCredential } from "./dto/adminCredential.dto";
import { TokenDto } from "./dto/token.dto";

@Controller("auth")
export class AuthController {
  constructor(@Inject(AuthService) private authService: AuthService) {}

  @Public()
  @Post("admins/join")
  async adminJoin(@Body() adminCreateDto: AdminCreateDto): Promise<boolean> {
    return this.authService.join(adminCreateDto);
  }

  @Public()
  @UseGuards(LocalGuard)
  @Post("admins/login")
  async adminLogin(@UserField() user: AdminCredential): Promise<TokenDto> {
    return this.authService.adminLogin(user);
  }
}
