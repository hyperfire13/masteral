import {Options, Vue} from 'vue-class-component';
import 'admin-lte/plugins/jquery/jquery.min.js';
import $ from 'jquery';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/dist/js/adminlte.js';
import 'admin-lte/plugins/chart.js/Chart.min.js';
// import 'admin-lte/dist/js/demo.js';
// import 'admin-lte/dist/js/pages/dashboard3.js';

@Options({})
export default class Dashboard extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  mounted() {
    //-------------
    // - PIE CHART -
    //-------------
    // Get context with jQuery - using jQuery's .get() method.
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const canvas = <HTMLCanvasElement> document.getElementById('pieChart');
    const pieChartCanvas = canvas.getContext('2d');
    const pieData = {
      labels: ['Needs Improvement', 'Good'],
      datasets: [
        {
          data: [30, 70],
          backgroundColor: ['#f56954', '#00a65a']
        }
      ]
    };
    const pieOptions = {
      legend: {
        display: false
      }
    };
    // Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const pieChart = new Chart(pieChartCanvas, {
      type: 'doughnut',
      data: pieData,
      options: pieOptions
    });

    //-----------------
    // - END PIE CHART -
    //-----------------y

    $(function () {
      'use strict';

      const ticksStyle = {
        fontColor: '#495057',
        fontStyle: 'bold'
      };

      const mode = 'index';
      const intersect = true;

      const $salesChart = $('#sales-chart');
      // eslint-disable-next-line no-unused-vars
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const salesChart = new Chart($salesChart, {
        type: 'bar',
        data: {
          labels: ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets: [
            {
              backgroundColor: '#007bff',
              borderColor: '#007bff',
              data: [1000, 2000, 3000, 2500, 2700, 2500, 3000]
            },
            {
              backgroundColor: '#ced4da',
              borderColor: '#ced4da',
              data: [700, 1700, 2700, 2000, 1800, 1500, 2000]
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            mode: mode,
            intersect: intersect
          },
          hover: {
            mode: mode,
            intersect: intersect
          },
          legend: {
            display: false
          },
          scales: {
            yAxes: [
              {
                // display: false,
                gridLines: {
                  display: true,
                  lineWidth: '4px',
                  color: 'rgba(0, 0, 0, .2)',
                  zeroLineColor: 'transparent'
                },
                ticks: $.extend(
                  {
                    beginAtZero: true,

                    // Include a dollar sign in the ticks
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    callback: function (value) {
                      if (value >= 1000) {
                        value /= 1000;
                        value += 'k';
                      }

                      return '$' + value;
                    }
                  },
                  ticksStyle
                )
              }
            ],
            xAxes: [
              {
                display: true,
                gridLines: {
                  display: false
                },
                ticks: ticksStyle
              }
            ]
          }
        }
      });
    });
  }
  showCompetency() {
    
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    $('#modal-default').modal('show')
    setTimeout(function () {
      $(function () {
        'use strict';
        const ticksStyle = {
          fontColor: '#495057',
          fontStyle: 'bold'
        };

        const mode = 'index';
        const intersect = true;

        const $competencyChart = $('#competency-chart');
        // eslint-disable-next-line no-unused-vars
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const competencyChart = new Chart($competencyChart, {
          type: 'bar',
          data: {
            labels: ['Module 1 (Simple Tenses) 47%', 'Module 2 (Punctation) 88%', 'Module 3 (Vocabulary) 67%'],
            datasets: [
              {
                label: 'Average Percentage',
                backgroundColor: ['#DC3545', '#28A745', '#28A745'],
                borderColor: '#007bff',
                data: [47, 88, 67]
              }
            ]
          },
          options: {
            maintainAspectRatio: false,
            tooltips: {
              mode: mode,
              intersect: intersect
            },
            hover: {
              mode: mode,
              intersect: intersect
            },
            legend: {
              display: false
            },
            scales: {
              yAxes: [
                {
                  // display: false,
                  gridLines: {
                    display: true,
                    lineWidth: '4px',
                    color: 'rgba(0, 0, 0, .2)',
                    zeroLineColor: 'transparent'
                  },
                  ticks: $.extend(
                    {
                      beginAtZero: true,
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      callback: function (value) {
                        return value + '%';
                      }
                    },
                    ticksStyle
                  )
                }
              ],
              xAxes: [
                {
                  display: true,
                  gridLines: {
                    display: false
                  },
                  ticks: ticksStyle
                }
              ]
            }
          }
        });
      });
    }, 2000);
  }
}
