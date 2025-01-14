<script>
import BannerComponent from '@/components/misc/BannerComponent.vue';

export default {
    components: {
        BannerComponent
    },
    data() {
        return {
            contactDetails: [
                { name: "Phone", value: "+91 7010882621" },
                { name: "Email", value: "contact@qleware.com" }
            ],
            formFields: [
                {
                    value: "",
                    label: "Name",
                    isRequired: true,
                    rules: "none"
                },
                {
                    value: "",
                    label: "Business email",
                    isRequired: true,
                    rules: "none"
                },
                {
                    value: "",
                    label: "Subject",
                    isRequired: true,
                    rules: "none"
                },
                {
                    value: "",
                    label: "Message",
                    isRequired: true,
                    rules: "none"
                },
            ]
        }
    }
}
</script>
<template>
    <main class="contact-page">
        <section class="section contact-section">
            <v-container>
                <v-row>
                    <v-col class="left">
                        <div class="content">
                            <div class="text-left">
                                <h1 class="section__heading">Let’s Connect and Grow Together!</h1>
                                <p>We’re here to help your business thrive. Whether you’re ready to get started, have
                                    questions, or need a custom solution, our team is just a message away.</p>
                            </div>
                            <div class="contact__details">
                                <v-table>
                                    <tbody>
                                        <tr v-for="detail in contactDetails">
                                            <td>{{ detail.name }}</td>
                                            <td> {{ detail.value }}</td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </div>
                            <BannerComponent title="Prefer face-to-face?" text="Let’s schedule a meeting!"
                                btn-icon="mdi-video" btn-text="Schedule a Meet" />
                        </div>
                    </v-col>
                    <v-col class="right">
                        <div class="content">
                            <div class="text-left">
                                <h2 class="section__sub-heading">Get in Touch</h2>
                                <p>Fill out the form, and we’ll get back to you within 24 hours.</p>
                            </div>
                            <v-form @submit.prevent>
                                <v-container>
                                    <v-row>
                                        <v-col v-for="field in formFields" cols="12">
                                            <v-text-field v-model="field.value" :label="field.label"
                                                :required="field.isRequired"></v-text-field>
                                        </v-col>
                                        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

    </main>
</template>