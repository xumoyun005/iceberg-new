<script setup>
import FlayerImage1 from "@/assets/images/ourWorks/final1.png";
import FlayerImage2 from "@/assets/images/ourWorks/final2.png";
import FlayerImage3 from "@/assets/images/ourWorks/final3.png";
import QuestionImage from "@/assets/images/ourWorks/oprosnik.webp";
import PromoImage1 from "@/assets/images/ourWorks/reklama1.png";
import PromoImage2 from "@/assets/images/ourWorks/reklama2.png";
import PromoImage3 from "@/assets/images/ourWorks/reklama3.png";
import SamokleykaImage1 from "@/assets/images/ourWorks/samonak1.png";
import SamokleykaImage2 from "@/assets/images/ourWorks/samonak2.png";
import SamokleykaImage3 from "@/assets/images/ourWorks/samonak3.png";

const { t } = useI18n();
const selectedWorks = ref(1);

const works = computed(() => [
  { value: 1, label: t("our-works.work-1.title") },
  { value: 2, label: t("our-works.work-2.title") },
  { value: 3, label: t("our-works.work-3.title") },
  { value: 4, label: t("our-works.work-4.title") },
]);

const worksData = computed(() => {
  switch (selectedWorks.value) {
    case 1:
      return [
        { id: 1, img: FlayerImage1, title: t("our-works.work-1.text-1") },
        { id: 2, img: FlayerImage2, title: t("our-works.work-1.text-1") },
        { id: 3, img: FlayerImage3, title: t("our-works.work-1.text-1") },
      ];
    case 2:
      return [
        { id: 1, img: SamokleykaImage1, title: t("our-works.work-2.text-1") },
        { id: 2, img: SamokleykaImage2, title: t("our-works.work-2.text-1") },
        { id: 3, img: SamokleykaImage3, title: t("our-works.work-2.text-1") },
      ];
    case 3:
      return [
        { id: 1, img: QuestionImage, title: t("our-works.work-3.text-1") },
        { id: 2, img: QuestionImage, title: t("our-works.work-3.text-1") },
        { id: 3, img: QuestionImage, title: t("our-works.work-3.text-1") },
      ];
    case 4:
      return [
        { id: 1, img: PromoImage1, title: t("our-works.work-4.text-1") },
        { id: 2, img: PromoImage2, title: t("our-works.work-4.text-1") },
        { id: 3, img: PromoImage3, title: t("our-works.work-4.text-1") },
      ];
    default:
      return [];
  }
});
</script>

<template>
  <section class="our-works">
    <div class="container">
      <div class="our-works__head">
        <p class="kicker">{{ $t("our-works.kicker") }}</p>
        <h2 class="section-title">{{ $t("our-works.title") }}</h2>
      </div>
      <div class="our-works__selects">
        <button
          v-for="work in works"
          :key="work.value"
          class="our-works__tab"
          :class="{ 'is-active': selectedWorks === work.value }"
          @click="selectedWorks = work.value"
        >
          {{ work.label }}
        </button>
      </div>
      <div class="our-works__list">
        <article
          class="our-works__item"
          v-for="item in worksData"
          :key="item.id + '-' + selectedWorks"
        >
          <img :src="item.img" :alt="item.title" class="our-works__item-img" />
          <div class="our-works__item-info">
            <h4 class="our-works__item-title">{{ item.title }}</h4>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
