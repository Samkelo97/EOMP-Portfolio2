<template>
  <nav class="navbar navbar-expand-lg sticky-top my-0" id="nav" >
  <div class="container-fluid" >
    <a class="navbar-brand" href="#">SM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/projects">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Testimonials">Testimonials</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Resume">Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ContactView">Contact</router-link>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>
</template>
<style>
.dropdown-menu{
  background-color: maroon;
}
.dropdown-item{
  color: white;
  font-size: larger;
}
.dropdown-item:hover{
  transform: scale(1.3);
box-shadow:white;
}
#nav{
  background-color: maroon;
  background-size: cover;
}
.nav-link{
  font-size:large ;
  color: white;

}
.nav-link:hover{
  transform: scale(1.3);
box-shadow:white;
background-color: transparent;
}



#Home{
  top: 20%;
  background-color: maroon;
  display: inline;
  background-color: white;

}


</style>