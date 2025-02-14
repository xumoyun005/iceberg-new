<script setup>
import { useMainStore } from "~/stores/main";

const { t } = useI18n();
const mainStore = useMainStore();
const route = useRoute();

useHead({
  title: "Ice Berg BTL",
  meta: [{ name: "description", content: t("meta.description") }],
  link: [
    { rel: "canonical", href: `https://icebergbtl.uz${route.fullPath}` },
    { rel: "alternate", hreflang: "uz-UZ", href: "https://icebergbtl.uz/uz" },
    {
      rel: "alternate",
      hreflang: "x-default",
      href: "https://icebergbtl.uz/ru",
    },
    { rel: "alternate", hreflang: "ru-RU", href: "https://icebergbtl.uz/ru" },
  ],
});

onMounted(() => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "Ise Berg BTL",
    url: "https://icebergbtl.uz",
    logo: "https://icebergbtl.uz/img/logo.svg",
    image: "https://icebergbtl.uz/img/downloadInfo/iphone.png",
    description:
      "Профессиональное агентство в сфере BTL-маркетинга, предоставляющее комплексные решения для продвижения вашего бизнеса.",
  });
  document.head.appendChild(script);

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
