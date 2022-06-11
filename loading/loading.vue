<template>
  <div v-if="show">
    <div class="loading-effect"></div>
    <img class="loading-icon" src="../assets/_images/loading.png" alt="loading-icon" />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.loading-effect {
  width: 100vw;
  height: 100vh;
  background: $black;
  position: absolute;
  top: 0;
  opacity: 0.15;
}
.loading-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
