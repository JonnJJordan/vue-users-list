<script setup>
import UsersListItem from './UsersListItem.vue'

defineProps({
  users: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <main class="profiles">
    <UsersListItem v-for="user in users" :key="user.id" :user="user" />
  </main>
</template>

<style scoped>
.profiles {
  background-color: #fff;
  border-radius: 0 0 12px 12px;
  padding: 15px 15px 20px;
  display: grid;
  row-gap: 8px;
}
</style>
