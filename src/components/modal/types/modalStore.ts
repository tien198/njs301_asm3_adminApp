import type { IRes } from '../../../interfaces/response'



type ModalType = 'inform' | 'error'

type ModalState = {
    hidden: string
    // response indicate whether successRes or errorRes
    resonse: IRes,
    // type define the modal should be rendered <InformModal> or <ErrorModal>
    type: ModalType,

}

type ModalAction = {
    show: <T extends ModalType>(type?: T, respones?: IRes) => void
    setHidden: (hiddenClass: string) => void
    hide: () => void
    setResponse: (res: IRes) => void
    setType: (type: ModalType) => void
}

export type ModalStore = ModalState & ModalAction
