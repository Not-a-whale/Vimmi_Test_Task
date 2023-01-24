import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
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
    const user = this.dataService.getUser(id);
    if (user) {
      return user;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.NOT_ACCEPTABLE,
          error: 'There is no user with such an Id',
        },
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
  }
}
