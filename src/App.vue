<script>
import { RouterLink, RouterView } from 'vue-router'
// import { useGoTo } from 'vuetify'
export default {
    data() {
        return {
            theme: "light",
            nav: [
                "Home",
                "Service",
                "About",
                "Contact",
                "Terms & conditions",
                "Privacy policy"
            ],
            socialPlatformIcons: ['mdi-home', 'mdi-video', 'mdi-home'],
        }
    },
    computed: {
        headerNavItems() {
            return this.nav.filter(resourceItem => !["Terms & conditions", "Privacy policy"].includes(resourceItem))
        },
        footerNavItems() {
            return this.nav.filter(navItem => ["Service", "Contact"].includes(navItem))
        },
        footerResourceItems() {
            return this.nav.filter(resourceItem => ["Terms & conditions", "Privacy policy"].includes(resourceItem))
        }
    }
}
</script>

<template>
    <v-app ref="app">
        <v-app-bar class="header" elevation="0">
            <template v-slot:prepend>
                Qleware
            </template>
            <v-app-bar-title>
                <v-list class="nav d-none d-md-flex">
                    <v-list-item v-for="navItem in headerNavItems" class="nav__item" :key="navItem">
                        <RouterLink :to="navItem.toLowerCase() == 'home' ? '/' : `/${navItem.toLowerCase()}`">
                            {{ navItem }}
                        </RouterLink>
                    </v-list-item>
                </v-list>
                <!-- hello -->
            </v-app-bar-title>
            <template v-slot:append>
                <v-btn class="d-none d-md-block">Get in touch</v-btn>
                <v-icon icon="mdi-menu d-md-none"></v-icon>
            </template>
        </v-app-bar>
        <v-main>
            <RouterView />
        </v-main>
        <v-footer>
            <v-container class="container">
                <div class="footer__content">
                    <v-row>
                        <v-col cols="12" md="4">
                            <div class="footer__heading">
                                <h1>Qleware</h1>
                                <p>Qleware's range of services will assist you in streamlining your work. Contact us
                                    today
                                    to scale
                                    your business.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="2" class="footer__nav">
                            <h4>Company</h4>
                            <v-list>
                                <v-list-item v-for="navItem in footerNavItems">
                                    {{ navItem }}
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-col cols="12" md="3" class="footer__nav">
                            <h4>Resources</h4>
                            <v-list>
                                <v-list-item v-for="resourceItem in footerResourceItems">
                                    {{ resourceItem }}
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-col cols="auto">
                            <div class="icon-wrapper">
                                <h3>Socials</h3>
                                <div>
                                    <v-icon v-for=" iconName in socialPlatformIcons" :icon="iconName"
                                        :key="iconName"></v-icon>
                                </div>
                            </div>
                            <div class="info">
                                <h3>Contacts</h3>
                                <div>
                                    <v-icon icon="mdi-home"></v-icon>
                                    +91 123456789
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row>
                        <v-col cols="12">
                            <p>@ 2023 Qleware. All Rights Reserved</p>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </v-footer>
    </v-app>
</template>
