<script setup>
    import { ref, watch } from 'vue'
    import store from '@/store'
    import { useWeather } from '@/composables/useWeather'
    import { getListForecast } from '@/utils/formatForecast'

    const search = ref(null)
    const city = ref(null)

    const catchCountry = async ( param ) => {
        city.value = null
        store.flagI = false
        store.listCities = []

        const { getWeather, getForecast } = useWeather()
        const result = await (await getWeather(param)).json()
        const list = await (await getForecast(param)).json()
        store.dataForecast = getListForecast(list)
        
        store.data.city = result.name
        store.data.country = result.sys.country
        store.data.icon = `https://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`
        store.data.temp = Math.round(result.main.temp)
        store.data.description = result.weather[0].description
        store.data.hum = result.main.humidity
        store.data.visibility = result.visibility
        
        store.flagPrincipal = true 
    }

    watch(search, (value) => {
        if (value) value.focus()
    })

    watch(city, async (newvalue) => {
        if (newvalue) {
            const { getCities } = useWeather()
            store.listCities = await (await getCities(newvalue)).json()
        } else {
            store.listCities = []
        }
    })
</script>

<template>
    <v-expand-transition>
        <v-row v-if="store.flagI"
            class="px-2">
            <v-col>
                <v-text-field
                    ref="search"
                    name="city"
                    label="Ingrese la ciudad"
                    id="id"
                    v-model="city"
                ></v-text-field>
            </v-col>
        </v-row>
    </v-expand-transition>

    <v-list v-if="store.listCities.length > 0">
        <v-list-item
            v-for="(item) in store.listCities"
            value="item.name"
            :title="item.name"
            :subtitle="item.country"
            @click="catchCountry(item.name)"
            >
            <v-divider class="mt-2"></v-divider>
        </v-list-item>
    </v-list>
    
</template>