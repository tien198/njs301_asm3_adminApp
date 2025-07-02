import { FaBox } from "react-icons/fa"
import type { IOrder } from "../../../interfaces/order"
import { formatCurrency } from "../ultilies/formatCurrency"
import { Fallback } from "../../../components/UI/Fallback"

type Props = {
    order?: IOrder
}

export default function OrderItems({ order }: Props) {
    return (
        <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
                <FaBox className="w-5 h-5 mr-2 text-blue-600" />
                Sản phẩm đã đặt ({order ? order.items.length : <Fallback className="h-4 w-20" />} sản phẩm)
            </h3>
            <div className="space-y-4">
                {order
                    ? order.items.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 flex items-center space-x-4 shadow-sm">
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                                <h4 className="font-medium text-gray-900">{item.name}</h4>
                                <p className="text-sm text-gray-500">Danh mục: {item.category}</p>
                                <p className="text-sm text-gray-500">Giá: {formatCurrency(item.priceInOrderTime)}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-medium">x{item.quantity}</p>
                                <p className="text-lg font-semibold text-blue-600">
                                    {formatCurrency(item.lineTotal)}
                                </p>
                            </div>
                        </div>
                    ))
                    : <Fallback className="h-20 w-64" />}
            </div>
        </div>
    )
}