<script setup>
    import { getDay, getYear, getMonth, getDayOfWeek } from '../utils/getTime'
    
    defineProps({
        info: {
            type: Object,
            required: true
        }
    })

    const day = getDay()
    const nameDay = getDayOfWeek()
    const month = getMonth()
    const year = getYear()
    
</script>

<template>
    <div class="sidebar">
        <div class="sidebar__btn">
            <div class="sidebar__btn--area">
                <button @click="$emit('changeShow')" class="sidebar__btn--search">
                    Search for places
                </button>
            </div>
        </div>
        <div class="sidebar__img">
            <img :src="`./icons/${info.weather[0]?.icon}.png`" alt="">
        </div>
        <div class="sidebar__grade">
            <h3>{{ Math.round(info.main?.temp) }}<span class="sidebar__grade--temp">°C</span></h3>
            <h4>{{ info.weather[0].description }}</h4>
        </div>
        <div class="sidebar__footer">
            <h5>{{nameDay}}, {{day}} {{month}} {{ year }}</h5>
            <h5><font-awesome-icon icon="fa-solid fa-location-pin" /> {{ info.name }}, {{ info.sys?.country }}</h5>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    display: grid;
    height: 100%;
    width: 100%;
    background-color: var(--bg-card-sidebar);
    color: var(--font-color);
    grid-template-rows: 15% 35% 30% 20%;
}

.sidebar__btn {
    display: flex;
    justify-content: center;
    align-items: center;
}

.sidebar__btn--search {
    background-color: var(--bg-gray);
    border: none;
    box-shadow: -2px 2px 3px 4px rgba(36, 35, 35, 0.4);
    color: var(--font-color);
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    padding: .9rem 2.5rem;
    cursor: pointer;
}

.sidebar__img {
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    height: 150px;
}

.sidebar__grade {
    margin-top: 1rem;
    padding: 5px;
}

.sidebar__footer {
    text-align: center;
    padding-top: 2rem;
}

h3 {
    font-size: 70px;
    text-align: center;
}

.sidebar__grade--temp {
    font-size: 35px;
}

h4 {
    text-align: center;
    font-size: 30px;
    margin-top: 1rem;
}

h5 {
    font-size: 16px;
}

h5:last-of-type {
    margin-top: 1.2rem;
}

</style>