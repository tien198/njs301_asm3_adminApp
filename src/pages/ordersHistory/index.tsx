import { useLoaderData } from "react-router";
import StatsCard from "./comps/stateCard";
import Table from "./comps/table";
import type { OrderLoader } from "./loader";
import { useEffect, useState } from "react";

export default function OrderHistory() {
  const loader = useLoaderData<OrderLoader>()
  const [userCount, setUserCount] = useState(NaN)
  const [orderCount, setOrderCount] = useState(NaN)
  useEffect(() => {
    loader.userCount.then(i =>
      i !== null && i !== undefined && typeof i === 'number' && setUserCount(i)
    )

    loader.orderCount.then(i =>
      i !== null && i !== undefined && typeof i === 'number' && setOrderCount(i)
    )
  }, [loader])


  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mb-10">
        <StatsCard label="Clients" value={String(userCount)} />
        <StatsCard label="Earnings of Month" value="NaN VND" />
        <StatsCard label="New Orders" value={String(orderCount)} />
      </div>
      <Table />
    </div>
  );

}