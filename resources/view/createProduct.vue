<template >
    <layout>
    
            <div class="page-header">
              <h3 class="page-title">
                <span class="page-title-icon bg-gradient-primary text-white me-2">
                    <i class="mdi mdi-crosshairs-gps menu-icon"></i>
                </span>Create Product
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
              <div class="col-md-12 stretch-card grid-margin">
                <div class="card card-img-holder text-black">
                  <div class="card-body mt-0">
                    <form>
                      <div class="">
                        <label for="name" class="col-form-label" >Product Name</label>
                        <input type="text" v-model="enteredFlatName" class="form-control" id="name">

                        <label for="description" class="col-form-label">Description</label>
                        <input type="text" v-model="enteredStreet" class="form-control" id="description">

                        <label for="originalprice" class="col-form-label">Original Price</label>
                        <input type="number" v-model="enteredOriginalPrice" class="form-control" id="originalprice">

                        <label for="discountpercentage" class="col-form-label">Discount Percentage(%)</label>
                        <input type="number" v-model="enteredPercentage" class="form-control" id="discountpercentage">

                        <label for="dsicountedprice" class="col-form-label">Discounted Price</label>
                        <input type="number"  :value="discountedPrice" class="form-control" id="dsicountedprice">

                        <label for="categories" class="col-form-label">Categories</label>
                        <input type="text" v-model="enteredPincode" class="form-control" id="categories">

                        <label for="tags" class="col-form-label">Tags</label>
                        <input type="text" v-model="enteredPincode" class="form-control" id="tags">

                        <label for="tags" class="col-form-label">Quantity</label>
                        <input type="number" v-model="enteredPincode" class="form-control" id="quantity">

                        <label for="categoriestype" class="col-form-label">Categories types</label>
                        <input type="text" v-model="enteredPincode" class="form-control" id="categoriestype">

                       
                      </div>
                      
                    </form>
                    <div class="modal-footer">
                    <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button> -->
                    <button type="button" class="btn btn-primary submitBtn" >Submit</button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        
         
          
    
    </layout>
</template>
<script>
    import layout from '../components/layout.vue';
    import { ref, onMounted, computed } from 'vue';
  
    export default {
    components:{
        layout,
    },
    name: 'TrafficChart',
    setup() {
        const enteredOriginalPrice = ref(null);
        const enteredPercentage = ref(null);

        const discountedPrice = computed(() => {
            if(enteredOriginalPrice.value && enteredPercentage.value ){
                return enteredOriginalPrice.value - (enteredOriginalPrice.value * enteredPercentage.value / 100);
            }
            // return 0;
        })





        return{
            enteredOriginalPrice,enteredPercentage, discountedPrice
        }
    }

};
</script>

<style scoped>
/* Custom styling for chart and layout */
#traffic-chart {
  width: 100%;
  height: 250px;
}
.page-header{
    margin-bottom: 10px !important;
}
.submitBtn{
    margin-top: 10pxs;
    padding: 10px 12px !important;
    font-size: 15px;
    background-color: #04a9f5 !important;
    border: none !important;
}
.modal-footer{
    margin-top: 15px;
}

     .bg-gradient-primary {
    background: linear-gradient(to right, #378eb1, #033143) !important;
}
</style>