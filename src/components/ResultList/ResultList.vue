<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  setup() {

  }
})
</script>

<template>
  <div class="list">
      <span>Сущность</span>
      <span>ID</span>
    
  </div>
</template>

<style scoped>
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 500px;
  }
</style>