<template>
    <div v-if="projects" class="row justify-content-center mx-4" >
      <Card
        v-for="project in projects"
        :project="project"
        :key="project.id"
        
      />
    </div>
    <div v-else>Loading..</div>
  </template>
  <script>
  import Card from "@/components/CardComp.vue"

  export default {
    created() {
      this.$store.dispatch("fetchprojects");
      // console.log(this.products);
    },
    computed: {
      projects() {
        return this.$store.state.projects;
        
      },
    },
    components: { Card },
  };
</script>
