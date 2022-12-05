<template>
  <div :class="`
    absolute inset-0
    flex flex-col
    h-full
    justify-center items-center
    p-8 gap-16
  `">
    <h2 class='text-lg tracking-0.2'> Current Work </h2>
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
          I am currently a software developer at Finlight, 
          working with a great team to create and maintain an innovative web app.
        </p>
        <p class='flex flex-col'>
          Always looking to improve, I create fun projects using other languages.
          <span>(C++, C#, and anything WebDev)</span>
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
        <a href="https://www.finlight.com/about/team/" target="_blank" rel="noreferrer noopener">
          <img class='w-fit h-12 md:h-10' :src='imgSrc' />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import logoFinlight24 from "@/assets/images/logos/finlight_logo_24.svg";
import logoFinlightIcon from "@/assets/images/logos/finlight_logo_icon.svg";

@Options({
  components: {
  },
  props: {
    media: String
  },
  data() {
    return {
    };
  },
  computed: {
    imgSrc() {
      let vm = this;
      let result = logoFinlightIcon;
      if(!['mobile', 'tablet'].includes(vm.media)) {
        result = logoFinlight24;
      }
      return result;
    }
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

export default class CurrentWork extends Vue {}
</script>
