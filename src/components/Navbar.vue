<script setup>
    import Sidebar from './Sidebar.vue'
    import Search from './Search.vue'
    import { ref } from 'vue'

    defineProps({
        data: Object
    })

    const emit = defineEmits(['sendData'])

    const show = ref(true)

    const check = () => {
        show.value = !show.value
    }

    const sendFn = (city) => {
        emit('sendData', city)
        check()
    }

</script>

<template>
    <Sidebar v-if="show" :info="data" @changeShow="check" />
    <Search v-else @changeShow="check" @searchByCity="sendFn" />
</template>