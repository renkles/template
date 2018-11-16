<template>
  <div class="change_btn" @click="changeType">
    <div class="change_cube" :style="cubeStyle">{{text}}</div>
  </div>
</template>

<script>
export default {
  name: 'change',
  data () {
    return {
      text: undefined,
      cubeStyle: {
        left: undefined
      }
    }
  },
  props: {
    type: String
  },
  created () {
    this.init(this.type)
  },
  watch: {
    type: function (val) {
      this.init(val)
    }
  },
  methods: {
    init (msg) {
      if (msg === 'horizontal') {
        this.cubeStyle.left = '50%'
        this.text = 'H'
      } else {
        this.cubeStyle.left = '0%'
        this.text = 'V'
      }
    },
    changeType () {
      this.$emit('change')
    }
  }
}
</script>

<style scoped lang="less">
  @cube-color: #337AB7;
  @btn-color: rgba(238,238,238,.5);
  .change_btn {
    position: fixed;
    display: inline-block;
    top: 3%;
    right: 2%;
    width: 40px;
    height: 20px;
    border-radius: 10px;
    cursor: pointer;
    background-color: @btn-color;
    .change_cube {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      transition: all .5s ease;
      background-color: @cube-color;
      text-align: center;
      line-height: 20px;
      font-weight: bold;
      color: #eee;
    }
  }
</style>
