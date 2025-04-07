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
    <v-navigation-drawer v-model="drawer" width="300">
      <v-list density="compact">
        <v-list-item title="All Backups" prepend-icon="mdi-database-outline" />

        <v-list-group value="workspace1">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Workspace 1"
              prepend-icon="mdi-folder-outline"
            />
          </template>
        </v-list-group>

        <v-list-group value="workspace2">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Workspace 2"
              prepend-icon="mdi-folder-outline"
            />
          </template>

          <v-list-group value="teamA">
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Team A"
                prepend-icon="mdi-account-group-outline"
              />
            </template>

            <v-list-item
              title="Project 1"
              prepend-icon="mdi-file-document-outline"
              class="pl-4"
            />

            <v-list-item
              title="Project 2"
              prepend-icon="mdi-file-document-outline"
              class="pl-4"
            />
          </v-list-group>

          <v-list-group value="teamB">
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Team B"
                prepend-icon="mdi-account-group-outline"
              />
            </template>

            <v-list-item
              title="Project X"
              prepend-icon="mdi-file-document-outline"
              class="pl-4"
            />
          </v-list-group>
        </v-list-group>

        <v-list-group value="workspace3">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Workspace 3"
              prepend-icon="mdi-folder-outline"
            />
          </template>
        </v-list-group>

        <v-divider class="my-3" />

        <!-- Original menu items -->
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
const drawer = shallowRef(true);
</script>
