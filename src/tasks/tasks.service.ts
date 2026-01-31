import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
  private tasks: any[] = [];

  getAllTasks(): any[] {
    // return {
    //   name: 'Carlos',
    //   age: 33,
    // };
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      return new NotFoundException('Task not found');
    }

    return taskFound;
  }

  createTask(task: CreateTaskDto) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask(task: UpdateTaskDto) {
    console.log('task actualizada', task);
    return 'actualizando tareas';
  }

  deleteTask() {
    return 'eliminando tarea';
  }

  updateTaskStatus() {
    return 'actualizando status de tarea';
  }
}
