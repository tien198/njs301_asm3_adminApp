import type { IRes } from '../../../interfaces/response'



export type ModalType = 'inform' | 'error'

type ModalState = {
    hidden: string
    // response indicate whether successRes or errorRes
    resonse: IRes,
    // type define the modal should be rendered <InformModal> or <ErrorModal>
    type: string,

}

type ModalAction = {
    show: <T extends string = ModalType>(type?: T, respones?: IRes) => void
    setHidden: (hiddenClass: string) => void
    hide: () => void
    setResponse: (res: IRes) => void
    setType: <T extends string = ModalType>(type?: T) => void
}

export type ModalStore = ModalState & ModalAction
