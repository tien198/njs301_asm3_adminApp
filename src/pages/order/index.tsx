import type { IOrder } from "../../interfaces/order";

import { useEffect, useState } from "react";

import Header from "./comps/header";
import ActionButtons from "./comps/actionBtns";
import CustomerInfor from "./comps/customerInfor";
import ShippingTracking from "./comps/shippingTracking";
import OrderItems from "./comps/orderItems";
import OrderSummary from "./comps/orderSummary";
import { useLoaderData } from "react-router";
import type { OrderLoader } from "./loader";



export default function Order() {
    const [order, setOrder] = useState<IOrder>();
    const loader = useLoaderData<OrderLoader>()
    useEffect(() => {
        loader.order.then(i => setOrder(i))
            .catch(error => console.error(error))
    }, [loader])

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">

                {/* Header */}
                <Header order={order} />

                <div className="p-6 space-y-6">

                    {/* Customer & Payment Info */}
                    <CustomerInfor order={order} />

                    {/* Shipping Address */}
                    <ShippingTracking order={order} />

                    {/* Order Items */}
                    <OrderItems order={order} />

                    {/* Order Summary */}
                    <OrderSummary order={order} />

                    <ActionButtons />
                </div>
            </div>
        </div>
    );
}