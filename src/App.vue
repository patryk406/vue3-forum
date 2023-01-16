<script setup lang="ts">
  const response = await fetch(
    'https://api.sportradar.us/soccer/trial/v4/en/seasons/sr:season:77453/schedules.json?api_key=7gv3rgnu48fkhb9gykdqxfp6',
    {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = response.json();
</script>

<template>
  <header>
    <div class="container">
      <RouterView />
    </div>
  </header>
</template>

<style scoped></style>
