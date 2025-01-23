<script>
import { RouterLink } from 'vue-router'

</script>

<template>
    <section class="hero section">
        <v-container class="container">
            <div class="content pt-8 pb-8 pb-md-16">
                <h1 class="section__heading mb-5 text-center">
                    Explore and Procure <br> your B2B Leads with Qleware
                </h1>
                <div class="section__body mb-10 text-center">
                    Build a flexible strategy that scales with your business and supports efforts beyond the basic
                    requirement.
                    It’s
                    custom, It’s creative, It’s consulting. There’s no better way to reach success than getting the help
                    you
                    need
                    at
                    the right moment. Fill out the form below today to discover some of the most effective ways to stay
                    ahead of
                    the
                    competition.
                </div>
                <div class="section__footer">
                    <v-row justify="center">
                        <v-col cols="auto">
                            <RouterLink to="/contact"> <v-btn class="btn--gradient">Get in touch</v-btn> </RouterLink>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-container>
    </section>
</template>