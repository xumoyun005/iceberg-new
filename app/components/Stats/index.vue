<script setup>
import partnersIcon from '@/assets/images/stats/partners-icon.svg'
import completeIcon from '@/assets/images/stats/complete-icon.svg'
import starIcon from '@/assets/images/stats/star-icon.svg'
import apartmentIcon from '@/assets/images/stats/apartment-icon.svg'

</script>

<template>
    <section class="stats">
        <div class="container">
            <div class="stats__list">
                <div class="stats__item">
                    <div class="stats__item-icon">
                        <div class="stats__item-icon-bg">
                            <img :src="partnersIcon" alt="">
                        </div>
                    </div>
                    <p class="stats__item-num">25+</p>
                    <h4 class="stats__item-title">
                        {{ $t('stats.stats-1') }}
                    </h4>
                </div>
                <div class="stats__item">
                    <div class="stats__item-icon">
                        <div class="stats__item-icon-bg">
                            <img :src="completeIcon" alt="">
                        </div>
                    </div>
                    <p class="stats__item-num">325+</p>
                    <h4 class="stats__item-title">
                        {{ $t('stats.stats-2') }}
                    </h4>
                </div>
                <div class="stats__item">
                    <div class="stats__item-icon">
                        <div class="stats__item-icon-bg">
                            <img :src="starIcon" alt="">
                        </div>
                    </div>
                    <p class="stats__item-num">5+</p>
                    <h4 class="stats__item-title">
                        {{ $t('stats.stats-3') }}
                    </h4>
                </div>
                <div class="stats__item">
                    <div class="stats__item-icon">
                        <div class="stats__item-icon-bg">
                            <img :src="apartmentIcon" alt="">
                        </div>
                    </div>
                    <p class="stats__item-num">7+</p>
                    <h4 class="stats__item-title">
                        {{ $t('stats.stats-4') }}
                    </h4>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>