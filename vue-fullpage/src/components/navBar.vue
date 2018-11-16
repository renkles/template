<template>
    <ul class="nav" :style="[barStyle]">
      <li v-for="(item, index) in list" class="nav_item" :class="{active: index === pageNum}" :style="[itemStyle]" @click="changePages(index)"></li>
    </ul>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {
      radius: 8, // 半径px
      step: 20, // 间距px
      list: undefined,
      barStyle: {
        width: undefined,
        height: undefined,
        marginTop: undefined
      },
      itemStyle: {
        width: undefined,
        height: undefined,
        marginBottom: undefined
      }
    }
  },
  props: {
    pages: Number,
    pageNum: Number
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.list = new Array(this.pages)
      this.barStyle.width = 2 * this.radius + 'px'
      this.barStyle.height = this.pages * this.radius * 2 + (this.pages - 1) * this.step + 'px'
      this.barStyle.marginTop = (this.pages * this.radius * 2 + (this.pages - 1) * this.step) / -2 + 'px'
      this.itemStyle.width = this.radius * 2 + 'px'
      this.itemStyle.height = this.radius * 2 + 'px'
      this.itemStyle.marginBottom = this.step + 'px'
    },
    changePages (num) {
      this.$emit('turn', num + 1)
    }
  }
}
</script>

<style scoped lang="less">
  @outside-color: #eee;
  @inside-color-in: rgba(51,122,183,1);
  @inside-color-out: rgba(51,122,183,0);
  @active-color: #E5AD31;
  .nav {
    position: fixed;
    display: inline-block;
    list-style: none;
    padding: 0;
    right: 3%;
    top: 50%;
    .nav_item {
      border-radius: 50%;
      background-color: @outside-color;
      cursor: pointer;
      position: relative;
    }
    .nav_item:after {
      content: "";
      width: 6px;
      height: 6px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -3px;
      margin-left: -3px;
      background-color: @inside-color-in;
      border-radius: 50%;
    }
  }
  .nav:after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 0;
    margin-left: -1px;
    display: inline-block;
    width: 0;
    height: 100%;
    border-right: 2px dotted @outside-color;
  }
  .nav>.nav_item.active {
    animation: coop 1.5s ease infinite;
  }
  @keyframes coop {
    0% {
      box-shadow: 0 0 0 0 @inside-color-in;
    }
    100% {
      box-shadow: 0 0 0 12px @inside-color-out;
    }
  }
</style>
