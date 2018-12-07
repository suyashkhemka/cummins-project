
//Zoomable Chart

//$.getJSON(
  //  'https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json',
    //function (data) {

var emissionData=[
	[1167609600000,0.3537],
	[1167696000000,0.3537],
	[1167782400000,0.4559],
	[1167868800000,0.4631],
	[1167955200000,0.4644],
	[1168214400000,	0.5769],
	[1168300800000,0.5683],
	[1168387200000,	0.577],
	[1168473600000,0.4703],
	[1168560000000,0.5757],
	[1168819200000,0.6328],
	[1168905600000,0.7721],
	[1168992000000,0.7748],
	[1169078400000,0.874],
	[1169164800000,0.718],
	[1169424000000,0.6731],
	[1169510400000,0.667],
	[1169596800000,0.769],
	[1169683200000,0.7706],
	[1169769600000,0.7752],
	[1170028800000,0.774],
	[1170115200000,0.671],
	[1170201600000,0.6721],
	[1170288000000,0.6681],
	[1170374400000,0.5681],
	[1170633600000,0.5738],
	[1170720000000,0.572],
	[1170806400000,0.5701],
	[1170892800000,0.6699],
	[1170979200000,0.6689],
	[1171238400000,0.5719],
	[1171324800000,0.568],
	[1171411200000,0.7645],
	[1171497600000,0.7613],
	[1171584000000,0.7624],
	[1171843200000,0.7616],
	[1171929600000,0.7608],
	[1172016000000,0.7608],
	[1172102400000,0.7631],
	[1172188800000,0.7615],
	[1172448000000,0.76],
	[1172534400000,0.556],
	[1172620800000,0.557],
	[1172707200000,0.6562],
	[1172793600000,0.6598],
	[1173052800000,0.6645],
	[1173139200000,0.5635],
	[1173225600000,0.5614],
	[1173312000000,0.5604],
	[1173398400000,0.4603],
	[1173657600000,0.5602],
	[1173744000000,0.5566],
	[1173830400000,0.5587],
	[1173916800000,0.5562],
	[1174003200000,0.4506],
	[1174262400000,0.4518],
	[1174348800000,0.4522],
	[1174435200000,0.3424],
	[1174521600000,0.37491],
	[1174608000000,0.3505],
	[1174867200000,0.254],
	[1174953600000,0.2493],
	[1175040000000,0.2493],
	[1175126400000,0.2491],
	[1175212800000,0.351],
	[1175472000000,0.3483],
	[1175558400000,0.4487],
	[1175644800000,0.3491],
	[1175731200000,0.4479],
	[1175817600000,0.4479],
	[1176076800000,0.4479],
	[1176163200000,0.4449],
	[1176249600000,0.5454],
	[1176336000000,0.5427],
	[1176422400000,0.5391],
	[1176681600000,0.5381],
	[1176768000000,0.6382],
	[1176854400000,0.5366],
	[1176940800000,0.535],
	[1177027200000,0.6351],
	[1177286400000,0.6377],
	[1177372800000,0.6364],
	[1177459200000,0.7328],
	[1177545600000,0.7356],
	[1177632000000,0.8331],
	[1177891200000,0.9351],
	[1177977600000,0.8351],
	[1178064000000,0.836],
	[1178150400000,0.8347],
	[1178236800000,0.7375],
	[1178496000000,0.7346],
	[1178582400000,0.7377],
	[1178668800000,0.6389],
	[1178755200000,0.6394],
	[1178841600000,0.6416],
	[1179100800000,0.5382],
	[1179187200000,0.5388],
	[1179273600000,0.5368],
	[1179360000000,0.44],
	[1179446400000,0.4421],
	[1179705600000,0.4439],
	[1179792000000,0.5434],
	[1179878400000,0.4414],
	[1179964800000,0.3437],
	[1180051200000,0.3441],
	[1180310400000,0.4434],
	[1180396800000,0.540],
	[1180483200000,0.5453],
	[1180569600000,0.5434],
	[1180656000000,0.4444],
	[1180915200000,0.4418],
	[1181001600000,0.4391],
	[1181088000000,0.4401],
	[1181174400000,0.3425],
	[1181260800000,0.349],
	[1181520000000,0.3489],
	[1181606400000,0.4494],
	[1181692800000,0.3527] ];


        Highcharts.chart('zoom', {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Engine Emission rate over time'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },

            xAxis: {
              title:{
                text: 'Time'
              },
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Emission Level'},

                plotLines: [{
                value: .4,
                color: 'green',
                dashStyle: 'shortdash',
                width: 2,
                label: {
                    text: 'Low Emission Level'
                }
              }, {
                value: .6,
                color: 'Yellow',
                dashStyle: 'shortdash',
                width: 2,
                label: {
                    text: 'Medium Emission Level'
                }
            },
            {
              value: .8,
              color: 'Red',
              dashStyle: 'shortdash',
              width: 2,
              label: {
                  text: 'High Emission Level'
              }
          }]
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'Emission',
                data: emissionData
            }]
        });





