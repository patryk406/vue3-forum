<script setup lang="ts">
  import { ref } from 'vue';

  import type { Ref } from 'vue';

  import sourceData from '@/data.json';

  import type { Post } from '../../types/Data';
  import type { User } from '../../types/Data';

  const props = defineProps<{
    posts: Post[];
  }>();

  const users: Ref<User[]> = ref(sourceData.users);
  function userById(userId: string): User | undefined {
    return users.value.find(u => u.id === userId);
  }
</script>

<template>
  <div class="post-list">
    <div class="post" v-for="post in props.posts" :key="post.id">
      <div class="user-info">
        <a href="#" class="user-name"> {{ userById(post.userId).name }} </a>
        <a href="#">
          <img :src="userById(post.userId).avatar" alt="" class="avatar-large" />
        </a>
        <p class="desktop-only text-small">107 posts</p>
      </div>

      <div class="post-content">
        <div>
          <p>{{ post.text }}</p>
        </div>
      </div>
      <BaseDate class="post-date text-faded" :post-date="post.publishedAt" />
    </div>
  </div>
</template>

<style scoped></style>
