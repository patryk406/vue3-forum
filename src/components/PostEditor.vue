<script setup lang="ts">
  import { ref } from 'vue';
  import type { Ref } from 'vue';

  const newPostText: Ref<string> = ref('');

  defineEmits<{ (e: 'add-post', newsText: string): void }>();
</script>

<template>
  <div class="col-full">
    <form @submit.prevent="[$emit('add-post', newPostText), (newPostText = '')]">
      <div class="form-group">
        <textarea v-model="newPostText" name="" id="" cols="30" rows="10" class="form-input" />
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
