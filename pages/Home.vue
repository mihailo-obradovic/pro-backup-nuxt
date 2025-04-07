<template>
  <div class="d-flex flex-column">
    <div class="pa-4">
      <span class="text-h6">AirTable</span>
    </div>

    <v-container class="fill-height d-flex flex-column ga-4" fluid>
      <v-card class="flex-grow-0 w-100">
        <v-row no-gutters align="center" class="px-1">
          <v-col cols="6" md="8" lg="9" class="tab-container pe-1">
            <v-tabs
              v-model="activeTab"
              bg-color="background"
              align-tabs="start"
              show-arrows
            >
              <v-tab
                v-for="tab in tabs"
                :key="tab.name"
                :prepend-icon="tab.icon"
              >
                {{ tab.name.charAt(0).toUpperCase() + tab.name.slice(1) }}
              </v-tab>
            </v-tabs>
          </v-col>

          <v-col cols="6" md="4" lg="3" class="ps-1 d-flex ga-2">
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              density="compact"
              variant="outlined"
            />

            <v-btn variant="outlined" height="40">
              <div class="d-flex ga-2">
                Filter
                <v-icon>mdi-filter-outline</v-icon>
              </div>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>

      <div class="d-flex flex-grow-1 w-100 ga-4">
        <!-- Sidebar -->
        <v-card class="sidebar-card" width="300">
          <v-list density="compact">
            <v-list-item
              title="All Backups"
              prepend-icon="mdi-database-outline"
            />

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
        </v-card>

        <!-- Content -->
        <v-card class="flex-grow-1 d-flex flex-column overflow-hidden">
          <v-data-table
            :headers="headers"
            :items="records"
            :items-per-page="20"
            :search="search"
            class="flex-grow-1 data-table-fix"
            fixed-header
            show-select
            item-value="id"
          >
            <!-- Custom formatting for dates -->
            <template #item.created_at="{ item }">
              {{ new Date(item.created_at).toLocaleString() }}
            </template>

            <!-- Custom formatting for size -->
            <template #item.size="{ item }">
              {{ formatFileSize(item.size) }}
            </template>

            <!-- Custom formatting for category with chips -->
            <template #item.category="{ item }">
              <v-chip
                :color="getCategoryColor(item.category)"
                size="small"
                class="text-capitalize"
                variant="outlined"
              >
                {{ item.category }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script setup>
const activeTab = ref('tasks');
const search = ref('');

const tabs = [
  { name: 'tasks', icon: 'mdi-check-circle-outline' },
  { name: 'projects', icon: 'mdi-folder-outline' },
  { name: 'attachments', icon: 'mdi-paperclip' },
  { name: 'comments', icon: 'mdi-comment-outline' },
  { name: 'customFields', icon: 'mdi-form-textbox' },
  { name: 'goals', icon: 'mdi-target' }
];

const headers = [
  {
    title: '',
    key: 'data-table-select',
    fixed: true,
    width: '5%'
  },
  {
    title: 'Created At',
    key: 'created_at',
    fixed: true,
    width: '15%'
  },
  {
    title: 'URL',
    key: 'url',
    width: '35%'
  },
  {
    title: 'Category',
    key: 'category',
    width: '10%'
  },
  {
    title: 'Size',
    key: 'size',
    width: '10%'
  },
  {
    title: 'Supplier',
    key: 'supplier',
    width: '15%'
  },
  {
    title: 'Data Point',
    key: 'dataPoint',
    width: '10%',
    align: 'end'
  }
];

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' KB';
  else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + ' MB';
  else return (bytes / 1073741824).toFixed(2) + ' GB';
}

const categoryColors = reactive({
  Document: 'blue',
  Image: 'purple',
  Video: 'red',
  Spreadsheet: 'green',
  Presentation: 'amber',
  Archive: 'grey',
  Other: 'teal'
});

function getCategoryColor(category) {
  return categoryColors[category];
}

const records = Array.from({ length: 100 }, (_, i) => {
  const randomDate = new Date();
  randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 365));

  const categories = [
    'Document',
    'Image',
    'Video',
    'Spreadsheet',
    'Presentation',
    'Archive',
    'Other'
  ];
  const category = categories[Math.floor(Math.random() * categories.length)];

  const size = Math.floor(Math.random() * 500 * 1024 * 1024) + 1024;

  const suppliers = [
    'Acme Corp',
    'Globex',
    'Initech',
    'Umbrella Corp',
    'Stark Industries',
    'Wayne Enterprises',
    'Cyberdyne Systems'
  ];
  const supplier = suppliers[Math.floor(Math.random() * suppliers.length)];

  const dataPoint = Math.random() * 100;

  const urlTypes = [
    'https://drive.google.com/',
    'https://dropbox.com/',
    'https://onedrive.com/',
    'https://aws-s3.com/'
  ];
  const urlBase = urlTypes[Math.floor(Math.random() * urlTypes.length)];
  const randomString = Math.random().toString(36).substring(2, 10);

  return {
    id: i + 1,
    created_at: randomDate,
    url: `${urlBase}${randomString}`,
    category,
    size,
    supplier,
    dataPoint: dataPoint.toFixed(2)
  };
});
</script>

<style scoped>
.data-table-fix {
  height: calc(
    100vh - 78px - 30px - 48px - 36px - 48px
  ) !important; /* Subtracting tab height, footer height, app bar height, and search container */
}

:deep(.v-data-table) {
  table-layout: fixed;
}

:deep(.v-data-table__td),
:deep(.v-data-table__th) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Optional: Add horizontal scrolling for the table if needed */
.v-card.flex-grow-1 {
  overflow-x: auto;
}
</style>
