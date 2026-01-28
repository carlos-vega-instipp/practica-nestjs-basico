import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      phone: '123-456-7890',
    },
    {
      id: 1,
      name: 'John Doe',
      phone: '123-456-7890',
    },
  ];

  getUsers() {
    return this.users;
  }
}
