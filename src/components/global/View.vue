<template>
  <div class='is-flex is-column h-100 w-100'>
    <Nav v-if="nav"/>
    <slot></slot>
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
    media: {
      immediate: true,
      handler(val) {
        console.log(val);
      },
      /* deep: true */
    }
  },
  mounted() {
  }
})

export default class View extends Vue {}
</script>