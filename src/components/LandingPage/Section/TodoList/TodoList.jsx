import React, { useState, useEffect, useRef, memo } from 'react';
import ButtonListContainer from '../../../../containers/ButtonListContainer';
import TodoItemContainer from '../../../../containers/TodoItemContainer';
import './TodoList.css';

const TodoList = memo(({ listType, todos }) => {
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
			<ButtonListContainer />
			<h2 className="list-title">{_typeMessage.current}</h2>
			<ul>
				{typeTodos.map(todo => (
					<TodoItemContainer key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	);
});

export default TodoList;
