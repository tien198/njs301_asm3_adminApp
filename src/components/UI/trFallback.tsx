import { useEffect, useRef, useState } from "react"

export default function TrFallback() {
    const tdRef = useRef<HTMLTableCellElement>(null)
    const [rowTotal, setRowTotal] = useState(0)
    useEffect(() => {
        const table = tdRef.current?.closest('table')
        const tr = table?.querySelector('thead tr')
        const rowTotal = tr?.children.length
        setRowTotal(rowTotal || 1)

    }, [setRowTotal])
    return <tr>
        <td ref={tdRef} colSpan={rowTotal} className="p-10 bg-zinc-200 animate-pulse w-full h-full">Loading ...</td>
    </tr>
}