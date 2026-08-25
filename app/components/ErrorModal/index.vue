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
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid rgba(28, 43, 46, 0.1);
  border-radius: 24px;
  padding: 35px;

  &__icon {
    margin-bottom: 15px;

    svg {
      width: 55px;
      height: 55px;
    }
  }

  &__title {
    font-family: Inter, sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #1c2b2e;
    margin-bottom: 16px;
  }

  &__text {
    width: 100%;
    text-align: center;
    font-size: 15px;
    color: #5f7378;
    margin-bottom: 20px;
  }
}
</style>
