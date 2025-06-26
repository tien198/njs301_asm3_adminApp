import type { ModalImplementProps } from "./types/modalImplementProps"

import { useStore } from "zustand"

import informModalStyle from './InformModal.module.css'

import Modal from "./Modal"
import modalStore from "./store"
import { useCallback, type PropsWithChildren } from "react"



type Props = ModalImplementProps & PropsWithChildren

export default function InformModal({ truthyFnc, falsyFnc, oncloseFnc, children }: Props) {
    const hide = useStore(modalStore, state => state.hide)

    const defTruthyFnc = useCallback(function () {
        hide()
        truthyFnc?.()
    }, [truthyFnc, hide])

    const defFalsyFnc = useCallback(function () {
        hide()
        falsyFnc?.()
    }, [falsyFnc, hide])


    const type = useStore(modalStore, state => state.type)
    if (type !== 'inform')
        return <></>

    return (
        <Modal onCloseFnc={oncloseFnc}>
            <div className={informModalStyle["container"]}>
                {children}
                <div className='flex justify-between items-center gap-10'>
                    <span><button className="text-white bg-gray-800 px-10 py-1.5 hover:bg-gray-950 hover:rounded" onClick={defTruthyFnc}>Ok</button></span>
                    <span><button className="px-6 py-1.5 border border-white hover:border hover:border-gray-800" onClick={defFalsyFnc}>Cancel</button></span>
                </div>
            </div>

        </Modal>
    )
}