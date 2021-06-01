<template>
  <el-container class="container">
    <el-aside style="width: 220px">
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-header style="padding: 0;">
        <nar-bar></nar-bar>
      </el-header>
      <el-main>
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import sidebar from '@/layout/sidebar/index.vue'
  import NarBar from '@/layout/NarBar/index.vue'

  @Component({
    components: {sidebar, NarBar}
  })

  export default class App extends Vue {
  }
</script>
<style>
  .container {
    margin: 0 !important;
    padding: 0 !important;
  }

  .slide-fade {
    position: absolute;
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
