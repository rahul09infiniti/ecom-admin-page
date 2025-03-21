<template>
    <div class="page-header" v-if="$_PORTAL.PAGE != 'landing-page'">
      <h3 class="page-title text-capitalize">{{ $_PORTAL.PAGE }}</h3>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ $_PORTAL.PAGE }}
          </li>
        </ol>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "AccordionHeader",
    props: {
      pageTitle: {
        type: String,
        required: true
      },
      subPageTitle: {
        type: String,
        required: true
      }
    }
  };
  </script>