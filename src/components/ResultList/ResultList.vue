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
  <div class="list" v-if="entitiesStore.getEntities.length > 0">
    <div class="row">
      <span>Сущность</span>
      <span>ID</span>
    </div>
    <div class="row" v-for="(entity) in entitiesStore.getEntities" :key="entity.id">
      <span>{{entity.name}}</span>
      <span>{{entity.id}}</span>
    </div>
  </div>
</template>

<style scoped>
  .list {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

</style>