<template>
  <div class="todoList">
    <Header />
    <div class="main-box">
      <Todo />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["todoList", "currentUser", "currentTodoList"]),
    isCurrent() {
      if (this.currentTodoList.length > 0) {
        return true;
      }
      return false;
    },
  },
  methods: {
    storeDataBeforeLeave() {
      let params = {
        user: this.currentUser,
        list: this.currentTodoList,
      };
      if (this.todoList.length > 0) {
        let flag = false;
        this.todoList.forEach((item, idx) => {
          if (item.user == this.currentUser) {
            this.isCurrent
              ? (this.todoList[idx].list = this.currentTodoList)
              : this.todoList.splice(idx, 1);

            flag = true;
          }
        });
        if (!flag && this.isCurrent) {
          this.todoList.push(params);
        }
      } else {
        if (this.isCurrent) {
          this.todoList.push(params);
        }
      }

      localStorage.setItem("myList", JSON.stringify(this.todoList));
    },
  },
  created() {
    if (process.browser) {
      window.addEventListener("beforeunload", this.storeDataBeforeLeave);
    }
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.todoList {
  background: $main-background;
  min-height: 100vh;
  height: auto;
  overflow-x: hidden;
  .main-box {
    margin-top: 5.5rem;
    padding-top: 1.6rem;
    padding-bottom: 2.4rem;
  }
}
</style>
