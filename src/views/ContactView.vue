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
                { name: "Email", value: "santosh.k@qleware.com" },
                { name: "Location", value: 'Bhavani, Erode, Tamil Nadu, India.' },
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
    <main class="contact-page my-4 my-md-10">
        <section class="contact section">
            <v-container>
                <v-row>
                    <v-col class="left">
                        <div class="content">
                            <div class="text-left">
                                <h1 class="section__heading mb-3">Let’s Connect and Grow Together!</h1>
                                <p class="section__heading-support">We’re here to help your business thrive. Whether
                                    you’re ready to get started, have
                                    questions, or need a custom solution, our team is just a message away.</p>
                            </div>
                            <div class="contact-details mt-6">
                                <v-table>
                                    <tbody class="contact-details__body">
                                        <tr v-for="detail in contactDetails" class="contact-details__row">
                                            <td class="contact-details__body__row__left">{{ detail.name }}</td>
                                            <td class="contact-details__body__row__right"> {{ detail.value }}</td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </div>
                        </div>
                    </v-col>
                    <v-col class="right">
                        <v-sheet class="form rounded">
                            <div class="form__content px-8 py-8">
                                <div class="text-left form__head mb-6">
                                    <h2 class="form__sub-heading mb-3">Get in Touch</h2>
                                    <p class="form__text">Fill out the form, and we’ll get back to you within 24 hours.
                                    </p>
                                </div>
                                <div class="form__body">
                                    <v-form @submit.prevent>
                                        <v-text-field v-for="field in formFields" v-model="field.value"
                                            :label="field.label" :required="field.isRequired"
                                            class="form__input"></v-text-field>
                                        <v-btn class="mt-2 btn--gradient" type="submit" block
                                            size="large">Submit</v-btn>
                                    </v-form>
                                </div>
                            </div>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </section>

    </main>
</template>