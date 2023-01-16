<script setup lang="ts">
  import sourceData from '@/data.json';
  import CategoryList from '@/components/CategoryList.vue';
</script>

<template>
  <h1>Welcome to the Forum</h1>
  <CategoryList :categories="sourceData.categories" />
</template>

<style scoped></style>
