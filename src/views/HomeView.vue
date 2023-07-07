<template>
  <div class="home">
    <HelloWorld msg="Samkelo Mpokela"/>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.home {
  height: 83.5vh;
}
Helloworld{text-shadow: 0 1px 0 maroon, 0 2px 0 #ccc,
                0 3px 0 #ccc, 0 4px 0 maroon,
                0 5px 0 maroon, 0 6px 0 #ccc,
                0 7px 0 maroon, 0 8px 0 #ccc,
                0 9px 0 #ccc, 0 10px maroon,
                0 11px 0 maroon, 0 12px 0 #ccc,
                0 20px 30px rgba(0, 0, 0, 0.5)
}

</style>
