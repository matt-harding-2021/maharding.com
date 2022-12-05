<template>
  <div class='
    container
    flex-1 flex
  '>
    <div class='
      relative
      flex-1 flex flex-col
    '>
      <Nav v-if="nav"/>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Nav from "@/components/nav/Nav.vue"

@Options({
  components: {
    Nav,
  },
  props: {
    media: String,
    nav: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    };
  },
  methods: {
  },
  watch: {
    /* media: {
      immediate: true,
      handler(val) {
        console.log(val);
      },
    } */
  },
  mounted() {
  }
})

export default class View extends Vue {}
</script>