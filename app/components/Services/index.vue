<script setup>
import { services } from "./services.data";
import { useMainStore } from "~/stores/main";

const { t } = useI18n();
const mainStore = useMainStore();

const openService = (service) => {
  mainStore.category = t(service.title);
  mainStore.modalOpen = true;
  mainStore.applicationModalActive = true;
};
</script>

<template>
  <section class="services" id="services">
    <div class="container">
      <div class="services__head">
        <p class="kicker">{{ $t("services.kicker") }}</p>
        <h2 class="section-title">{{ $t("services.title") }}</h2>
      </div>
      <div class="services__grid">
        <article
          v-for="(service, index) in services"
          :key="service.title"
          class="services__card"
          @click="openService(service)"
        >
          <div class="services__card-index">0{{ index + 1 }}</div>
          <div class="services__card-icon">
            <img :src="service.icon" :alt="$t(service.title)" />
          </div>
          <h3 class="services__card-title">{{ $t(service.title) }}</h3>
          <div class="services__card-list">
            <p
              v-for="text in service.texts"
              :key="text"
              class="services__card-text"
            >
              {{ $t(text) }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
