import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";


const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

	const onInputChange = (event) => {
		setInput(event.target.value)
	};

	const updateTodo = (title, id, completed) => {
		const newTodo = todos.map((todo) =>
			todo.id === id ? { title, id, completed } : todo
		)
		setTodos(newTodo);
		console.log(editTodo);
		setEditTodo(" ") 
		console.log(editTodo);
	}

	useEffect(() => {
		if (editTodo) {
			setInput(editTodo.title);
		} else {
			setInput("");
		}
	}, [setInput,editTodo]);

	const onFormSubmit = (event) => {
		event.preventDefault();
		if (!editTodo) {
			setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
			setInput("")
		} else {
			updateTodo(input, editTodo.id, editTodo.completed)
		}
	}

	return (
		<form onSubmit={onFormSubmit}>
			<input type="text" placeholder='Enter a ToDo....' className="task-input"
				value={input}
				required
				onChange={onInputChange}
			/>
			<button className="button-add" type='submit'>
				{editTodo ? "OK" : "Add"}
			</button>
		</form>
	)
}

export default Form