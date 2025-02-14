<script lang="ts" setup>
import { reactive } from 'vue'

const colors = reactive([
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
])
</script>

<template>
    <section class="popular-services">
        <div class="container">
            <h3 class="popular-services__title">
                {{ $t('popular-services.title') }}
            </h3>
            <div class="popular-services__items">
                <div class="popular-services__item">
                    <el-progress type="dashboard" :percentage="10" color="#009bb7" />
                    <h4 class="popular-services__item-title">
                        {{ $t('popular-services.service-1.title') }}
                    </h4>
                </div>
                <div class="popular-services__item">
                    <el-progress type="dashboard" :percentage="20" color="#009bb7" />
                    <h4 class="popular-services__item-title">
                        {{ $t('popular-services.service-2.title') }}
                    </h4>
                </div>
                <div class="popular-services__item">
                    <el-progress type="dashboard" :percentage="25" color="#009bb7" />
                    <h4 class="popular-services__item-title">
                        {{ $t('popular-services.service-3.title') }}
                    </h4>
                </div>
                <div class="popular-services__item">
                    <el-progress type="dashboard" :percentage="45" color="#009bb7" />
                    <h4 class="popular-services__item-title">
                        {{ $t('popular-services.service-4.title') }}
                    </h4>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>