import React from 'react';
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import InsertTodo from '../Section/InsertTodo/InsertTodo';
import TodoList from '../Section/TodoList/TodoList';

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
	]);

	const [doingCnt, setDoingCnt] = useState();
	const [completedCnt, setCompletedCnt] = useState();
	const [listType, setListType] = useState('all');
	const todoId = useRef(3);

	const addTodoItem = todo => {
		const newTodo = {
			id: todoId.current++,
			text: todo,
			checked: false,
		};

		setTodos(todos.concat(newTodo));
	};

	const todoCount = () => {
		setDoingCnt(todos.filter(todo => todo.checked === false).length);
		setCompletedCnt(todos.filter(todo => todo.checked === true).length);
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

	useEffect(() => {
		todoCount();
	}, [todos]);

	return (
		<>
			<header>
				<h1>To-Do List</h1>
				<p>what is your One Small Step?</p>
			</header>
			<InsertTodo addTodoItem={addTodoItem} />
			{/* TodoCount */}
			<p>
				Doing : {doingCnt} || completed: {completedCnt}
			</p>
			<TodoList
				todos={todos}
				type={listType}
				changeListType={changeListType}
				delTodo={delTodo}
				checkTodo={checkTodo}
			/>
		</>
	);
};

export default LandingPage;
