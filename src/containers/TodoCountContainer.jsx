import React from 'react';
import TodoCount from '../components/LandingPage/Section/TodoCount/TodoCount';
import { connect } from 'react-redux';

const TodoCountContainer = ({ todos }) => {
	return <TodoCount todos={todos} />;
};

export default connect(
	state => ({
		todos: state.todos.todos,
	}),
	{},
)(TodoCountContainer);
