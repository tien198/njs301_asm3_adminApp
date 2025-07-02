import { Link } from "react-router";
import type { IOrder } from "../../../interfaces/order"
import { AppRoutes_Abs } from "../../../ulties/appRoutes";

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
            <td className="p-2">{order.totalPrice.toLocaleString()} vnđ</td>
            <td className="p-2">{order.shippingTracking.status}</td>
            <td className="p-2">{order.status}</td>
            <td className="p-2">
                <Link to={AppRoutes_Abs.Order + '/' + order.id} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                    View
                </Link>
            </td>
        </tr>
    );
}