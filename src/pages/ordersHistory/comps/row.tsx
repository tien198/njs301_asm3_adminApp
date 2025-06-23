import type { IOrder } from "../../../interfaces/order"

type Props = {
    order: IOrder
}

export default function Row({ order }: Props) {
    return (
        <tr className="border-t text-sm hover:bg-gray-50 transition">
            <td className="p-2">{order.id}</td>
            <td className="p-2">{order.userName}</td>
            <td className="p-2">{order.shippingTracking.phone}</td>
            <td className="p-2">{order.shippingTracking.address}</td>
            <td className="p-2">{order.totalPrice}</td>
            <td className="p-2">{order.shippingTracking.status}</td>
            <td className="p-2">{order.status}</td>
            <td className="p-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                    View
                </button>
            </td>
        </tr>
    );
}