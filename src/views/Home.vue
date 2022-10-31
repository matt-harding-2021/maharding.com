<template>
  <View :nav="false" :media="media">
    <button class="absolute z-10"
    :ref="(x) => {testSetRef(x)}"
    :onClick="testGetRef">console.log</button><!-- targetSlide -->
    <div :class="`
      ${
        currentSlide < 1 ? 'top-full opacity-0' :
        currentSlide > 1 ? '-top-full opacity-0' :
        ''
      }
      absolute inset-0
      flex flex-col
      h-full
      justify-center items-center
      gap-16
      transition-all duration-800
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
      ${
        currentSlide < 2 ? 'top-full opacity-0' :
        currentSlide > 2 ? '-top-full opacity-0' :
        ''
      }
      absolute inset-0
      flex flex-col
      h-full
      justify-center items-center
      gap-16
      transition-all duration-800
    `">
      <h2 class='text-lg tracking-0.2'> Frontend Developer </h2>
      <div class='
        flex
        items-center
        gap-12
      '
      :onScroll="(e) => scrollFunction(e)">
        <p class='flex-1 w-96'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique eros vitae vehicula commodo.
          <br />
          Donec facilisis sed quam vel rutrum.
          <br />
          Duis efficitur dui lectus. In hac habitasse platea dictumst. 
        </p>
        <div class='
          flex flex-wrap
          w-96
          justify-center
          p-12 gap-12
          transition-all duration-500
          glass
        '>
          <a href="https://www.figma.com/about/" target="_blank" rel="noreferrer noopener">
            <img class='w-12 h-12' :src='logoFigma' />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript" target="_blank" rel="noreferrer noopener">
            <img class='w-12 h-12' :src='logoJS' />
          </a>
          <a href="https://www.solidjs.com/" target="_blank" rel="noreferrer noopener">
            <img class='w-12 h-12' :src='logoSolid' />
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener">
            <img class='w-12 h-12' :src='logoTailwind' />
          </a>
          <a href="https://vuejs.org/" target="_blank" rel="noreferrer noopener">
            <img class='w-12 h-12' :src='logoVue' />
          </a>
        </div>
      </div>
    </div>

    
    <div :class="`
      ${
        currentSlide < 3 ? 'top-full opacity-0' :
        currentSlide > 3 ? '-top-full opacity-0' :
        ''
      }
      absolute inset-0
      flex flex-col
      h-full
      justify-center items-center
      gap-16
      transition-all duration-800
    `">
      <h2 class='text-lg tracking-0.2'> Current Work </h2>
      <div class='
        flex
        items-center
        gap-12
      '
      :onScroll="(e) => scrollFunction(e)">
        <p class='flex-1 w-96'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique eros vitae vehicula commodo.
          <br />
          Donec facilisis sed quam vel rutrum.
          <br />
          Duis efficitur dui lectus. In hac habitasse platea dictumst. 
        </p>
        <div class='
          flex flex-wrap
          w-96
          justify-center
          p-12 gap-12
          transition-all duration-500
          glass
        '>
          <a href="https://www.finlight.com/" target="_blank" rel="noreferrer noopener">
            <img class='w-12 h-12' :src='logoFigma' />
          </a>
        </div>
      </div>
    </div>
    
    <div :class="`
      ${
        currentSlide < 4 ? 'top-full opacity-0' :
        currentSlide > 4 ? '-top-full opacity-0' :
        ''
      }
      absolute inset-0
      flex flex-col
      h-full
      justify-center items-center
      gap-16
      transition-all duration-800
    `">
      <h2 class='text-lg tracking-0.2'> Test </h2>
      <div class='
        flex
        items-center
        gap-12
      '
      :onScroll="(e) => scrollFunction(e)">
        <p class='flex-1 w-96'>
          Donec facilisis sed quam vel rutrum.
        </p>
        <div class='
          flex flex-wrap
          w-96
          justify-center
          p-12 gap-12
          transition-all duration-500
          glass
        '>
        </div>
      </div>
    </div>

  </View>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import View from '@/components/global/View.vue';
import logoFigma from "@/assets/images/logos/figma_icon.svg";
import logoJS from "@/assets/images/logos/javascript_icon.svg";
import logoSolid from "@/assets/images/logos/solidjs_icon.svg";
import logoTailwind from "@/assets/images/logos/tailwind_icon.svg";
import logoVue from "@/assets/images/logos/vue-js_icon.svg";

@Options({
  components: {
    View,
  },
  props: {
    media: String
  },
  data() {
    return {
      logoFigma,
      logoJS,
      logoSolid,
      logoTailwind,
      logoVue,

      currentSlide: 1,
      isAnimating: false,

      refTest: null,

      xDown: 0,
      yDown: 0
    };
  },
  methods: {
    testSetRef: function(x: null) {
      this.refTest=x;
    },
    testGetRef: function() {
      /* console.log(this.refTest) */
      console.log(this.currentSlide)
    },
    changeSlide(slide: number) {
      let vm = this;
      if(!vm.isAnimating && !(slide<0 || slide>4)) {
        vm.isAnimating = true;
        /* vm.currentSlide = 0; */
        vm.currentSlide = slide;
        /* setTimeout(() => { */
          /* vm.currentSlide = vm.targetSlide; */
          setTimeout(() => {
            vm.isAnimating = false;
          }, 800);
        /* }, 800); */
      }
    },
    scrollFunction(e: {deltaY: 0}) {
      let vm = this;
      console.log(e)
      vm.changeSlide(vm.currentSlide + Math.sign(e.deltaY))
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
              this.changeSlide(this.currentSlide + Math.sign(yDiff))
            } else { 
              this.changeSlide(this.currentSlide + Math.sign(yDiff))
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
