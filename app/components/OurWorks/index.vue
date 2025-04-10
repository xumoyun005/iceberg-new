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
          img: FlayerImage1,
          title: t("our-works.work-1.text-1"),
          position: "right",
        },
        {
          id: 2,
          img: FlayerImage2,
          title: t("our-works.work-1.text-1"),
          position: "left",
        },
        {
          id: 3,
          img: FlayerImage3,
          title: t("our-works.work-1.text-1"),
          position: "right",
        },
      ];
    case 2:
      return [
        {
          id: 1,
          img: SamokleykaImage1,
          title: t("our-works.work-2.text-1"),
          position: "right",
        },
        {
          id: 2,
          img: SamokleykaImage2,
          title: t("our-works.work-2.text-1"),
          position: "left",
        },
        {
          id: 3,
          img: SamokleykaImage3,
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
          img: PromoImage1,
          title: t("our-works.work-4.text-1"),
          position: "right",
        },
        {
          id: 2,
          img: PromoImage2,
          title: t("our-works.work-4.text-1"),
          position: "left",
        },
        {
          id: 3,
          img: PromoImage3,
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
