<template>
  <v-app>
    <!-- Toolbar at the top of the screen -->
    <v-app-bar color="primary" height="48">
      <!-- Title of the application with adjusted margin and font size -->
      <v-app-bar-title class="text-h6 ms-3">
        <div class="d-flex align-center">
          <v-icon icon="mdi-menu" @click="drawer = !drawer" />

          <span class="ms-1">Pro Backup</span>
        </div>
      </v-app-bar-title>

      <!-- Spacer to push the following elements to the right -->
      <v-spacer />

      <!-- Menu icons on the right side of the toolbar -->
      <v-btn icon="mdi-home-outline" @click="navigateTo('/')" />

      <v-btn icon="mdi-cube-outline" @click="navigateTo('/products')" />

      <v-btn icon="mdi-email-outline" @click="navigateTo('/contact')" />
    </v-app-bar>

    <!-- Navigation drawer for menu actions -->
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <!-- Menu items in the drawer with icons -->
        <v-list-item
          title="Home"
          prepend-icon="mdi-home-outline"
          @click="navigateTo('/')"
        />

        <v-list-item
          title="Products"
          prepend-icon="mdi-cube-outline"
          @click="navigateTo('/products')"
        />

        <v-list-item
          title="Contact"
          prepend-icon="mdi-email-outline"
          @click="navigateTo('/contact')"
        />
      </v-list>
    </v-navigation-drawer>

    <!-- Main content of the application -->
    <v-main>
      <NuxtPage />
    </v-main>

    <!-- Smaller footer at the bottom of the screen -->
    <v-footer app color="secondary" height="30">
      <v-container class="text-caption text-center">
        © {{ new Date().getFullYear() }} My Application - All Rights Reserved
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
// Drawer state to open/close the navigation drawer
const drawer = shallowRef(false);
</script>
