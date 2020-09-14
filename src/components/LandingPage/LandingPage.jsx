import React, { useCallback, useReducer } from 'react';
import Header from '../Header/Header';
import InsertTodo from './Section/InsertTodo/InsertTodo';
import TodoCount from './Section/TodoCount/TodoCount';
import TodoList from './Section/TodoList/TodoList';
import './LandingPage.css';

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
