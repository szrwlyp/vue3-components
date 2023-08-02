<script setup lang="ts">
import { ref, onMounted } from 'vue'

/** IntersectionObserver兼容性方案：​intersection-observer-polyfill​ */
const currentIndex = ref(0)
const list = ref([{ name: 'item1' }, { name: 'item2' }, { name: 'item3' }, { name: 'item4' }])
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      // const item = entries.find((item) => item.isIntersecting === true)
      entries.forEach((item, index) => {
        if (item.isIntersecting && !item.isVisible) {
          currentIndex.value = Number(item?.target.id)
        }
      })
    },
    {
      trackVisibility: true,
      delay: 100
      // threshold: [0.1]
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
      <li :class="{ select: index === currentIndex }">
        {{ item.name }}
      </li>
    </template>
  </ul>
  <div style="padding-top: 50px">
    <div
      class="item"
      id="0"
      data-index="0"
      style="height: 800px; width: 100%; background: pink"
    ></div>
    <div
      class="item"
      id="1"
      data-index="1"
      style="height: 800px; width: 100%; background: green"
    ></div>
    <div
      class="item"
      id="2"
      data-index="2"
      style="height: 800px; width: 100%; background: red"
    ></div>
    <div
      class="item"
      id="3"
      data-index="3"
      style="height: 800px; width: 100%; background: blue"
    ></div>
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
  position: fixed;
  top: 0;
  left: 0;
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
</style>
