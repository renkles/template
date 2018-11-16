<template>
  <div class="container">
    <p class="empty"></p>
    <p class="content">page2</p>
  </div>
</template>

<script>
  export default {
    name: 'page2'
  }
</script>

<style scoped>
  .container {
    background-color: #4C5D8D;
  }
  .content {
    display: inline-block;
    width: 100%;
    font-size: 3em;
    letter-spacing: 2px;
    text-align: center;
    margin: 0;
    vertical-align: middle;
  }
  .empty {
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
  }
</style>
