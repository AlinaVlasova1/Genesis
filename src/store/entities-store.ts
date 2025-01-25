import {defineStore} from "pinia";
import {dropDown} from "@/mock/dropdown-mock";
import {IDropdown} from "@/models/dropdown-model";
import {IEntity} from "@/models/entity-model";

export const useEntitiesStore = defineStore('entitiesStore', {
    state: () => {
        return {
            entityOptions: [...dropDown],
            createdEntities: [] as IEntity[],
        };
    },
    getters: {
        getOptions: (state) => {
            return state.entityOptions
        },
        getIsActiveButton: (state) => {
            const notSelectedOption = state.entityOptions.find((element: IDropdown) => element.key === 'not-selected')
            return !(notSelectedOption && notSelectedOption.isSelected);
        },
        getPlaceholder: (state) => {
            const foundElement = state.entityOptions.find((element: IDropdown) => element.isSelected);
            return  foundElement ? foundElement.name : 'Не выбрано'
        },
        getKeySelectedEntity: (state) => {
            const foundEntity = state.entityOptions.find((element: IDropdown) => element.isSelected)
            return foundEntity ? foundEntity.key : ''
        },
        getNameSelectedEntity: (state) => {
            const foundEntity = state.entityOptions.find((element: IDropdown) => element.isSelected)
            return foundEntity ? foundEntity.name : 'Не выбрано'
        },
        getEntities: (state) => {
            return state.createdEntities
        }
    },
    actions: {
        selectOptions (key: string) {
            const newOptions = this.entityOptions.map((element: IDropdown) => {
                element.isSelected = element.key === key;
                return element;
            })
            this.entityOptions = [...newOptions];
        },
        addEntity (entity: IEntity) {
            this.createdEntities.push(entity);
        }
    }
})