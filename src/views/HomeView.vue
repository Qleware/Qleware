<script>
import ServiceComponent from '../components/service/ServiceComponent.vue';
import HeroComponent from '../components/hero/HeroComponent.vue';

export default {
  components: {
    HeroComponent,
    ServiceComponent,
  },
  // setup() {
  //   const goTo = useGoTo()
  //   return { goTo }
  // }
}
</script>

<template>
  <section class="hero-section h-screen">
    <HeroComponent />
  </section>
  <section class="service-section">
    <ServiceComponent />
  </section>
</template>