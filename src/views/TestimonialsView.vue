<template>
    <div v-if="testimonials" class="row justify-content-center mx-4" >
      <CardComp
        v-for="testimonial in testimonials"
        :testimonial="testimonial"
        :key="testimonial.id"
        
      />
    </div>
    <div v-else>Loading..</div>
  </template>
  <script>
  import CardComp from "@/components/CardCompT.vue"

  export default {
    created() {
      this.$store.dispatch("fetchtestimonials");
      // console.log(this.products);
    },
    computed: {
      testimonials() {
        return this.$store.state.testimonials;
        
      },
    },
    components: { CardComp },
  };
</script>
<style scoped>

</style>
