<script setup></script>

<template>
  <section class="about" id="about">
    <div class="container">
      <div class="about__intro">
        <p class="kicker">{{ $t("about.kicker") }}</p>
        <h2 class="section-title">{{ $t("about.title") }}</h2>
        <p class="about__text">
          {{ $t("about.text.main", { company: "Ice Berg BTL Agency" }) }}
        </p>
      </div>

      <div class="about__block">
        <h3 class="about__info-title">{{ $t("about.title-goals") }}</h3>
        <div class="about__grid">
          <article class="about__card">
            <h5>{{ $t("about.text-goals.title-1") }}</h5>
            <p>{{ $t("about.text-goals.text-1") }}</p>
          </article>
          <article class="about__card">
            <h5>{{ $t("about.text-goals.title-2") }}</h5>
            <p>{{ $t("about.text-goals.text-2") }}</p>
          </article>
          <article class="about__card">
            <h5>{{ $t("about.text-goals.title-3") }}</h5>
            <p>{{ $t("about.text-goals.text-3") }}</p>
          </article>
          <article class="about__card">
            <h5>{{ $t("about.text-goals.title-4") }}</h5>
            <p>{{ $t("about.text-goals.text-4") }}</p>
          </article>
        </div>
      </div>

      <div class="about__block">
        <h3 class="about__info-title">{{ $t("about.title-advantages") }}</h3>
        <div class="about__grid about__grid--wide">
          <article class="about__card">
            <h5>{{ $t("about.text-advantages.title-1") }}</h5>
            <p>{{ $t("about.text-advantages.text-1") }}</p>
          </article>
          <article class="about__card">
            <h5>{{ $t("about.text-advantages.title-2") }}</h5>
            <p>{{ $t("about.text-advantages.text-2") }}</p>
          </article>
          <article class="about__card">
            <h5>{{ $t("about.text-advantages.title-3") }}</h5>
            <p>{{ $t("about.text-advantages.text-3") }}</p>
          </article>
          <article class="about__card">
            <h5>{{ $t("about.text-advantages.title-4") }}</h5>
            <p>{{ $t("about.text-advantages.text-4") }}</p>
          </article>
          <article class="about__card">
            <h5>{{ $t("about.text-advantages.title-5") }}</h5>
            <p>{{ $t("about.text-advantages.text-5") }}</p>
          </article>
        </div>
        <p class="about__note">
          {{
            $t("about.text-advantages.text-6", {
              company: "Ice Berg BTL Agency",
            })
          }}
        </p>
      </div>
    </div>
  </section>
</template>
