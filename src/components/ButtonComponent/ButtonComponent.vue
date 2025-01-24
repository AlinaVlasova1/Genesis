<script lang="ts">
import {defineComponent, ref} from "vue";
import {useEntitiesStore} from "@/store/entities-store";
import {AuthorizationService} from "@/services/authorization-service";
import {EntityService} from "@/services/entitiy-service";
import {IEntityResponse, Option} from "@/models/entity-response-model";

export default defineComponent({
  setup() {
    const entitiesStore = useEntitiesStore();
    const authorizationService = new AuthorizationService();
    const entityService = new EntityService();
    const isLoad = ref(false);

    function createEntities() {
      isLoad.value = true;
      const token = localStorage.getItem("token");
      if (!token) {
        authorizationService.getAccessToken().then(data => {
          localStorage.setItem("token", data.data.access_token);
          localStorage.setItem("domain", data.data.base_domain);
        }).then(() => {
          if (entitiesStore.getKeySelectedEntity) {
            return entityService.createEntities(entitiesStore.getKeySelectedEntity)
          } else {
            return Promise.reject();
          }
        }).then((response: IEntityResponse) => {
          const key: string = entitiesStore.getKeySelectedEntity
          entitiesStore.addEntity({id: response.data._embedded[`${key as unknown as Option}`][0].id, name: entitiesStore.getNameSelectedEntity })
        }).finally(() => (isLoad.value = false))
      } else if (entitiesStore.getKeySelectedEntity) {
        entityService.createEntities(entitiesStore.getKeySelectedEntity).then((response: IEntityResponse) => {
          const key: string = entitiesStore.getKeySelectedEntity
          entitiesStore.addEntity({id: response.data._embedded[`${key as unknown as Option}`][0].id, name: entitiesStore.getNameSelectedEntity })
          isLoad.value = false;
        }).finally(() => {
          isLoad.value = false
        })
      }
      }
    return {
      entitiesStore,
      authorizationService,
      createEntities,
      isLoad
    }
  }
})
</script>

<template>
  <button class="button"
          :class="{active: entitiesStore.getIsActiveButton && !isLoad,
          disabled: !entitiesStore.getIsActiveButton && !isLoad,
          load: isLoad}"
          :disabled="!entitiesStore.getIsActiveButton && !isLoad"
          @click="createEntities()">Создать</button>
</template>

<style scoped>
  button {
    padding: 10px;
    border-radius: 4px;
    font-weight: bold;
    margin-left: 10px;
    position: relative;
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

  .load::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top: 20%;
    left: 35%;
    border: 0.15rem solid transparent;
    border-right-color: white;
    border-radius: 50%;
    animation: animate .7s linear infinite;
    opacity: 1;
    color: transparent;
  }

  .load {
    background-color: #4c8bf7;
    border-color: #4077d6;
    content: "";
    color: transparent;
  }

  @keyframes animate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>