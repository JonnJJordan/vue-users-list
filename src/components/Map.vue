<script setup>
import 'leaflet/dist/leaflet.css'
import { computed } from 'vue'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
import L from 'leaflet'

globalThis.L = L

const props = defineProps({
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  }
})

const center = computed(() => [props.lat, props.lng])
</script>
<template>
  <div style="height: 200px; width: 100%">
    <l-map ref="map" :zoom="2" :center="center">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :lat-lng="center"> </l-marker>
    </l-map>
  </div>
</template>
