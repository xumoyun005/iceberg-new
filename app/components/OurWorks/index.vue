<script setup>
import FlayerImage from "@/assets/images/ourWorks/flayer.webp";
import QuestionImage from "@/assets/images/ourWorks/oprosnik.webp";
import PromoImage from "@/assets/images/ourWorks/promo.webp";
import SamokleykaImage from "@/assets/images/ourWorks/samokleyka.webp";

const { t } = useI18n();
const selectedWorks = ref(1);

const works = reactive([
  { value: 1, label: computed(() => t("our-works.work-1.title")) },
  { value: 2, label: computed(() => t("our-works.work-2.title")) },
  { value: 3, label: computed(() => t("our-works.work-3.title")) },
  { value: 4, label: computed(() => t("our-works.work-4.title")) },
]);

const worksData = computed(() => {
  switch (selectedWorks.value) {
    case 1:
      return [
        {
          id: 1,
          img: FlayerImage,
          title: t("our-works.work-1.text-1"),
          position: "right",
        },
        {
          id: 2,
          img: FlayerImage,
          title: t("our-works.work-1.text-1"),
          position: "left",
        },
        {
          id: 3,
          img: FlayerImage,
          title: t("our-works.work-1.text-1"),
          position: "right",
        },
      ];
    case 2:
      return [
        {
          id: 1,
          img: SamokleykaImage,
          title: t("our-works.work-2.text-1"),
          position: "right",
        },
        {
          id: 2,
          img: SamokleykaImage,
          title: t("our-works.work-2.text-1"),
          position: "left",
        },
        {
          id: 3,
          img: SamokleykaImage,
          title: t("our-works.work-2.text-1"),
          position: "right",
        },
      ];
    case 3:
      return [
        {
          id: 1,
          img: QuestionImage,
          title: t("our-works.work-3.text-1"),
          position: "right",
        },
        {
          id: 2,
          img: QuestionImage,
          title: t("our-works.work-3.text-1"),
          position: "left",
        },
        {
          id: 3,
          img: QuestionImage,
          title: t("our-works.work-3.text-1"),
          position: "right",
        },
      ];
    case 4:
      return [
        {
          id: 1,
          img: PromoImage,
          title: t("our-works.work-4.text-1"),
          position: "right",
        },
        {
          id: 2,
          img: PromoImage,
          title: t("our-works.work-4.text-1"),
          position: "left",
        },
        {
          id: 3,
          img: PromoImage,
          title: t("our-works.work-4.text-1"),
          position: "right",
        },
      ];
    default:
      return [];
  }
});
</script>

<template>
  <section class="our-works">
    <div class="container">
      <h3 class="our-works__title">
        {{ $t("our-works.title") }}
      </h3>
      <div class="our-works__selects">
        <el-segmented v-model="selectedWorks" :options="works" />
      </div>
      <div class="our-works__list">
        <transition-group name="our-works-transition" tag="div">
          <div
            class="our-works__item"
            :class="item.position"
            v-for="item in worksData"
            :key="item.id"
          >
            <div class="our-works__item-info">
              <h4 class="our-works__item-title">
                {{ item.title }}
              </h4>
            </div>
            <img :src="item.img" alt="" class="our-works__item-img" />
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>
