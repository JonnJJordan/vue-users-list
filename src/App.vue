<script setup>
import { computed, watch } from 'vue'
import { useToast } from 'vue-toastification'
import { useStore } from 'vuex'

const toast = useToast()

const store = useStore()

const hasError = computed(() => store.state.error)

watch(
  () => hasError.value,
  (error) => {
    if (error) {
      toast.error(error.message)
    }
  }
)
</script>

<template>
  <article class="container">
    <RouterView />
  </article>
</template>
