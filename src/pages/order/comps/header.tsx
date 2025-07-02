import { Fallback } from "../../../components/UI/Fallback";
import type { IOrder } from "../../../interfaces/order";
import { getStatusColor } from "../ultilies/getStatusColor";

type Props = { order?: IOrder }

export default function Header({ order }: Props) {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Chi tiết đơn hàng</h1>
                    <p className="text-blue-100">Mã đơn hàng: {order ? order.id : <Fallback className="h-4 w-20"/>}</p>
                </div>
                <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order?.status)}`}>
                        {order?.status}
                    </span>
                </div>
            </div>
        </div>
    )
}