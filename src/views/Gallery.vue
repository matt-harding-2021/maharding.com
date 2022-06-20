<template>
  <View :media="media">
    <p>GALLERY</p>
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
