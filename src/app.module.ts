import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CustomerModule } from './customer/customer.module';
import { AdminsService } from './admins/admins.service';
import { AdminsController } from './admins/admins.controller';
import { AdminsService } from './admins/admins.service';

@Module({
  imports: [UsersModule, CustomerModule],
  controllers: [AppController, AdminsController],
  providers: [AppService, AdminsService],
})
export class AppModule {}
