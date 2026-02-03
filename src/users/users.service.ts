import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma.service';
import { Prisma, User } from '../generated/prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  createUser(user: CreateUserDto): Promise<User> {
    const data: Prisma.UserCreateInput = {
      email: user.email,
      name: user.name,
      password: user.password,
    };
    return this.prisma.user.create({ data });
  }
}
