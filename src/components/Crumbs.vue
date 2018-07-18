<template>
  <div class="crumbs" id="app-crumbs">
    <a href="／">首页</a>
    <span class="divider">／</span>
    <span class="current">{{text}}</span>
  </div>
</template>
<script>
export default {
  name: 'app-crumbs',
  props: {
    text: {
      required: true
    }
  }
}
</script>
<style>

</style>
