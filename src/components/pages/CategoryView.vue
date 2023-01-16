<script setup lang="ts">
  import { computed } from 'vue';
  import sourceData from '@/data.json';
  import ForumList from '@/components/ForumList.vue';
  import type { Category } from '../../../types/Data';

  const props = defineProps<{
    id: string;
  }>();
  const category = computed(() => sourceData.categories.find(category => category.id === props.id));
  function getForumsForCategory(category: Category) {
    return sourceData.forums.filter(forum => forum.categoryId === category.id);
  }
</script>

<template>
  <h1>{{ category.name }}</h1>
  <ForumList :title="category.name" :forums="getForumsForCategory(category)" />
</template>

<style scoped></style>
