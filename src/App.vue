<script>
import { RouterLink, RouterView } from 'vue-router'
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
            isMdAndDown: null,
        }
    },
    mounted() {
        this.isMdAndDown = this.$vuetify.display.mdAndDown;
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
        <v-app-bar class="nav" elevation="0">
            <template v-slot:prepend v-if="isMdAndDown">
                <v-app-bar-nav-icon class="d-md-none nav__drawer" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </template>
            <v-app-bar-title>
                <v-row>
                    <v-col cols="12" md="2" align-self="center">
                        <div class="nav__brand">Qleware</div>
                    </v-col>
                    <v-col class="d-none d-md-block">
                        <v-list class="d-flex justify-center align-center nav__list">
                            <v-list-item v-for="navItem in headerNavItems" class="nav__item" :key="navItem">
                                <RouterLink :to="getPath(navItem)"
                                    :class="getCurrentPath() == getPath(navItem) ? 'nav__item--active': ''"
                                    class="nav__item__link px-2">
                                    {{ navItem.name }}
                                </RouterLink>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col class="d-none d-md-block" cols="2"></v-col>
                </v-row>
                <!-- <div class="d-flex justify-space-between"> -->
                <!-- <v-col cols="auto" md="4">
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
                    <v-col cols="4" class="d-none d-md-flex"></v-col> -->
                <!-- </div> -->
            </v-app-bar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" temporary class="bg-background">
            <v-list class="side-nav">
                <v-list-item v-for="navItem in headerNavItems" :key="navItem" class="side-nav__item">
                    <RouterLink :to="getPath(navItem)" class="side-nav__item__link"
                        :class="getCurrentPath() == getPath(navItem) ? 'side-nav__item__link--active': ''">
                        {{ navItem.name }}
                    </RouterLink>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <RouterView />
        </v-main>

        <v-footer class="footer">
            <v-container class="container">
                <div class="footer__content">
                    <v-row justify="space-between">
                        <v-col cols="12" md="4">
                            <div class="footer__heading">
                                <h1>Qleware</h1>
                                <p class="footer__heading-support">Qleware's range of services will assist you in
                                    streamlining
                                    your work. Contact us
                                    today
                                    to scale
                                    your business.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-row>
                                <v-col cols="12" md="6" class="footer__nav">
                                    <h4 class="footer__nav__heading">Company</h4>
                                    <v-list class="footer__nav__list">
                                        <v-list-item v-for="navItem in footerNavItems" class="footer__nav__list__item">
                                            <RouterLink :to="getPath(navItem)" class="footer__nav__list__item__link">
                                                {{
                                                navItem.name }}
                                            </RouterLink>
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                                <v-col cols="12" md="6 " class="footer__nav">
                                    <h4 class="footer__nav__heading">Resources</h4>
                                    <v-list class="footer__nav__list">
                                        <v-list-item v-for="resourceItem in footerResourceItems"
                                            class="footer__nav__list__item">
                                            <RouterLink class="footer__nav__list__item__link">{{ resourceItem.name }}
                                            </RouterLink>
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="3" class="footer__icons">
                            <div class="footer__icons__social">
                                <h3 class="footer__icons__social__heading">Socials</h3>
                                <div>
                                    <v-icon v-for=" iconName in socialPlatformIcons" :icon="iconName" :key="iconName"
                                        class="footer__icons__social__icon"></v-icon>
                                </div>
                            </div>
                            <div class="footer__icons__info">
                                <h3 class="footer__icons__info__heading">Contacts</h3>
                                <div>
                                    <v-icon class="footer__icons__info__icon" icon="mdi-home"></v-icon>
                                    <div class="d-inline">+91 7010882621</div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row>
                        <v-col cols="12" class="footer__copyright">
                            <p class="footer__copyright__text">@ 2025 Qleware. All Rights Reserved</p>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </v-footer>
    </v-app>
</template>
