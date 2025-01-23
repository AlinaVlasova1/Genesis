<script lang="ts">
import {defineComponent} from "vue";
import {useEntitiesStore} from "@/store/entities-store";

export default defineComponent({
  setup() {
    const entitiesStore = useEntitiesStore();

    return {
      entitiesStore
    }
  }
})
</script>

<template>
  <button class="button" :class="{active: entitiesStore.getIsActiveButton, disabled: !entitiesStore.getIsActiveButton }" >Создать</button>
</template>

<style scoped>
  button {
    padding: 10px;
    border-radius: 4px;
    font-weight: bold;
  }

  .active {
    background-color: #4c8bf7;
    border-color: #4077d6;
    color: white;
  }

  .disabled {
    background-color: white;
    border-color: #bbbbbb;
    color: black;
  }
</style>