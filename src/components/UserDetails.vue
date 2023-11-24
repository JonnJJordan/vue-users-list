<script setup>
import Map from './Map.vue'

defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="user__container">
    <div class="info__container">
      <h1>Nombre</h1>
      <h3>{{ user.name }}</h3>
    </div>
    <div class="info__container">
      <h1>Username</h1>
      <h3>{{ user.username }}</h3>
    </div>
    <div class="info__container">
      <h1>Email</h1>
      <h3>{{ user.email }}</h3>
    </div>
    <div class="info__container">
      <h1>Teléfono</h1>
      <h3>{{ user.phone }}</h3>
    </div>
    <div class="info__container full-width">
      <h1>Ubicación</h1>
      <Map :lat="+user.address.geo.lat" :lng="+user.address.geo.lng" />
    </div>
  </div>
</template>

<style scoped>
.user__container {
  background-color: #fff;
  border-radius: 0 0 12px 12px;
  padding: 15px 15px 20px;
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
}

.info__container {
  padding: 0 20px;
}

.info__container.full-width {
  grid-column: 1 / span 2;
}

.info__container h1 {
  font-size: 1.2em;
}

.info__container h3 {
  font-size: 1em;
  color: #3659db;
  font-style: italic;
}

@media (max-width: 400px) {
  .user__container {
    grid-template-columns: 1fr;
  }

  .info__container.full-width {
    grid-column: 1;
  }
}
</style>
