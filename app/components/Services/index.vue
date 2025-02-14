<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { services } from "./services.data";

const modules = [Pagination];
const breakpoints = {
  320: { slidesPerView: 1, spaceBetween: 10 },
  340: { slidesPerView: 1, spaceBetween: 10 },
  440: { slidesPerView: 1, spaceBetween: 20 },
  540: { slidesPerView: 1, spaceBetween: 30 },
  640: { slidesPerView: 2, spaceBetween: 30 },
  768: { slidesPerView: 3, spaceBetween: 40 },
  1024: { slidesPerView: 3, spaceBetween: 40 },
  1240: { slidesPerView: 4, spaceBetween: 40 },
  1440: { slidesPerView: 5, spaceBetween: 40 },
};
</script>

<template>
  <section class="services" id="services">
    <h3 class="services__title">
      {{ $t("services.title") }}
    </h3>
    <Swiper
      :modules="modules"
      :slides-per-view="'auto'"
      :centered-slides="true"
      :space-between="60"
      :pagination="{ clickable: true }"
      :loop="true"
      :breakpoints="breakpoints"
      class="services__swiper"
    >
      <SwiperSlide
        v-for="(service, index) in services"
        :key="index"
        class="services__swiper-slide"
      >
        <div class="services__swiper-slide-content">
          <div class="services__swiper-slide-icon">
            <div class="services__swiper-slide-icon-bg">
              <img :src="service.icon" alt="" />
            </div>
          </div>
          <h3 class="services__swiper-slide-title">
            {{ $t(service.title) }}
          </h3>
          <div class="services__swiper-slide-info">
            <p
              v-for="(text, idx) in service.texts"
              :key="idx"
              class="services__swiper-slide-text"
            >
              {{ $t(text) }}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped></style>
