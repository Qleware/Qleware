<script>
import { RouterLink, RouterView } from 'vue-router'
// import { useGoTo } from 'vuetify'
export default {
    data() {
        return {
            theme: "light",
            nav: [
                "Home",
                "Service",
                "Price",
                "About",
                "Contact"
            ]
        }
    },
}
</script>

<template>
    <v-app ref="app">
        <v-app-bar class="header" elevation="0">
            <template v-slot:prepend>
                Qleware
            </template>
            <v-app-bar-title>
                <v-list class="nav d-none d-md-flex">
                    <v-list-item v-for="navItem in nav" class="nav__item" :key="navItem">
                        <RouterLink :to="navItem.toLowerCase() == 'home' ? '/' : `/${navItem.toLowerCase()}`">
                            {{ navItem }}
                        </RouterLink>
                    </v-list-item>
                </v-list>
                <!-- hello -->
            </v-app-bar-title>
            <template v-slot:append>
                <v-btn class="d-none d-md-block">Get in touch</v-btn>
                <v-icon icon="mdi-menu d-md-none"></v-icon>
            </template>
        </v-app-bar>
        <v-main class="h-screen">
            <RouterView />
        </v-main>
    </v-app>
</template>
