import React from 'react';

const TodoItem = ({ todo, delTodo, checkTodo }) => {
	return (
		<li>
			<strong>{todo.text}</strong>
			<button type="button" onClick={() => checkTodo(todo.id)}>
				check
			</button>
			<button type="button" onClick={() => delTodo(todo.id)}>
				삭제
			</button>
		</li>
	);
};

export default TodoItem;
