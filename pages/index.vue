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
    ...mapState(["todoList"]),
  },
  methods: {
    storeDataBeforeLeave() {
      localStorage.setItem("myList", JSON.stringify(this.todoList));
    },
  },
  created() {
    if (process.browser) {
      window.addEventListener("beforeunload", this.storeDataBeforeLeave);
    }
    
  },
  mounted() {
      
  },
};
</script>

<style lang="scss" scoped>
.todoList {
  background: $main-background;
  .main-box {
    margin-top: 5.5rem;
    padding-top: 1.6rem;
    padding-bottom: 2.4rem;
  }
}
</style>
