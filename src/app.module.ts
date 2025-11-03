import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AttendanceModule } from './attendance/attendance.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [UserModule, AuthModule, AttendanceModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
