<template>
  <div class="hello"></div>
  <div class="name">
    <h1>
      {{ msg }}
    </h1>
    <h2 class="animate_animated animate__hinge">web developer</h2>
    <div class="social">
  <router-link to="/"><img width="64" height="64" src="https://img.icons8.com/arcade/64/facebook.png" alt="facebook" id="router"/></router-link>
    <router-link to="/"><img width="64" height="64" src="https://img.icons8.com/arcade/64/linkedin-circled.png" alt="linkedin-circled" id="router"/></router-link>
    <router-link to><img width="64" height="64" src="https://img.icons8.com/arcade/64/github.png" alt="github" id="router"/></router-link>
</div>
  
  
  
  </div>
  
  
  <div class="sam">

  <img
    class="animate__animated animate__bounce animate__infinite animate__slower"
    src="https://i.postimg.cc/90gq5My6/C12-Samkelo-Mpokela-Class1-croped.jpg"
    id="My"
    alt=""
  />
  </div>


</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- home style -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Rajdhani:wght@300&family=Roboto:ital,wght@1,100&family=Teko:wght@700&display=swap");

.name {
  position: absolute;
  top: 50%;
  margin: auto;
  margin-left: 30%;
}

.hello {
  background-image: url(https://i.postimg.cc/0NRMtWCw/programmer-wallpaper-preview.jpg);
  height: 83.5vh;
  background-repeat: no-repeat;
  width: 100%;
  background-color: black;
  background-size: cover;
  color: white;
  overflow-x: hidden;
  margin: auto;
  opacity: 0.5;
}
#My {
  height: 200px;
  width: 200px;
  background-color: maroon;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  /* margin-top: 10%; */
  /* background-image: url(https://i.postimg.cc/90gq5My6/C12-Samkelo-Mpokela-Class1-croped.jpg); */
  border-radius: 50%;
  box-shadow: 2px 1px 2px 4px maroon;
  margin-top: -56%;
  justify-content: center;
  margin-left: 40%;
}
template {
  overflow: hidden;
}
h1 {
  color: maroon;
  font-size: 70px;
  margin: auto;
  /* text-align: center; */
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 1px 4px 0 grey,
    0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
    0 10px 0 #ccc, 0 11px 0 grey, 0 12px 0 maroon,
    0 20px 30px rgba(0, 0, 0, 0.5);
  font-family: "Montserrat", sans-serif;
  font-family: "Rajdhani", sans-serif;
  font-family: "Roboto", sans-serif;
  font-family: "Teko", sans-serif;
}
h2 {
  margin-left: 50%;
  margin-top: 3%;
  color: white;
  font-weight: bolder;
}
#icon{
  display: block;
}

router-link{
  margin-left: 30px;
}
/* Default styles for larger screens */
.social {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

/* CSS for screen size 300px and below */
@media only screen and (max-width: 840px) {
  .name {
    text-align: left;

  }
 
  .sam{
    width: 200px;
 
      margin-top: -350px; /* Adjust the value as per your needs */  }
    .router{
      width:50px
    }

  .social {
    align-items: center;
    margin-top: 10px;
  }
}
@media only screen and (max-width: 500px){
  h1{
    margin-left: -50px;
    font-size: 50px;

  }
  h2{
    font-weight: bold;
    font-size: 30px;
  }
  .name{
    text-align: left;
  }
  .sam{
    width: 200px;}
    h2{
      margin-left:40%;
      margin-top:2%
    }
}
@media only screen and (max-width: 637px){
  router{
    width: 30px;
    height: 30px;
    margin-top:20%;
    align-items: start;

  }
}

</style>
