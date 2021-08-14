<template>
  <View :media="media">
    <p>HOME</p>
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
    };
  },
  methods: {
  },
  watch: {
    /* media: {
      immediate: true,
      handler(val) {
        console.log(val);
      }
    } */
  },
  mounted() {
  }
})

export default class Home extends Vue {}
</script>
