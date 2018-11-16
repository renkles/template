<template>
  <div class="app">
    <div class="box" :style="[slider,layout.outside]">
      <page1 :style="[layout.inside]"></page1>
      <page2 :style="[layout.inside]"></page2>
      <page3 :style="[layout.inside]"></page3>
      <page4 :style="[layout.inside]"></page4>
      <page5 :style="[layout.inside]"></page5>
    </div>
    <nav-bar :pages="pages" :pageNum="pageNum - 1" @turn="changePages"></nav-bar>
    <change-btn :type="type" @change="changeType"></change-btn>
  </div>
</template>

<script>
  import navBar from './components/navBar'
  import page1 from './components/page1'
  import page2 from './components/page2'
  import page3 from './components/page3'
  import page4 from './components/page4'
  import page5 from './components/page5'
  import changeBtn from './components/changeBtn'

  export default {
    name: 'app',
    components: {
      navBar,
      page1,
      page2,
      page3,
      page4,
      page5,
      changeBtn
    },
    data () {
      return {
        type: 'vertical', // horizontal/vertical （默认：vertical）
        pages: 5, // 页数
        scrollTime: 800, // 翻页时间
        timing: 'cubic-bezier(1,0,1,1)', // 翻页速率
        pageNum: 1,
        isScrolling: false,
        screenHeight: undefined,
        screenWidth: undefined,
        slider: {
          transition: undefined,
          transform: undefined
        },
        layout: {
          outside: {
            width: undefined,
            height: undefined
          },
          inside: {
            width: undefined,
            height: undefined
          }
        }
      }
    },
    created () {
      this.init()
    },
    mounted () {
      // 监听屏幕尺寸变化
      window.onresize = () => {
        this.rewrite()
      }
      // 监听滚轮事件
      if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', this.scroll, false)
      }
      window.onmousewheel = document.onmousewheel = this.scroll
    },
    watch: {
      // 鼠标滚轮滑动触发页面滚动
      pageNum: function (val) {
        this.slider.transition = `transform ${this.scrollTime}ms ${this.timing}`
        this.slider.transform = this.type === 'horizontal' ? `translateX(${(val - 1) * this.screenWidth * -1}px)` : `translateY(${(val - 1) * this.screenHeight * -1}px)`
      },
      // 页面高度变化触发调整
      screenHeight: function (val) {
        if (this.pageNum > 1) {
          this.slider.transition = undefined
          this.slider.transform = this.type === 'horizontal' ? this.slider.transform : `translateY(${(this.pageNum - 1) * val * -1}px)`
        }
      },
      // 页面宽度变化触发调整
      screenWidth: function (val) {
        if(this.pageNum > 1) {
          this.slider.transition = undefined
          this.slider.transform = this.type === 'horizontal' ? `translateX(${(this.pageNum - 1) * val * -1}px)` : this.slider.transform
        }
      }
    },
    methods: {
      init () {
        this.rewrite()
        if (this.type === 'horizontal') {
          this.layout.outside.width = 100 * this.pages + '%'
          this.layout.outside.height = '100%'
          this.layout.inside.width = 100 / this.pages + '%'
          this.layout.inside.height = '100%'
        } else {
          this.layout.outside.width = '100%'
          this.layout.outside.height = 100 * this.pages + '%'
          this.layout.inside.width = '100%'
          this.layout.inside.height = 100 / this.pages + '%'
        }
      },
      rewrite () {
        this.screenHeight = document.body.clientHeight
        this.screenWidth = document.body.clientWidth
      },
      scroll (e) {
        // 防止chrome多次触发
        window.onmousewheel = undefined
        e = e || window.event
        if (e.wheelDelta) {
          if (e.wheelDelta > 0 && !this.isScrolling) {
            this.scrollTop()
          }
          if (e.wheelDelta < 0 && !this.isScrolling) {
            this.scrollBottom()
          }
        } else if (e.detail) {
          if (e.detail > 0 && !this.isScrolling) {
            this.scrollTop()
          }
          if (e.detail < 0 && !this.isScrolling) {
            this.scrollBottom()
          }
        }
      },
      scrollTop () {
        if (this.pageNum > 1) {
          let self = this
          this.pageNum = this.pageNum - 1
          this.isScrolling = true
          setTimeout(function () {
            self.isScrolling = false
          }, self.scrollTime)
        }
      },
      scrollBottom () {
        if (this.pageNum < 5) {
          let self = this
          this.pageNum = this.pageNum + 1
          this.isScrolling = true
          setTimeout(function () {
            self.isScrolling = false
          }, self.scrollTime)
        }
      },
      changePages (msg) {
        let self = this
        if (!this.isScrolling) {
          this.pageNum = msg
          this.isScrolling = true
          setTimeout(function () {
            self.isScrolling = false
          }, self.scrollTime)
        }
      },
      changeType () {
        if(this.type === 'horizontal') {
          this.type = 'vertical'
          this.layout.outside.width = '100%'
          this.layout.outside.height = 100 * this.pages + '%'
          this.layout.inside.width = '100%'
          this.layout.inside.height = 100 / this.pages + '%'
          if(this.pageNum > 1) {
            this.slider.transition = undefined
            this.slider.transform = `translateY(${(this.pageNum - 1) * this.screenHeight * -1}px)`
          }
        } else {
          this.type = 'horizontal'
          this.layout.outside.width = 100 * this.pages + '%'
          this.layout.outside.height = '100%'
          this.layout.inside.width = 100 / this.pages + '%'
          this.layout.inside.height = '100%'
          if(this.pageNum > 1) {
            this.slider.transition = undefined
            this.slider.transform = `translateX(${(this.pageNum - 1) * this.screenWidth * -1}px)`
          }
        }
      }
    }
  }
</script>

<style lang="less">
  /*通用样式*/
  html {
    width: 100%;
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: "Arial","Microsoft YaHei";
  }
  /*基础样式*/
  .app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .box {
      display: block;
      .container {
        display: inline-block;
        position: relative;
      }
    }
  }
</style>
