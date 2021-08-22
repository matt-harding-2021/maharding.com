<template>
  <div :style="{height: sizing.height, width: sizing.width}" class='is-relative is-flex justify-between align-center overflow-hidden'>
    <button v-on:click="prev()" class="h-25 w-5 z-1 ml-5 background-none border-none">
      <div class="h-100 w-100 arrow-left" />
    </button>
    <button v-on:click="next()" class="h-25 w-5 z-1 mr-5 background-none border-none">
      <div class="h-100 w-100 arrow-right" />
    </button>
    <transition :name="reverse? 'prev-slide' : 'next-slide'" 
    v-for="(n, i) in length" :key="i"
    class="h-100 w-100 is-absolute top-0">
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
      }
    }
  },
  mounted() {
  }
})

export default class Slide extends Vue {}
</script>
