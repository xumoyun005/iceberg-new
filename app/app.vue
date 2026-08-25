<script setup lang="ts">
import { useMainStore } from "./stores/main";

const mainStore = useMainStore();

useSiteSeo();
</script>

<template>
  <Navbar />
  <NuxtPage />
  <AppFooter />
  <ApplicationModal
    v-if="mainStore.modalOpen && mainStore.applicationModalActive"
  />
  <SuccessModal v-if="mainStore.modalOpen && mainStore.successModalActive" />
  <ErrorModal v-if="mainStore.modalOpen && mainStore.errorModalActive" />
</template>
