<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()

const router = useRouter()

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const initials = computed(() => {
  return props.user.name.match(/(\b\S)?/g).join('')
})

const goToDetails = (id) => {
  store.dispatch('setSelectedUser', id)
  router.push({
    name: 'details',
    params: {
      id: id
    }
  })
}
</script>

<template>
  <article class="user__profile" @click="goToDetails(user.id)">
    <div class="user__avatar">{{ initials }}</div>
    <div class="user__info">
      <span class="user__name">{{ user.name }}</span>
      <span class="user__username">@{{ user.username }}</span>
    </div>
  </article>
</template>

<style scoped>
.user__profile {
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  padding: 10px 30px 10px 10px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  cursor: pointer;
  transition:
    transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  background-color: #fff;
}

.user__profile:hover {
  transform: scale(1.05);
  box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
}

.user__avatar {
  max-width: 100%;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow:
    0 0 0 10px #ebeef3,
    0 0 0 22px #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3659db;
  color: #fff;
}

.user__info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 12px;
}

.user__name {
  color: #979cb0;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.64px;
}

.user__username {
  color: #aaa;
  margin-top: 5px;
}
</style>
