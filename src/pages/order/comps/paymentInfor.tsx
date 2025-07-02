import { FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import type { IOrder } from "../../../interfaces/order";




function getPaymentMethodText(method: string): string {
    switch (method) {
        case 'cod': return 'Thanh toán khi nhận hàng';
        case 'credit_card': return 'Thẻ tín dụng';
        case 'paypal': return 'PayPal';
        case 'momo': return 'MoMo';
        default: return method;
    }
}

function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}


type Props = {
    order: IOrder
}

export default function PaymentInfor({ order }: Props) {
    return (
        <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
                <FaCreditCard className="w-5 h-5 mr-2 text-blue-600" />
                Thông tin thanh toán
            </h3>
            <div className="space-y-2">
                <p><span className="font-medium">Phương thức:</span> {getPaymentMethodText(order?.paymentMethod)}</p>
                <p><span className="font-medium">Trạng thái:</span>
                    <span className={`ml-2 px-2 py-1 rounded text-sm ${order?.isPaid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {order?.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}
                    </span>
                </p>
                {order?.paidAt && (
                    <p className="flex items-center">
                        <FaCalendarAlt className="w-4 h-4 mr-2 text-gray-500" />
                        {formatDate(order?.paidAt)}
                    </p>
                )}
            </div>
        </div>
    )
}