(function () {
  'use strict';

  // Handling the chart initialization for visit-sale-chart
  if (document.getElementById("visit-sale-chart")) {
    const ctx = document.getElementById('visit-sale-chart');

    const graphGradient1 = document.getElementById('visit-sale-chart').getContext("2d");
    const graphGradient2 = document.getElementById('visit-sale-chart').getContext("2d");
    const graphGradient3 = document.getElementById('visit-sale-chart').getContext("2d");

    const gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    const gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

    const gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
    const gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

    const gradientStrokeRed = graphGradient3.createLinearGradient(0, 0, 0, 300);
    gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
    gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
    const gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1)"];
    const bgColor3 = ["rgba(255, 191, 150, 1)"];

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
        datasets: [
          {
            label: "CHN",
            borderColor: gradientStrokeViolet,
            backgroundColor: gradientStrokeViolet,
            fillColor: bgColor1,
            hoverBackgroundColor: gradientStrokeViolet,
            pointRadius: 0,
            fill: false,
            borderWidth: 1,
            data: [20, 40, 15, 35, 25, 50, 30, 20],
            barPercentage: 0.5,
            categoryPercentage: 0.5,
          },
          {
            label: "USA",
            borderColor: gradientStrokeRed,
            backgroundColor: gradientStrokeRed,
            hoverBackgroundColor: gradientStrokeRed,
            fillColor: bgColor2,
            pointRadius: 0,
            fill: false,
            borderWidth: 1,
            data: [40, 30, 20, 10, 50, 15, 35, 40],
            barPercentage: 0.5,
            categoryPercentage: 0.5,
          },
          {
            label: "UK",
            borderColor: gradientStrokeBlue,
            backgroundColor: gradientStrokeBlue,
            hoverBackgroundColor: gradientStrokeBlue,
            fillColor: bgColor3,
            pointRadius: 0,
            fill: false,
            borderWidth: 1,
            data: [70, 10, 30, 40, 25, 50, 15, 30],
            barPercentage: 0.5,
            categoryPercentage: 0.5,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: false,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
      plugins: [{
        afterDatasetUpdate: function (chart, args, options) {
          const chartId = chart.canvas.id;
          const legendId = `${chartId}-legend`;
          const ul = document.createElement('ul');
          chart.data.datasets.forEach(dataset => {
            ul.innerHTML += `
              <li>
                <span style="background-color: ${dataset.fillColor}"></span>
                ${dataset.label}
              </li>
            `;
          });
          document.getElementById(legendId).appendChild(ul);
        }
      }]
    });
  }

  // Handling the chart initialization for traffic-chart
  if (document.getElementById("traffic-chart")) {
    const ctx = document.getElementById('traffic-chart');

    const graphGradient1 = document.getElementById("traffic-chart").getContext('2d');
    const graphGradient2 = document.getElementById("traffic-chart").getContext('2d');
    const graphGradient3 = document.getElementById("traffic-chart").getContext('2d');

    const gradientStrokeBlue = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
    const gradientLegendBlue = 'rgba(54, 215, 232, 1)';

    const gradientStrokeRed = graphGradient2.createLinearGradient(0, 0, 0, 50);
    gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
    gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
    const gradientLegendRed = 'rgba(254, 112, 150, 1)';

    const gradientStrokeGreen = graphGradient3.createLinearGradient(0, 0, 0, 300);
    gradientStrokeGreen.addColorStop(0, 'rgba(6, 185, 157, 1)');
    gradientStrokeGreen.addColorStop(1, 'rgba(132, 217, 210, 1)');
    const gradientLegendGreen = 'rgba(6, 185, 157, 1)';

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Search Engines 30%', 'Direct Click 30%', 'Bookmarks Click 40%'],
        datasets: [{
          data: [30, 30, 40],
          backgroundColor: [gradientStrokeBlue, gradientStrokeGreen, gradientStrokeRed],
          hoverBackgroundColor: [
            gradientStrokeBlue,
            gradientStrokeGreen,
            gradientStrokeRed
          ],
          borderColor: [
            gradientStrokeBlue,
            gradientStrokeGreen,
            gradientStrokeRed
          ],
          legendColor: [
            gradientLegendBlue,
            gradientLegendGreen,
            gradientLegendRed
          ]
        }]
      },
      options: {
        cutout: 50,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        responsive: true,
        maintainAspectRatio: true,
        showScale: true,
        plugins: {
          legend: {
            display: false,
          }
        }
      },
      plugins: [{
        afterDatasetUpdate: function (chart, args, options) {
          const chartId = chart.canvas.id;
          const legendId = `${chartId}-legend`;
          const ul = document.createElement('ul');
          chart.data.datasets[0].data.forEach((data, index) => {
            ul.innerHTML += `
                <li>
                  <span style="background-color: ${chart.data.datasets[0].legendColor[index]}"></span>
                  ${chart.data.labels[index]}
                </li>
              `;
          });
          document.getElementById(legendId).appendChild(ul);
        }
      }]
    });
  }

  // Handling the inline datepicker initialization
  // if (document.getElementById("inline-datepicker")) {
  //   const datepicker = document.getElementById('inline-datepicker');
  //   if (datepicker) {
  //     $(datepicker).datepicker({
  //       enableOnReadonly: true,
  //       todayHighlight: true,
  //     });
  //   }
  // }

  // Handling the proBanner visibility logic
  // if (document.cookie.indexOf('purple-pro-banner=true') === -1) {
  //   document.querySelector('#proBanner').classList.add('d-flex');
  //   document.querySelector('.navbar').classList.remove('fixed-top');
  // } else {
  //   document.querySelector('#proBanner').classList.add('d-none');
  //   document.querySelector('.navbar').classList.add('fixed-top');
  // }

  // Handling navbar padding logic based on its fixed position
  // if (document.querySelector(".navbar").classList.contains("fixed-top")) {
  //   document.querySelector('.page-body-wrapper').classList.remove('pt-0');
  //   document.querySelector('.navbar').classList.remove('pt-5');
  // } else {
  //   document.querySelector('.page-body-wrapper').classList.add('pt-0');
  //   document.querySelector('.navbar').classList.add('pt-5');
  //   document.querySelector('.navbar').classList.add('mt-3');
  // }

  // Handling the banner close event
  // document.querySelector('#bannerClose').addEventListener('click', function () {
    // document.querySelector('#proBanner').classList.add('d-none');
    // document.querySelector('#proBanner').classList.remove('d-flex');
    // document.querySelector('.navbar').classList.remove('pt-5');
    // document.querySelector('.navbar').classList.add('fixed-top');
    // document.querySelector('.page-body-wrapper').classList.add('proBanner-padding-top');
    // document.querySelector('.navbar').classList.remove('mt-3');
  //   var date = new Date();
  //   date.setTime(date.getTime() + 24 * 60 * 60 * 1000); // 24 hours from now
  //   document.cookie = 'purple-pro-banner=true;expires=' + date.toUTCString();
  // });
})();
