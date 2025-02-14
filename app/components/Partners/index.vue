<script setup>
import { ref, reactive } from 'vue'
import CocaColaLogo from '@/assets/images/partners/coca-cola-logo.svg'
import UzumNasiyaLogo from '@/assets/images/partners/uzum-nasiya-logo.svg'
import TuronLogo from '@/assets/images/partners/turon-logo.svg'
import MyTaxiLogo from '@/assets/images/partners/my-taxi-logo.svg'
import ItvLogo from '@/assets/images/partners/itv-logo.svg'
import Express24Logo from '@/assets/images/partners/express-24-logo.svg'

const partners = reactive([
    { id: 1, img: CocaColaLogo, name: "Coca Cola" },
    { id: 2, img: UzumNasiyaLogo, name: "Uzum Nasiya" },
    { id: 3, img: TuronLogo, name: "Turon Telecom" },
    { id: 4, img: MyTaxiLogo, name: "My Taxi" },
    { id: 5, img: ItvLogo, name: "ITv" },
    { id: 6, img: Express24Logo, name: "Express 24" },
])
</script>

<template>
    <section class="partners">
        <h3 class="partners__title">
            {{ $t('partners.title') }}
        </h3>
        <div class="partners__list">
            <div class="partners__item" v-for="item in partners" :key="item.id">
                <img :src="item.img" :alt="item.name" class="partners__item-img">
            </div>
            <div class="partners__item" v-for="item in partners" :key="item.id">
                <img :src="item.img" :alt="item.name" class="partners__item-img">
            </div>
        </div>
    </section>
</template>

<style scoped></style>