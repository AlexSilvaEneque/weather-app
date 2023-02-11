<script setup>
    import { ref } from 'vue'
    import store from '@/store'
    import { dayName, monthName, dayMonth } from '@/utils/formatForecast'


    const xicon = (x) => {
        return `https://openweathermap.org/img/wn/${x}@4x.png`
    }
    const expand = ref(false)

    const handleExpand = () => {
        expand.value = !expand.value
    }
</script>

<template>
    <v-expand-transition>
        <div v-if="expand">
            <v-list class="bg-transparent">
                <v-list-item
                    v-for="item in store.dataForecast"
                    :key="item.dt"
                >
                <div class="d-flex justify-space-between align-center">
                    <div>
                        <v-list-item-title>
                            {{ dayName(item.dt_txt) }}, {{ monthName(item.dt_txt) }} {{ dayMonth(item.dt_txt) }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{ item.weather[0].description }}
                        </v-list-item-subtitle>
                    </div>
                    <div>
                        <span class="text-body-2">{{ Math.round(item.main.temp) }}&deg;C</span>
                        <v-avatar
                            size="60"
                        >
                            <v-img
                                :src="xicon(item.weather[0].icon)"
                            ></v-img>
                        </v-avatar>
                    </div>
                </div>
                </v-list-item>
            </v-list>               
        </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions>
        <v-btn @click="handleExpand">
            {{ !expand ? 'Full Report' : 'Hide Report' }}
        </v-btn>
    </v-card-actions>
</template>