<script setup>
    import { ref } from 'vue'

    const param = ref('')

</script>

<template>
    <div class="search">
        <div class="search__icon">
            <i @click="$emit('changeShow')"><font-awesome-icon icon="fa-solid fa-x" /></i>
        </div>
        <div class="search__box">
            <div class="search__box--input">
                <input type="text" placeholder="search location" v-model="param">
            </div>
            <div class="search__box--btn">
                <button @click="$emit('searchByCity', param)">Search</button>
            </div>
        </div>
        <!-- <div class="search__list">
            <ul>
                <li>London <span><font-awesome-icon icon="fa-solid fa-angle-right" /></span></li>
            </ul>
        </div> -->
    </div>
</template>

<style scoped>
.search {
    background-color: var(--bg-card-sidebar);
    color: var(--font-color);
    display: grid;
    grid-template-rows: 10% 15%;
    width: 100%;
}

.search__icon {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding-right: 25px;
}

.search__icon > i {
    cursor: pointer;
    font-size: 20px;
}

.search__box {
    display: grid;
    gap: 10px;
    grid-template-columns: 70% auto;
    margin: 0 auto;
    width: 90%;
}

.search__box--input > input {
    background-color: transparent;
    border: 1px solid var(--font-color);
    color: var(--font-color);
    font-size: 16px;
    height: 50px;
    padding: 0 15px;
    width: 100%;
}

.search__box--btn > button {
    background-color: #3c47e9;
    border: none;
    color: var(--font-color);
    cursor: pointer;
    font-size: 14px;
    height: 50px;
    width: 100%;
}
/* 
.search__list {
    width: 90%;
    margin: 0 auto;
}

.search__list > ul {
    list-style: none;
    width: 100%;
}

ul > li {
    align-items: center;
    border: 1px solid var(--font-gray);
    cursor: pointer;
    display: flex;
    height: 55px;
    justify-content: space-between;
    margin-bottom: 1.2rem;
    padding: 0 10px;
} */

</style>