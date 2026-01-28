import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
  getAllTasks(): User {
    return {
      name: 'Carlos',
      age: 33,
    };
  }

  createTask() {
    return 'Creando tareas';
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
