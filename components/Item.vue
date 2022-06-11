<template>
  <div class="item-group">
    <div class="checkbox-group">
      <input type="checkbox" :id="'checkbox' + stringId" v-model="checked" />
      <label :for="'checkbox' + stringId" :class="{ activeBox: checked }"></label>
      <h5 :class="{ activeText: checked }" class="item-txt">{{ item }}</h5>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="del-icon"
        @click="delItem"
      >
        <path
          d="M1.71429 21.75C1.71429 22.3467 1.9852 22.919 2.46744 23.341C2.94968 23.763 3.60373 24 4.28571 24H19.7143C20.3963 24 21.0503 23.763 21.5326 23.341C22.0148 22.919 22.2857 22.3467 22.2857 21.75V6.00001H1.71429V21.75ZM16.2857 9.75001C16.2857 9.5511 16.376 9.36033 16.5368 9.21968C16.6975 9.07903 16.9155 9.00001 17.1429 9.00001C17.3702 9.00001 17.5882 9.07903 17.7489 9.21968C17.9097 9.36033 18 9.5511 18 9.75001V20.25C18 20.4489 17.9097 20.6397 17.7489 20.7803C17.5882 20.921 17.3702 21 17.1429 21C16.9155 21 16.6975 20.921 16.5368 20.7803C16.376 20.6397 16.2857 20.4489 16.2857 20.25V9.75001ZM11.1429 9.75001C11.1429 9.5511 11.2332 9.36033 11.3939 9.21968C11.5547 9.07903 11.7727 9.00001 12 9.00001C12.2273 9.00001 12.4453 9.07903 12.6061 9.21968C12.7668 9.36033 12.8571 9.5511 12.8571 9.75001V20.25C12.8571 20.4489 12.7668 20.6397 12.6061 20.7803C12.4453 20.921 12.2273 21 12 21C11.7727 21 11.5547 20.921 11.3939 20.7803C11.2332 20.6397 11.1429 20.4489 11.1429 20.25V9.75001ZM6 9.75001C6 9.5511 6.09031 9.36033 6.25105 9.21968C6.4118 9.07903 6.62981 9.00001 6.85714 9.00001C7.08447 9.00001 7.30249 9.07903 7.46323 9.21968C7.62398 9.36033 7.71429 9.5511 7.71429 9.75001V20.25C7.71429 20.4489 7.62398 20.6397 7.46323 20.7803C7.30249 20.921 7.08447 21 6.85714 21C6.62981 21 6.4118 20.921 6.25105 20.7803C6.09031 20.6397 6 20.4489 6 20.25V9.75001ZM23.1429 1.50001H16.7143L16.2107 0.623446C16.104 0.436046 15.9397 0.27841 15.7362 0.16827C15.5328 0.0581305 15.2982 -0.000141936 15.0589 8.21846e-06H8.93571C8.69699 -0.000794775 8.46283 0.0572604 8.26007 0.167522C8.05732 0.277784 7.89415 0.435793 7.78929 0.623446L7.28571 1.50001H0.857143C0.629814 1.50001 0.411797 1.57903 0.251051 1.71968C0.0903059 1.86033 0 2.0511 0 2.25001L0 3.75001C0 3.94892 0.0903059 4.13969 0.251051 4.28034C0.411797 4.42099 0.629814 4.50001 0.857143 4.50001H23.1429C23.3702 4.50001 23.5882 4.42099 23.7489 4.28034C23.9097 4.13969 24 3.94892 24 3.75001V2.25001C24 2.0511 23.9097 1.86033 23.7489 1.71968C23.5882 1.57903 23.3702 1.50001 23.1429 1.50001V1.50001Z"
          fill="#F56767"
        />
      </svg>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    item: String,
    listId: Number,
  },
  data() {
    return {
      checked: false,
    };
  },
  computed: {
    stringId() {
      return String(this.listId);
    },
  },
  methods: {
    ...mapActions(["_getTodoInfo_"]),
    delItem() {
      if (this.checked) {
        this.$emit("delItem", this.listId);
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.item-group {
  @include flex-jcc;
  align-items: center;
  margin-bottom: 6.6rem;
  input[type="checkbox"] {
    visibility: hidden;
  }
  input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
  .checkbox-group {
    width: 85%;
    @include flex-aic;
    position: relative;
    label {
      cursor: pointer;
      position: relative;
      width: 2.2rem;
      height: 1.925rem;
      top: 0;
      left: 0;
      background: $white;
      border: 0.2rem solid $main-border-color;
      border-radius: 0.04rem;
      &::after {
        content: "";
        position: absolute;
        width: 1.5rem;
        height: 0.75rem;
        background: transparent;
        top: 0.175rem;
        left: 0.125rem;
        border: 0.2rem solid $primary-color;
        border-top: none;
        border-right: none;
        opacity: 0;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    }
    .item-txt {
      flex-grow: 1;
      max-width: 85%;
      padding-left: 3.2rem;
      font-size: 1.8rem;
      word-wrap: break-word;
    }
    .activeBox {
      border: 0.2rem solid $primary-color;
    }
    .activeText {
      color: $primary-color;
    }
  }

  h5 {
    font-size: 1.8rem;
    font-weight: 400;
    color: $black;
  }
  .del-icon {
    cursor: pointer;
  }
}
</style>
