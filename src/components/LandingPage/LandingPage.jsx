import React from 'react';
import { useState, useRef } from 'react';
import InsertTodo from './Section/InsertTodo/InsertTodo';
import TodoCount from './Section/TodoCount/TodoCount';
import TodoList from './Section/TodoList/TodoList';
import './LandingPage.css';
import Header from '../Header/Header';

const LandingPage = () => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: '리액트 공부하기',
			checked: true,
		},
		{
			id: 2,
			text: '자바스크립트 공부하기',
			checked: false,
		},
		{
			id: 3,
			text: '책 읽기',
			checked: true,
		},
		{
			id: 4,
			text: '게임하기',
			checked: true,
		},
		{
			id: 5,
			text: '운동하기',
			checked: false,
		},
	]);

	const [listType, setListType] = useState('all');
	const todoId = useRef(6);

	const addTodoItem = todo => {
		const newTodo = {
			id: todoId.current++,
			text: todo,
			checked: false,
		};

		setTodos(todos.concat(newTodo));
	};

	const changeListType = type => {
		setListType(type);
	};

	const checkTodo = id => {
		setTodos(todos.map(t => (t.id === id ? { ...t, checked: !t.checked } : t)));
	};

	const delTodo = id => {
		setTodos(todos.filter(t => t.id !== id));
	};

	return (
		<div className="landing">
			<Header />
			<InsertTodo addTodoItem={addTodoItem} />
			<TodoCount todos={todos} />
			<TodoList
				todos={todos}
				type={listType}
				changeListType={changeListType}
				delTodo={delTodo}
				checkTodo={checkTodo}
			/>
		</div>
	);
};

export default LandingPage;
