import Vue from 'vue'


//檢查User
const checkUser = async ({ state, dispatch, commit }, data) => {
    Vue.prototype.$myLoading.open()
    setTimeout(() => {
        if (state.todoList.length > 0) {
            let flag = false
            state.todoList.forEach((item, idx) => {
                if (item.user === data) {
                    flag = true;
                    commit("SET_CURRENT_TODO", state.todoList[idx].list)
                }
            })
            if(!flag){ 
                commit("SET_CURRENT_TODO", [])
            }
        }
        commit("SET_NAME", data)

        Vue.prototype.$myLoading.hide()
    }, 1000);
}
//檢查localstorge使否有紀錄
const getTodoInfo = async ({ state, dispatch, commit }, data) => {
    Vue.prototype.$myLoading.open()
    let localData = localStorage.getItem("myList");
    if (localData) {
        localData = JSON.parse(localData);
        commit("SET_TODO_INFO", localData)
    }
    Vue.prototype.$myLoading.hide()
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
    delItem,
    checkUser
}

