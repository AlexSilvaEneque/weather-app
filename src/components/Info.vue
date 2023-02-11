<script setup>
    import { computed } from 'vue'
    import store from '@/store'
    import { convertKm } from '@/utils/formatForecast'

    const visibility = computed(() => convertKm(store.data.visibility))
</script>
<template>
    <v-card-text class="py-0">
        <v-row align="center" no-gutters>
            <v-col
            cols="6"
            >
                <span class="text-sm-h2 text-h4 font-weight-bold">{{ store.data.temp }}&deg;C</span>
                <v-spacer></v-spacer>
                <span class="text-subtitle-1">{{ store.data.description }}</span>
            </v-col>

            <v-col cols="6">
                <v-img
                    :src="store.data.icon"
                ></v-img>
            </v-col>
        </v-row>
    </v-card-text>
    <div class="d-flex py-3 justify-space-between">
        <v-list-item
            density="compact"
        >
            <v-list-item-subtitle><span class="font-weight-medium">Visibility: </span>{{ visibility }} km/h</v-list-item-subtitle>
        </v-list-item>

        <v-list-item
            density="compact"
        >
            <v-list-item-subtitle><span class="font-weight-medium">Humidity: </span>{{ store.data.hum }}%</v-list-item-subtitle>
        </v-list-item>
    </div>
</template>