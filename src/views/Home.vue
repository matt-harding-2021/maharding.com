<template>
  <View :nav="false" :media="media">
    <button class="absolute z-10"
    :ref="(x) => {testSetRef(x)}"
    :onClick="testGetRef">console.log</button><!-- targetSlide,  -->
    
    <!-- <component :class="`-top-full opacity-0`"
    :is="prevSlide" /> -->

    <!-- <keep-alive> -->
      <transition>
    
        <component :class="`
          ${ animationClass }
          transition-all duration-500
        `"
        :is="currentSlide"
        @prevSlide="changeSlide(-1)"
        @nextSlide="changeSlide(1)" /><!-- :is="currentSlide" -->
        <!-- ${
          slides.indexOf(currentSlide) < slides.indexOf(Welcome) ? 'top-full opacity-0' :
          slides.indexOf(currentSlide) > slides.indexOf(Welcome) ? '-top-full opacity-0' :
          ''
        } -->

      </transition>
    <!-- </keep-alive> -->
  </View>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import View from '@/components/global/View.vue';
import Welcome from '@/components/slides/Welcome.vue';
import Skills from '@/components/slides/Skills.vue';
import CurrentWork from '@/components/slides/CurrentWork.vue';

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
      prevSlide: null,

      isAnimating: false,

      refTest: null,

      xDown: 0,
      yDown: 0,

      animationClass: 'animate-up',
    };
  },
  methods: {
    testSetRef: function(x: null) {
      this.refTest = x;
    },
    testGetRef: function() {
      console.log('Ref Test:', this.refTest)
      console.log('Slide:', this.currentSlide)
    },
    changeSlide(x: number) {
      let vm = this;
      console.log(vm.slides.indexOf(vm.currentSlide))
      if(!vm.isAnimating) {
        if(
          (x > 0 && (vm.slides.indexOf(vm.currentSlide) + 1 < vm.slides.length))
          ||
          (x < 0 && (vm.slides.indexOf(vm.currentSlide) - 1 >= 0))
        ) {
          vm.isAnimating = true;

          (x > 0) ? vm.animationClass = 'animate-up' : vm.animationClass = 'animate-down';

          vm.currentSlide = vm.slides[vm.slides.indexOf(vm.currentSlide) + x];
          /* vm.prevSlide = vm.slides[vm.slides.indexOf(vm.currentSlide) -1]; */
          vm.isAnimating = false;
          setTimeout(() => {
            vm.isAnimating = false;
          }, 500);
        }
      }
    },
    scrollFunction(e: {deltaY: 0}) {
      let vm = this;
      console.log(e)
      vm.changeSlide(Math.sign(e.deltaY))
    },


    getTouches(evt: any) {
      return evt.touches ||// browser API
            evt.originalEvent.touches; // jQuery
    },

    handleTouchStart(evt: any) {
        const firstTouch = this.getTouches(evt)[0];
        this.xDown = firstTouch.clientX;
        this.yDown = firstTouch.clientY;
    },

    handleTouchMove(evt: any) {
        if ( ! this.xDown || ! this.yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = this.xDown - xUp;
        var yDiff = this.yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                /* right swipe */ 
            } else {
                /* left swipe */
            }
        } else {
            if ( yDiff > 0 ) {
              this.changeSlide(Math.sign(yDiff))
            } else { 
              this.changeSlide(Math.sign(yDiff))
            }
        }
        /* reset values */
        this.xDown = null;
        this.yDown = null;
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
    let vm = this;
    window.addEventListener('mousewheel', (e) => vm.scrollFunction(e));
    /* window.addEventListener('touchmove', (e) => vm.scrollFunction(e)); */
    window.addEventListener('touchstart', vm.handleTouchStart, false);
    window.addEventListener('touchmove', vm.handleTouchMove, false);
  },
  unmount() {
    let vm = this;
    window.removeEventListener('mousewheel', (e) => vm.scrollFunction(e));
  }
})

export default class Home extends Vue {}
</script>
