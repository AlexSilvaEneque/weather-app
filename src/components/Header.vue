<script setup>
    import store from '@/store'

    const showInput = () => {
        store.flagI = !store.flagI
    }

    const changeTheme = () => {
        store.theme = store.theme === 'light' ? 'dark' : 'light'
    }
</script>
<template>
    <v-toolbar
        color="transparent"
        flat
        >
        <v-btn
            :icon="store.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            @click="changeTheme"
        ></v-btn>
        
        <v-toolbar-title
            class="text-body-1 text-sm-h5 "
            >{{ store.data.city ? `${store.data.city} / ${store.data.country}` : 'City / Country' }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
            icon="mdi-magnify"
            @click="showInput"
        >
        </v-btn>
        
    </v-toolbar>
</template>