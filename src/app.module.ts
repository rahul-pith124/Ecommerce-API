import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AdminController } from './auth/admin/admin.controller';
import { AdminModule } from './auth/admin/admin.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, AdminModule],
  controllers: [AppController, AdminController],
  providers: [AppService],
})
export class AppModule {}
