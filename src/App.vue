<template >
  <div id="app">
    <div class="container">
      <div>
        <img id="img-avatar" class="mt-2" src="./assets/logo.webp" />
      </div>
      <div class="nav-bar card mb-3">
        <ul class="nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/vitae">Curriculum Vitae</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
      <div class>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
        <p class="float-right">2020 ® All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata&display=swap");
* {
  font-family: "Inconsolata", monospace;
  color: rgb(229, 229, 234);
}

.nav-link {
  color: rgb(229, 229, 234);
}

.nav-link:hover {
  color: rgb(99, 99, 102);
}

.nav-bar.card {
  background-color: rgb(28, 28, 30);
}

#app,
html {
  background-color: rgb(14, 14, 15);
}

#img-avatar {
  max-width: 100%;
  width: auto;
  height: 270px;
  -webkit-filter: grayscale(65%) brightness(75%);
  filter: grayscale(65%) brightness(75%);
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 15em;
}

.nav-link.router-link-exact-active.router-link-active {
  color: rgb(48, 209, 88);
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
  transition-property: height, opacity;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
