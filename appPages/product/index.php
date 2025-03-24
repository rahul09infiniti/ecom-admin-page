<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Product form</title>


    <link rel="stylesheet" href="../../assets/vendors/mdi/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="../../resources/esmodules/v-calendar/es/style.css"/>
    <link rel="stylesheet" href="../../assets/vendors/ti-icons/css/themify-icons.css">
    <link rel="stylesheet" href="../../assets/vendors/css/vendor.bundle.base.css">
    <link rel="stylesheet" href="../../assets/vendors/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="../../resources/style/style.css">
    <link rel="stylesheet" href="../../assets/css/maps/style.css.map">
    <link rel="shortcut icon" href="../../assets/images/favicon.png" />

    
</head>
<body>
    <div id="app" >
        <!-- <admin-panel></admin-panel> -->
        
         <create-product></create-product>
    </div>


    <script src="../../assets/vendors/js/vendor.bundle.base.js"></script>

    <!-- endinject -->
    <!-- Plugin js for this page -->
    <!-- End plugin js for this page -->
    <!-- inject:js -->
    <script src="../../assets/vendors/chart.js/chart.umd.js"></script>
    <script src="../../resources/js/off-canvas.js"></script>
    <script src="../../resources/js/misc.js"></script>
    <script src="../../resources/js/settings.js"></script>
    <!-- <script src="../../resources/js/select2.js"></script> -->
    <!-- <script src="../../resources/js/jquery-file-upload.js"></script> -->
    <!-- <script src="../../resources/js/jquery.cookie.js"></script> -->
    <!-- <script src="../../resources/js/file-upload.js"></script> -->
    <!-- <script src="../../resources/js/dashboard.js"></script> -->
    <!-- <script src="../../resources/js/dashboard-dark.js"></script> -->
    <!-- <script src="../../resources/js/typeahead.js"></script> -->
    <!-- <script src="../../resources/js/todolist.js"></script> -->
    <!-- <script src="../../resources/js/chart.js"></script>
     -->
    <script type="importmap">
    {
        "imports": {
            "vue": "../../resources/js/vue.3.4.31.esm-browser.js",
            "axios" : "../../resources/esmodules/axios/axios.min.js"
            
        }
    }
  </script>
  <script type="module">
      import { createApp, defineAsyncComponent } from '../../resources/js/vue.3.4.31.esm-browser.js';
      import * as Vue from '../../resources/js/vue.3.4.31.esm-browser.js';
      import { loadModule, version } from '../../resources/js/vue3-sfc-loader.0.9.5.esm.js'

      const options = {
          moduleCache: {
              vue: Vue,              
          },
          async getFile(url) {
              const res = await fetch(url);
              if ( !res.ok )
                  throw Object.assign(new Error(url+' '+res.statusText), { res });
              return await res.text(); 
          },
          addStyle(styleStr) {
              const style = document.createElement('style');
              style.textContent = styleStr;
              const ref = document.head.getElementsByTagName('style')[0] || null;
              document.head.insertBefore(style, ref);
          },
          log(type, ...args) {
              console.log(type, ...args);
          },
          handleModule(type, source, path, options) {                  
              if ( type === '.json' )
                  return JSON.parse(source);
          }
      }

      const App =createApp( {
        components: {
            "create-product":defineAsyncComponent(()=>loadModule('../../resources/view/createProduct.vue',options)),
            
            
            // "HeaderPage": defineAsyncComponent(() => loadModule('./components/header/HeaderPage.vue', options)),
            // "Dashboard": defineAsyncComponent(() => loadModule('./components/pages/Dashboard.vue', options)),
        },
      }
      );
    //   App.component('Calendar', Calendar);

    //   App.component('DatePicker', DatePicker)


      App.mount('#app');
  </script>

</body>
</html>