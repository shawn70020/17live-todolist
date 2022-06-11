<template>
  <select v-model="selected" @change="setLang(selected)">
    <option v-for="item in optionLang" :value="item.value" :key="item.id">
      {{ item.text }}
    </option>
  </select>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      selected: "en",
      optionLang: [
        { text: "English", value: "en", id: 1 },
        { text: "中文", value: "zh", id: 2 },
      ],
    };
  },
  computed: {
    ...mapState(["lang"]),
  },
  methods: {
    setLang(value) {
      this.$store.commit("SET_LANG", value);
      this.$i18n.locale = value;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>


