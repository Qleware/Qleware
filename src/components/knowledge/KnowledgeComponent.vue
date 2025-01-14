<script>
import BannerComponent from '../misc/BannerComponent.vue';

export default {
    components: {
        BannerComponent
    },
    data() {
        return {
            data: null,
        }
    }
}
</script>
<template>
    <section class="section knowledge-section">
        <v-container class="container">
            <div class="section__content">
                <div class="text-center">
                    <h1 class="section__heading">
                        How Vital is Lead Generation in a sales cycle ?
                    </h1>
                    <p>Lead generation is more vital in the Sales or Marketing departments of many (Service / Product)
                        businesses. It is the object on the crucial route. An effective lead generation program/partner
                        involves generating "qualified sales leads," which typically determines whether a company will
                        eventually excel or fall.</p>
                </div>
                <div class="section__body">
                    <div># Need to put Image</div>
                </div>
                <div class="section__footer">
                    <blockquote>“The purpose of lead generation is to launch and propel the front end of the sales
                        process. A company needs to generate 'qualified sales leads and opportunities with a reasonable
                        & manageable chance of successfully closing a deal.”</blockquote>
                    <BannerComponent title="Contact with us" btnIcon="mdi-video" btnText="Schedule a meet"
                        text="Interested to know more about how our Qualified Leads may help you to scale your business?" />
                </div>
            </div>
        </v-container>
    </section>
</template>