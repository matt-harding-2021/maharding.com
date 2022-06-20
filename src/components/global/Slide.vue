<template>
  <div
  :style="{height: sizing.height, width: sizing.width}"
  class='
    relative
    flex
    justify-between items-center
    overflow-hidden
    shadow
  '>
    <button
    v-on:click="prev()"
    class='
      h-32 w-8
      z-10 ml-8
    '>
      <div class='
        h-full w-full
        arrow-left
      ' />
    </button>
    <button
    v-on:click="next()"
    class='
      h-32 w-8
      z-10 mr-8
    '>
      <div class='
        h-full w-full
        arrow-right
      ' />
    </button>
    <transition :name="reverse? 'prev-slide' : 'next-slide'" 
    v-for="(n, i) in length" :key="i"
    class='
      absolute inset-0
      border
    '>
      <slot :name="i" v-if="i == currentIndex"></slot>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
  .next-slide-leave-active,
  .next-slide-enter-active {
    transition: 1s;
  }
  .next-slide-enter-from {
    transform: translate(100%, 0);
  }
  .next-slide-leave-to {
    transform: translate(-100%, 0);
  }

  .prev-slide-leave-active,
  .prev-slide-enter-active {
    transition: 1s;
  }
  .prev-slide-enter-from {
    transform: translate(-100%, 0);
  }
  .prev-slide-leave-to {
    transform: translate(100%, 0);
  }
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
  props: {
    media: String,
    length: {
      type: Number,
      required: true
    },
    height: {
      type: String,
      default: 100 + '%'
    },
    width: {
      type: String,
      default: 100 + '%'
    },
  },
  data() {
    return {
      currentIndex: 0,
      reverse: false
    };
  },
  computed: {
    sizing() {
      return {
        height: this.height,
        width: this.width,
      }
    },
  },
  methods: {
    next(){
      this.reverse = false;
      this.currentIndex++;
    },
    prev(){
      this.reverse = true;
      this.currentIndex--;
    },
  },
  watch: {
    currentIndex: {
      handler(val) {
        let vm = this;
        if(val < 0) vm.currentIndex = 0;
        else if(val > vm.length - 1) vm.currentIndex = vm.length - 1;
        console.log('val: ', val)
      }
    }
  },
  mounted() {
  }
})

export default class Slide extends Vue {}
</script>
