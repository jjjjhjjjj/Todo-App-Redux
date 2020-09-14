import React, { createContext, useReducer } from 'react';

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

const TodoContext = createContext(initialState);

const TodoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<TodoContext.Provider
			value={{
				todoState: state,
				todoDispatch: dispatch,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

const TodoConsumer = TodoContext.Consumer;

export { TodoProvider, TodoConsumer };
export default TodoContext;
