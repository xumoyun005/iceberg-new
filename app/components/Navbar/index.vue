<script lang="ts" setup>
import LanguageIcon from "@/assets/images/language.svg";
import NorthEastIcon from "@/assets/images/north-east.svg";
import MenuIcon from "@/assets/images/menu.svg";
import CloseIcon from "@/assets/images/close.svg";
import LogoBlackICon from "@/assets/images/logo-black.svg";

const { locales, setLocale, t } = useI18n();
const userLang = useCookie<string>("user-lang", {
  maxAge: 365 * 24 * 60 * 60, // 1 год
  default: () => "ru",
});
const router = useRouter();
const langsMenu = ref(false);
const selectedLang = ref(userLang.value);
const switchLanguage = (code: "uz" | "ru") => {
  setLocale(code);
  selectedLang.value = code;
  userLang.value = code;
};
let languageMenu = ref(false);
let burgerMenu = ref(false);

const scrollIntoViewOption = (tapedLink: any) => {
  const home = document.querySelector("#nav");
  const services = document.querySelector("#services");
  const about = document.querySelector("#about");
  const contacts = document.querySelector("#footer");

  if (tapedLink == "home") {
    home.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    });
  } else if (tapedLink == "services") {
    services.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    });
  } else if (tapedLink == "about") {
    about.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    });
  } else if (tapedLink == "contacts") {
    contacts.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <nav class="nav" id="nav">
    <div
      class="container nav-content"
      @click="languageMenu = false"
      @mouseleave="languageMenu = false"
    >
      <div class="nav-content__logo">
        <img :src="LogoBlackICon" alt="" />
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
        <li class="nav-content__item language" @click.stop="langsMenu = true">
          <img :src="LanguageIcon" alt="" />
          <div
            class="nav-content__languages"
            v-if="langsMenu"
            @mouseleave="langsMenu = false"
          >
            <div
              class="nav-content__languages-item"
              v-for="locale in locales"
              :key="`key-${locale}`"
              @click="switchLanguage(locale.code)"
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
      <button class="nav-content__menu-btn" @click="burgerMenu = true">
        <img :src="MenuIcon" alt="" />
      </button>
    </div>
  </nav>
</template>

<style scoped></style>
