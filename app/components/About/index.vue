<script setup></script>

<template>
  <section class="about" id="about">
    <div class="container">
      <h3 class="about__title">{{ $t("about.title") }}</h3>
      <p class="about__text">
        {{ $t("about.text.main", { company: '"Ice Berg BTL Agency"' }) }}
      </p>
      <div class="about__info">
        <h4 class="about__info-title">{{ $t("about.title-goals") }}</h4>
        <el-collapse class="about__info-collapse" accordion>
          <el-collapse-item :title="$t('about.view')">
            <p class="about__info-text">
              <span>- {{ $t("about.text-goals.title-1") }}:</span>
              {{ $t("about.text-goals.text-1") }}
            </p>
            <p class="about__info-text">
              <span>- {{ $t("about.text-goals.title-2") }}:</span>
              {{ $t("about.text-goals.text-2") }}
            </p>
            <p class="about__info-text">
              <span>- {{ $t("about.text-goals.title-3") }}:</span>
              {{ $t("about.text-goals.text-3") }}
            </p>
            <p class="about__info-text">
              <span>- {{ $t("about.text-goals.title-4") }}:</span>
              {{ $t("about.text-goals.text-4") }}
            </p>
          </el-collapse-item>
        </el-collapse>
        <h4 class="about__info-title">{{ $t("about.title-advantages") }}</h4>
        <el-collapse class="about__info-collapse">
          <el-collapse-item :title="$t('about.view')">
            <p class="about__info-text">
              <span>- {{ $t("about.text-advantages.title-1") }}:</span>
              {{ $t("about.text-advantages.text-1") }}
            </p>
            <p class="about__info-text">
              <span>- {{ $t("about.text-advantages.title-2") }}:</span>
              {{ $t("about.text-advantages.text-2") }}
            </p>
            <p class="about__info-text">
              <span>- {{ $t("about.text-advantages.title-3") }}:</span>
              {{ $t("about.text-advantages.text-3") }}
            </p>
            <p class="about__info-text">
              <span>- {{ $t("about.text-advantages.title-4") }}:</span>
              {{ $t("about.text-advantages.text-4") }}
            </p>
            <p class="about__info-text">
              <span>- {{ $t("about.text-advantages.title-5") }}:</span>
              {{ $t("about.text-advantages.text-5") }}
            </p>
            <p class="about__info-text">
              {{
                $t("about.text-advantages.text-6", {
                  company: '"Ice Berg BTL Agency"',
                })
              }}
            </p>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
