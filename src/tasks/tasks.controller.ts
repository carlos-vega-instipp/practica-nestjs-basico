import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get()
  getAllTasks() {
    //buscar en base de datos
    // petición a otro backend o api
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask() {
    //buscar en base de datos
    // petición a otro backend o api
    return this.tasksService.createTask();
  }

  @Put()
  updateTask() {
    //buscar en base de datos
    // petición a otro backend o api
    return this.tasksService.updateTask();
  }

  @Delete()
  deleteTask() {
    //buscar en base de datos
    // petición a otro backend o api
    return this.tasksService.deleteTask();
  }

  @Patch()
  updateTaskStatus() {
    //buscar en base de datos
    // petición a otro backend o api
    return this.tasksService.updateTaskStatus();
  }
}
