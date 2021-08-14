<template>
  <View :media="media">
    <p>ABOUT</p>

    <button v-on:click="show = !show">Transition</button>

    <div class="h-100 w-100" :style="{position: 'relative', border: 'solid 5px black', boxSizing: 'border-box', overflow: 'hidden'}">
      <transition name="slide">
        <div v-if="show" class="w-100 h-100" :style="{position: 'absolute', top: '0', left: '0', border: 'solid 5px green', boxSizing: 'border-box'}" />
      </transition>
      <transition name="slide">
        <div v-if="!show" class="w-100 h-100" :style="{position: 'absolute', top: '0', left: '0', border: 'solid 5px blue', boxSizing: 'border-box'}" />
      </transition>
    </div>

  </View>
</template>

<style lang="scss" scoped>
  .slide-enter-active {
    z-index: 1;
    transition: all 0.5s ease-out;
  }
  .slide-leave-active {
    z-index: -1;
    transition: all 0.5s ease-out; //cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-enter-from {
    transform: translateX(100%);
  } 
  .slide-leave-to {
    opacity: 0;
  }
</style>

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
      show: true,
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

export default class About extends Vue {}
</script>