var ranges = [
        [1246406400000, 14.3, 27.7],
        [1246492800000, 14.5, 27.8],
        [1246579200000, 15.5, 29.6],
        [1246665600000, 16.7, 30.7],
        [1246752000000, 16.5, 25.0],
        [1246838400000, 17.8, 25.7],
        [1246924800000, 13.5, 24.8],
        [1247011200000, 10.5, 21.4],
        [1247097600000, 9.2, 23.8],
        [1247184000000, 11.6, 21.8],
        [1247270400000, 10.7, 23.7],
        [1247356800000, 11.0, 23.3],
        [1247443200000, 11.6, 23.7],
        [1247529600000, 11.8, 20.7],
        [1247616000000, 12.6, 22.4],
        [1247702400000, 13.6, 19.6],
        [1247788800000, 11.4, 22.6],
        [1247875200000, 13.2, 25.0],
        [1247961600000, 14.2, 21.6],
        [1248048000000, 13.1, 17.1],
        [1248134400000, 12.2, 15.5],
        [1248220800000, 12.0, 20.8],
        [1248307200000, 12.0, 17.1],
        [1248393600000, 12.7, 18.3],
        [1248480000000, 12.4, 19.4],
        [1248566400000, 12.6, 19.9],
        [1248652800000, 11.9, 20.2],
        [1248739200000, 11.0, 19.3],
        [1248825600000, 10.8, 17.8],
        [1248912000000, 11.8, 18.5],
        [1248998400000, 10.8, 16.1]
    ],
    averages = [
        [1246406400000, 21.5],
        [1246492800000, 22.1],
        [1246579200000, 23],
        [1246665600000, 23.8],
        [1246752000000, 21.4],
        [1246838400000, 21.3],
        [1246924800000, 18.3],
        [1247011200000, 15.4],
        [1247097600000, 16.4],
        [1247184000000, 17.7],
        [1247270400000, 28],
        [1247356800000, 30],
        [1247443200000, 35],
        [1247529600000, 32],
        [1247616000000, 28],
        [1247702400000, 20],
        [1247788800000, 17.8],
        [1247875200000, 18.1],
        [1247961600000, 17.2],
        [1248048000000, 14.4],
        [1248134400000, 13.7],
        [1248220800000, 15.7],
        [1248307200000, 14.6],
        [1248393600000, 15.3],
        [1248480000000, 12],
        [1248566400000, 11],
        [1248652800000, 7],
        [1248739200000, 2],
        [1248825600000, 4],
        [1248912000000, 9],
        [1248998400000, 13.6]
    ];


Highcharts.chart('range', {

    title: {
        text: 'Total Emission'
    },

    xAxis: {
        type: 'datetime'
    },

    yAxis: {
        title: {
            text: null
        }
    },

    tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: 'g/mi'
    },

    legend: {
    },

    series: [{
        name: 'Engine 1 Emission Level',
        data: averages,
        zIndex: 1,
        marker: {
            fillColor: 'white',
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[0]
        }
    }, {
        name: 'Range',
        data: ranges,
        type: 'arearange',
        lineWidth: 0,
        linkedTo: ':previous',
        color: Highcharts.getOptions().colors[0],
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
            enabled: false
        }
    }]
});


