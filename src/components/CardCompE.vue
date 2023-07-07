<template >
    <div class="col-12 col-lg-4 col-md-4 col-sm-12 m-3 text-center
     " id="card" :to="{ names: 'Education', params:{ id:Education.id } }">
       <div class="body text-center">
       <h6>
         <strong>{{ Education.title }}</strong>
       </h6>
       <p>{{ Education.desc }}</p>
       <p>date: {{ Education.date }}</p>
       </div>
    </div>
   </template>
   
    <script>
     export default {
       props: ["Education"],
     };
     </script>
     <style scoped>
     h6{
        color: maroon;
     }
     </style>