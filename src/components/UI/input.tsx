type Base = {
    label: string
}


type ContainerProps = Base & React.HTMLAttributes<HTMLDivElement>

function Container(props: ContainerProps) {
    return <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700">{props.label}</label>
        {props.children}
    </div>
}



export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-gray-500"
            {...props}
        />
    )
}


export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-gray-500"
            {...props}
        />
    )
}


const F = {
    Container, Input, TextArea
}

export default F