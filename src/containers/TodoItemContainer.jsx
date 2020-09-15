import React from 'react';
import TodoItem from '../components/LandingPage/Section/TodoItem/TodoItem';
import { connect } from 'react-redux';
import { checkTodo, deleteTodo } from '../modules/todos';

const TodoItemContainer = ({ todo, deleteTodo, checkTodo }) => {
	return <TodoItem todo={todo} deleteTodo={deleteTodo} checkTodo={checkTodo} />;
};

export default connect(
	(state, ownProps) => ({
		todo: ownProps.todo,
	}),

	{ checkTodo, deleteTodo },
)(TodoItemContainer);
