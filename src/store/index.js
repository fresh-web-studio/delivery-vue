// store.js
import { goodArray } from '@/constants/goods'
import { restArray } from '@/constants/rests'
import { reactive } from 'vue'

export const store = reactive({
    isOpen: false,
    rests: restArray,
    goods: goodArray,
    toggleModal(value) {
        this.isOpen = value
    }
})