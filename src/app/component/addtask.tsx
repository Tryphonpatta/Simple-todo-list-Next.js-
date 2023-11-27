"use client"
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { createTodo } from "../../../api";
import { useRouter } from "next/navigation";

const Addtask = () => {

	const [showmodal, setShowmodal] = useState<boolean>(false);
	const [task, setTask] = useState<string>("");
	const [date, setDate] = useState<string>("");
	const router = useRouter();
	const Addtodo = async () => {
		const newTask = {id:Math.random().toString(),text:task,date:new Date().toLocaleDateString()};
		await createTodo (newTask);
		console.log(newTask);
		router.refresh()
	}

	return (
		<div>
			<button className="btn btn-primary w-full" onClick={() => setShowmodal(true)}>Add new task <CiCirclePlus size = {18} /></button>
			<div className= {`modal flex justify-center ${showmodal ? "modal-open" : ""}`}>
				{showmodal && <div className="modal-box  relative">
					<form method="dialog">
					{/* if there is a button in form, it will close the modal */}
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => {setShowmodal(false);setTask("");}}>✕</button>
					</form>
					<h3 className="font-bold text-lg">Add a new task</h3>
					<div className="py-4 ">
						<div className="form-control gap-1">
							<label className="label"><span className="label-text">Task :</span></label>
							<input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" value={task} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.currentTarget.value)}/>
							<label className="label"><span className="label-text">Deadline :</span></label>
							<input type="date" className="input input-bordered input-primary w-[180px] max-w-xs" value={date} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.currentTarget.value)}/>
							<button className="mt-4 btn btn-success" onClick={Addtodo}>Add!</button>
						</div>
					</div>
				</div>}
			</div>
		</div>
	);
}

export default Addtask;