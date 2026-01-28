import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})
export class TasksController {
  tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get('/tasks')
  getAllTasks() {
    //buscar en base de datos
    // petición a otro backend o api
    return this.tasksService.getAllTasks();
  }

  @Post('/tasks')
  createTask() {
    //buscar en base de datos
    // petición a otro backend o api
    return this.tasksService.createTask();
  }

  @Put('/tasks')
  updateTask() {
    //buscar en base de datos
    // petición a otro backend o api
    return this.tasksService.updateTask();
  }

  @Delete('/tasks')
  deleteTask() {
    //buscar en base de datos
    // petición a otro backend o api
    return this.tasksService.deleteTask();
  }

  @Patch('/tasks')
  updateTaskStatus() {
    //buscar en base de datos
    // petición a otro backend o api
    return this.tasksService.updateTaskStatus();
  }
}
