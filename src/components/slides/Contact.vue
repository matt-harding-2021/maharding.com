<template>
  <div :class="`
    absolute inset-0
    flex flex-col
    h-full
    justify-center items-center
    gap-16
  `">
    <h2 class='text-lg tracking-0.2'>
      Contact
    </h2>
    <div class='
      flex flex-col
      items-center
      gap-10
    '>
      <div class='
        flex flex-col
        items-center
        gap-6
      '>
        <p class='underline'>
          &nbsp;Email&nbsp;
        </p>
        <div class='
          flex
          items-center
          gap-2
        '>
          <p>
            09maharding@gmail.com
          </p>
          <a href="mailto:09maharding@gmail.com"
          class='
            flex
            justify-center items-center
            w-6 h-6
            p-1
          '>
            <div class='mail_icon h-full w-full' />
          </a>
        </div>
      </div>
      <div class='
        flex flex-col
        items-center
        gap-6
      '>
        <p class='underline'>
          &nbsp;LinkedIn&nbsp;
        </p>
        <a href="https://www.linkedin.com/in/matthew-harding-528312179/">
          <p class='text-blue-600'>
            Matthew Harding
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import logo from "@/assets/images/logos/figma_icon.svg";

@Options({
  components: {
  },
  props: {
  },
  data() {
    return {
      logo
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

export default class Contact extends Vue {}
</script>
