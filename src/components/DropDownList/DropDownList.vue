<script lang="ts">
import {defineComponent, Ref, ref} from "vue";
import {useEntitiesStore} from "@/store/entities-store";

export default defineComponent({
  setup() {

    const entitiesStore = useEntitiesStore();

    const isTriggeredDropDown: Ref<boolean, boolean> = ref(false);

      function selectOption(key: string) {
          entitiesStore.selectEntities(key);
          isTriggeredDropDown.value = false;
      }

    return {
      isTriggeredDropDown,
      entitiesStore,
      selectOption
    }
  }
})
</script>

<template>
  <div>
    <div class="placeholder">
      <span>{{entitiesStore.getPlaceholder}}</span>
      <img src="../../assets/icon/Chevron.svg" alt="arrow-down" @click="isTriggeredDropDown = !isTriggeredDropDown"/>
    </div>

    <div class="dropdown-panel" v-if="isTriggeredDropDown">
      <div class="option" v-for="(option) in entitiesStore.getEntities" :key="option.key" @click="selectOption(option.key)">
        <img src="../../assets/icon/select.png" alt="select">
        <span>
        {{option.name}}
      </span>
      </div>
    </div>

  </div>
</template>

<style scoped>

  .placeholder {
    padding: 10px;
    border: 1px solid #B0B0B0;
    border-radius: 4px;
    display: flex;
    width: 200px;
    margin-left: auto;
    margin-right: auto;

    span {
      margin-left: 0;
      margin-right: auto;

    }

    img {
      margin-right: 0;
      margin-left: auto;
    }
  }

  .dropdown-panel {
    border: 1px solid #B0B0B0;
    border-radius: 4px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;

    span {
      display: block;
      text-align: left;
      margin-bottom: 10px;
    }

    span:last-child {
      margin-bottom: 0;
    }
  }

  .option {
    display: flex;
    margin-bottom: 10px;
    padding: 10px;

    img {
      width: 12px;
      height: 12px;
      margin-right: 5px;
    }
  }

  .option:last-child {
    margin-bottom: 0;
  }

  .option:hover {
    background-color: #99aaca;
  }
</style>