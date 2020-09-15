import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import InsertTodoContainer from './containers/InsertTodoContainer';
import TodoCountContainer from './containers/TodoCountContainer';
import TodoListContainer from './containers/TodoListContainer';

function App() {
	return (
		<div className="landing">
			<Header />
			<InsertTodoContainer />
			<TodoCountContainer />
			<TodoListContainer />
		</div>
	);
}

export default App;
