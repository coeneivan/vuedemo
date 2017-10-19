<template>
<div>
  <md-toolbar>
    <md-layout md-gutter>
    <md-layout md-flex="80" md-flex-offset="10">
      <h2 class="md-tilte">Artaboef</h2>
      <span style="flex:1"></span>
      <router-link tag="md-button" to="home">home</router-link>
      <router-link tag="md-button" to="bestellingen">Bestellingen</router-link>
    </md-layout>
  </md-layout>
  </md-toolbar>
  <md-layout md-gutter>
    <md-layout md-flex="80" md-flex-offset="10">
      <router-view></router-view>
    </md-layout>
  </md-layout>
</div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "../node_modules/vue-material/dist/vue-material.css";
  @import './main.scss';
</style>