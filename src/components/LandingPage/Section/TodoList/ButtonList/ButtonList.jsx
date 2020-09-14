import React, { memo } from 'react';
import './ButtonList.css';

const ButtonList = memo(({ changeListType, type }) => {
	const onClick = type => {
		changeListType(type);
	};

	return (
		<ul className="todo-button-list">
			<li>
				<button
					type="button"
					onClick={() => onClick('all')}
					className={type === 'all' ? 'active' : ''}
				>
					|| ALL
				</button>
			</li>
			<li>
				<button
					type="button"
					onClick={() => onClick('doing')}
					className={type === 'doing' ? 'active' : ''}
				>
					|| DOING
				</button>
			</li>
			<li>
				<button
					type="button"
					onClick={() => onClick('completed')}
					className={type === 'completed' ? 'active' : ''}
				>
					|| COMPLETED
				</button>
			</li>
		</ul>
	);
});

export default ButtonList;
