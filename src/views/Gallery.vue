<template>
  <View :media="media">
    <div class='
      flex-1 flex flex-wrap
      justify-center
      p-8 gap-8

      custom-image
    '>
    
      <div v-for="item in items" :key="item.id"
      class='
        flex
        w-64 h-64
        p-8
        rounded-xl border
        custom
      '>
        <div class='flex-1 rounded border bg-white' />
      </div>

    </div>
  </View>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import View from '@/components/global/View.vue';

@Options({
  components: {
    View,
  },
  props: {
    media: String
  },
  data() {
    return {
      items: [
        {},
        {},
        {},
        {},
      ]
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

export default class Gallery extends Vue {}
</script>
