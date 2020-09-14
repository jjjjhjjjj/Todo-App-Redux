import React, { useReducer } from 'react';
import Header from './components/Header/Header';
import InsertTodo from './components/LandingPage/Section/InsertTodo/InsertTodo';
import TodoCount from './components/LandingPage/Section/TodoCount/TodoCount';
import TodoList from './components/LandingPage/Section/TodoList/TodoList';
import './App.css';

export const TodoContext = React.createContext();

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

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="landing">
			<Header />
			<TodoContext.Provider
				value={{
					todoState: state,
					todoDispatch: dispatch,
				}}
			>
				<InsertTodo />
				<TodoCount />
				<TodoList />
			</TodoContext.Provider>
		</div>
	);
}

export default App;
