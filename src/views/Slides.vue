<template>
  <View :media="media">
    <div class='
      flex
      h-1/2 w-1/2
      p-4
    '>
    <Slide :length="3" :height="100 + '%'" :width="100 + '%'">
      <template #0>
        <span class='text-2xl'>1</span>
      </template>
      <template #1>
        <span class='text-2xl'>2</span>
      </template>
      <template #2>
        <span class='text-2xl'>3</span>
      </template>
    </Slide>
    </div>
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

export default class Slides extends Vue {}
</script>
