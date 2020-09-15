//액션 타입 정의
const ADD_TODO = '/todo/ADD_TODO';
const CHECK_TODO = '/todo/CHECK_TODO';
const DELETE_TODO = '/todo/DELETE_TODO';
const CHANGE_LIST_TYPE = '/todo/CHANGE_LIST_TYPE';

//액션 생성 함수
export const addTodo = text => ({ type: ADD_TODO, text });
export const checkTodo = id => ({ type: CHECK_TODO, id });
export const deleteTodo = id => ({ type: DELETE_TODO, id });
export const changeListType = listType => ({ type: CHANGE_LIST_TYPE, listType });

//초기 상태 및 리듀서 함수 만들기

const initialState = {
	todos: [
		{
			id: 1,
			text: '리액트 공부하기',
			checked: true,
		},
		{
			id: 2,
			text: '자바스크립트 공부하기',
			checked: false,
		},
		{
			id: 3,
			text: '책 읽기',
			checked: true,
		},
		{
			id: 4,
			text: '게임하기',
			checked: true,
		},
		{
			id: 5,
			text: '운동하기',
			checked: false,
		},
	],
	listType: 'all',
};

let todoId = 6;

const todos = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, { id: todoId++, text: action.text, checked: false }],
			};
		case CHECK_TODO:
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
				),
			};
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.id),
			};
		case CHANGE_LIST_TYPE:
			return { ...state, listType: action.listType };
		default:
			return state;
	}
};

export default todos;
