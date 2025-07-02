import { FaMapMarkerAlt } from "react-icons/fa"
import type { IOrder } from "../../../interfaces/order"
import { Fallback } from "../../../components/UI/Fallback"



type Props = {
    order?: IOrder
}

export default function ShippingTracking({ order }: Props) {
    return (
        <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 mr-2 text-blue-600" />
                Địa chỉ giao hàng
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <p className="font-medium">{order?.shippingTracking.fullName}</p>
                    <p>{order ? order.shippingTracking.address : <Fallback className="h-4 w-20" />}</p>
                    <p>{order ? order.shippingTracking.district : <Fallback className="h-4 w-20" />}, {order ? order.shippingTracking.city : <Fallback className="h-4 w-20" />}</p>
                    <p>{order ? order.shippingTracking.postalCode : <Fallback className="h-4 w-20" />}, {order ? order.shippingTracking.country : <Fallback className="h-4 w-20" />}</p>
                </div>
                {/* <div>
                    <div className="flex items-center mb-2">
                        <FaTruck className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="font-medium">Vận chuyển:</span>
                    </div>
                    <p>Đơn vị: {order?.shippingTracking.carrier}</p>
                    <p>Mã vận đơn: {order?.shippingTracking.trackingNumber}</p>
                    <p>Phí ship: {formatCurrency(order?.shippingTracking.shippingFee)}</p>
                    <span className={`inline-block mt-2 px-2 py-1 rounded text-sm ${getStatusColor(order?.shippingTracking.status)}`}>
                        {order?.shippingTracking.status}
                    </span>
                </div> */}
            </div>
        </div>
    )
}