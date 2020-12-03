const drawActiveUsers = function() {
    let ActiveUsersChart = this.$echarts.init(
      document.getElementById("activeusers")
    );
    ActiveUsersChart.setOption({
      title: {
        text: "2012-2016年民航旅客周转量"
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["2012", "2013", "2014", "2015", "2016"]
      },
      yAxis: {
        type: "value"
      },
      color: ["#259b24"],
      series: [
        {
          name: "白天",
          data: [5025.74, 5656.76, 6334.19, 7282.55, 8378.13],
          type: "line",
          areaStyle: {}
        },
      ]
    });
  };
  
  const drawUserNumber = function() {
    let UserNumbershart = this.$echarts.init(
      document.getElementById("usernumbers")
    );
    UserNumbershart.setOption({
      title: {
        text: "2012-2016年民航货邮周转量"
      },
      xAxis: {
        type: "category",
        data: ["2012", "2013", "2014", "2015", "2016", ]
      },
      yAxis: {
        type: "value"
      },
      color: ["#259b24"],
      series: [
        {
          name: "活跃用户",
          data: [163.89, 170.29, 187.77, 208.07, 222.45],
          type: "bar"
        },
      ]
    });
  };
  
  const drawNoteCounts = function() {
    let NoteCounts = this.$echarts.init(document.getElementById("notecounts"));
    NoteCounts.setOption({
      title: {
        text: "2012-2016民航运输总周转量"
      },
      xAxis: {
        type: "category",
        data: ["2012", "2013", "2014", "2015", "2016", ]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [610.3, 671.7, 748.1, 851.7, 962.5],
          type: "line"
        }
      ]
    });
  };
  
  const drawFileCounts = function() {
    let drawFileCounts = this.$echarts.init(
      document.getElementById("filecounts")
    );
    drawFileCounts.setOption({
      title: {
        text: "2012-2016年民航旅客运输量"
      },
      xAxis: {
        type: "category",
        data: ["2012", "2013", "2014", "2015", "2016", ]
      },
      yAxis: {
        type: "value"
      },
      color: ["#434542"],
      series: [
        {
          name: "帖子数量",
          data: [3.19, 3.54, 3.92, 4.36, 4.88],
          type: "bar"
        }
      ]
    });
  };
  
  const drawOpinionCounts = function() {
    let drawOpinionCounts = this.$echarts.init(
      document.getElementById("opinioncounts")
    );
    drawOpinionCounts.setOption({
        title: {
            text: "2016年民航运输机场货邮吞吐量按地区分布"
          },
      
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: "center",
            data: ["东北地区", "西部地区", "中部地区", "东部地区", ]
          },
          series: [
            {
              type: "pie",
              radius: "65%",
              center: ["50%", "50%"],
              selectedMode: "single",
              data: [
                { value: 35, name: "东北地区" },
                { value: 153, name: "西部地区" },
                { value: 63, name: "中部地区" },
                { value: 749, name: "东部地区" }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
            }
          ]
    });
  };
  
  const drawSystemCounts = function() {
    let drawSystemCounts = this.$echarts.init(
      document.getElementById("systemcounts")
    );
    drawSystemCounts.setOption({
      title: {
        text: "2016年民航运输机场旅客吞吐量按地区分布"
      },
  
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: "center",
        data: ["东北地区", "西部地区", "中部地区", "东部地区", ]
      },
      series: [
        {
          type: "pie",
          radius: "65%",
          center: ["50%", "50%"],
          selectedMode: "single",
          data: [
            { value: 61, name: "东北地区" },
            { value: 296, name: "西部地区" },
            { value: 100, name: "中部地区" },
            { value: 542, name: "东部地区" }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    });
  };
  export {
    drawActiveUsers,
    drawUserNumber,
    drawNoteCounts,
    drawFileCounts,
    drawOpinionCounts,
    drawSystemCounts
  };
  