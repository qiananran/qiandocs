---
title: 生命视觉
---

# 目的

<CopyRight/>

<Badge class="danger">
    helllo worofds
</Badge>

<Contributors/>

<Echarts />

<script setup lang="ts">
import { onMounted, onUnmounted, Ref, ref } from 'vue'
import { ECharts, EChartsOption, init } from 'echarts'

let chart: ECharts;
const chartRef: Ref<HTMLElement | null> = ref(null)
// 初始化图表

const initChart = () => {
  const option: EChartsOption = {
    backgroundColor: 'white',

  title: {
    text: '能力表',
    left: 'center',
    top: 20,
    textStyle: {
      color: '#000'
    }
  },

  tooltip: {
    trigger: 'item'
  },

  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 274, name: 'Union Ads' },
        { value: 235, name: 'Video Ads' },
        { value: 400, name: 'Search Engine' }
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: 'radius',
      label: {
        color: '#000'
      },
      labelLine: {
        lineStyle: {
          color: '#000'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      itemStyle: {
        color: '#c23531',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.05)'
      },

      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
  };
  chart.setOption(option);
}
// 更新图表
const updateChart = () => {
  const option: EChartsOption = {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260]
      }
    ]
  };
  chart.setOption(option);
}
// 声明定时器
let interval: number | null = null;
onMounted(() => {
  chart = init(chartRef.value as HTMLElement)
  initChart()
  // 延时2秒后执行增量更新
  setTimeout(() => {
    updateChart()
  }, 2000)
  // 添加定时器，每隔5秒重新渲染图表
  interval = setInterval(() => {
    chart.clear()
    initChart()
    updateChart()
  }, 50000)
})
// 卸载组件时清除定时器
onUnmounted(() => {
  interval && clearInterval(interval)
})
</script>

  <div class="chart" ref="chartRef"></div>


<style scoped>
.chart {
  width: 370px;
  height: 400px;
}
</style>


