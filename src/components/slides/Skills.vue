<template>
  <div :class="`
    absolute inset-0
    flex flex-col
    h-full
    justify-center items-center
    gap-16
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
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import logoFigma from "@/assets/images/logos/figma_icon.svg";
import logoJS from "@/assets/images/logos/javascript_icon.svg";
import logoSolid from "@/assets/images/logos/solidjs_icon.svg";
import logoTailwind from "@/assets/images/logos/tailwind_icon.svg";
import logoVue from "@/assets/images/logos/vue-js_icon.svg";

@Options({
  components: {
  },
  props: {
  },
  data() {
    return {
      logoFigma,
      logoJS,
      logoSolid,
      logoTailwind,
      logoVue,
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

export default class Skills extends Vue {}
</script>