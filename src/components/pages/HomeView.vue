<script setup lang="ts">
  import ThreadList from '@/components/ThreadList.vue';

  import sourceData from '@/data.json';
</script>

<template>
  <h1>Welcome to the Forum</h1>
  <ThreadList :threads="sourceData.threads" />
</template>

<style scoped></style>
