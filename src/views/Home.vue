<template>
  <View :nav="false" :media="media">
    <div :class="`
      ${currentSlide === 1 ? '' : '-top-full opacity-0'}
      absolute inset-0
      flex flex-col
      justify-center items-center
      gap-16
      transition-all duration-1000
    `">
      <h1 class='text-2xl tracking-0.15'> Hi, I'm Matthew Harding </h1>
      <div class='
        flex
        items-center
        gap-4
        cursor-pointer
      '
      :onClick="() => changeSlide(2)">
        <p class='text-sm tracking-0.2 leading-3'> Find out more about me </p>
        <div class='arrow-right w-3 h-3' />
      </div>
    </div>
    <div :class="`
      ${currentSlide === 2 ? '' : 'top-full opacity-0'}
      absolute inset-0
      flex flex-col
      justify-center items-center
      gap-16
      transition-all duration-1000
    `">
      <h2 class='text-lg tracking-0.2'> Frontend Developer </h2>
      <div class='
        flex
        items-center
        gap-4
        cursor-pointer
      '
      :onScroll="(e) => scrollFunction(e)">
        <p class='flex-1'>Lorem</p>
        <div class='
          flex-1
          h-48 w-64
          rounded-lg
          glass
          transition-all duration-500
        ' />
      </div>
    </div>
  </View>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import View from '@/components/global/View.vue';

@Options({
  components: {
    View,
  },
  props: {
    media: String
  },
  data() {
    return {
      currentSlide: 1
    };
  },
  methods: {
    changeSlide(slide: number) {
      let vm = this;
      vm.currentSlide = 0;
      setTimeout(() => {
        vm.currentSlide = slide
      }, 500);
    },
    scrollFunction(e: object) {
      let vm = this;1
      vm.currentSlide += Math.sign(e.deltaY);
      console.log(vm.currentSlide)
    },
    init() {
      let vm = this;
      window.addEventListener('mousewheel', (e) => vm.scrollFunction(e));
      //removeEventListener(type, listener);
    }
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
    this.init()
  }
})

export default class Home extends Vue {}
</script>
