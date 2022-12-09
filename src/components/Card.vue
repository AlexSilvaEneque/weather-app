<script setup>
    import { onlyDate } from '../utils/getTime'

    const prop = defineProps({
        detail: Object
    })

    const formatDay = onlyDate(prop.detail?.dt_txt)
</script>

<template>
    <div class="card">
        <div class="card__header">
            <h3>{{ formatDay }}</h3>
        </div>
        <div class="card__body">
            <img :src="`/icons/${detail?.weather[0].icon}.png`" width="80" alt="">
        </div>
        <div class="card__footer">
            <h5>{{ Math.round(detail?.main.temp_min) }}°C</h5>
            <h5>{{ Math.round(detail?.main.temp_max) }}°C</h5>
        </div>
    </div>
</template>

<style scoped>
    .card {
        height: 150px;
        background-color: var(--bg-card-sidebar);
        margin-bottom: 10px;
        display: grid;
        grid-template-rows: 25% 50% 25%;
        border-radius: 12px;
    }

    .card__header {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card__body {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card__footer {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    h3 {
        text-align: center;
    }

    h5:last-of-type {
        color: var(--font-gray);
    }
</style>