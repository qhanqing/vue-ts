<template>
  <el-container>
    <el-aside style="width: 220px">
      <sidebar></sidebar>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import sidebar from '@/layout/sidebar/index.vue'

  @Component({
    components: {sidebar}
  })
  export default class App extends Vue {


  }
</script>
<style>
</style>
