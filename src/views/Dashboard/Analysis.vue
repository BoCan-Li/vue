<template>
  <div>
    <Chart :option="option" />
  </div>
</template>

<script>
import request from "@/utils/request";
import Chart from "@/components/Chart";
export default {
  components: {
    Chart
  },
  data() {
    return {
      chartOption: {}
    };
  },
  computed: {
    option() {
      console.log(this.chartOption);
      return this.chartOption;
    }
  },
  methods: {
    async getChartData() {
      const res = await request("/api/dashboard/data", "get", { id: "123" });
      this.chartOption = {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: res.data || []
          }
        ]
      };
    }
  },
  mounted() {
    this.getChartData();
    // this.interval = setInterval(() => {
    //   this.getChartData();
    // }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style lang="less" scoped></style>
