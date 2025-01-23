<script lang="ts">
import {defineComponent} from "vue";
import ButtonComponent from "../components/ButtonComponent/ButtonComponent.vue";
import DropDownList from "@/components/DropDownList/DropDownList.vue";

export default defineComponent({
  components: {DropDownList, ButtonComponent},
  setup() {

  }
})
</script>

<template>
<div>
  <DropDownList></DropDownList>
  <ButtonComponent></ButtonComponent>
</div>
</template>

<style scoped>

</style>