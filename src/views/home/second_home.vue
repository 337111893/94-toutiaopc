<template>
  <!-- 二级路由的默认组件 -->
  <div class="second-home">
    <!-- 幻灯片 -->
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in list" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
    <!-- 放置图表组件 -->
    <!-- ref -->
    <el-row type='flex' justify="space-around">
    <div ref="myChart" class="eharts"></div>
    <div ref="myChart2" class="eharts"></div>
    </el-row>
  </div>
</template>

<script>
// 引入图表模板
// 图表本身是用canvas实现的
import ECharts from 'echarts'
export default {
  mounted () {
    // 进行 echart图表的实例化
    this.myChart = ECharts.init(this.$refs.myChart) // 实例化 得到一个图表的实例化对象
    this.myChart2 = ECharts.init(this.$refs.myChart2) // 实例化 得到一个图表的实例化对象

    // this.myChart就是图表对象
    this.myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    })

    this.myChart2.setOption({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ]
        }
      ]
    })
  },
  data () {
    return {
      list: ['https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2951298517,2642680472&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2554214457,1269801370&fm=11&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1600177256,2461674506&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3893150589,3164340353&fm=26&gp=0.jpg'
      ]
    }
  }
}
</script>

<style lang='less'>
.second-home {
  /* calc 计算的意思 */
  height: calc(100vh - 60px);
  background-size: cover;
  background-image: url("../../assets/img/beijing.jpg");
  img {
    width: 100%;
    height: 100%;
  }
  .eharts {
    width: 600px;
    height: 400px;
    background-color: rosybrown;
  }
}
</style>
