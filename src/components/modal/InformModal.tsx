import type { ModalImplementProps } from "./types/modalImplementProps"

import { useStore } from "zustand"

import informModalStyle from './InformModal.module.css'

import Button from "../UI/Button"
import Modal from "./Modal"
import modalStore from "./store"




export default function InformModal({ truthyFnc, falsyFnc, oncloseFnc }: ModalImplementProps) {
    const message = useStore(modalStore,
        state => state.resonse.message
    )

    const type = useStore(modalStore, state => state.type)
    if (type !== 'inform')
        return <></>

    return (
        <Modal onCloseFnc={oncloseFnc}>
            <div className={informModalStyle["container"]}>
                <span>{message}</span>
                <div className={informModalStyle["actions"]}>
                    <span><Button onClick={truthyFnc}>Ok</Button></span>
                    <span><Button isBgWhite onClick={falsyFnc}>Cancel</Button></span>
                </div>
            </div>

        </Modal>
    )
}