<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo-hollow.png" class="logo">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  }
})
</script>
<style lang="stylus" scoped>
.logo
  border-radius 10px
  width 20%
  height 20%
  margin 20px
</style>
