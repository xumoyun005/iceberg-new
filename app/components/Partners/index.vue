<script setup>
import CocaColaLogo from "@/assets/images/partners/coca-cola-logo.svg";
import UzumNasiyaLogo from "@/assets/images/partners/uzum-nasiya-logo.svg";
import TuronLogo from "@/assets/images/partners/turon-logo.svg";
import MyTaxiLogo from "@/assets/images/partners/my-taxi-logo.svg";
import ItvLogo from "@/assets/images/partners/itv-logo.svg";
import Express24Logo from "@/assets/images/partners/express-24-logo.svg";

const partners = [
  { id: 1, img: CocaColaLogo, name: "Coca Cola" },
  { id: 2, img: UzumNasiyaLogo, name: "Uzum Nasiya" },
  { id: 3, img: TuronLogo, name: "Turon Telecom" },
  { id: 4, img: MyTaxiLogo, name: "My Taxi" },
  { id: 5, img: ItvLogo, name: "iTV" },
  { id: 6, img: Express24Logo, name: "Express 24" },
];
</script>

<template>
  <section class="partners">
    <div class="partners__kicker-wrap">
      <p class="kicker">{{ $t("partners.kicker") }}</p>
    </div>
    <h2 class="section-title partners__title">{{ $t("partners.title") }}</h2>
    <div class="partners__list">
      <div
        class="partners__item"
        v-for="item in partners"
        :key="'a-' + item.id"
      >
        <img :src="item.img" :alt="item.name" />
      </div>
      <div
        class="partners__item"
        v-for="item in partners"
        :key="'b-' + item.id"
      >
        <img :src="item.img" :alt="item.name" />
      </div>
    </div>
  </section>
</template>
