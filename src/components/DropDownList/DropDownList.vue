<script lang="ts">
import {computed, ComputedRef, defineComponent, Ref, ref} from "vue";
import {dropDown} from "@/mock/dropdown-mock";
import {IDropdown} from "@/models/dropdown-model";

export default defineComponent({
  methods: {
    dropDown() {
      return dropDown
    }
  },
  setup() {
      const placeHolder: ComputedRef<string> = computed(() => {
        const foundElement = dropDown.find((element: IDropdown) => element.isSelected);
       return  foundElement ? foundElement.name : 'Не выбрано'
      })

    const isTriggeredDropDown: Ref<false, false> = ref(false);

    return {
      placeHolder,
      isTriggeredDropDown
    }
  }
})
</script>

<template>
  <div>
    <div class="placeholder">
      <span>{{placeHolder}}</span>
      <img src="../../assets/icon/Chevron.svg" alt="arrow-down" @click="isTriggeredDropDown = !isTriggeredDropDown"/>
    </div>

    <div class="dropdown-panel" v-if="isTriggeredDropDown">
      <div class="option" v-for="(option) in dropDown()" :key="option.key">
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