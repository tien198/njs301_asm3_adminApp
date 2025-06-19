export interface IRes {
    message: string
    status?: number
    cause?: Record<string, any>
}