Highcharts.chart('emission', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Engine total emission vs. Industry Average'
    },
    subtitle: {
        text: 'Truck Engine'
    },
    xAxis: {
      title: { text:'Days'},
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        title: {
            text: 'Emission'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'g/mi';
            }
        },
        plotLines: [{
        value: 15000,
        color: 'green',
        dashStyle: 'shortdash',
        width: 2,
        label: {text: 'Low Emission Level'}
      }, {
        value: 25000,
        color: 'Yellow',
        dashStyle: 'shortdash',
        width: 2,
        label: {text: 'Medium Emission Level'}
    },
    {
      value: 35000,
      color: 'Red',
      dashStyle: 'shortdash',
      width: 2,
      label: {text: 'High Emission Level'}
    }]
    },
    tooltip: {
        pointFormat: '{series.name} had emission levels of <b>{point.y:,.0f}</b><br/> on day {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 12,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {enabled: true}
                }
            }
        }
    },
    series: [{
        name: 'Engine 1 - CO',
        data: [
            null, null, null, null, null, 6, 11, 32, 110, 235,
            369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
            20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
            26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
            21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
            10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
            5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
        ]
    }, {
        name: 'Optimal performance - CO',
        data: [null, null, null, null, null, null, null, null, null, null,
            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
            1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
            11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
            30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
            37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
            21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
            12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500,1500,2500, 35000,34000,39000,50000,30000,1500,2500, 35000,34000,39000,50000,30000
        ]}
      ]

});


// ------ O2  Emission ----------

Highcharts.chart('O2', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'O2 emission level vs. Industry Average'
    },
    subtitle: {
        text: 'Truck Engine'
    },
    xAxis: {
      title: { text:'Days'},
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        title: {
            text: 'Emission'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'g/mi';
            }
        },
        plotLines: [{
        value: 15000,
        color: 'green',
        dashStyle: 'shortdash',
        width: 2,
        label: {text: 'Low Emission Level'}
      }, {
        value: 25000,
        color: 'Yellow',
        dashStyle: 'shortdash',
        width: 2,
        label: {text: 'Medium Emission Level'}
    },
    {
      value: 35000,
      color: 'Red',
      dashStyle: 'shortdash',
      width: 2,
      label: {text: 'High Emission Level'}
    }]
    },
    tooltip: {
        pointFormat: '{series.name} had emission O2 levels of <b>{point.y:,.0f}</b><br/> on day {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 12,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {enabled: true}
                }
            }
        }
    },
    series: [{
        name: 'Engine 1 - 02',
        data: [
            null, null, null, null, null, 6, 11, 32, 110, 235,
            369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
            20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
            26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
            21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
            10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
            5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
        ]
    }, {
        name: 'Optimal performance - O2',
        data: [null, null, null, null, null, null, null, null, null, null,
            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
            1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
            11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
            30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
            37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
            21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
            12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500,1500,2500, 35000,34000,39000,50000,30000,1500,2500, 35000,34000,39000,50000,30000
        ]}
      ]

});

// ------ co  Emission ----------

Highcharts.chart('CO', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Engine CO emission vs. Industry Average'
    },
    subtitle: {
        text: 'Truck Engine'
    },
    xAxis: {
      title: { text:'Days'},
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        title: {
            text: 'Emission'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'g/mi';
            }
        },
        plotLines: [{
        value: 15000,
        color: 'green',
        dashStyle: 'shortdash',
        width: 2,
        label: {text: 'Low Emission Level'}
      }, {
        value: 25000,
        color: 'Yellow',
        dashStyle: 'shortdash',
        width: 2,
        label: {text: 'Medium Emission Level'}
    },
    {
      value: 35000,
      color: 'Red',
      dashStyle: 'shortdash',
      width: 2,
      label: {text: 'High Emission Level'}
    }]
    },
    tooltip: {
        pointFormat: '{series.name} had CO emission levels of <b>{point.y:,.0f}</b><br/> on day {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 12,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {enabled: true}
                }
            }
        }
    },
    series: [{
        name: 'Engine 1 - CO',
        data: [
            null, null, null, null, null, 6, 11, 32, 110, 235,
            369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
            20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
            26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
            21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
            10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
            5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
        ]
    }, {
        name: 'Optimal performance - CO',
        data: [null, null, null, null, null, null, null, null, null, null,
            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
            1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
            11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
            30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
            37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
            21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
            12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500,1500,2500, 35000,34000,39000,50000,30000,1500,2500, 35000,34000,39000,50000,30000
        ]}
      ]

});


// ------ no  Emission ----------

