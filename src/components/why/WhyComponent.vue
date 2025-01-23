<script>
export default {
    data() {
        return {
            reasons: [
                {
                    title: "Expertise in IT Services",
                    text: "Qleware excels in B2B lead generation and business development services, catering specifically to Information Technology (IT) companies. Our strategies are meticulously designed to connect you with valuable prospects, ensuring your services reach their full potential.",
                    icon: 'mdi-tools'
                },
                {
                    title: "Lead Scoring and Qualification",
                    text: "Our advanced lead scoring techniques prioritize prospects, enabling your sales team to focus on the most promising opportunities. This efficient approach increases your chances of closing deals and expanding your customer base.",
                    icon: 'mdi-certificate'
                },
                {
                    title: "Resource Efficiency",
                    text: "We understand that managing operational costs is crucial for startups and growing businesses. Qleware assists in streamlining operations by providing tailored strategies and cost-effective solutions, resulting in cost savings and improved efficiency.",
                    icon: 'mdi-currency-usd'
                },
                {
                    title: "Saves More Time",
                    text: "We deliver Leads with higher accuracy and reachability so that your team (BDR/SDR) can spend more time pitching the services rather than data sourcing and running behind on good opportunities.",
                    icon: 'mdi-clock'
                },
                {
                    title: "Performance Analytics",
                    text: "Qleware offers comprehensive performance analytics for every marketing campaign. Our detailed insights empower you to precisely monitor and assess the effectiveness of your marketing initiatives.",
                    icon: 'mdi-speedometer'
                },
                {
                    title: "Support and Consultation",
                    text: "At Qleware, our commitment to your success doesn't end with our services.  Our goal is to help you achieve optimal results by sharing valuable insights, strategies, and adjustments as your business evolves.",
                    icon: 'mdi-account-group'
                },
            ],
        }
    }
}
</script>

<template>
    <section class="why-section">
        <v-container class="container">
            <div class="section__content py-5 py-md-8">
                <div class="text-md-center">
                    <h1 class="section__heading">Why Qleware?</h1>
                </div>
                <div class="section__body mt-5 mt-md-8">
                    <v-row>
                        <v-col v-for="reason in reasons" :key="reason.title" cols="12" md="4">
                            <v-card class="section__card" variant="text" :title="reason.title" :text="reason.text"
                                :prepend-icon="reason.icon"></v-card>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-container>
    </section>
</template>