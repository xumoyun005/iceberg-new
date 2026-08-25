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
const fileUrl = "/КП-Ice-Berg-Btl-Agency.pdf";
</script>

<template>
  <header class="hero" id="home">
    <div class="hero__bg" />
    <div class="container">
      <div class="hero__copy">
        <p class="kicker">{{ $t("header-content.kicker") }}</p>
        <h1 class="hero__title">{{ $t("header-content.title") }}</h1>
        <p class="hero__subtitle">{{ $t("header-content.subtitle") }}</p>
        <div class="hero__actions">
          <button class="btn btn--primary" @click="openModal">
            {{ $t("header-content.application-button") }}
          </button>
          <a
            class="btn btn--ghost"
            :href="fileUrl"
            download="КП-Ice-berg-btl-agency.pdf"
          >
            <img :src="DownloadIcon" alt="" width="16" height="16" />
            {{ $t("header-content.download-button") }}
          </a>
        </div>
        <div class="hero__metrics">
          <div class="hero__metric">
            <strong>325+</strong>
            <span>{{ $t("stats.stats-2") }}</span>
          </div>
          <div class="hero__metric">
            <strong>25+</strong>
            <span>{{ $t("stats.stats-1") }}</span>
          </div>
          <div class="hero__metric">
            <strong>7+</strong>
            <span>{{ $t("stats.stats-4") }}</span>
          </div>
        </div>
      </div>
      <div class="hero__visual">
        <img :src="HeaderContentImage" :alt="$t('meta.imageAlt')" />
        <div class="hero__badge">
          <b>BTL</b>
          Below The Line
        </div>
      </div>
    </div>
  </header>
</template>
