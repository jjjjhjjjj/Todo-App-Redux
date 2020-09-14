import React from 'react';
import './TodoItem.css';
import cn from 'classnames';
import { IoIosCheckboxOutline, IoIosCheckbox, IoIosTrash } from 'react-icons/io';

const TodoItem = ({ todo, delTodo, checkTodo }) => {
	const { checked } = todo;
	return (
		<li className="todo-item">
			<strong className={cn('item-text', { checked })}>{todo.text}</strong>
			<div className="btn-box">
				{checked === true ? (
					<IoIosCheckbox onClick={() => checkTodo(todo.id)} />
				) : (
					<IoIosCheckboxOutline onClick={() => checkTodo(todo.id)} />
				)}

				<IoIosTrash onClick={() => delTodo(todo.id)} />
			</div>
		</li>
	);
};

export default TodoItem;
