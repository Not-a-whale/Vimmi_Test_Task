import { Injectable } from '@nestjs/common';
import { UserInterface } from '../interfaces/user.interface';
import * as fs from 'fs';

@Injectable()
export class DataService {
  private readonly users: UserInterface[] = JSON.parse(
    fs.readFileSync('./data/data.json', 'utf-8'),
  );
  getUsers(): UserInterface[] {
    return this.users;
  }

  getUser(id: string): UserInterface {
    return this.users.find((user) => user.id === +id);
  }
}
