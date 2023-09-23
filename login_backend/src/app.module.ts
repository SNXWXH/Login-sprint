import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';

@Module({
  // imports: [UsersModule],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.local.env'],
      // expandVariables: true,
    }),
    UsersModule,
    DbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
