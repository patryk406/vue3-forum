<script setup lang="ts">
  import { computed, ref } from 'vue';

  import sourceData from '@/data.json';

  import type { Ref } from 'vue';

  import type { Post, Thread, User } from '../../../types/Data';

  import PostsList from '@/components/PostsList.vue';

  const props = defineProps<{
    id: string;
  }>();

  const threads: Ref<Thread[]> = ref(sourceData.threads);
  const posts: Ref<Post[]> = ref(sourceData.posts);
  const newPostText: Ref<string> = ref('');

  const thread = computed(() => threads.value.find(thread => thread.id === props.id));
  const threadPosts = computed(() => posts.value.filter(post => post.threadId === props.id));

  function addPost() {
    const postId: string = 'ggqq' + Math.random();
    const post: Post = {
      id: postId,
      text: newPostText.value,
      publishedAt: Math.floor(Date.now() / 1000),
      threadId: postId,
      userId: 'rpbB8C6ifrYmNDufMERWfQUoa202',
    };
    posts.value.push(post);
    thread.value?.posts.push(postId);
    newPostText.value = '';
  }
</script>

<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <PostsList :posts="threadPosts" />

    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea v-model="newPostText" name="" id="" cols="30" rows="10" class="form-input" />
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
