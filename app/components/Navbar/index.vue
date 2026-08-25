<script lang="ts" setup>
import LanguageIcon from "@/assets/images/language.svg";
import NorthEastIcon from "@/assets/images/north-east.svg";
import MenuIcon from "@/assets/images/menu.svg";
import CloseIcon from "@/assets/images/close.svg";
import LogoBlackIcon from "@/assets/images/logo-black.svg";
import { useMainStore } from "~/stores/main";

const { locales, setLocale } = useI18n();
const mainStore = useMainStore();
const userLang = useCookie<string>("user-lang", {
  maxAge: 365 * 24 * 60 * 60,
  default: () => "ru",
});
const langsMenu = ref(false);
const burgerMenu = ref(false);

const switchLanguage = (code: "uz" | "ru") => {
  setLocale(code);
  userLang.value = code;
};

const scrollIntoViewOption = (tapedLink: string) => {
  burgerMenu.value = false;
  const map: Record<string, string> = {
    home: "#home",
    services: "#services",
    about: "#about",
    contacts: "#footer",
  };
  document.querySelector(map[tapedLink])?.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};

const openModal = () => {
  burgerMenu.value = false;
  mainStore.modalOpen = true;
  mainStore.applicationModalActive = true;
  mainStore.category = "Заявка";
};
</script>

<template>
  <nav class="nav" id="nav">
    <div class="container nav-content">
      <div class="nav-content__logo" @click="scrollIntoViewOption('home')">
        <img :src="LogoBlackIcon" alt="Ice Berg BTL" />
      </div>
      <ul class="nav-content__list" :class="{ active: burgerMenu }">
        <li class="nav-content__item" @click="scrollIntoViewOption('home')">
          {{ $t("navbar.home") }}
        </li>
        <li class="nav-content__item" @click="scrollIntoViewOption('services')">
          {{ $t("navbar.services") }}
        </li>
        <li class="nav-content__item" @click="scrollIntoViewOption('about')">
          {{ $t("navbar.about") }}
        </li>
        <li class="nav-content__item" @click="scrollIntoViewOption('contacts')">
          {{ $t("navbar.contacts") }}
        </li>
        <li
          class="nav-content__item language"
          @click.stop="langsMenu = !langsMenu"
        >
          <img :src="LanguageIcon" alt="" />
          <div
            class="nav-content__languages"
            v-if="langsMenu"
            @mouseleave="langsMenu = false"
          >
            <div
              class="nav-content__languages-item"
              v-for="locale in locales"
              :key="locale.code"
              @click="switchLanguage(locale.code as 'uz' | 'ru')"
            >
              <span>{{ locale.name }}</span>
              <img :src="NorthEastIcon" alt="" />
            </div>
          </div>
        </li>
        <button class="nav-content__list-close" @click="burgerMenu = false">
          <img :src="CloseIcon" alt="" />
        </button>
      </ul>
      <button class="btn btn--primary nav-content__cta" @click="openModal">
        {{ $t("header-content.application-button") }}
      </button>
      <button class="nav-content__menu-btn" @click="burgerMenu = true">
        <img :src="MenuIcon" alt="" />
      </button>
    </div>
  </nav>
</template>
