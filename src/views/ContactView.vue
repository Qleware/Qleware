<script>
import BannerComponent from '@/components/misc/BannerComponent.vue';
import emailjs from '@emailjs/browser'

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
            errorMessage: 'This field is required!',
            formFields: [
                {
                    value: '',
                    label: "Name",
                    isRequired: true,
                    rules: [v => !!v || this.errorMessage],
                    type: "v-text-field",
                },
                {
                    value: '',
                    label: "Business email",
                    isRequired: true,
                    rules: [v => !!v || this.errorMessage],
                    type: "v-text-field",
                },
                {
                    value: '',
                    label: "Subject",
                    isRequired: true,
                    rules: [v => !!v || this.errorMessage],
                    type: "v-text-field",
                },
                {
                    value: '',
                    label: "Message",
                    isRequired: true,
                    rules: [v => !!v || this.errorMessage],
                    type: "v-textarea",
                },
            ],
            isMessageSent: false,
            snackbar: false,
            snackbarTimeout: 3000,
            snackbarColor: "error",
            snackbarText: "",
            isMultiLineSnackbar: false,
            loading: false,
        }
    },
    methods: {
        handleSubmission() {
            const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID
            const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID
            const emailPublicKey = import.meta.env.VITE_EMAIL_SERVICE_PUBLIC_KEY
            const ownerName = import.meta.env.VITE_COMPANY_OWNER_NAME.replace(/_/, ' ')
            const isEmailServiceEnabled = import.meta.env.VITE_ENABLE_EMAIL_SERVICE.toLowerCase()
            const customerName = this.formFields[0].value
            const customerEmail = this.formFields[1].value
            const subject = this.formFields[2].value
            const message = this.formFields[3].value
            const templateParams = {
                owner_name: ownerName,
                customer_name: customerName,
                customer_email: customerEmail,
                subject,
                message,
            }
            if (customerName === '' || customerEmail === '' || subject === '' || message === '') {
                this.snackbarText = 'Please enter all the mandatory fields!'
                this.snackbarColor = "error"
                this.snackbar = true
                return;
            }
            if (isEmailServiceEnabled === 'true') {
                this.loading = true;
                emailjs.send(emailServiceId, emailTemplateId, templateParams, { publicKey: emailPublicKey })
                    .then(response => {
                        this.isMessageSent = true
                        this.snackbarText = "Message sent"
                        this.snackbarColor = "success"
                        this.isMultiLineSnackbar = false
                        this.snackbar = true
                        console.log(response)
                        this.resetFields();
                        this.loading = false;
                    })
                    .catch(err => {
                        this.isMessageSent = false
                        this.snackbarText = "Sorry! Message not sent. Please contact us through email or phone."
                        this.snackbarColor = "error"
                        this.isMultiLineSnackbar = true
                        this.snackbar = true
                        console.log(err)
                        this.loading = false
                    })
            }
        },
        resetFields() {
            this.formFields.forEach(field => {
                field.value = '';
            })
        }
    }
}
</script>
<template>
    <main class="contact-page mt-4 mb-6 my-md-10">
        <section class="contact section">
            <v-container>
                <v-row>
                    <v-col class="left" cols="12" md="6">
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
                    <v-col class="right" cols="12" md="6">
                        <v-sheet class="form rounded">
                            <div class="form__content px-8 py-8">
                                <div class="text-left form__head mb-6">
                                    <h2 class="form__sub-heading mb-3">Get in Touch</h2>
                                    <p class="form__text">Fill out the form, and we’ll get back to you within 24 hours.
                                    </p>
                                </div>
                                <div class="form__body">
                                    <v-form @submit.prevent @submit="handleSubmission">
                                        <!-- <v-text-field v-for="(field, index) in formFields" v-model="field.value"
                                            :label="field.label" :required="field.isRequired" :rules="field.rules"
                                            class="form__input" :key="index"></v-text-field> -->
                                        <component :is="field.type" v-model="field.value" v-for="field in formFields"
                                            class="form__input" :label="field.label" :key="field.label">
                                        </component>
                                        <v-btn class="mt-2 btn--gradient" block size="large" :loading="loading"
                                            type="submit">Submit</v-btn>
                                    </v-form>
                                </div>
                            </div>
                        </v-sheet>
                    </v-col>
                </v-row>
                <v-snackbar class="elevation-24 snack-notify" :multi-line="isMultiLineSnackbar" v-model="snackbar"
                    :timeout="snackbarTimeout" :color="snackbarColor">{{ snackbarText
                    }}</v-snackbar>
            </v-container>
        </section>

    </main>
</template>