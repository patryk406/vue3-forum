<script setup lang="ts">
  import sourceData from '@/data.json';

  import ForumList from '@/components/ForumList.vue';

  import type { Category } from '../../types/Data';

  defineProps<{
    categories: Category;
  }>();

  function getForumsForCategory(category: Category) {
    return sourceData.forums.filter(forum => forum.categoryId === category.id);
  }
</script>

<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsForCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<style scoped></style>
