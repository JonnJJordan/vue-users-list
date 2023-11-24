<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import Header from '../components/Header.vue'
import UsersList from '../components/UsersList.vue'
import Loader from '../components/Loader.vue'
import SearchBox from '../components/SearchBox.vue'

const store = useStore()

const users = computed(() => store.getters.filteredUsers)
const loading = computed(() => store.state.loading)

onMounted(() => {
  if (users.value.length === 0) {
    store.dispatch('getAllUsers')
  }
})
</script>

<template>
  <Header primary="Listado" secondary="de usuarios" />
  <Loader v-if="loading" />
  <template v-else>
    <SearchBox />
    <UsersList :users="users" />
  </template>
</template>
