
$(window).on('load', function () {
        let $supportTrackerChart = document.querySelector('#ticket_moyen');
        let supportTrackerChartOptions;
        supportTrackerChartOptions = {
            chart: {
                height: 270,
                type: 'radialBar'
            },
            plotOptions: {
                radialBar: {
                    size: 150,
                    offsetY: 20,
                    startAngle: -150,
                    endAngle: 150,
                    hollow: {
                    size: '65%'
                    },
                    track: {
                    background: "#fff",
                    strokeWidth: '100%'
                    },
                    dataLabels: {
                    name: {
                        offsetY: -5,
                        color: "#5e5873",
                        fontSize: '1rem'
                        },
                    value: {
                        offsetY: 15,
                        color: "#5e5873",
                        fontSize: '1.714rem'
                        }
                    }
                }
            },
            colors: [window.colors.solid.danger],
                fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: [window.colors.solid.primary],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                    }
                },
                stroke: {
                    dashArray: 8
                },
                series: [83],
                labels: ['Ticket Moyen']
            };
            supportTrackerChart = new ApexCharts($supportTrackerChart, supportTrackerChartOptions);
            supportTrackerChart.render();
})
