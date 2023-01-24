import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DataService } from '../services/data.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [DataService],
})
export class AppModule {}
