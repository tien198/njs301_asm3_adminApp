type Props = {
    msg: string
} & React.HtmlHTMLAttributes<HTMLDivElement>


export default function ErrorMsg({ msg, className }: Props) {
    return (
        <div className={className ?? 'text-red-700'}>
            <span>{msg}</span>
        </div>
    )
}