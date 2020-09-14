import React from 'react';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import ButtonList from './ButtonList/ButtonList';
import './TodoList.css';

const TodoList = ({ type, todos, changeListType, delTodo, checkTodo }) => {
	const [typeTodos, setTypeTodos] = useState([]);
	const _typeMessage = useRef('');

	useEffect(() => {
		if (type === 'doing') {
			_typeMessage.current = 'CHeer Up !';
			setTypeTodos(todos.filter(todo => todo.checked === false));
		} else if (type === 'completed') {
			_typeMessage.current = 'Congratulations !';
			setTypeTodos(todos.filter(todo => todo.checked === true));
		} else {
			_typeMessage.current = "It's up to you !";
			setTypeTodos(todos);
		}
	}, [type, todos]);

	return (
		<div>
			<ButtonList changeListType={changeListType} type={type} />
			<h2 className="list-title">{_typeMessage.current}</h2>
			<ul>
				{typeTodos.map(todo => (
					<TodoItem key={todo.id} todo={todo} delTodo={delTodo} checkTodo={checkTodo} />
				))}
			</ul>
		</div>
	);
};

export default TodoList;
