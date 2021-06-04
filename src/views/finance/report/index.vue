<template>
  <div>
    <my-info @EmitMassage="receiveMassage"></my-info>
  </div>
</template>


<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import myInfo from './components/info/index.vue'

  @Component({
    components: {
      myInfo
    }
  })

  export default class report extends Vue {
    //接收子组件传过来的值
    public receiveMassage(val: string): void {
      console.log(val); //子组件传递过来的值
    }

  }

</script>


<style scoped>

</style>
