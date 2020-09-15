import React from 'react';
import { connect } from 'react-redux';
import { changeListType } from '../modules/todos';
import ButtonList from '../components/LandingPage/Section/TodoList/ButtonList/ButtonList';

const ButtonListContainer = ({ listType, changeListType }) => {
	return <ButtonList listType={listType} changeListType={changeListType} />;
};

export default connect(
	state => ({
		listType: state.todos.listType,
	}),
	{ changeListType },
)(ButtonListContainer);
