<template>
  <div>
    <el-button @click="EmitParent" type="info">传给父组件</el-button>
  </div>
</template>


<script lang="ts">
  import {Component, Emit, Vue} from 'vue-property-decorator'

  @Component({
    components: {}
  })

  export default class info extends Vue {

    private msg = "这里是子组件信息";

    @Emit("EmitMassage") //EmitMassage 父组件事件名称
    EmitParent() {
      return this.msg;
    }
  }

</script>

<style scoped>

</style>
