import type { OrderLoader } from "../loader";
import type { IOrder } from "../../../interfaces/order";

import { Await, useLoaderData } from "react-router";
import { Suspense } from "react";
import TrFallback from "../../../components/UI/trFallback";
import { useAsyncValue } from "react-router";
import Row from "./row";

export default function Table() {
    const loader: OrderLoader = useLoaderData();

    return (
        <div className="bg-white rounded shadow p-6">
            <h2 className="text-lg font-semibold mb-4">History</h2>
            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-2">ID User</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Phone</th>
                        <th className="p-2">Address</th>
                        <th className="p-2">Total</th>
                        <th className="p-2">Delivery</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    <Suspense fallback={<TrFallback />}>
                        <Await resolve={loader.orders}>
                            <RowsList />
                        </Await>
                    </Suspense>
                </tbody>
            </table>
        </div>
    );
}



function RowsList() {

    const orders = useAsyncValue() as IOrder[] | undefined;
    return orders
        ? orders.map((order, idx) => (
            <Row key={idx} order={order} />
        ))
        : <tr>
            <td colSpan={8}>Not found orders</td>
        </tr>

}