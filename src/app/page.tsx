"use client"
import { getAllTodos } from "../../api";
import Addtask from "./component/addtask"
import Todolist from "./component/todolist"

export default async function Home() {
  const task = await getAllTodos();
  console.log(task);  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List App</h1>
        <Addtask />
      </div>
      <Todolist task={task}/>
    </main>
  )
}
