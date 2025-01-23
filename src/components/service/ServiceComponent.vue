<script>
export default {
    data() {
        return {
            dataService: [
                {
                    title: "Target Data",
                    text: "We implement modern tools and Functioning techniques to identify and engage with your target audience.",
                    icon: 'mdi-target'
                },
                {
                    title: "Data Enrichment",
                    text: "Enhance prospect data and prioritize them for personalized engagement and understanding.",
                    icon: 'mdi-database'
                },
                {
                    title: "CRM Friendly",
                    text: "We offer the lead datasheet in customer CRM's preferred format, making it easy to upload and assign.",
                    icon: 'mdi-cloud'
                },
            ],
            businessService: [
                {
                    title: "Multi-Channel outreach",
                    text: "Engage leads through various channels (LinkedIn campaigns, Email Prospecting etc.,) boosting conversion rates effectively",
                    icon: 'mdi-thumb-up'
                },
                {
                    title: "Strategic Partnership",
                    text: "Qleware seeks partnerships, collaborations, and alliances to expand your business through strategic planning.",
                    icon: 'mdi-handshake'
                },
                {
                    title: "Sales Funnel Optimization",
                    text: "By developing a structured approach to lead nurturing and conversion, we assist increase your sales pipeline's efficiency.",
                    icon: 'mdi-filter'
                },
            ],
        }
    }
}
</script>

<template>
    <section class="service section" id="service">
        <v-container class="container">
            <div class="content py-5 py-md-8">
                <v-row>
                    <v-col cols="12" md="6">
                        <h1 class="section__heading">Our Services</h1>
                    </v-col>
                    <v-col align-self="center" cols="12" md="6" class="pt-0 pt-md-3">
                        <blockquote class="section__quote">Empowering Growth through Precision Lead
                            Generation
                            and Strategic
                            Business Development.
                        </blockquote>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="6">
                        <h2 class="section__sub-heading mb-3">Data Generation</h2>
                        <p class="w-md-66 section__sub-heading-support">Collecting Data - lead scoring, key contacts,
                            funding/revenue,
                            news, and
                            more.
                        </p>
                        <div class="wrapper mt-8">
                            <v-row>
                                <v-col v-for="service in dataService" cols="12">
                                    <v-card class="section__card pa-4" :title="service.title" :text="service.text"
                                        :prepend-icon="service.icon" variant="flat"></v-card>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <h2 class="section__sub-heading mb-3">Business Development</h2>
                        <p class="w-md-66 section__sub-heading-support">Prospecting -Setting Appointments with your
                            Target Audience -
                            Deal closure
                        </p>
                        <div class="wrapper mt-8">
                            <v-row>
                                <v-col v-for="service in businessService" cols="12">
                                    <v-card class="section__card pa-4" :title="service.title" :text="service.text"
                                        :prepend-icon="service.icon" variant="flat"></v-card>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </section>
</template>