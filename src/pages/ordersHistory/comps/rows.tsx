import type { IOrder } from "../../../interfaces/order";
import { useAsyncValue } from "react-router";
import Row from "./row";

export default function Rows() {

    const orders = useAsyncValue() as IOrder[] | undefined;
    return orders
        ? orders.map((order, idx) => (
            <Row key={idx} order={order} />
        ))
        : <tr>
            <td colSpan={8}>Not found orders</td>
        </tr>

}