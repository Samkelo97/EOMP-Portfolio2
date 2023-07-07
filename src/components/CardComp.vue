<template >
    <div class="col-12 col-lg-4 col-md-4 m-5
    " id="card" :to="{ names: 'project', params:{ id:project.id } }">
      <img :src="project.image_url" :alt="project.title" />
      <div class="body">
      <h3>
        {{ project.title }}
      </h3>
      <p>{{ project.desc }}</p>
      <a :href="project.netlify" class="link btn btn-dark m-1">link</a>
      <a :href="project.github" class="github btn btn-dark m-1">github</a>
      
      </div>
    </div>
  </template>
  <script>
  export default {
    props: ["project"],
  };
  </script>
  <style scoped>
  #card{
    width:300px;
    color: white;
    height: 300px;
  }
  img{
    width: 300px;
  }
  
  a{
    background-color: maroon;
  }
  a:hover{
    background-color: black;
  }
  @media only screen and (max-width: 350px){
    #card{width:250px}
    img{width: 250px;}
  }
  @media only screen and (max-width: 300px){
    #card{width:230px}
    img{width: 230px;}
  }

  </style>