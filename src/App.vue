<script setup>
  import Header from '@/components/Header.vue'
  import Search from '@/components/Search.vue'
  import Info from '@/components/Info.vue'
  import Footer from '@/components/Footer.vue'
  import store from '@/store'
</script>

<template>
  <v-app :theme="store.theme">
    <v-layout>
      <v-main>
        <v-container
            class="d-flex justify-center align-center text-h5"
            style="min-height: 100vh"
        >
          <v-card
            class="mx-auto"
            width="450"
          >
            <Header />
            <Search />

            <template v-if="store.flagPrincipal">
                <Info />
                <Footer />
            </template>

            <template v-if="store.listCities.length === 0 && !store.flagPrincipal">
                <div>
                    <v-container>
                        <v-row
                            justify="center"
                        >
                            <v-col class="">
                                Weather App
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </template>
        
          </v-card>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>
