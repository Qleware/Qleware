<script>
import ServiceComponent from '../components/service/ServiceComponent.vue';
import HeroComponent from '../components/hero/HeroComponent.vue';
import BenefitComponent from '@/components/benefit/BenefitComponent.vue';
import KnowledgeComponent from '@/components/knowledge/KnowledgeComponent.vue';
import WhyComponent from '@/components/why/WhyComponent.vue';

export default {
  components: {
    HeroComponent,
    ServiceComponent,
    BenefitComponent,
    KnowledgeComponent,
    WhyComponent,
  },
  // setup() {
  //   const goTo = useGoTo()
  //   return { goTo }
  // }
}
</script>

<template>
  <div>
    <HeroComponent />
    <ServiceComponent />
    <BenefitComponent />
    <KnowledgeComponent />
    <WhyComponent />
  </div>
</template>