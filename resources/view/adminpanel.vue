<template >
    <layout>
    
            <div class="page-header">
              <h3 class="page-title">
                <span class="page-title-icon bg-gradient-primary text-white me-2">
                  <i class="mdi mdi-home"></i>
                </span> Dashboard
              </h3>
              <nav aria-label="breadcrumb">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page">
                    <span></span>Overview <i class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="row">
              <div class="col-md-5 stretch-card grid-margin">
                <div class="card bg-gradient-info card-img-holder text-white">
                  <div class="card-body m-4 mt-3">
                    <img src="http://localhost/admin/assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image">
                    <h4 class="font-weight-normal mb-3">Weekly Orders <i class="mdi mdi-bookmark-outline mdi-24px float-end"></i>
                    </h4>
                    <h2 class="mb-5">45,6334</h2>
                    <h6 class="card-text ">Decreased by 10%</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-5 stretch-card grid-margin">
                <div class="card bg-gradient-success card-img-holder text-white">
                  <div class="card-body  m-4 mt-3">
                    <img src="http://localhost/admin/assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image">
                    <h4 class="font-weight-normal mb-3">Total Visit Count <i class="mdi mdi-diamond mdi-24px float-end"></i>
                    </h4>
                    <h2 class="mb-5">{{ totalVisitCount }}</h2>
                    <h6 class="card-text mb-5">Increased by 5%</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-4 stretch-card grid-margin">
                
              </div>
            </div>
            <div class="row">
              <!-- <div class="col-md-7 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="clearfix">
                      <h4 class="card-title float-start">Visit And Sales Statistics</h4>
                      <div id="visit-sale-chart-legend" class="rounded-legend legend-horizontal legend-top-right float-end"><ul>
              <li>
                <span style="background-color: rgba(218, 140, 255, 1)"></span>
                CHN
              </li>
            
              <li>
                <span style="background-color: rgba(54, 215, 232, 1)"></span>
                USA
              </li>
            
              <li>
                <span style="background-color: rgba(255, 191, 150, 1)"></span>
                UK
              </li>
            </ul><ul>
              <li>
                <span style="background-color: rgba(218, 140, 255, 1)"></span>
                CHN
              </li>
            
              <li>
                <span style="background-color: rgba(54, 215, 232, 1)"></span>
                USA
              </li>
            
              <li>
                <span style="background-color: rgba(255, 191, 150, 1)"></span>
                UK
              </li>
            </ul><ul>
              <li>
                <span style="background-color: rgba(218, 140, 255, 1)"></span>
                CHN
              </li>
            
              <li>
                <span style="background-color: rgba(54, 215, 232, 1)"></span>
                USA
              </li>
            
              <li>
                <span style="background-color: rgba(255, 191, 150, 1)"></span>
                UK
              </li>
            </ul></div>
                    </div>
                    <canvas id="visit-sale-chart" class="mt-4" width="497" height="248" style="display: block; box-sizing: border-box; height: 248px; width: 497px;"></canvas>
                  </div>
                </div>
              </div> -->
              <div class="col-md-12 grid-margin stretch-card text-center">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Top 3 Visited Products</h4>
                    <div class="doughnutjs-wrapper d-flex justify-content-center">
                      <canvas id="traffic-chart" ref="trafficChartCanvas"  width="450" height="450" ></canvas>
                    </div>
            
                    <div id="traffic-chart-legend" class="rounded-legend legend-vertical legend-bottom-left pt-4">
                      <ul>
                        <li v-for="(product, index) in topVisitedProducts" :key="index" style="margin-top: 5px;">
                          <span style="background-color: rgba(54, 215, 232, 1)"></span>
                           {{ product.productTitle }} {{ product.visitCount }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
    
    </layout>
</template>
<script>
    import layout from '../components/layout.vue';
    import { ref, onMounted } from 'vue';
    export default {
    components:{
        layout,
    },
    name: 'TrafficChart',
    setup() {
      const trafficChartCanvas = ref(null);
      const totalVisitCount = ref(0);
      const topVisitedProducts = ref(0);
      const visitedProduct = ref(0)



      onMounted(() => {
        const storedVisitCount = localStorage.getItem('totalVisitCount');
        const storedVisitedProduct = localStorage.getItem('visitedProduct');
        
        if (storedVisitCount !== null) {
          totalVisitCount.value = parseInt(storedVisitCount, 10);
        }

        if(storedVisitedProduct !== null){
          const visitedProduct = JSON.parse(storedVisitedProduct);

          visitedProduct.sort((a,b) => b.visitCount - a.visitCount);
          topVisitedProducts.value = visitedProduct.slice(0,3);

          console.log("topvisitedproduct",  topVisitedProducts.value );
          
        }

        // Check if Chart.js is loaded
        if (typeof Chart !== 'undefined') {
          renderTrafficChart();
          console.log('Chart.js is loaded!');
        } else {
          console.error('Chart.js is not loaded!');
        }
      });

  

      const renderTrafficChart = () => {
        // Get the canvas element context
        const ctx = trafficChartCanvas.value.getContext('2d');

        // Create a new Chart instance
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: topVisitedProducts.value.map(product => `${product.productTitle} (${product.visitCount})`),
            datasets: [{
              data: topVisitedProducts.value.map(product => product.visitCount),
              backgroundColor: [
              'rgba(54, 215, 232, 1)', // Search Engines
              'rgba(6, 185, 157, 1)',  // Direct Click
              'rgba(254, 112, 150, 1)' // Bookmarks Click
            ],
            hoverBackgroundColor: [
              'rgba(54, 215, 232, 1)',
              'rgba(6, 185, 157, 1)',
              'rgba(254, 112, 150, 1)'
            ],
            borderColor: [
              'rgba(54, 215, 232, 1)',
              'rgba(6, 185, 157, 1)',
              'rgba(254, 112, 150, 1)'
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            
            legend: {
              position: 'bottom',
              
              labels: false
            }
          }
        }
      });
    };

    return {
      trafficChartCanvas,
      visitedProduct,
      totalVisitCount,
      topVisitedProducts,
    };
  }
};
</script>

<style scoped>
/* Custom styling for chart and layout */
#traffic-chart {
  width: 100%;
  height: 250px;
}

     .bg-gradient-primary {
    background: linear-gradient(to right, #378eb1, #033143) !important;
}
</style>