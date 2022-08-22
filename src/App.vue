<template>
  <img class='absolute inset-0 w-full opacity-25'
  :src='backgroundImg' />
  <router-view class='relative'
  :media="mq.current"/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora&family=Playfair+Display&display=swap');
@import './assets/styling/tailwind.css';
@import './assets/styling/main.css';
@import './assets/styling/icons.css';

</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import backgroundImg from "@/assets/images/backgrounds/white-paper.webp";

@Options({
  inject: ["mq"],
  components: {
  },
  data() {
    return {
      backgroundImg
    };
  },
})

export default class App extends Vue {}
</script>
