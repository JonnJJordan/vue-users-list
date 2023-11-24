<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { RouterLink, useRoute } from 'vue-router'
import Header from '../components/Header.vue'
import UserDetails from '../components/UserDetails.vue'
import Loader from '../components/Loader.vue'

const store = useStore()
const route = useRoute()
const selected = computed(() => store.state.selected)
const loading = computed(() => store.state.loading)

onMounted(() => {
  if (!selected.value) {
    store.dispatch('getSelectedUser', route.params['id'])
  }
})
</script>
<template>
  <Header primary="Detalles" secondary="de usuario" />
  <Loader v-if="loading" />
  <template v-else>
    <UserDetails v-if="selected" :user="selected" />
  </template>
  <button class="btn">
    <RouterLink to="/">Volver</RouterLink>
  </button>
</template>
