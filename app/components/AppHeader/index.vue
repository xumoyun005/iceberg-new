<script setup>
import { useMainStore } from "~/stores/main";
import DownloadIcon from "@/assets/images/download.svg";
import HeaderContentImage from "@/assets/images/header-content-image.png";

const mainStore = useMainStore();
const openModal = () => {
  mainStore.modalOpen = true;
  mainStore.applicationModalActive = true;
  mainStore.category = "Заявка";
};
const fileUrl = ref("/КП-Ice-Berg-Btl-Agency.pdf");
</script>

<template>
  <div class="container header-content">
    <div class="header-content__block">
      <h1 class="header-content__block-title">
        {{ $t("header-content.title") }}
      </h1>
      <div class="header-content__block-bottom">
        <button class="header-content__block-bottom-req" @click="openModal()">
          {{ $t("header-content.application-button") }}
        </button>
        <a
          class="header-content__block-bottom-download"
          :href="fileUrl"
          download="КП-Ice-berg-btl-agency.pdf"
        >
          <span class="icon">
            <img :src="DownloadIcon" alt="" />
          </span>
          <span class="text">
            {{ $t("header-content.download-button") }}
          </span>
        </a>
      </div>
    </div>
    <div class="header-content__image">
      <img :src="HeaderContentImage" alt="" />
    </div>
  </div>
</template>

<style scoped></style>
