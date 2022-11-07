<!--html-->
<template>
  <div class="Partone_03">
    <div class="common-layout">
      <div class="header">
        <h1>新能源汽车充电桩现状 </h1>
      </div>
      <div class="MapBox">
      <div class="Aside"></div>
      <div class="Main">
        <div id="mainMap" style="height: 100%; width: 100%;"></div>
      </div>
      </div>
    </div>
  </div>
</template>

<!--JavaScript-->
<script>
import * as echarts from 'echarts';
// 请确保在引入百度地图扩展之前已经引入百度地图 JS API 脚本并成功加载
// https://api.map.baidu.com/api?v=3.0&ak=你申请的AK
import 'echarts/extension/bmap/bmap';
$(document).ready(function(){

  var chartDom = document.getElementById('mainMap');
  var myChart = echarts.init(chartDom);
  var option;

  const data = [
    { name: '廊坊', value: 193 },
    { name: '菏泽', value: 194 },
    { name: '合肥', value: 229 },
    { name: '武汉', value: 273 },
    { name: '大庆', value: 279 }
  ];
  const geoCoordMap = {

    廊坊: [116.7, 39.53],
    菏泽: [115.480656, 35.23375],
    合肥: [117.27, 31.86],
    武汉: [114.31, 30.52],
    大庆: [125.03, 46.58]
  };
  const convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        });
      }
    }
    return res;
  };
  option = {
    title: {
      text: '全国各省份充电桩数量分布图',
      subtext: 'data from PM25.in',
      sublink: 'http://www.pm25.in',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    bmap: {
      center: [104.114129, 37.550339],
      zoom: 5,
      roam: true,
      mapStyle: {
        styleJson: [
          {
            featureType: 'water',
            elementType: 'all',
            stylers: {
              color: '#d1d1d1'
            }
          },
          {
            featureType: 'land',
            elementType: 'all',
            stylers: {
              color: '#f3f3f3'
            }
          },
          {
            featureType: 'railway',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'highway',
            elementType: 'all',
            stylers: {
              color: '#fdfdfd'
            }
          },
          {
            featureType: 'highway',
            elementType: 'labels',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'arterial',
            elementType: 'geometry',
            stylers: {
              color: '#fefefe'
            }
          },
          {
            featureType: 'arterial',
            elementType: 'geometry.fill',
            stylers: {
              color: '#fefefe'
            }
          },
          {
            featureType: 'poi',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'green',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'subway',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'manmade',
            elementType: 'all',
            stylers: {
              color: '#d1d1d1'
            }
          },
          {
            featureType: 'local',
            elementType: 'all',
            stylers: {
              color: '#d1d1d1'
            }
          },
          {
            featureType: 'arterial',
            elementType: 'labels',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'boundary',
            elementType: 'all',
            stylers: {
              color: '#fefefe'
            }
          },
          {
            featureType: 'building',
            elementType: 'all',
            stylers: {
              color: '#d1d1d1'
            }
          },
          {
            featureType: 'label',
            elementType: 'labels.text.fill',
            stylers: {
              color: '#999999'
            }
          }
        ]
      }
    },
    series: [
      {
        name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'bmap',
        data: convertData(data),
        symbolSize: function (val) {
          return val[2] / 10;
        },
        encode: {
          value: 2
        },
        label: {
          formatter: '{b}',
          position: 'right',
          show: false
        },
        emphasis: {
          label: {
            show: true
          }
        }
      },
      {
        name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        data: convertData(
            data
                .sort(function (a, b) {
                  return b.value - a.value;
                })
                .slice(0, 6)
        ),
        symbolSize: function (val) {
          return val[2] / 10;
        },
        encode: {
          value: 2
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          formatter: '{b}',
          position: 'right',
          show: true
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: '#333'
        },
        emphasis: {
          scale: true
        },
        zlevel: 1
      }
    ]
  };

  option && myChart.setOption(option);
});

</script>

<!--css-->
<style>
.Partone_03 {
  width: 100%;
  height: 100%;
}
.common-layout{
  width: auto;
  height: 100%;
  color: black;

}
.header{
  position: relative;
  /*border: 1px solid #262626;*/
  width: 1200px;
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  /*text-shadow: 8px 4px 4px black;*/

}
.header h1{
  top: 5vh;
  font-size: 50px;
  font-weight: bold;
  font-family: PingFang_font;
  margin: 10px;
}
.Aside{
  /* position: absolute; */
  width: 30vw ;
  height: 70%;
  border-radius: 30px;
  border: 1px solid gray;
  /* margin: 80px 0 30px 0; */
  /* left: 150px; */
  background:linear-gradient( to top,lightgreen,lightseagreen,#00c380);
  z-index: 1;
  -webkit-flex: 1;
  flex: 1;
  margin-inline: 30px;
  margin-top:15vh;
  left: 6vw;
}
.Main{
  /* position: absolute; */
  width: 60%;
  height: 70%;
  border-radius: 30px;
  /*border: 1px solid #262626;*/
  /* margin: 80px 0 30px 0; */
  margin-top:15vh;
  /* right: 150px; */
  background: #00FFFF;
  z-index: 0;
  overflow: hidden;
  box-shadow: 8px 4px 20px black;
  -webkit-flex: 2;
  flex: 2;
  margin-inline: 30px;
  left: 6vw;
}
.MapBox{
  display:flex;
  display: -webkit-flex;
  width: 90vw;
  height: 90vh;
  justify-content: center;
  /* width: 45%;
  -webkit-flex: 1;
  flex: 1;
  margin-inline: 10px; */
}
</style>