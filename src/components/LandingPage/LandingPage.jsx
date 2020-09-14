import React, { useCallback, useReducer } from 'react';
import Header from '../Header/Header';
import InsertTodo from './Section/InsertTodo/InsertTodo';
import TodoCount from './Section/TodoCount/TodoCount';
import TodoList from './Section/TodoList/TodoList';
import './LandingPage.css';

const initialState = {
	todos: [
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
	],
	listType: 'all',
};

let todoId = 6;

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [...state.todos, { id: todoId++, text: action.text, checked: false }],
			};
		case 'CHECK_TODO':
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
				),
			};
		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.id),
			};
		case 'CHANGE_LIST_TYPE':
			return { ...state, listType: action.listType };
		default:
			return state;
	}
};

const LandingPage = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addTodoItem = useCallback(todo => {
		dispatch({ type: 'ADD_TODO', text: todo });
	}, []);

	const changeListType = useCallback(type => {
		dispatch({ type: 'CHANGE_LIST_TYPE', listType: type });
	}, []);

	const checkTodo = useCallback(id => {
		dispatch({ type: 'CHECK_TODO', id: id });
	}, []);

	const delTodo = useCallback(id => {
		dispatch({ type: 'DELETE_TODO', id: id });
	}, []);

	return (
		<div className="landing">
			<Header />
			<InsertTodo addTodoItem={addTodoItem} />
			<TodoCount todos={state.todos} />
			<TodoList
				todos={state.todos}
				type={state.listType}
				changeListType={changeListType}
				delTodo={delTodo}
				checkTodo={checkTodo}
			/>
		</div>
	);
};

export default LandingPage;
