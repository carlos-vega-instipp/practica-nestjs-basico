import { Injectable } from '@nestjs/common';

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

  createTask(task: any) {
    console.log(task);
    this.tasks.push(task);
    return task;
  }

  updateTask() {
    return 'actualizando tareas';
  }

  deleteTask() {
    return 'eliminando tarea';
  }

  updateTaskStatus() {
    return 'actualizando status de tarea';
  }
}
