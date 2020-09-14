import React, { useState, useEffect, useRef, memo, useContext } from 'react';
import TodoContext from '../../../../contexts/todo';

import TodoItem from '../TodoItem/TodoItem';
import ButtonList from './ButtonList/ButtonList';
import './TodoList.css';

const TodoList = memo(() => {
	const todoContext = useContext(TodoContext);
	const { listType, todos } = todoContext.todoState;

	const [typeTodos, setTypeTodos] = useState([]);
	const _typeMessage = useRef('');

	useEffect(() => {
		if (listType === 'doing') {
			_typeMessage.current = 'Cheer Up !';
			setTypeTodos(todos.filter(todo => todo.checked === false));
		} else if (listType === 'completed') {
			_typeMessage.current = 'Congratulations !';
			setTypeTodos(todos.filter(todo => todo.checked === true));
		} else {
			_typeMessage.current = "It's up to you !";
			setTypeTodos(todos);
		}
	}, [listType, todos]);

	return (
		<div>
			<ButtonList />
			<h2 className="list-title">{_typeMessage.current}</h2>
			<ul>
				{typeTodos.map(todo => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	);
});

export default TodoList;
