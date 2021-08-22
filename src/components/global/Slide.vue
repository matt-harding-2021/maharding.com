<template>
  <div :style="{height: sizing.height, width: sizing.width}" class='is-relative overflow-hidden'>
    <button v-on:click="prev()" class="is-absolute left-10 top-50 z-1">
      <span>prev</span>
    </button>
    <button v-on:click="next()" class="is-absolute left-90 top-50 z-1">
      <span>next</span>
    </button>
    <transition :name="reverse? 'prev-slide' : 'next-slide'" 
    v-for="(n, i) in length" :key="i"
    class="h-100 w-100 is-relative overflow-hidden">
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
    height: {
      type: String,
      default: 100 + '%'
    },
    width: {
      type: String,
      default: 100 + '%'
    },
    length: {
      type: Number,
      required: true
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
