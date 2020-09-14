import React, { useState, useEffect, memo, useContext } from 'react';
import TodoContext from '../../../../contexts/todo';
import './TodoCount.css';

const TodoCount = memo(() => {
	const todoContext = useContext(TodoContext);
	const { todos } = todoContext.todoState;
	const [doingCnt, setDoingCnt] = useState();
	const [completedCnt, setCompletedCnt] = useState();

	const todoCount = () => {
		setDoingCnt(todos.filter(todo => todo.checked === false).length);
		setCompletedCnt(todos.filter(todo => todo.checked === true).length);
	};

	useEffect(() => {
		todoCount();
	}, [todos]);

	return (
		<p className="todo-count">
			Doing : {doingCnt} || completed: {completedCnt}
		</p>
	);
});

export default TodoCount;
