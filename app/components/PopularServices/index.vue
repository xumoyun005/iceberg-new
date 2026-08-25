<script lang="ts" setup>
const ranks = [
  { key: "popular-services.service-4.title", value: 45 },
  { key: "popular-services.service-3.title", value: 25 },
  { key: "popular-services.service-2.title", value: 20 },
  { key: "popular-services.service-1.title", value: 10 },
];
</script>

<template>
  <section class="popular-services">
    <div class="container">
      <div class="popular-services__head">
        <p class="kicker">{{ $t("popular-services.kicker") }}</p>
        <h2 class="section-title">{{ $t("popular-services.title") }}</h2>
        <p class="popular-services__hint">{{ $t("popular-services.hint") }}</p>
      </div>
      <div class="popular-services__items">
        <div
          v-for="(item, index) in ranks"
          :key="item.key"
          class="popular-services__item"
        >
          <div class="popular-services__item-index">0{{ index + 1 }}</div>
          <div>
            <h4 class="popular-services__item-title">{{ $t(item.key) }}</h4>
            <div class="popular-services__item-bar">
              <div
                class="popular-services__item-fill"
                :style="{ width: item.value + '%' }"
              />
            </div>
          </div>
          <div class="popular-services__item-value">{{ item.value }}%</div>
        </div>
      </div>
    </div>
  </section>
</template>
