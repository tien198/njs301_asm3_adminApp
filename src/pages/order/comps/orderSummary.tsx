import type { IOrder } from "../../../interfaces/order"
import { formatCurrency } from "../ultilies/formatCurrency"

type Props = {
    order?: IOrder
}

export default function OrderSummary({ order }: Props) {
    return (
        <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Tổng kết đơn hàng</h3>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <span>Tạm tính:</span>
                    <span>{formatCurrency((order?.totalPrice || 0) - (order?.tax || 0) - (order?.shippingTracking.shippingFee || 0))}</span>
                </div>
                <div className="flex justify-between">
                    <span>Thuế:</span>
                    <span>{formatCurrency(order?.tax)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Phí vận chuyển:</span>
                    <span>{formatCurrency(order?.shippingTracking.shippingFee)}</span>
                </div>
                {order?.discountCode && (
                    <div className="flex justify-between text-green-600">
                        <span>Mã giảm giá ({order?.discountCode}):</span>
                        <span>-10%</span>
                    </div>
                )}
                <hr className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                    <span>Tổng cộng:</span>
                    <span className="text-blue-600">{formatCurrency(order?.totalPrice)}</span>
                </div>
            </div>
        </div>
    )
}