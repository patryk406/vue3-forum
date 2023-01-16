<script setup lang="ts">
  import { computed, reactive, ref } from 'vue';

  import sourceData from '@/data.json';

  import type { Post, Thread } from '../../../types/Data';

  import PostsList from '@/components/PostsList.vue';
  import PostEditor from '@/components/PostEditor.vue';

  const props = defineProps<{
    id: string;
  }>();

  interface stateType {
    threads: Thread[];
    posts: Post[];
  }
  const state: stateType = reactive({
    threads: sourceData.threads,
    posts: sourceData.posts,
  });

  const thread = computed(() => state.threads.find(thread => thread.id === props.id));
  const threadPosts = computed(() => state.posts.filter(post => post.threadId === props.id));

  function addPost(newsText: string): void {
    const postId: string = 'ggqq' + Math.random();
    const post: Post = {
      id: postId,
      text: newsText,
      publishedAt: Math.floor(Date.now() / 1000),
      threadId: props.id,
      userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2',
    };

    state.posts.push(post);
    thread.value?.posts.push(postId);
  }
</script>

<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <PostsList :posts="threadPosts" />
    <PostEditor @add-post="addPost" />
  </div>
</template>

<style scoped></style>
