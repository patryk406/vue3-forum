<script setup lang="ts">
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import localizedFormat from 'dayjs/plugin/localizedFormat';

  dayjs.extend(relativeTime);
  dayjs.extend(localizedFormat);

  const props = defineProps<{
    postDate: number;
  }>();
  function diffForHumans(): string {
    return dayjs.unix(props.postDate).fromNow();
  }
  function humanFriendlyDate(): string {
    return dayjs.unix(props.postDate).format('L LT');
  }
</script>

<template>
  <span :title="humanFriendlyDate()">
    {{ diffForHumans() }}
  </span>
</template>

<style scoped></style>
