<template>
  <div class="about">
    <h1>My Story</h1>
    <div class="myImage col-lg-6 col-md-6 col-12 animate_animated animate__hinge animate_infinite" >
   </div>
    <div class="info">
     <p class="col-lg-6 col-md-6 col-12 justify-content-end">I am a 25-year-old aspiring web developer based in Cape Town. I grew up in Hout Bay, and that is where I did my primary and secondary education. I then moved to a small township where I found my love for computers and coding, but my marks were not good enough for studying IT, so I pursued a different career path, but I was not satisfied because I knew i belonged in the IT industry. Currently, I am a student at Life Choices Academy, where I am pursuing my dream of becoming a web developer.</p>
      </div>
      <div class="more row">

        <div class="items my-4 col-12 col-lg-4 col-md-4"><img src="../assets/resume.png" alt="" style="width: 300px;height: 200px;"><span><router-link to="/resume"><button to="/resume">RESUME</button></router-link></span></div>
       


      </div>



  </div>
</template>

<style>
span{
  top:300px;
  color: black;
  font-size: xx-large;
  font-weight:bolder;
  color: maroon;
}
.items{
  background-color:transparent;
  width: 300px;
  margin: auto;
  height: 200px;
}
.more{
  background-color:white ;
  height: 400px !important;
}
.about{
  height: 100vh;
  background-color: black;
  text-align: center;
  color: white;
}
.myImage{
 height:300px;
 width: 300px;
 background-color: maroon;
  background-repeat:no-repeat;
  background-size:cover;
   margin-top: 5%;
  background-image: url(https://i.postimg.cc/90gq5My6/C12-Samkelo-Mpokela-Class1-croped.jpg);
  border-radius: 50%;
  box-shadow: 2px 3px 2px 4px maroon;
  margin-left:20%;

}
button{
  background-color: maroon;
}
button:hover{
  background-color: black;
  color: white;
}

.info{
  /* margin: auto; */
  text-align: right;
  font-size:large;
  /* margin-inline: 30px; */
  margin-left: 800px;
  margin-top: -18%;

}
@media screen and (max-width: 300px) {
  .My{width: 280px;margin-top: 30%;}
}


</style>