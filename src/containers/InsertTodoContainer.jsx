import React from 'react';
import InsertTodo from '../components/LandingPage/Section/InsertTodo/InsertTodo';
import { connect } from 'react-redux';
import { addTodo } from '../modules/todos';

const InsertTodoContainer = ({ addTodo }) => {
	return <InsertTodo addTodo={addTodo} />;
};

export default connect('', { addTodo })(InsertTodoContainer);
