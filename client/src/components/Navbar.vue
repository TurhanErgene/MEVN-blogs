<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/logo.png" width="35" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <strong class="navbar-item"> Vue JS CRUD API </strong>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/create" class="button is-primary">
              <strong>Create</strong>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
}
</style>