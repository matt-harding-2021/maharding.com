<template>
  <View :nav="false" :media="media">
    <button class="absolute z-10"
    :ref="(x) => test_ref = x"
    :onClick="() => console.log(test_ref)">Ref</button>
    <transition>
      <component :class="`
        ${ animationClass }
        transition-all duration-500 ease-out
      `"
      :is="currentSlide"
      @prevSlide="changeSlide(-1)"
      @nextSlide="changeSlide(1)" />
    </transition>
  </View>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import View from '@/components/global/View.vue';
import Welcome from '@/components/slides/Welcome.vue';
import Skills from '@/components/slides/Skills.vue';
import CurrentWork from '@/components/slides/CurrentWork.vue';
import ScrollEvent from '@/classes/ScrollEvent'

@Options({
  components: {
    View,
  },
  props: {
    media: String
  },
  data() {
    return {
      slides: [
        Welcome,
        Skills,
        CurrentWork,
        Skills,
        CurrentWork
      ],
      currentSlide: Welcome,
      isAnimating: false,
      animationClass: 'animate-up',
      scrollEvent: new ScrollEvent(null),

      test_ref: null,
    };
  },
  computed: {
    console: () => console 
  },
  methods: {
    changeSlide(x: number) {
      let vm = this;
      let targetSlide = vm.slides.indexOf(vm.currentSlide) + x;
      if(
        !vm.isAnimating &&
        targetSlide >= 0 &&
        targetSlide < vm.slides.length
      ) {
        vm.isAnimating = true;

        vm.animationClass = (x > 0) ? 'animate-up' : 'animate-down';

        vm.currentSlide = vm.slides[vm.slides.indexOf(vm.currentSlide) + x];

        setTimeout(() => {
          vm.isAnimating = false;
        }, 500);
      }
    },
    touchStart(e: any) {
      let vm = this;
      vm.scrollEvent = new ScrollEvent(e);
    },
    scrollFunction(e: any) {
      let vm = this;
      vm.scrollEvent.update(e)
      switch(vm.scrollEvent.direction) {
        case 'up':
          vm.changeSlide(-1);
          break;
        case 'down':
          vm.changeSlide(1);
          break;
      }
    }
  },
  watch: {
    /* media: {
      immediate: true,
      handler(val) {}
    } */
  },
  mounted() {
    let vm = this;
    window.addEventListener('mousewheel', vm.scrollFunction);
    window.addEventListener('touchstart', vm.touchStart, false);
    window.addEventListener('touchmove', vm.scrollFunction, false);
  },
  unmount() {
    let vm = this;
    window.removeEventListener('mousewheel', vm.scrollFunction);
    window.removeEventListener('touchstart', vm.touchStart, false);
    window.removeEventListener('touchmove', vm.scrollFunction, false);
  }
})

export default class Home extends Vue {}
</script>
