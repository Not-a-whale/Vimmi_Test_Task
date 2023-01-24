import { Controller, Get, Param } from '@nestjs/common';
import { UserInterface } from '../interfaces/user.interface';
import { DataService } from '../services/data.service';

@Controller()
export class AppController {
  constructor(private readonly dataService: DataService) {}

  @Get('users')
  getAllUsers(): UserInterface[] {
    return this.dataService.getUsers();
  }

  @Get('users/:id')
  getUser(@Param('id') id: string): UserInterface {
    return this.dataService.getUser(id);
  }
}
