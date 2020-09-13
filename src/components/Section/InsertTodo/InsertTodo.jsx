import React from 'react';
import { useState } from 'react';

const InsertTodo = ({ addTodoItem }) => {
	const [todoText, setTodoText] = useState('');

	const onChange = e => {
		e.preventDefault();
		setTodoText(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		addTodoItem(todoText);
		setTodoText('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input type="text" onChange={onChange} value={todoText} placeholder="할 일을 적어주세요." />
			<button type="submit">추가</button>
		</form>
	);
};

export default InsertTodo;
