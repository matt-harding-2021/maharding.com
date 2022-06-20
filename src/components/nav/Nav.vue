<template>
  <div class="w-100 mx-auto is-flex justify-evenly">
    <NavLink :label="'Home'" :path="'/'"/>
    <NavLink :label="'Slides'" :path="'/slides'"/>
    <NavLink :label="'Gallery'" :path="'/gallery'"/>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavLink from '@/components/nav/NavLink.vue';

@Options({
  components: {
    NavLink
  },
  props: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
  watch: {
  },
  mounted() {
  }
})

export default class Nav extends Vue {}
</script>
