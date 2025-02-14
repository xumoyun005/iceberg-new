<script setup>
import { useMainStore } from "~/stores/main";
defineProps({
  text: {
    type: String,
    default: "Successfully best job koroche pohuy",
  },
});

const modalStore = useMainStore();

let successModalActive = computed(() => modalStore.successModalActive);

useHead({
  bodyAttrs: {
    class: computed(() => {
      if (successModalActive) return "modal-window-open";
      return "";
    }),
  },
});

const accessBtnClick = () => {
  modalStore.modalOpen = false;
  modalStore.successModalActive = false;
  modalStore.errorModalText = "";
  location.reload();
};
</script>

<template>
  <div>
    <div class="modal-window" @click="accessBtnClick()">
      <div class="modal-success" @click.stop>
        <div class="modal-success__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fc5c65"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
            />
          </svg>
        </div>
        <h3 class="modal-success__title">
          {{ $t("modals.error-title") }}
        </h3>
        <p class="modal-success__text">
          {{ modalStore.errorModalText }}
        </p>
        <button class="button send" @click="accessBtnClick()">
          {{ $t("modals.modal-button") }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal-success {
  width: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0px 0px 11.3px 3px #97979740;
  border-radius: 7px;
  padding: 35px;

  &__icon {
    margin-bottom: 15px;

    & svg {
      width: 55px;
      height: 55px;
    }
  }

  &__title {
    font-size: 25px;
    font-weight: 600;
    line-height: normal;
    color: #1a202c;
    margin-bottom: 20px;
  }

  &__text {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    color: #1a202c;
    margin-bottom: 20px;
  }
}
</style>
