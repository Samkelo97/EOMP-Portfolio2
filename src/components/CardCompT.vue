<template >
    <div class="col-12 col-lg-4 col-md-4 m-5
    " id="card" :to="{ names: 'testimonial', params:{ id:testimonial.id } }">
      <img :src="testimonial.image_url" :alt="testimonial.title" />
      <div class="body">
      <h6>
       <strong> {{ testimonial.title }}</strong>
      </h6>
      <p>{{ testimonial.desc }}</p>
      <p>{{ testimonial.des }}</p>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: ["testimonial"],
  };
  </script>
  <style scoped>
 #card{
  width: 300px;
  color: white;
 }
 img{
  width: 300px;
  height: 400px;
 }
 @media only screen and (max-width: 350px){
    #card{width:250px; 
           margin:auto }
    img{width: 250px;}
  }
  @media only screen and (max-width: 300px){
    #card{width:230px}
    img{width: 230px;}
  }
  </style>