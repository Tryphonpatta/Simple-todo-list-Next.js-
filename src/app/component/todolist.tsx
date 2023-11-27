"use client";

import { ITask } from "../../../types/task";
import { MdDeleteForever } from "react-icons/md";
import { deleteTodo } from "../../../api";
import { useRouter } from "next/navigation";
interface TodolistProps {
	task:ITask[];

}

const Todolist : React.FC<TodolistProps> = ({task}) => {
	const router = useRouter();
	const handledelete = async (id:string) => {
		await deleteTodo (id);
		router.refresh()
	}

	return (
		<div>
			<div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Task</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
		{task.map(task => (
			<tr key={task.id}>
				<td>{task.text}</td>
				<td>{task.date}</td>
				<td><MdDeleteForever className= "hover:cursor-pointer" onClick = {() => handledelete(task.id)}  size = {20}/></td>
			</tr>
		))}
    </tbody>
  </table>
</div>
		</div>
	)
}

export default Todolist;