<script lang="ts">
import {defineComponent} from "vue";
import {useEntitiesStore} from "@/store/entities-store";
import {AuthorizationService} from "@/services/authorization-service";
import {EntityService} from "@/services/entitiy-service";
import {IEntityResponse} from "@/models/entity-response-model";

export default defineComponent({
  setup() {
    const entitiesStore = useEntitiesStore();
    const authorizationService = new AuthorizationService();
    const entityService = new EntityService();

    function createEntities() {
      const token = localStorage.getItem("token");
      console.log('token',token);
      if (!token) {
        authorizationService.getAccessToken().then(data => {
          console.log("data", data);
          localStorage.setItem("token", data.data.access_token);
          localStorage.setItem("domain", data.data.base_domain);
        }).then(() => {
          if (entitiesStore.getKeySelectedEntity) {
            return entityService.createEntities(entitiesStore.getKeySelectedEntity)
          } else {
            return Promise.reject();
          }
        }).then((response: IEntityResponse) => {
          console.log('response', response.data._embedded.leads);
          entitiesStore.addEntity({id: response.data._embedded.leads[0].id, name: entitiesStore.getNameSelectedEntity })
        })
      } else if (entitiesStore.getKeySelectedEntity) {
        entityService.createEntities(entitiesStore.getKeySelectedEntity).then((response: IEntityResponse) => {
          entitiesStore.addEntity({id: response.data._embedded.leads[0].id, name: entitiesStore.getNameSelectedEntity })
        })
      }
      }
    return {
      entitiesStore,
      authorizationService,
      createEntities
    }
  }
})
</script>

<template>
  <button class="button"
          :class="{active: entitiesStore.getIsActiveButton, disabled: !entitiesStore.getIsActiveButton }"
          @click="createEntities()">Создать</button>
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