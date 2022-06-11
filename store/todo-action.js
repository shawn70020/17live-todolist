import Vue from 'vue'

//檢查localstorge使否有紀錄
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

//添加項目
const addTodo = async ({ state, dispatch, commit }, data) => {
    Vue.prototype.$myLoading.open()
    setTimeout(() => {
        commit("ADD_ITEM", data);
        Vue.prototype.$myLoading.hide()
    }, 1200);
}

//刪除項目
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

