import { reactive } from 'vue'

const state = reactive({
    theme: 'light',
    flagI: false,
    flagPrincipal: false,
    data: {
        city: '',
        country: '',
        icon: '',
        temp: 0,
        description: '',
        hum: 0,
        visibility: 0
    },
    listCities: [],
    dataForecast: []
})

export default state