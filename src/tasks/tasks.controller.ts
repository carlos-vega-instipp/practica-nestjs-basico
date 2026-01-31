import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')
export class TasksController {
  tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get()
  getAllTasks(@Query() query: any) {
    // de la url se obtiene/n el/los ?variable=valor por ejemplo httpos://localhost:3000/tasks?completed=true en ese caso ?completed=true
    //buscar en base de datos
    // petición a otro backend o api
    console.log('query', query);
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    console.log('param: ', id);
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @Put()
  updateTask(@Body() task: UpdateTaskDto) {
    //buscar en base de datos
    // petición a otro backend o api
    return this.tasksService.updateTask(task);
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
