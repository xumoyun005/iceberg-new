<script setup>
import { useMainStore } from "~/stores/main";
defineProps({
  text: {
    type: String,
    default: "Successfully best job koroche pohuy",
  },
});

const mainStore = useMainStore();

let successModalActive = computed(() => mainStore.successModalActive);

useHead({
  bodyAttrs: {
    class: computed(() => {
      if (successModalActive) return "modal-window-open";
      return "";
    }),
  },
});

const accessBtnClick = () => {
  mainStore.modalOpen = false;
  mainStore.successModalActive = false;
  mainStore.successModalText = "";
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
              fill="#009bb7"
              d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
            />
          </svg>
        </div>
        <h3 class="modal-success__title">
          {{ $t("modals.success-title") }}
        </h3>
        <p class="modal-success__text">
          {{ mainStore.successModalText }}
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
