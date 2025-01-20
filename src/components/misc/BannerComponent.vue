<script>
export default {
    props: {
        title: String,
        text: String,
        btnText: String,
        btnIcon: String,
        btnVariant: String,
    }
}
</script>

<template>
    <div class="banner">
        <v-container class="container">
            <div class="banner__content">
                <v-row justify="space-between">
                    <v-col cols="12" md="4">
                        <div class="text-center text-md-left">
                            <h3 class="banner__title">{{ title }}</h3>
                            <p class="banner__text">{{ text }}</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4" align-self="center" class="text-center">
                        <router-link to="/contact"><v-btn class="banner__button" :prepend-icon="btnIcon"
                                :variant="btnVariant">{{ btnText
                                }}</v-btn></router-link>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>