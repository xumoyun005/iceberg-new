<script setup>
import { useMainStore } from "~/stores/main";

const mainStore = useMainStore();

onMounted(() => {
  if (document.documentElement.clientWidth > 802) {
    setTimeout(() => {
      mainStore.modalOpen = true;
      mainStore.consultationModal = true;
    }, 30000);
  }
});
</script>

<template>
  <Loader v-if="mainStore.loader" />
  <ConsultationModal
    v-if="mainStore.modalOpen && mainStore.consultationModal"
  />
  <AppHeader />
  <main class="main">
    <Services />
    <PopularServices />
    <Stats />
    <About />
    <Partners />
    <ApplicationSection />
    <OurWorks />
  </main>
</template>

<style scoped></style>
