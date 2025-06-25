import type { ModalStore } from '../types/modalStore'

import { createStore } from 'zustand'

import modalStyle from '../Modal.module.css'


const modalStore = createStore<ModalStore>((set, get) => ({
    hidden: modalStyle['hidden'],
    resonse: { message: '' },
    type: 'inform',

    show: (type, response) => {
        if (type) get().setType(type)
        if (response) get().setResponse(response)
        set(state => ({
            ...state,
            hidden: ''
        }))
    },
    setHidden: (hiddenClass) => set(state => ({
        ...state, hidden: hiddenClass
    })),
    hide: () => {
        get().setHidden(modalStyle['fading-hidden'])

        setTimeout(() => {
            get().setHidden(modalStyle['hidden'])
        }, 300);
    },
    setResponse: (res) => set((state) => ({
        ...state, resonse: res
    })),
    setType: (type) => set(state => ({
        ...state, type: type
    })),
}))

export default modalStore