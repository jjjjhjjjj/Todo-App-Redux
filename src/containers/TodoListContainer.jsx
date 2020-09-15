import React from 'react';
import TodoList from '../components/LandingPage/Section/TodoList/TodoList';
import { connect } from 'react-redux';

const TodoListContainer = ({ todos, listType }) => {
	return <TodoList todos={todos} listType={listType} />;
};

export default connect(
	state => ({
		todos: state.todos.todos,
		listType: state.todos.listType,
	}),
	{},
)(TodoListContainer);
