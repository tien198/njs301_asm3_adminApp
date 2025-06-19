import type React from 'react'

import btnStyle from './Button.module.css'

type Props = {
    isBgWhite?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>



export default function Button({ value, children, type, className, onClick, isBgWhite = false }: Props) {
    const bg = isBgWhite
        ? btnStyle['btn-white']
        : btnStyle['btn-primary']

    return (
        <button
            type={type}
            onClick={onClick}
            className={className ?? 'btn' + ' ' + bg}
        >
            {value ?? children ?? 'send'}
        </button>
    )
}