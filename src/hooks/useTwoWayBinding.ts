import type { ChangeEvent, ChangeEventHandler } from "react"
import { useState } from "react"

/**
 * 
 * @param initialState - T
 * @returns Array [val, onChangeVal, setVal]
 */

export default function useTwoWayBinding<T>(initialState?: T): [T, ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>, React.Dispatch<React.SetStateAction<T>>] {
    const [val, setVal] = useState<T>(initialState || <T>(''))
    function onChangeVal(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setVal(<T>(e.target.value))
    }
    return [
        val,
        onChangeVal,
        setVal,
    ]
}