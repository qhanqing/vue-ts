<template>
  <div class="home">
    <mixed-line-bar :data="data" :base="base"
                    :footerData="footerData"></mixed-line-bar>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import mixedLineBar from './echarts/mixedLineBar/index.vue'

  @Component({
    components: {
      mixedLineBar
    }
  })
  export default class Home extends Vue {

    //基础设置
    public base: any = {
      width: document.body.clientWidth-240 + "px",
      height: (document.body.clientWidth / 2 - 42) / 2.25 + "px"
    }

    public data: any = [
      {
        name: '蒸发量',
        type: 'bar',
        itemStyle: {
          color: '#52a0dd'
        },
        data: [2.0, 4.9, 17.0, 23.2, 25.6, 76.7, 135.6, 12.2, 32.6, 200.0, 6.4, 3.3]
      },
      {
        name: '平均温度',
        type: 'line',
        yAxisIndex: 1,
        itemStyle: {
          color: '#74ddd8'
        },
        data: [2.0, 23.2, 3.3, 26.5, 6.3, 2.2, 0.3, 203.4, 23.0, 16.5, 12.0, 6.2]
      }]

    public footerData: any = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

  }


</script>
