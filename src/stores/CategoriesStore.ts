import { defineStore } from 'pinia';
import sourceData from '@/data.json';

export const useForumsStore = defineStore('forums', {
  state: () => {
    return {
      categories: sourceData.categories,
    };
  },
  getters: {},
  actions: {},
});
