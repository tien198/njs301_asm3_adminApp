import type { ModalStore } from '../types/modalStore'

import { createStore } from 'zustand'

import modalStyle from '../Modal.module.css'


const modalStore = createStore<ModalStore>(set => ({
    hidden: modalStyle['hidden'],
    resonse: { message: '' },
    type: 'inform',

    show: () => set(state => ({ ...state, hidden: '' })),
    setHidden: (hiddenClass) => set(state => ({
        ...state, hidden: hiddenClass
    })),
    setResponse: (res) => set((state) => ({
        ...state, resonse: res
    })),
    setType: (type) => set(state => ({
        ...state, type: type
    })),
}))

export default modalStore