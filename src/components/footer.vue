<template>

  <footer class="d-flex flex-wrap justify-content-between align-items-center py-0 my-0 border-top text-white fixed-bottom">
    <p class="col-md-4 mb-0 text-body-secondary text-white-50" id="Inc">© 2023 Samkelo Mpokela</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    </a>

    <ul class="nav col-md-4 justify-content-center text-white-50">
      <li class="nav-item"><router-link to="#" class="nav-link px-2 text-body-secondary">Home</router-link></li>
      <li class="nav-item"><router-link to="#" class="nav-link px-2 text-body-secondary">About</router-link></li>
      <li class="nav-item"><router-link to="#" class="nav-link px-2 text-body-secondary">Projects</router-link></li>
      <li class="nav-item"><router-link to="#" class="nav-link px-2 text-body-secondary">Testimonilas</router-link></li>
      <li class="nav-item"><router-link to="#" class="nav-link px-2 text-body-secondary" id="bar">Resume</router-link></li>
    </ul>
  </footer>


</template>
<style scoped>
.d-flex{
  background-color:maroon;
  color:white;
}
#Inc{
  color:white !important;
}
#bar{
  color: white;
}

.nav-link {
  color: white !important;
}
</style>