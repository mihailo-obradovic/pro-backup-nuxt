<template>
  <v-app>
    <!-- Toolbar at the top of the screen -->
    <v-app-bar color="primary" height="48">
      <!-- Title of the application with adjusted margin and font size -->
      <v-app-bar-title class="text-h6 ms-3">
        <div class="d-flex align-center">
          <span>Pro Backup</span>
        </div>
      </v-app-bar-title>

      <!-- Spacer to push the following elements to the right -->
      <v-spacer />

      <!-- Menu icons on the right side of the toolbar -->
      <v-btn icon="mdi-home-outline" @click="navigateTo('/')" />

      <v-btn icon="mdi-cube-outline" @click="navigateTo('/products')" />

      <v-btn icon="mdi-email-outline" @click="navigateTo('/contact')" />
    </v-app-bar>

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
// No need for drawer state here anymore
</script>
