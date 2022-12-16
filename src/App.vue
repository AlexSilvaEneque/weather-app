<script setup>
  import Navbar from './components/Navbar.vue';
  import Main from './components/Main.vue';
  import { onMounted, ref, watch } from 'vue';
  import apikey from './utils/apikey'
  import days from './utils/nextDays';

  const data = ref([])
  const detail = ref([])
  const list = ref([])
  const flag = ref(false)

  const flag_lo = ref(false)
  const lon = ref('')
  const lat = ref('')

  const city = ref('')

  city.value = 'Lima'

  const aux = (results) => {
    data.value = results
    detail.value = days(data.value)
  }

  const llenado = (results) => {
      list.value = results
  }

  const location = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        lon.value = position.coords.longitude
        lat.value = position.coords.latitude
        
        flag_lo.value = true
      }, () => {
        flag_lo.value = false
      })
    }
  }

  const getWeather = () => {
    console.log(flag.value);
    if (flag_lo.value) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat.value}&lon=${lon.value}&units=metric&appid=${apikey}`)
          .then(res => {
              return res.json()
          })
          .then(llenado)
    } else {      
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apikey}`)
          .then(res => {
              return res.json()
          })
          .then(llenado)
    }


  }

  const currentWeather = () => {
    if (flag_lo.value) {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat.value}&lon=${lon.value}&units=metric&appid=${apikey}`)
            .then(res => {
                return res.json()
            })
            .then(aux)
    } else {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&units=metric&appid=${apikey}`)
              .then(res => {
                  return res.json()
              })
              .then(aux)
    }
  }

  const byCity = (dato) => {
    city.value = dato
  }

  watch(city, () => {
    getWeather()
    currentWeather()
  })

  watch(flag_lo, () => {
    if(flag_lo.value) {
      getWeather()
      currentWeather()
    }
  })


  onMounted(() => {
      location()
      currentWeather()
      getWeather()
      setTimeout(() => {
        flag.value = true
      }, 3000);
  })

</script>

<template>
  <div class="container" v-if="flag">
    <Navbar class="navbar" :data="list" @send-data="byCity" />
    <Main class="main" :info="list" :detail="detail" />
  </div>
  <div class="container c-2" v-else>
    <h2>Loading ...</h2>
  </div>
</template>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-areas: "a b";
    color: var(--font-color);
    min-height: 100vh;
    /* height: 100vh; */
    background-color: var(--bg-main);
  }

  .c-2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar {
    grid-area: a;
  }

  .main {
    grid-area: b;
  }

  
  @media (max-width: 1025px) {
    .container {
      grid-template-columns: 30% 70%;
    }
  }

  @media (max-width: 769px) {
    .container {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: repeat(2, 1fr);
      grid-template-areas:
        "a"
        "b";
    }
  }

</style>
