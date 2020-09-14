import React from 'react';
import Header from './components/Header/Header';
import InsertTodo from './components/LandingPage/Section/InsertTodo/InsertTodo';
import TodoCount from './components/LandingPage/Section/TodoCount/TodoCount';
import TodoList from './components/LandingPage/Section/TodoList/TodoList';
import './App.css';
import { TodoProvider } from './contexts/todo';

function App() {
	return (
		<div className="landing">
			<Header />
			<TodoProvider>
				<InsertTodo />
				<TodoCount />
				<TodoList />
			</TodoProvider>
		</div>
	);
}

export default App;
