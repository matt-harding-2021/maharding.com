<template>
  <View :nav="false" :media="media">
    <!-- <button class="absolute z-10"
    :ref="(x) => test_ref = x"
    :onClick="() => window.alert(test_ref)">Ref</button> -->
    <transition>
      <component :class="`
        ${ animationClass }
        transition-all duration-500 ease-out
      `"
      :is="currentSlide"
      :media="media"
      @prevSlide="changeSlide(-1)"
      @nextSlide="changeSlide(1)" />
    </transition>
    <div class='
      absolute right-0 md:inset-y-0 z-10
      flex flex-col
      justify-center
      gap-4 md:gap-6 py-4
    '>
      <button class="
        flex
        justify-end items-center
        h-8 md:h-6 w-8 md:w-6
      "
      v-for="(page, i) in pagesLength" :key="i"
      @click="() => paginationClick(i)">
        <span :class="`
          ${ paginationActive(i) ? 'bg-grey' : 'bg-grey-light' }
          transition-colors duration-1000 ease-out
          h-2 w-2
          rounded
        `" />
      </button>
    </div>
  </View>
</template>

<script lang="ts">
import { markRaw } from 'vue';
import { Options, Vue } from 'vue-class-component';
import ScrollEvent from '@/classes/ScrollEvent'
import View from '@/components/global/View.vue';

const slides = [
  markRaw(require('@/components/slides/Welcome.vue').default),
  markRaw(require('@/components/slides/Skills.vue').default),
  markRaw(require('@/components/slides/CurrentWork.vue').default),
  markRaw(require('@/components/slides/Contact.vue').default),
]

@Options({
  components: {
    View,
  },
  props: {
    media: String
  },
  data() {
    return {
      pagesLength: slides.length,
      currentSlide: slides[0],
      isAnimating: false,
      animationClass: 'animate-up',
      scrollEvent: new ScrollEvent(null),

      test_ref: null,
    };
  },
  computed: {
    console: () => console,
    window: () => window,
  },
  methods: {
    paginationClick(i: number) {
      let vm = this;
      vm.changeSlide(i - slides.indexOf(vm.currentSlide))
    },
    paginationActive(i: number): boolean {
      let vm = this;
      return(i === slides.indexOf(vm.currentSlide));
    },
    changeSlide(x: number) {
      let vm = this;
      let targetSlide = slides.indexOf(vm.currentSlide) + x;
      if(
        !vm.isAnimating &&
        targetSlide >= 0 &&
        targetSlide < slides.length
      ) {
        vm.isAnimating = true;
        vm.animationClass = (x > 0) ? 'animate-up' : 'animate-down';
        vm.currentSlide = slides[slides.indexOf(vm.currentSlide) + x];
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
