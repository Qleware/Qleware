<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <v-responsive>
        <v-app ref="app">
            <v-app-bar>Navigation bar</v-app-bar>
            <v-main class="h-screen">
                <div>Main content</div>
            </v-main>
        </v-app>
    </v-responsive>
</template>
