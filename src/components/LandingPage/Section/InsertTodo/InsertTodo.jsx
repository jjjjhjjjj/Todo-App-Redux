import React, { memo, useState } from 'react';
import './InsertTodo.css';

const InsertTodo = memo(({ addTodo }) => {
	const [todoText, setTodoText] = useState('');

	const onChange = e => {
		e.preventDefault();
		setTodoText(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		addTodo(todoText);
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
