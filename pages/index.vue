<template>
  <div>
    <p class="text-blue-500 dark:bg-background dark:text-green-500">Page</p>

    <UIButton @click="$colorMode.preference = 'light'">Light</UIButton>

    <UIButton class="ml-2" @click="$colorMode.preference = 'dark'"
      >Dark</UIButton
    >
  </div>
</template>

<script setup lang="ts"></script>
