<script lang="ts">
import {defineComponent} from "vue";
import ButtonComponent from "../components/ButtonComponent/ButtonComponent.vue";
import DropDownList from "@/components/DropDownList/DropDownList.vue";
import ResultList from "@/components/ResultList/ResultList.vue";

export default defineComponent({
  name: "MainPage",
  components: {ResultList, DropDownList, ButtonComponent},
})
</script>

<template>
  <div>
      <div class="row">
        <DropDownList></DropDownList>
        <ButtonComponent></ButtonComponent>
      </div>


    <ResultList></ResultList>
  </div>
</template>

<style scoped>

  .row {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
  }
</style>