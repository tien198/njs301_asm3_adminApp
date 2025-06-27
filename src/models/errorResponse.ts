import type { IRes } from "../interfaces/response";

export default class ErrorRes<T extends object = Record<string, any>> implements IRes {
    statusText: string
    status?: number
    data?: T

    constructor(
        statusText: string,
        status?: number,
        data?: T
    ) {
        this.statusText = statusText
        this.status = status
        this.data = data
    }
}