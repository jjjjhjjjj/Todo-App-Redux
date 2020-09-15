import React, { useState, useEffect, memo } from 'react';
import { useCallback } from 'react';
import './TodoCount.css';

const TodoCount = memo(({ todos }) => {
	const [doingCnt, setDoingCnt] = useState();
	const [completedCnt, setCompletedCnt] = useState();

	const todoCount = useCallback(() => {
		setDoingCnt(todos.filter(todo => todo.checked === false).length);
		setCompletedCnt(todos.filter(todo => todo.checked === true).length);
	}, [todos]);

	useEffect(() => {
		todoCount();
	}, [todoCount]);

	return (
		<p className="todo-count">
			Doing : {doingCnt} || completed: {completedCnt}
		</p>
	);
});

export default TodoCount;
