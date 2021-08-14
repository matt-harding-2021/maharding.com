<template>
  <router-view :media="mq.current"/>
</template>

<style>
@import './assets/styles/main.scss';
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
