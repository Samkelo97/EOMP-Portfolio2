<template >
 <div class="col-12 col-lg-4 col-md-4 col-sm-12 m-3 text-center
  " id="card" :to="{ names: 'Experience', params:{ id:Experience.id } }">
    <div class="body text-center">
    <h6>
      <strong>{{ Experience.title }}</strong>
    </h6>
    <p>{{ Experience.desc }}</p>
    <p>date: {{ Experience.date }}</p>
    </div>
 </div>
</template>

 <script>
  export default {
    props: ["Experience"],
  };
  </script>
  <style scoped>
  #card{
    width: 100px;

  }
  h6{
    color: maroon;
  }
  </style>
  