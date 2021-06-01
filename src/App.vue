<template>
  <el-container>
    <el-aside style="width: 220px">
      <sidebar></sidebar>
    </el-aside>
    <el-main>
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </el-main>
  </el-container>
</template>
<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator'
  import sidebar from '@/layout/sidebar/index.vue'

  @Component({
    components: {sidebar}
  })

  export default class App extends Vue {
    public transitionName: any = ''

    @Watch("route", {immediate: true, deep: true})
    private onRouteChange(newValue: string, oldValue: string) {
      console.log('route值改变了' + newValue, oldValue);
      this.transitionName = 'slide-fade';
    }
  }
</script>
<style>
  .slide-fade {
    position: fixed;
    top: 0;
  }

  .slide-fade-enter-active {
    transition: all 1.2s ease;
  }

  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-50px);
    opacity: 0;
  }
</style>
