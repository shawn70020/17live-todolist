<template>
  <div class="todo">
    <Name v-if="showNamePop" @close="showNamePop = false" />
    <h2>{{ $t("todo") }}</h2>
    <div class="item-box" v-if="isTodoBefore">
      <Item
        v-for="(item, index) in currentTodoList"
        :item="item"
        :listId="index"
        :key="'list' + index"
        @delItem="delItem"
      />
    </div>
    <div v-else>
      <h3>{{ $t("addtitle") }}</h3>
    </div>

    <div class="input-group">
      <input
        class="input-group-box"
        type="text"
        name=""
        value=""
        :placeholder="$t('placeholder')"
        v-model="todoContent"
        @keyup.enter="addTodo"
      />
      <svg
        width="21"
        height="19"
        viewBox="0 0 21 19"
        fill="none"
        class="input-group-btn"
        xmlns="http://www.w3.org/2000/svg"
        @click="addTodo"
      >
        <path
          d="M19.5 7.53125H12.75V1.625C12.75 0.900254 12.0783 0.3125 11.25 0.3125H9.75C8.92172 0.3125 8.25 0.900254 8.25 1.625V7.53125H1.5C0.671719 7.53125 0 8.119 0 8.84375V10.1562C0 10.881 0.671719 11.4688 1.5 11.4688H8.25V17.375C8.25 18.0997 8.92172 18.6875 9.75 18.6875H11.25C12.0783 18.6875 12.75 18.0997 12.75 17.375V11.4688H19.5C20.3283 11.4688 21 10.881 21 10.1562V8.84375C21 8.119 20.3283 7.53125 19.5 7.53125Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      todoContent: "",
      showNamePop: true,
    };
  },
  computed: {
    ...mapState(["todoList", "currentTodoList"]),
    isTodoBefore() {
      return this.currentTodoList.length > 0;
    },
  },
  methods: {
    async getTodoInfo() {
      await this.$store.dispatch("getTodoInfo");
    },
    async addTodo() {
      if (this.todoContent == "") return;
      await this.$store.dispatch("addTodo", this.todoContent);
      this.todoContent = "";
    },
    async delItem(id) {
      await this.$store.dispatch("delItem", id);
    },
  },
  mounted() {
    this.getTodoInfo();
  },
};
</script>
<style lang="scss" scoped>
.todo {
  width: 80%;
  min-height: 90vh;
  height: auto;
  background: $white;
  margin: 0 auto;
  border: 1px solid $main-border-color;
  position: relative;
  h2 {
    color: $black;
    font-size: 3.6rem;
    font-weight: 400;
    margin: 3.3rem 0 0 3rem;
    font-weight: 700;
  }
  h3 {
    color: $black;
    font-size: 3.6rem;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .item-box {
    margin-top: 4.3rem;
  }
  .input-group {
    @include flex-jcc;
    width: 95%;
    margin: 0 auto;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    &-box {
      width: 80%;
      border: 1px solid $main-border-color;
      border-radius: $main-radius;
    }
    &-btn {
      width: 3.5rem;
      height: 3.5rem;
      background: $primary-color;
      padding: 0.75rem;
      margin-left: 2.5rem;
      cursor: pointer;
    }
  }
}
</style>
