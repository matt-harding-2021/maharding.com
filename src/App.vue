<template>
  <router-view :media="mq.current"/>
</template>

<style>
@import './assets/styling/tailwind.css';
/* temp css */
@import './assets/styling/main.css';
@import './assets/styling/icons.css';
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  inject: ["mq"],
  components: {
  }
})

export default class App extends Vue {}
</script>
