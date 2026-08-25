<script setup>
useSeoMeta({
  title: "Ice Berg BTL | 404",
  robots: "noindex, nofollow",
});
</script>

<template>
  <section class="hero" style="min-height: 80vh">
    <div class="hero__bg" />
    <div class="container" style="grid-template-columns: 1fr; padding-top: 80px">
      <div class="hero__copy">
        <p class="kicker">404</p>
        <h1 class="hero__title">Страница не найдена</h1>
        <p class="hero__subtitle">Вы можете вернуться на главную.</p>
        <NuxtLink class="btn btn--primary" to="/">Главная</NuxtLink>
      </div>
    </div>
  </section>
</template>
