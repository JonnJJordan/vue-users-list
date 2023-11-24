<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const key = computed(() => store.state.filterKey)

const handleFilterKeyChange = (event) => {
  const value = event.target.value
  store.dispatch('changeFilterKey', value)
}
</script>

<template>
  <div id="search">
    <svg viewBox="0 0 420 60" xmlns="http://www.w3.org/2000/svg">
      <rect class="bar" />

      <g class="magnifier">
        <circle class="glass" />
        <line class="handle" x1="32" y1="32" x2="44" y2="44"></line>
      </g>
    </svg>
    <input type="search" :value="key" @input="(event) => handleFilterKeyChange(event)" />
  </div>
</template>

<style scoped>
#search {
  display: grid;
  grid-area: search;
  grid-template:
    'search' 60px
    / 420px;
  justify-content: center;
  align-content: center;
  justify-items: stretch;
  align-items: stretch;
  background: hsl(0, 0%, 99%);
  margin: 1rem 0;
}

#search input {
  display: block;
  grid-area: search;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  background: none;
  padding: 0 30px 0 60px;
  border: none;
  border-radius: 100px;
  font:
    24px/1 system-ui,
    sans-serif;
  outline-offset: -8px;
  outline: none;
}

#search svg {
  grid-area: search;
  overflow: visible;
  color: #3659db;
  fill: none;
  stroke: currentColor;
}

.bar {
  width: 100%;
  height: 100%;
  ry: 50%;
  stroke-width: 5;
}

.magnifier {
  transform-box: fill-box;
}

.magnifier .glass {
  cx: 27;
  cy: 27;
  r: 8;
  stroke-width: 3;
}

.magnifier .handle {
  x1: 32;
  y1: 32;
  x2: 44;
  y2: 44;
  stroke-width: 3;
}

@media (max-width: 450px) {
  #search {
    grid-template: 'search' 1fr;
  }
}
</style>
