<template>
  <div class="name-popbox">
    <div class="popbox-effect"></div>
    <div class="popbox-group">
      <h2>{{ $t("poptitle") }}</h2>
      <div class="input-group">
        <input
          class="input-group-box"
          type="text"
          name=""
          value=""
          :placeholder="$t('popPlaceHolder')"
          v-model="userName"
          @keyup.enter="checkUser"
        />
        <svg
          width="21"
          height="19"
          viewBox="0 0 21 19"
          fill="none"
          class="input-group-btn"
          xmlns="http://www.w3.org/2000/svg"
          @click="checkUser"
        >
          <path
            d="M19.5 7.53125H12.75V1.625C12.75 0.900254 12.0783 0.3125 11.25 0.3125H9.75C8.92172 0.3125 8.25 0.900254 8.25 1.625V7.53125H1.5C0.671719 7.53125 0 8.119 0 8.84375V10.1562C0 10.881 0.671719 11.4688 1.5 11.4688H8.25V17.375C8.25 18.0997 8.92172 18.6875 9.75 18.6875H11.25C12.0783 18.6875 12.75 18.0997 12.75 17.375V11.4688H19.5C20.3283 11.4688 21 10.881 21 10.1562V8.84375C21 8.119 20.3283 7.53125 19.5 7.53125Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      userName: "",
    };
  },
  computed: {
    ...mapState(["todoList"]),
  },
  methods: {
    async getTodoInfo() {
      await this.$store.dispatch("getTodoInfo");
    },
    async checkUser() {
      if (this.userName == "") return;
      await this.$store.dispatch("checkUser", this.userName);
      this.$emit('close', false);
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
.name-popbox {
  width: 100vw;
  .popbox-effect {
    background: $black;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.15;
    z-index: 999;
  }
  .popbox-group {
    width: 35%;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: $white;
    border: 0.5rem solid $primary-color;
    border-radius: 1rem;
    z-index: 999;
    padding: 5rem 0 5rem 0;
    h2 {
      color: $black;
      font-size: 2.8rem;
      font-weight: 400;
      font-weight: 700;
      text-align: center;
      margin: 2rem 0 4rem 0;
    }
    .input-group {
      @include flex-jcc;
      width: 90%;
      margin: 0 auto;
      &-box {
        width: 80%;
        flex-grow: 1;
        border: 1px solid $main-border-color;
        border-radius: $main-radius;
      }
      &-btn {
        flex-basis: 3.5rem;
        height: 3.5rem;

        background: $primary-color;
        padding: 0.75rem;
        margin-left: 2.5rem;
        cursor: pointer;
      }
    }
  }
}
</style>
