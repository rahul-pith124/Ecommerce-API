import { Controller, Get, HttpCode } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('auth/admin')
export class AdminController {
  constructor(private readonly AdminService: AdminService) {}
  @Get('sign-in')
  @HttpCode(200)
  signIn() {
    return this.AdminService.signIn();
  }
}
