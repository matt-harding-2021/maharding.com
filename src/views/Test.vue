<template>
  <View :media="media">
    <p>Test</p>
    <Slide :length="2" :height="100 + '%'" :width="100 + '%'">
      <template #0>
        <div :style="{border: 'solid 3px red', boxSizing: 'border-box'}" />
      </template>
      <template #1>
        <div :style="{border: 'solid 3px green', boxSizing: 'border-box'}" />
      </template>
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
