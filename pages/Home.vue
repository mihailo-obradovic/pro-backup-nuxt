<template>
  <v-container class="fill-height d-flex flex-column ga-4" fluid>
    <v-tabs
      v-model="activeTab"
      bg-color="background"
      align-tabs="start"
      class="flex-grow-0"
    >
      <v-tab v-for="tab in tabs" :key="tab.name" :prepend-icon="tab.icon">
        {{ tab.name.charAt(0).toUpperCase() + tab.name.slice(1) }}
      </v-tab>
    </v-tabs>

    <v-card class="flex-grow-1 d-flex flex-column overflow-hidden w-100">
      <v-data-table
        :headers="headers"
        :items="records"
        :items-per-page="20"
        class="flex-grow-1 data-table-fix"
        fixed-header
      >
        <!-- Custom formatting for dates -->
        <template #item.created_at="{ item }">
          {{ new Date(item.created_at).toLocaleString() }}
        </template>

        <!-- Custom formatting for size -->
        <template #item.size="{ item }">
          {{ formatFileSize(item.size) }}
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script setup>
const activeTab = ref('tasks');

const tabs = [
  { name: 'tasks', icon: 'mdi-check-circle' },
  { name: 'projects', icon: 'mdi-folder' },
  { name: 'attachments', icon: 'mdi-paperclip' },
  { name: 'comments', icon: 'mdi-comment' },
  { name: 'customFields', icon: 'mdi-form-textbox' },
  { name: 'goals', icon: 'mdi-target' }
];

// Table headers
const headers = [
  { title: 'Created At', key: 'created_at' },
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
.data-table-fix {
  height: calc(
    100vh - 78px - 30px - 48px - 20px
  ) !important; /* Subtracting tab height, footer height, and app bar height */
}
</style>
