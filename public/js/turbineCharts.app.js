var TurbineTimeSeriesApp = new Vue({
  el: '#chartsMain',
  data: {
    sensorTimeSeriesList: {},
    sensorTimeSeriesArray: [ ]
  },
  computed: {},
  /* CODE HELP FROM IN-CLASS WORK*/
  methods: {
/*  buildOutputChart(){
Highcharts.chart('outputKPI', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Snow depth at Vikjafjellet, Norway'
    },
    subtitle: {
        text: 'Irregular time data in Highcharts JS'
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'Snow depth (m)'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
    },
    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },
    colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
    // Define the data points. All series have a dummy year
    // of 1970/71 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    series: [{
        name: "Winter 2014-2015",
        data: this.sensorTimeSeriesArray.map( item => [item.dataCollectedDate, item.output])
    }]
});
}*/

    buildOutputChart(){
      Highcharts.chart('outputKPI', {
            title: {
                text: 'Daily Output'
            },
            xAxis: {
                type: 'Days'
            },
            yAxis: {
                title: {
                    text: 'Output'
                }
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
                name: 'Daily Output for Sensor',
                data: this.sensorTimeSeriesArray.map( item => [item.dataCollectedDate, item.output])
            }]
        });
    },

  /*  buildOutputChart2 () {
      Highcharts.chart('outputKPI2', {
            title: {
                text: 'Daily Heat Rate'
            },
            xAxis: {
                type: 'Days'
            },
            yAxis: {
                title: {
                    text: 'Heat Rate'
                }
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
                name: 'Heat Rate Sensor',
                data: this.sensorTimeSeriesArray.map( item => [item.dataCollectedDate, item.heartRate])
            }]
        });
    },*/
    buildOutputChart2 () {
      Highcharts.chart('outputKPI2', {
  chart: {
      type: 'scatter',
      zoomType: 'xy'
  },
  title: {
      text: 'Output Vs. Heat Rate'
  },
  subtitle: {
      text: ''
  },
  xAxis: {
      title: {
          enabled: true,
          text: 'Output'
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
  },
  yAxis: {
      title: {
          text: 'Heat Rate'
      }
  },
  legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 100,
      y: 70,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
      borderWidth: 1
  },
  plotOptions: {
      scatter: {
          marker: {
              radius: 5,
              states: {
                  hover: {
                      enabled: true,
                      lineColor: 'rgb(100,100,100)'
                  }
              }
          },
          states: {
              hover: {
                  marker: {
                      enabled: false
                  }
              }
          },
          tooltip: {
              headerFormat: '<b>{series.name}</b><br>',
              pointFormat: '{point.x} cm, {point.y} kg'
          }
      }
  },
  series: [{
      name: 'Output',
      color: 'rgba(223, 83, 83, .5)',
      data: this.sensorTimeSeriesArray.map( item => [item.output, item.heartRate])

  }]
});
},
    buildOutputChart3 () {
      Highcharts.chart('outputKPI3', {
            title: {
                text: 'Daily Compressor Efficiency'
            },
            xAxis: {
                type: 'Days'
            },
            yAxis: {
                title: {
                    text: 'Efficiency'
                }
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
                name: 'Compressor Efficiency Sensor',
                data: this.sensorTimeSeriesArray.map( item => [item.dataCollectedDate, item.compressorEfficiency])
            }]
        });
    },

    buildOutputChart4 () {
      Highcharts.chart('outputKPI4', {
            title: {
                text: 'Daily Availability'
            },
            xAxis: {
                type: 'Days'
            },
            yAxis: {
                title: {
                    text: 'Availability'
                }
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
                name: 'Availability Sensor',
                data: this.sensorTimeSeriesArray.map( item => [item.dataCollectedDate, item.availability])
            }]
        });
    },

    buildOutputChart5 () {
      Highcharts.chart('outputKPI5', {
            title: {
                text: 'Reliability'
            },
            xAxis: {
                type: 'Days'
            },
            yAxis: {
                title: {
                    text: 'Reliability'
                }
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
                name: 'Reliability Sensor',
                data: this.sensorTimeSeriesArray.map( item => [item.dataCollectedDate, item.reliability])
            }]
        });
    },

    buildOutputChart6 () {
      Highcharts.chart('outputKPI6', {
            title: {
                text: 'Fired Hours'
            },
            xAxis: {
                type: 'Days'
            },
            yAxis: {
                title: {
                    text: 'Fired Hours'
                }
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
                name: 'Fired Hours Sensor',
                data: this.sensorTimeSeriesArray.map( item => [item.dataCollectedDate, item.firedHours])
            }]
        });
    },

    buildOutputChart7 () {
      Highcharts.chart('outputKPI7', {
            title: {
                text: 'Trips'
            },
            xAxis: {
                type: 'Days'
            },
            yAxis: {
                title: {
                    text: 'Trips'
                }
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
                name: 'Trips Sensor',
                data: this.sensorTimeSeriesArray.map( item => [item.dataCollectedDate, item.trips])
            }]
        });
    },

    buildOutputChart8 () {
      Highcharts.chart('outputKPI8', {
            title: {
                text: 'Starts'
            },
            xAxis: {
                type: 'Days'
            },
            yAxis: {
                title: {
                    text: 'Starts'
                }
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
                name: 'Starts Sensor',
                data: this.sensorTimeSeriesArray.map( item => [item.dataCollectedDate, item.starts])
            }]
        });
    },
  },

  created() {
    // Do data fetch
    const url = new URL(window.location.href);
    const turbineId = url.searchParams.get('turbineId');
    console.log('turbineId: ' + turbineId);
    this.turbineId = turbineId;

    if (!turbineId) {
      //TODO: Error? 404?
      //e.g., window.location = '404.html';
    }

    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('api/sensorTimeSeries.php?turbineId=' + turbineId)
      .then(response => response.json())
      .then(json => {
        TurbineTimeSeriesApp.sensorTimeSeriesArray = json;
        this.buildOutputChart();
        this.buildOutputChart2();
        this.buildOutputChart3();
        this.buildOutputChart4();
        this.buildOutputChart5();
        this.buildOutputChart6();
        this.buildOutputChart7();
        this.buildOutputChart8()})
      .catch(err => {
        console.log('TURBINES FETCH ERROR:');

        console.log({ err });
      })

    // fetch('api/turbineTimeSeries.php')
    //   .then(response => response.json())
    //   .then(json => { TurbineTimeSeriesApp.sensorTimeSeriesList = json })
    //   .catch(err => {
    //     console.log('SENSOR TIME SERIES DATA FETCH ERROR:');
    //     console.log(err);
    //   })
  }

})