Highcharts.chart('NO', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Engine NO emission vs. Industry Average'
    },
    subtitle: {
        text: 'Truck Engine'
    },
    xAxis: {
      title: { text:'Days'},
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        title: {
            text: 'Emission'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'g/mi';
            }
        },
        plotLines: [{
        value: 15000,
        color: 'green',
        dashStyle: 'shortdash',
        width: 2,
        label: {text: 'Low Emission Level'}
      }, {
        value: 25000,
        color: 'Yellow',
        dashStyle: 'shortdash',
        width: 2,
        label: {text: 'Medium Emission Level'}
    },
    {
      value: 35000,
      color: 'Red',
      dashStyle: 'shortdash',
      width: 2,
      label: {text: 'High Emission Level'}
    }]
    },
    tooltip: {
        pointFormat: '{series.name} had NO emission levels of <b>{point.y:,.0f}</b><br/> on day {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 12,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {enabled: true}
                }
            }
        }
    },
    series: [{
        name: 'Engine 1 - NO',
        data: [
            null, null, null, null, null, 6, 11, 32, 110, 235,
            369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
            20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
            26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
            21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
            10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
            5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
        ]
    }, {
        name: 'Optimal performance - NO',
        data: [null, null, null, null, null, null, null, null, null, null,
            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
            1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
            11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
            30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
            37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
            21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
            12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500,1500,2500, 35000,34000,39000,50000,30000,1500,2500, 35000,34000,39000,50000,30000
        ]}
      ]

});

// ------ so2  Emission ----------

Highcharts.chart('SO2', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Engine SO2 emission vs. Industry Average'
    },
    subtitle: {
        text: 'Truck Engine'
    },
    xAxis: {
      title: { text:'Days'},
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        title: {
            text: 'Emission'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'g/mi';
            }
        },
        plotLines: [{
        value: 15000,
        color: 'green',
        dashStyle: 'shortdash',
        width: 2,
        label: {text: 'Low Emission Level'}
      }, {
        value: 25000,
        color: 'Yellow',
        dashStyle: 'shortdash',
        width: 2,
        label: {text: 'Medium Emission Level'}
    },
    {
      value: 35000,
      color: 'Red',
      dashStyle: 'shortdash',
      width: 2,
      label: {text: 'High Emission Level'}
    }]
    },
    tooltip: {
        pointFormat: '{series.name} had SO2emission levels of <b>{point.y:,.0f}</b><br/> on day {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 12,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {enabled: true}
                }
            }
        }
    },
    series: [{
        name: 'Engine 1 - SO2',
        data: [
            null, null, null, null, null, 6, 11, 32, 110, 235,
            369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
            20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
            26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
            21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
            10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
            5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
        ]
    }, {
        name: 'Optimal performance - SO2',
        data: [null, null, null, null, null, null, null, null, null, null,
            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
            1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
            11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
            30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
            37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
            21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
            12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500,1500,2500, 35000,34000,39000,50000,30000,1500,2500, 35000,34000,39000,50000,30000
        ]}
      ]

});

// ------ co2  Emission ----------

Highcharts.chart('CO2', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Engine CO2 emission vs. Industry Average'
    },
    subtitle: {
        text: 'Truck Engine'
    },
    xAxis: {
      title: { text:'Days'},
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        title: {text: 'Emission'},
        labels: {
            formatter: function () {return this.value / 1000 + 'g/mi';}
        },

        plotLines: [{
        value: 15000,
        color: 'green',
        dashStyle: 'shortdash',
        width: 2,
        label: {text: 'Low Emission Level'}
      }, {
        value: 25000,
        color: 'Yellow',
        dashStyle: 'shortdash',
        width: 2,
        label: {text: 'Medium Emission Level'}
    },
    {
      value: 35000,
      color: 'Red',
      dashStyle: 'shortdash',
      width: 2,
      label: {text: 'High Emission Level'}
    }]}
  ,

    tooltip: {
        pointFormat: '{series.name} had CO2 emission levels of <b>{point.y:,.0f}</b><br/> on day {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 12,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {enabled: true}
                }
            }
        }
    },
    series: [{
        name: 'Engine 1 - CO2',
        data: [
            30000, 23530, 26460, 26430, 29803, 28630, 32011, 32202, 31100, 32035,
            35069, 30640, 40005, 43036, 20603, 30057, 46108, 64404, 9822, 15468,
            20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
            26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22800,
            21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 18204,
            10577, 10527, 10475, 10421, 10358, 10295, 34104, 9914, 9620, 9326,
            51013, 50113, 49054, 40804, 47061, 47017, 43608, 40108,46373, 42132,32739,32432,
            23708, 24099, 24357, 24237, 24401, 24344, 23586, 33432, 47584, 59303
        ]
    }, {
        name: 'Optimal performance - CO2',
        data: []
      }
      ]

});
