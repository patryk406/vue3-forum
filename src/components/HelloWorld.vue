<script setup lang="ts">
  import sourceData from '@/data.json';
  import type { DataTypes } from '../../types/Data';

  const data: DataTypes = sourceData;
</script>

<template>
  <div class="greetings">{{ data }}</div>
</template>
