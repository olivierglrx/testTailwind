<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
       
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link"  href="\">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="\About">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="\Publications">Publications</a>
            </li>

          </ul>
          <ColorMode />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
</script>

<style scoped>
div {
  background-color: #f2eaea;
  color: rgba(0, 0, 0, 0.8);
}


.dark-mode div *, button {
  background-color: #082b47;
  color: #ebf4f1;
}
.sepia-mode div *{
  background-color: #eadfc3;
  color: #433422;
}
.dark-mode .navbar-toggler, .dark-mode .navbar-toggler *{
  background-color: #b9c5cf;
}

.light-mode .navbar-toggler, .light-mode .navbar-toggler *{
  background-color: #ebf4f1;
}

</style>
