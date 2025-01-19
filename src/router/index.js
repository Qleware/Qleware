import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import PriceView from '../views/PriceView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import TermsAndConditionsView from '../views/TermsAndConditionsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/price',
      name: 'price',
      component: PriceView,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPolicyView,
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsAndConditionsView,
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return savedPosition || { top: 0 }
  },
})

export default router
