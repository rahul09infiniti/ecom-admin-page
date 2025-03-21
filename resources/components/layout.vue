<!-- Layout.vue -->
<template>
    <div class="container-scroller">
      <!-- Header -->
      <headerPage/>
  
      <!-- Main Content -->
      <div class="container-fluid page-body-wrapper">
        <!-- Sidebar -->
        <sidebar />
        
        <!-- Content Area (Dynamic content) -->
        <div class="main-panel position-absolute end-0">
            <div class="animated content-wrapper fadeInRight pt-3 px-0">
              <!-- <BreadCrumbs 
                    :pageTitle="'Upgrade Plan'" 
                    :subPageTitle="'Upgrade Plan'" 
                /> -->
               
   
              <slot ></slot> <!-- Default slot for main content -->
            </div>
          <!-- Footer -->
          <footerPage />
        </div>
      </div>
   
    </div>
  </template>


  
  <script>
  import headerPage from './headerPage.vue';
  import sidebar from './sidebar.vue';
  import footerPage from './footerPage.vue';
  // import BreadCrumbs from './BreadCrumbs.vue';
  
  export default {
    name: 'layout',
    components: {
      headerPage,
      sidebar,
      footerPage,
      // BreadCrumbs
    }
  };
  </script>

  <style scoped>
 
  </style>