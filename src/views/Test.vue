<template>
  <View :media="media">
    <p>Test</p>
    <Slide :height="50 + '%'" :width="50 + '%'" :length="4">
      <template #0><span :style="{position: 'absolute', border: 'solid 3px red', boxSizing: 'border-box'}">0</span></template>
      <template #1><span :style="{position: 'absolute', border: 'solid 3px green', boxSizing: 'border-box'}">1</span></template>
      <template #2><span :style="{position: 'absolute', border: 'solid 3px blue', boxSizing: 'border-box'}">2</span></template>
      <template #3><span :style="{position: 'absolute', border: 'solid 3px black', boxSizing: 'border-box'}">3</span></template>
    </Slide>
  </View>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import View from '@/components/global/View.vue';
import Slide from '@/components/global/Slide.vue';

@Options({
  components: {
    View,
    Slide,
  },
  props: {
    media: String
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
  watch: {
  },
  mounted() {
  },
})

export default class Test extends Vue {}
</script>
