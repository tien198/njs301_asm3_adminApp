import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import type { IOrder } from "../../../interfaces/order";
import { Fallback } from "../../../components/UI/Fallback";



type Props = {
    order?: IOrder
}
export default function CustomerInfor({ order }: Props) {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <FaUser className="w-5 h-5 mr-2 text-blue-600" />
                    Thông tin khách hàng
                </h3>
                <div className="space-y-2">
                    <p><span className="font-medium">Tên:</span> {order ? order.userName : <Fallback className="h-4 w-20" />}</p>
                    <p className="flex items-center">
                        <FaEnvelope className="w-4 h-4 mr-2 text-gray-500" />
                        {order ? order.shippingTracking.email : <Fallback className="h-4 w-20" />}
                    </p>
                    <p className="flex items-center">
                        <FaPhone className="w-4 h-4 mr-2 text-gray-500" />
                        {order ? order.shippingTracking.phone : <Fallback className="h-4 w-20" />}
                    </p>
                </div>
            </div>
        </div>
    )
}