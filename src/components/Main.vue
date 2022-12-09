<script setup>
    import Card from './Card.vue'
    import days from '../utils/nextDays'

    defineProps({
        info: Object,
        detail: Object
    })

</script>

<template>
    <div class="wrapper">
        <div class="wrapper__main">
            <!-- Cards -->
            <div class="wrapper__main__card">
                <Card v-for="item in detail" :detail="item" :key="item" />
            </div>
            <!-- Today's -->
            <div class="wrapper__main__today">
                <div class="wrapper__main__today--header">
                    <h2>Today's Hightlights</h2>
                </div>
                <div class="wrapper__main__today__detail">
                    <div class="wrapper__main__today__detail--item">
                        <label class="item__header">Wind status</label>
                        <div class="item__body">
                            <h3>{{ info.wind?.speed }}<span>mph</span></h3>
                        </div>
                    </div>
                    <div class="wrapper__main__today__detail--item">
                        <label class="item__header">Humidity</label>
                        <div class="item__body">
                            <h3>{{ info.main?.humidity }}<span>%</span></h3>
                        </div>
                    </div>
                    <div class="wrapper__main__today__detail--item">
                        <label class="item__header">Visibility</label>
                        <div class="item__body">
                            <h3>{{ info?.visibility }}<span>miles</span></h3>
                        </div>
                    </div>
                    <div class="wrapper__main__today__detail--item">
                        <label class="item__header">Air Pressure</label>
                        <div class="item__body">
                            <h3>{{ info.main?.pressure }}<span>mb</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    background-color: var(--bg-main);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrapper__main {
    width: 85%;
    height: 90%;
    display: grid;
    grid-template-rows: auto;
}


.wrapper__main__card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    align-self: center;
}

.wrapper__main__today {
    display: grid;
}

.wrapper__main__today--header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.wrapper__main__today__detail {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-columns: repeat(auto-fit, 48%); */
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
}

.wrapper__main__today__detail--item {
    background-color: var(--bg-card-sidebar);
    display: grid;
    border-radius: 12px;
    grid-template-rows: 40% 60%;
}

.item__header {
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.item__body {
    display: grid;
    grid-template-rows: 60%;
}

.item__body > i {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
}

.item__body > input {
    margin: auto;
    width: 50%;
}


.item__body > h3 {
    font-size: 60px;
}

h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
}

span {
    font-size: 30px;
}

@media (max-width: 769px) {
    .wrapper__main {
        width: 100%;
        height: auto;
        padding-bottom: 4rem;
    }

    .wrapper__main__card {
        padding: 2rem;
    }

    .wrapper__main__today {
        display: grid;
        grid-template-rows: auto;
        padding: 0 2rem;
    }

    .wrapper__main__today__detail {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, 1fr);
        gap: 20px;
    }

    .wrapper__main__today__detail--item,
    .wrapper__main__today__detail--item2 {
        height: 180px;
    }
}

</style>