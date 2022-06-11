import Vue from 'vue'
const getTodoInfo = async ({ state, dispatch, commit }, data) => {
    Vue.prototype.$myLoading.open()
    setTimeout(() => {
        let localData = localStorage.getItem("myList");
        if (localData) {
            localData = JSON.parse(localData);
            commit("SET_TODO_INFO", localData)

        }
        Vue.prototype.$myLoading.hide()
    }, 1600);
}
const addTodo = async ({ state, dispatch, commit }, data) => {
    Vue.prototype.$myLoading.open()
    setTimeout(() => {
        commit("ADD_ITEM", data);
        Vue.prototype.$myLoading.hide()
    }, 0);
}

const delItem = async ({ state, dispatch, commit }, data) => {
    Vue.prototype.$myLoading.open()
    setTimeout(() => {
        commit("DEL_ITEM", data);
        Vue.prototype.$myLoading.hide()
    }, 1200);
}

export default {
    getTodoInfo,
    addTodo,
    delItem
}

