import { SET_TODO_INFO, ADD_ITEM, DEL_ITEM, SET_LANG } from './mutation-types';

export default {
    [SET_TODO_INFO](state, data) {
        state.todoList = data
    },
    [ADD_ITEM](state, data) {
        state.todoList.push(data)
    },
    [DEL_ITEM](state, data) {
        state.todoList.splice(data, 1)
    },
    [SET_LANG](state, data) {
        state.lang = data
    }
}