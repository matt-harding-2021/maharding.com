<template>
  <View :media="media">
    <div class='
      flex-1 flex flex-wrap
      p-8 gap-8
    '>
      <!-- tailwind doesn't include classes of dynamic elements -->
      <div v-for="item in items" :key="item.id"
      class='
        flex-0
      '>
        <!-- tailwind does include classes of the defined elements within -->
        <div class='
          basis-1/3
          h-64
          border
          bg-red-600
        '>
        </div>
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
