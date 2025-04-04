<template>
  <Sidebar v-bind="props">
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Changes</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="(item, index) in data.changes" :key="index">
              <SidebarMenuButton>
                <File />
                {{ item.file }}
              </SidebarMenuButton>
              <SidebarMenuBadge>{{ item.state }}</SidebarMenuBadge>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>All Files</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <Tree
              v-for="(item, index) in data.tree"
              :key="index"
              :item="item"
            />
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>

<script setup lang="ts">
import Tree from './Tree.vue';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  type SidebarProps,
  SidebarRail
} from '@/components/ui/sidebar';
import { File } from 'lucide-vue-next';

const props = defineProps<SidebarProps>();

// This is sample data.
const data = {
  changes: [
    {
      file: 'README.md',
      state: 'M'
    },
    {
      file: 'api/hello/route.ts',
      state: 'U'
    },
    {
      file: 'app/layout.tsx',
      state: 'M'
    }
  ],
  tree: [
    ['Workspace 1', ['Team A', 'Project A', 'Project B', 'Project C']],
    [
      'Workspace 2',
      ['ui', 'button.tsx', 'card.tsx'],
      'header.tsx',
      'footer.tsx'
    ],
    ['Workspace 3', ['util.ts']],
    '.eslintrc.json',
    '.gitignore',
    'next.config.js',
    'tailwind.config.js',
    'package.json',
    'README.md'
  ]
};
</script>
