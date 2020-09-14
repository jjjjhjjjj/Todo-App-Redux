import React, { memo, useContext } from 'react';
import './TodoItem.css';
import cn from 'classnames';
import { IoIosCheckboxOutline, IoIosCheckbox, IoIosTrash } from 'react-icons/io';
import TodoContext from '../../../../contexts/todo';

const TodoItem = memo(({ todo }) => {
	const todoContext = useContext(TodoContext);
	const { todoDispatch } = todoContext;

	const { checked } = todo;
	return (
		<li className="todo-item">
			<strong className={cn('item-text', { checked })}>{todo.text}</strong>
			<div className="btn-box">
				{checked === true ? (
					<IoIosCheckbox onClick={() => todoDispatch({ type: 'CHECK_TODO', id: todo.id })} />
				) : (
					<IoIosCheckboxOutline onClick={() => todoDispatch({ type: 'CHECK_TODO', id: todo.id })} />
				)}

				<IoIosTrash onClick={() => todoDispatch({ type: 'DELETE_TODO', id: todo.id })} />
			</div>
		</li>
	);
});

export default TodoItem;
