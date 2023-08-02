<script setup lang="ts">
import imageComp from '@/components/imageComp/index.vue'
import { ref } from 'vue'

const lazyImgs = ref([
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpega.jpeg',
  new URL('@/assets/lazy_loading/1.jpeg', import.meta.url).href,
  new URL('@/assets/lazy_loading/2.jpeg', import.meta.url).href,
  new URL('@/assets/lazy_loading/3.jpg', import.meta.url).href,
  new URL('@/assets/lazy_loading/4.jpg', import.meta.url).href,
  new URL('@/assets/lazy_loading/5.jpg', import.meta.url).href,
  new URL('@/assets/lazy_loading/6.jpeg', import.meta.url).href,
  new URL('@/assets/lazy_loading/7.jpg', import.meta.url).href,
  new URL('@/assets/lazy_loading/8.jpeg', import.meta.url).href,
  new URL('@/assets/lazy_loading/9.jpeg', import.meta.url).href,
  new URL('@/assets/lazy_loading/10.jpg', import.meta.url).href,
  new URL('@/assets/lazy_loading/11.jpeg', import.meta.url).href,
  new URL('@/assets/lazy_loading/12.jpeg', import.meta.url).href,
  new URL('@/assets/lazy_loading/13.jpeg', import.meta.url).href,
  new URL('@/assets/lazy_loading/14.jpeg', import.meta.url).href,
  new URL('@/assets/lazy_loading/15.jpeg', import.meta.url).href,
  new URL('@/assets/lazy_loading/16.jpeg', import.meta.url).href,
  new URL('@/assets/lazy_loading/17.jpeg', import.meta.url).href,
  new URL('@/assets/lazy_loading/18.jpeg', import.meta.url).href
])
</script>

<template>
  <div class="lazy-loading">
    <template v-for="(item, index) of lazyImgs" :key="index">
      <imageComp width="400px" height="400px" :src="item" :lazy="true"></imageComp>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.lazy-loading {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 800px;
  margin: auto;
  grid-gap: 30px;
}
</style>
