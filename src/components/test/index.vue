<script setup lang="ts">
import { toRefs, onMounted, ref, toRef } from 'vue'
const props = defineProps({ loading: String })
console.log(props)

let loading = toRef(props, 'loading')
console.log(loading)
onMounted(() => {
  setTimeout(() => {
    console.log('aaao')
    loading.value = '10'
  }, 4000)
})
</script>

<template>
  <div>{{ loading }}</div>
</template>

<style lang="scss" scoped></style>
