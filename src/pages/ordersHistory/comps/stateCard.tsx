
type Props = {
    label: string
    value: string
}

export default function StatsCard({ label, value }: Props) {
    return (
        <div className="bg-white rounded shadow p-6 text-center">
            <p className="text-gray-500">{label}</p>
            <p className="text-2xl font-bold mt-2">{value}</p>
        </div>
    );
}
