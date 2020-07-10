<template>
  <div class="About">
    <div class="row">
      <div class="col mb-3">
        <div id="card-about" class="card mb-3">
          <div class="card-body">
            <vue-typed-js
              :strings="['Vue.js.', 'Bootstrap.', 'Vue Typed.', 'Fontawesome Icons.' ]"
              :loop="true"
              :showCursor="true"
              :smartBackspace="true"
              :backSpeed="50"
            >
              <span>
                This site coded with
                <span class="typing"></span>
              </span>
            </vue-typed-js>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style >
</style>