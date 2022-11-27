<template>
  <div :class="`
    absolute inset-0
    flex flex-col
    h-full
    justify-center items-center
    gap-16
  `">
    <h1 class='text-2xl tracking-0.15'> Hi, I'm Matthew Harding </h1>
    <div class='
      flex
      items-center
      gap-4
      cursor-pointer
    '
    @click="$emit('nextSlide')">
      <p class='text-sm tracking-0.2 leading-3'> Find out more about me </p>
      <div class='arrow-right w-3 h-3' />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
  props: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
  watch: {
    /* media: {
      immediate: true,
      handler(val) {
        console.log(val);
      }
    } */
  },
  mounted() {
  },
  unmount() {
  }
})

export default class Welcome extends Vue {}
</script>
