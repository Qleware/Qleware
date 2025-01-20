<script>
import ServiceComponent from '../components/service/ServiceComponent.vue';
import HeroComponent from '../components/hero/HeroComponent.vue';
import BenefitComponent from '@/components/benefit/BenefitComponent.vue';
import KnowledgeComponent from '@/components/knowledge/KnowledgeComponent.vue';
import WhyComponent from '@/components/why/WhyComponent.vue';
import BannerComponent from '@/components/misc/BannerComponent.vue';

export default {
  components: {
    HeroComponent,
    ServiceComponent,
    BenefitComponent,
    KnowledgeComponent,
    WhyComponent,
    BannerComponent
  },
}
</script>

<template>
  <div class="home">
    <HeroComponent />
    <ServiceComponent />
    <BenefitComponent />
    <KnowledgeComponent />
    <BannerComponent title="Contact with us" btnIcon="mdi-video" btnText="Schedule a meet"
      text="Interested to know more about how our Qualified Leads may help you to scale your business?" class="banner"
      btnVariant="tonal" />
    <WhyComponent />
  </div>
</template>