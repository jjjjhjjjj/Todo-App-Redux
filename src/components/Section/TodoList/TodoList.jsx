import React from 'react';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ type, todos, changeListType, delTodo, checkTodo }) => {
	const [typeTodos, setTypeTodos] = useState([]);
	const _typeMessage = useRef('');

	useEffect(() => {
		if (type === 'doing') {
			_typeMessage.current = 'doing';
			setTypeTodos(todos.filter(todo => todo.checked === false));
		} else if (type === 'completed') {
			_typeMessage.current = 'completed';
			setTypeTodos(todos.filter(todo => todo.checked === true));
		} else {
			_typeMessage.current = 'all';
			setTypeTodos(todos);
		}
	}, [type, todos]);

	const onClick = type => {
		changeListType(type);
	};

	return (
		<div>
			<ul>
				<li>
					<button type="button" onClick={() => onClick('all')}>
						|| ALL
					</button>
				</li>
				<li>
					<button type="button" onClick={() => onClick('doing')}>
						|| DOING
					</button>
				</li>
				<li>
					<button type="button" onClick={() => onClick('completed')}>
						|| COMPLETED
					</button>
				</li>
			</ul>
			<h2>{_typeMessage.current}</h2>
			<ul>
				{typeTodos.map(todo => (
					<TodoItem key={todo.id} todo={todo} delTodo={delTodo} checkTodo={checkTodo} />
				))}
			</ul>
		</div>
	);
};

export default TodoList;
