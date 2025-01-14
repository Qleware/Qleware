<script>
export default {
    props: {
        title: String,
        text: String,
        btnText: String,
        btnIcon: String
    }
}
</script>

<template>
    <div class="banner">
        <v-container class="container">
            <div class="banner__content">
                <v-row justify="space-between">
                    <v-col cols="4">
                        <h3>{{ title }}</h3>
                        <p>{{ text }}</p>
                    </v-col>
                    <v-col cols="4">
                        <v-btn :prepend-icon="btnIcon">{{ btnText }}</v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>