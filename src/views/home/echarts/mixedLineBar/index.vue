<template>
  <!--折柱混合-->
  <div :style="base" ref="chart"></div>
</template>


<script lang="ts">
  import * as echarts from "echarts";
  import {Component, Prop, Vue} from 'vue-property-decorator'

  @Component
  export default class Home extends Vue {
    @Prop({required: true}) private data!: any;
    @Prop({required: true}) private footerData!: any;
    //长宽
    @Prop({
      default: () => {
        return {
          width: '800px',//chart的宽
          height: '355px'//chart的高
        }
      }
    }) private base!: any;

    //线条名称
    @Prop({
      default: () => {
        return {
          yLeftName: '水量',
          yRightName: '温度'
        }
      }
    }) private config!: any;

    //刻度颜色
    @Prop({default: '#58a5e1'}) private axisLabel!: string;

    public mounted(): void {
      this.initCharts()
    }

    public initCharts(): void {
      let el: any = this.$refs.chart;
      let myChart = echarts.init(el)
      // 绘制图表
      myChart.setOption({
          legend: { //标题
            left: '4%',//标题居左多少
            textStyle: {//文字样式
              color: '#95cdf9'
            },
            data: this.data.map((item: { name: any; }) => {
              return item.name
            })
          },
          xAxis: [
            {
              type: 'category',
              data: this.footerData,
              axisPointer: {
                type: 'shadow'
              },
              axisLabel: { //坐标轴刻度标签的相关设置。
                color: this.axisLabel//刻度颜色
              }
            }
          ],

          yAxis: [
            {
              type: 'value',
              name: this.config.yLeftName,//名称
              splitLine: {
                show: false //Y轴标线
              },
              axisLabel: { //坐标轴刻度标签的相关设置。
                color: this.axisLabel//刻度颜色
              },
              nameTextStyle: { //提示标题
                color: this.axisLabel
              }
            },
            {
              type: 'value',
              name: this.config.yRightName,//名称
              splitLine: {
                show: false //Y轴标线
              },
              axisLabel: {//坐标轴刻度标签的相关设置。
                color: this.axisLabel//刻度颜色
              },
              nameTextStyle: {//提示标题
                color: this.axisLabel
              }
            }
          ],
          series: this.data,
          tooltip: {  //提示框
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                show: false //XY轴提示
              },
              crossStyle: {
                opacity: 0, //鼠标移入展示Y轴标线 0不展示 1展示
                color: '#999'
              }
            }
          },
          toolbox: {//工具栏。
            feature: {//各工具配置项。
              dataView: {
                show: true,
                readOnly: false
              },
              magicType: {
                show: true,
                type: ['line', 'bar']
              },
              restore: {show: true},
              saveAsImage: {show: true}
            },
            iconStyle: {
              color: '#4e92c6'
            },
            emphasis: {
              right: '20%',
              iconStyle: {
                color: '#4e92c6'
              }
            }
          }
        }
      )
    }

  }
</script>

<style scoped>

</style>
