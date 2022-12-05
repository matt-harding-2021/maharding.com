<template>
  <div :class="`
    absolute inset-0
    flex flex-col
    h-full
    justify-center items-center
    p-8 gap-16
  `">
    <h2 class='text-lg tracking-0.2'> Frontend Developer </h2>
    <div class='
      flex
      items-center
      gap-8
    '>
      <div class='
        flex-1 flex flex-col
        md:w-96
        gap-8
      '>
        <p class='flex flex-col'>
          <span>Experienced in working with different frameworks.</span>
          (SolidJS, Vue, and React)
        </p>
        <p class='flex flex-col'>
          <span class='italic'>Career highlight:</span>
          Developing a FinTech webapp from scratch.
        </p>
        <p>
          I'm also a proficient designer, using Figma to prototype.
        </p>
      </div>
      <div class='
        flex flex-col md:flex-row md:flex-wrap
        md:w-60 min-h-32
        justify-center items-center
        p-2 md:p-4 gap-6 md:gap-10
        transition-all duration-500

        md:border border-eee
        md:rounded
        md:shadow md:hover:shadow-hover
        md:backdrop-filter hover:backdrop-blur-px
        md:bg-glass
      '>
        <a href="https://www.solidjs.com/" target="_blank" rel="noreferrer noopener">
          <img class='w-8 md:w-10 h-8 md:h-10 text-xs' :src='logoSolid' alt='SolidJS' />
        </a>
        <a href="https://vuejs.org/" target="_blank" rel="noreferrer noopener">
          <img class='w-8 md:w-10 h-8 md:h-10 text-xs' :src='logoVue' alt='VueJS' />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript" target="_blank" rel="noreferrer noopener">
          <img class='w-8 md:w-10 h-8 md:h-10 text-xs' :src='logoJS' alt='JavaScript' />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener">
          <img class='w-8 md:w-10 h-8 md:h-10 text-xs' :src='logoTailwind' alt='Tailwind' />
        </a>
        <a href="https://www.figma.com/about/" target="_blank" rel="noreferrer noopener">
          <img class='w-8 md:w-10 h-8 md:h-10 text-xs' :src='logoFigma' alt='Figma' />
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
  },
  mounted() {
  },
  unmount() {
  }
})

export default class Skills extends Vue {}
</script>