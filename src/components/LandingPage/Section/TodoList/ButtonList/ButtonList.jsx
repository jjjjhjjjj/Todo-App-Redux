import React, { memo, useContext } from 'react';
import { TodoContext } from '../../../../../App';
import './ButtonList.css';

const ButtonList = memo(() => {
	const todoContext = useContext(TodoContext);
	const { listType } = todoContext.todoState;

	const onClick = type => {
		todoContext.todoDispatch({ type: 'CHANGE_LIST_TYPE', listType: type });
	};

	return (
		<ul className="todo-button-list">
			<li>
				<button
					type="button"
					onClick={() => onClick('all')}
					className={listType === 'all' ? 'active' : ''}
				>
					|| ALL
				</button>
			</li>
			<li>
				<button
					type="button"
					onClick={() => onClick('doing')}
					className={listType === 'doing' ? 'active' : ''}
				>
					|| DOING
				</button>
			</li>
			<li>
				<button
					type="button"
					onClick={() => onClick('completed')}
					className={listType === 'completed' ? 'active' : ''}
				>
					|| COMPLETED
				</button>
			</li>
		</ul>
	);
});

export default ButtonList;
