<template>
  <div class="navbar">
    <el-breadcrumb separator="/" class="hamburger-container">
      <el-breadcrumb-item :to="{ path: '/' }" class="breadcrumb">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-if="currentRouter.path">{{currentRouter.name}}
      </el-breadcrumb-item>
      <el-breadcrumb-item v-if="parentRouter.path">{{parentRouter.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator'
  import sidebar from '@/layout/sidebar/index.vue'
  import NarBar from '@/layout/NarBar/index.vue'

  @Component({
    components: {sidebar, NarBar}
  })

  export default class App extends Vue {
    public parentRouter: any = {}
    public currentRouter: any = {}

    @Watch("$route", {immediate: true, deep: true})
    private onRouteChange(newValue: any) {
      let matched: any[] = newValue.matched
      let routers: any = matched.filter(item => {
        return item.path === newValue.path
      })
      this.parentRouter = {}
      this.currentRouter = {}
      if (routers && routers.length) {
        //获取父元素
        if (routers[0].parent) {
          this.parentRouter = {
            path: routers[0].parent.path,
            name: routers[0].parent.name
          }
        }
        //获取当前元素
        this.currentRouter = {
          path: routers[0].path,
          name: routers[0].name
        }
      }
    }

  }
</script>

<style scoped lang="scss">
  .navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float: left;
      padding: 0 15px;
      cursor: pointer;
      transition: background 0.3s;
      -webkit-tap-highlight-color: transparent;
    }
  }
</style>
