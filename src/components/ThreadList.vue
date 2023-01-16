<script setup lang="ts">
  import { ref } from 'vue';

  import type { Ref } from 'vue';

  import type { Thread, User } from '../../types/Data';

  import sourceData from '@/data.json';

  const props = defineProps<{
    threads: Thread[];
  }>();
  const users: Ref<User[]> = ref(sourceData.users);
  function userById(userId: string): User | undefined {
    return users.value.find(u => u.id === userId);
  }
</script>

<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div v-for="thread in props.threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link :to="{ name: 'ThreadSingleView', params: { id: thread.id } }">{{
              thread.title
            }}</router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a
            >, <BaseDate :post-date="thread.publishedAt" />.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} replies</p>

          <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="" />

          <div>
            <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>
            <BaseDate class="text-xsmall text-faded" :post-date="thread.publishedAt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
