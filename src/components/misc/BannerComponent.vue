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
                    <v-col cols="4">
                        <h3 class="banner__title">{{ title }}</h3>
                        <p class="banner__text">{{ text }}</p>
                    </v-col>
                    <v-col cols="4" align-self="center" class="text-center">
                        <v-btn class="banner__button" :prepend-icon="btnIcon" :variant="btnVariant">{{ btnText
                            }}</v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>