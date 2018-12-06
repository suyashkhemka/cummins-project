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
        }
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
        }
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
        }
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
        }
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
        }
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
        title: {
            text: 'Emission'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'g/mi';
            }
        }
    },
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
        name: 'Optimal performance - CO2',
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
