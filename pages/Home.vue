<template>
  <v-container class="fill-height d-flex flex-column ga-4" fluid>
    <v-card class="flex-grow-0 w-100">
      <v-row no-gutters align="center" class="px-1">
        <v-col cols="6" md="8" lg="9" class="tab-container pe-1">
          <!-- Left gradient fade -->
          <!-- <div class="tab-fade tab-fade-left" /> -->

          <v-tabs
            v-model="activeTab"
            bg-color="background"
            align-tabs="start"
            show-arrows
          >
            <v-tab v-for="tab in tabs" :key="tab.name" :prepend-icon="tab.icon">
              {{ tab.name.charAt(0).toUpperCase() + tab.name.slice(1) }}
            </v-tab>
          </v-tabs>

          <!-- Right gradient fade -->
          <!-- <div class="tab-fade tab-fade-right" /> -->
        </v-col>

        <v-col cols="6" md="4" lg="3" class="ps-1">
          <v-text-field
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            density="compact"
            variant="outlined"
          />
        </v-col>
      </v-row>
    </v-card>

    <v-card class="flex-grow-1 d-flex flex-column overflow-hidden w-100">
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
  </v-container>
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

// Table headers
const headers = [
  { title: '', key: 'data-table-select', fixed: true }, // Add this line for the select column
  { title: 'Created At', key: 'created_at', fixed: true },
  { title: 'URL', key: 'url' },
  { title: 'Category', key: 'category' },
  { title: 'Size', key: 'size' },
  { title: 'Supplier', key: 'supplier' },
  { title: 'Data Point', key: 'dataPoint' }
];

// Function to format file size
function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' KB';
  else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + ' MB';
  else return (bytes / 1073741824).toFixed(2) + ' GB';
}

// Category color mapping
const categoryColors = reactive({
  Document: 'blue',
  Image: 'purple',
  Video: 'red',
  Spreadsheet: 'green',
  Presentation: 'amber',
  Archive: 'grey',
  Other: 'teal'
});

// Function to get color for a category
function getCategoryColor(category) {
  return categoryColors[category];
}

// Generate 100 dummy records
const records = Array.from({ length: 100 }, (_, i) => {
  // Random date within last year
  const randomDate = new Date();
  randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 365));

  // Random categories
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

  // Random size between 1KB and 500MB
  const size = Math.floor(Math.random() * 500 * 1024 * 1024) + 1024;

  // Random suppliers
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

  // Random data point (a numeric value)
  const dataPoint = Math.random() * 100;

  // Random URL
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
/* .tab-container {
  position: relative;
  overflow: hidden;
}

.tab-fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 64px;
  pointer-events: none;
  z-index: 1;
}

.tab-fade-left {
  left: 0;
  background: linear-gradient(
    to right,
    rgb(var(--v-theme-foreground)) 20%,
    transparent 100%
  );
  opacity: 0.2;
}

.tab-fade-right {
  right: 0;
  background: linear-gradient(
    to left,
    rgb(var(--v-theme-foreground)) 20%,
    transparent 100%
  );
  opacity: 0.2;
} */

.data-table-fix {
  height: calc(
    100vh - 78px - 30px - 48px - 20px - 48px
  ) !important; /* Subtracting tab height, footer height, app bar height, and search container */
}
</style>
