import type InputProps from "./InputProps";

export default function NameInput({ value, onChangeVal }: InputProps) {
    return (
        <input type="text" placeholder='Full Name'
            value={value} onChange={onChangeVal} />
    )
}
