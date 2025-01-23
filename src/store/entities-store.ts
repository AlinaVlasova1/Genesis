import {defineStore} from "pinia";
import {dropDown} from "@/mock/dropdown-mock";
import {IDropdown} from "@/models/dropdown-model";

export const useEntitiesStore = defineStore('entitiesStore', {
    state: () => {
        return {
            entities: structuredClone(dropDown),
        };
    },
    getters: {
        getEntities: (state) => {
            return state.entities
        },
        getIsActiveButton: (state) => {
            const notSelectedOption = state.entities.find((element: IDropdown) => element.key === 'not-selected')
            return !(notSelectedOption && notSelectedOption.isSelected);
        }
    },
    actions: {
        selectEntities (key: string) {
            const newEntities = this.entities.map((element: IDropdown) => {
                element.isSelected = element.key === key;
                return element;
            })
            this.entities = [...newEntities];
        }
    }
})