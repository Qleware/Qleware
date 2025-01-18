<script>
import { RouterLink, RouterView } from 'vue-router'
// import { useGoTo } from 'vuetify'
export default {
    data() {
        return {
            theme: "light",
            nav: [
                { name: 'Home', isActive: true, isSection: false },
                { name: 'Service', isActive: false, isSection: false },
                { name: 'About', isActive: false, isSection: false },
                { name: 'Contact', isActive: false, isSection: false },
                { name: 'Terms & conditions', isActive: false, isSection: false },
                { name: 'Privacy policy', isActive: false, isSection: false },
            ],
            socialPlatformIcons: ['mdi-home', 'mdi-video', 'mdi-home'],
            drawer: false,
        }
    },
    methods: {
        getPath(navItem) {
            const navItemName = navItem.name.toLowerCase();

            if (navItemName == 'home') {
                return '/';
            }
            else if (navItemName == 'service') {
                return '/#service'
            }
            else {
                return '/' + navItemName;
            }
        },
        getCurrentPath() {
            return this.$route.fullPath;
        }
    },
    computed: {
        headerNavItems() {
            return this.nav.filter(resourceItem => !["Terms & conditions", "Privacy policy"].includes(resourceItem.name))
        },
        footerNavItems() {
            return this.nav.filter(navItem => ["Service", "Contact", "About"].includes(navItem.name))
        },
        footerResourceItems() {
            return this.nav.filter(resourceItem => ["Terms & conditions", "Privacy policy"].includes(resourceItem.name))
        }
    },
}
</script>

<template>
    <v-app ref="app">
        <v-app-bar class="header" elevation="0">
            <template v-slot:prepend>
                <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </template>
            <v-app-bar-title>
                <div class="d-flex justify-space-between">
                    <v-col cols="auto" md="4">
                        <div class="title">Qleware</div>
                    </v-col>
                    <v-col cols="6" class="nav d-none d-md-block">
                        <v-list class="d-flex">
                            <v-list-item v-for="navItem in headerNavItems" class="nav__item" :key="navItem">
                                <RouterLink :to="getPath(navItem)"
                                    :class="getCurrentPath() == getPath(navItem) ? 'nav__item--active': ''">
                                    {{ navItem.name }}
                                </RouterLink>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col cols="4" class="d-none d-md-flex"></v-col>
                </div>
            </v-app-bar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" temporary>
            <v-list>
                <v-list-item v-for="navItem in headerNavItems" :key="navItem">
                    <RouterLink :to="getPath(navItem)"
                        :class="getCurrentPath() == getPath(navItem) ? 'nav__item--active': ''">
                        {{ navItem.name }}
                    </RouterLink>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <RouterView />
        </v-main>

        <v-footer>
            <v-container class="container">
                <div class="footer__content">
                    <!-- <v-row>
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
                                    {{ navItem.name }}
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-col cols="12" md="3" class="footer__nav">
                            <h4>Resources</h4>
                            <v-list>
                                <v-list-item v-for="resourceItem in footerResourceItems">
                                    {{ resourceItem.name }}
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
                    </v-row> -->
                    <v-row justify="space-between">
                        <v-col cols="12" md="3">
                            <div class="footer__heading">
                                <h1>Qleware</h1>
                                <p>Qleware's range of services will assist you in streamlining your work. Contact us
                                    today
                                    to scale
                                    your business.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-row>
                                <v-col cols="12" md="6" class="footer__nav">
                                    <h4>Company</h4>
                                    <v-list>
                                        <v-list-item v-for="navItem in footerNavItems">
                                            {{ navItem.name }}
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                                <v-col cols="12" md="6 " class="footer__nav">
                                    <h4>Resources</h4>
                                    <v-list>
                                        <v-list-item v-for="resourceItem in footerResourceItems">
                                            {{ resourceItem.name }}
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="3">
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
