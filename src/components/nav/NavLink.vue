<template>
  <div>
    <router-link :to="path">{{label}}</router-link> 
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
  props: {
    label: String,
    path: String,
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
