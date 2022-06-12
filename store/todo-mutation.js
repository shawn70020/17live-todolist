import { SET_TODO_INFO, ADD_ITEM, DEL_ITEM, SET_LANG, SET_NAME, SET_CURRENT_TODO } from './mutation-types';

export default {
    [SET_TODO_INFO](state, data) {
        state.todoList = data
    },
    [ADD_ITEM](state, data) {
        state.currentTodoList.push(data)
    },
    [DEL_ITEM](state, data) {
        state.currentTodoList.splice(data, 1)
    },
    [SET_LANG](state, data) {
        state.lang = data
    },
    [SET_NAME](state, data) {
        state.currentUser = data
    },
    [SET_CURRENT_TODO](state, data) {
        state.currentTodoList = data
    }
}