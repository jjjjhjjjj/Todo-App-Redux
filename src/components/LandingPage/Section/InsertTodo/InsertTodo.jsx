import React, { memo, useState, useContext } from 'react';
import { TodoContext } from '../../../../App';
import './InsertTodo.css';

const InsertTodo = memo(() => {
	const todoContext = useContext(TodoContext);
	const [todoText, setTodoText] = useState('');

	const onChange = e => {
		e.preventDefault();
		setTodoText(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		todoContext.todoDispatch({ type: 'ADD_TODO', text: todoText });
		setTodoText('');
	};

	return (
		<form onSubmit={onSubmit} className="insert-form">
			<input
				className="todo-input"
				type="text"
				onChange={onChange}
				value={todoText}
				placeholder="할 일을 적어주세요."
			/>
			<button className="todo-submit-btn" type="submit">
				추가
			</button>
		</form>
	);
});

export default InsertTodo;
