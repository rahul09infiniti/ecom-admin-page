<!--Sidebar.vue -->
<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item nav-profile">
        <a href="#" class="nav-link">
          <div class="nav-profile-image">
            <img
              src="http://localhost/admin/assets/images/faces-clipart/pic-1.png"
              alt="profile"
            />
            <span class="login-status online"></span>
            <!--change to offline or busy as needed-->
          </div>
          <div class="nav-profile-text d-flex flex-column">
            <span class="font-weight-bold mb-2">Bizvibe User</span>
            <span class="text-secondary text-small">Free Tier</span>
          </div>
          <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://localhost/admin/appPages/dashboard/">
          <span class="menu-title">Dashboard</span>
          <i class="mdi mdi-home menu-icon"></i>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-bs-toggle="collapse"
          href="#ui-basic"
          aria-expanded="true"
          aria-controls="ui-basic"
        >
          <span class="menu-title">Products</span>
          <i class="mdi mdi-crosshairs-gps menu-icon"></i>
        </a>
        <div class="collapse show" id="ui-basic" style="">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <a class="nav-link" href="http://localhost/admin/appPages/product"
                >Create Product</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                >View Product</a
              >
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#"
                >Marketplace</a
              >
            </li> -->
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-bs-toggle="collapse"
          href="http://accounts.localhost/app_pages/landing-page/"
          aria-expanded="true"
          aria-controls="ui-basic"
        >
          <span class="menu-title">Settings</span>
          <i class="fa fa-cogs menu-icon"></i>
        </a>
        <div class="collapse" id="ui-basic" style="">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <a class="nav-link" href="#"
                >Account Settings</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                >Plan Details</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="$_PORTAL.DOMAIN+ '/app_pages/upgrade/'"
                >Upgrade</a
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>

</template>

<script>
export default {
  name: "Sidebar",
};
</script>
