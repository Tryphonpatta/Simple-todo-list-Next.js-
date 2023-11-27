import { ITask } from "./types/task";
const baseUrl = 'http://localhost:3001';

export const getAllTodos = async ():Promise<ITask[]>  =>{
  const response = await fetch(`${baseUrl}/tasks`,{ cache: 'no-store' });
  const todo = response.json();
  return todo;
}

export const createTodo = async (newTask: ITask):Promise<ITask>  =>{
  const response = await fetch(`${baseUrl}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTask),
  });
  const createdTask = await response.json();
  return createdTask;
}

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: 'DELETE',
  })
}