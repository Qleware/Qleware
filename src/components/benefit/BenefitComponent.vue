<script>
export default {
    data() {
        return {
            benefits: [
                {
                    title: "Stay on Track",
                    text: "The leads we deliver are in line with your needs and current priorities, allowing your BDR/SDR team to stay on track and avoid missing out on good opportunities.",
                    icon: 'mdi-road-variant'
                },
                {
                    title: "2x Time on Approach",
                    text: "We assist you in boosting your sales growth by providing you with precise and enriched data, which gives you two times as much time to concentrate on prospecting.",
                    icon: 'mdi-timer'
                },
                {
                    title: "Boost Your Sales Pipeline",
                    text: "Our strategic approach to lead generation & business development empowers to expand client base, enhance sales conversions, and achieve sustainable business growth.",
                    icon: 'mdi-finance',
                },
            ],
        }
    }
}
</script>

<template>
    <section class="benefit section mt-4">
        <v-container class="container">
            <div class="section__content py-8">
                <div class="text-left text-md-center mb-8">
                    <h1 class="section__heading mb-3">Your benefits</h1>
                    <p class="section__heading-support">Qleware services will provide you lots of benefits to your Sales
                        process</p>
                </div>
                <div class="section__body">
                    <v-row>
                        <v-col v-for="benefit in benefits" :key="benefit.title" cols="12" md="4">
                            <v-card class="section__card" variant="text" :title="benefit.title" :text="benefit.text"
                                :prepend-icon="benefit.icon"></v-card>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-container>
    </section>
</template>