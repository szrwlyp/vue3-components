<script setup lang="ts">
import { ref, onMounted } from 'vue'

import type { CalculationOperation } from 'sass'
import type { log } from 'console'
/** IntersectionObserver兼容性方案：​intersection-observer-polyfill​ */
const currentIndex = ref(0)
const list = ref([
  { name: 'item1', style: 'height: 800px; width: 100%; background: pink' },
  { name: 'item2', style: 'height: 800px; width: 100%; background: green' },
  { name: 'item3', style: 'height:800px; width: 100%; background: red' },
  { name: 'item4', style: 'height:800px; width: 100%; background: blue' }
])

const tabListRef = ref([])
const scroll = (index: any) => {
  if (currentIndex.value == index) return

  currentIndex.value = index
  scrollRootRef.value.scrollTop = tabListRef.value[index].offsetTop
  // tabListRef.value[index].scrollIntoView({ behavior: 'smooth', block: 'start' })
}
const scrollRootRef = ref()
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((item, index) => {
        if (item.isIntersecting && !item.isVisible) {
          console.log(item)
          currentIndex.value = Number(item?.target.id)
        }
      })
    },
    {
      root: scrollRootRef.value,
      trackVisibility: true,
      delay: 100,
      threshold: [0.001]
    }
  )
  Array.from(document.getElementsByClassName('item')).forEach((item, index) => {
    observer.observe(item)
  })
})
</script>

<template>
  <ul class="nav-item">
    <template v-for="(item, index) in list" :key="index">
      <li :class="{ select: index === currentIndex }" @click="scroll(index)">
        {{ item.name }}
      </li>
    </template>
  </ul>
  <div class="item-content" ref="scrollRootRef">
    <template v-for="(item, index) of list" :key="index">
      <div
        :ref="(el) => (tabListRef[index] = el)"
        class="item"
        :id="index"
        :data-index="index"
        :style="item.style"
      ></div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.nav-item {
  width: 100%;
  height: 50px;
  list-style: none;
  display: grid;
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* position: fixed;
  top: 0;
  left: 0; */
  background: #fff;
  li {
    text-align: center;
    line-height: 50px;
    font-size: 15px;
    font-weight: 700;
  }
  li:not(:last-child) {
    border-right: 1px solid #ccc;
  }
  .select {
    background: rgba(17, 134, 255, 0.7);
    color: #fff;
  }
}
.item-content {
  height: calc(100vh - 50px);
  overflow-y: scroll;

  /* padding-top: 50px; */
}
</style>
