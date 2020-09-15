import React, { memo } from 'react';
import './ButtonList.css';

const ButtonList = memo(({ listType, changeListType }) => {
	const onClick = type => {
		changeListType(type);
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
