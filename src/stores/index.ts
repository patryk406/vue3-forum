import { defineStore } from 'pinia';
import { reactive } from 'vue';
import type { DataTypes } from '../../types/Data';
import sourceData from '@/data.json';

export const useForumsStore = defineStore('forums', () => {
  const state: DataTypes = reactive(sourceData);

  // getters

  return { forums };
});
