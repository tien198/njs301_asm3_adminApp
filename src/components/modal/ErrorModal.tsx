import type { ModalImplementProps } from "./types/IModalImplementProps"
import type { IRes } from "../../interfaces/response"

import { useStore } from "zustand"

import informModalStyle from './InformModal.module.css'

import Modal from "./Modal"
import modalStore from "./store"
import defFnc from "./ulties/defaultBtnAction"




export default function ErrorModal({ truthyFnc = defFnc, falsyFnc = defFnc, oncloseFnc }: ModalImplementProps) {
    const status = useStore(modalStore, state => state.resonse.status)
    const message = useStore(modalStore, state => state.resonse.message)
    const errors = useStore(modalStore, state => (state.resonse as IRes)?.cause)


    let errorEntries: [string, string][] = []
    if (errors)
        errorEntries = Object.entries(errors)


    const type = useStore(modalStore, state => state.type)
    if (type !== 'error')
        return <></>

    return (
        <Modal onCloseFnc={oncloseFnc}>
            <div className={informModalStyle["container"]}>
                <span className={informModalStyle["status"]}>{status}</span>
                <span>{message}</span>
                <span className={informModalStyle['error-list']}>{
                    errorEntries.map(i =>
                        <span key={i[0]} >{i[1]}</span>
                    )
                }</span>
                <div className={informModalStyle["actions"]}>
                    <span><button onClick={truthyFnc}>Ok</button></span>
                    <span><button onClick={falsyFnc}>Cancel</button></span>
                </div>
            </div>
        </Modal>
    )
}