import Row from './row';
import { useStore } from 'zustand';
import productsStore from '../store';
import type { ProdLoader } from '../loader';
import { useLoaderData } from 'react-router';
import { useEffect } from 'react';

export default function ProductTable() {
  const loader = useLoaderData<ProdLoader>()
  const setProducts = useStore(productsStore, state => state.setProducts);
  useEffect(() => {
    loader.products.then(prods => {
      if (prods)
        setProducts(prods)
    })
  }, [loader])
  const products = useStore(productsStore, state => state.products)
  const query = useStore(productsStore, state => state.query)
  const filtered = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <table border={1} className="table-auto w-full text-left ">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-4 border border-gray-300">ID</th>
          <th className="p-4 border border-gray-300">Name</th>
          <th className="p-4 border border-gray-300">Price</th>
          <th className="p-4 border border-gray-300">Image</th>
          <th className="p-4 border border-gray-300">Category</th>
          <th className="p-4 border border-gray-300">Edit</th>
        </tr>
      </thead>
      <tbody>
        {/* filtered is the products that match the query */}
        {filtered.length > 0
          ? filtered.map((p, index) =>
            <Row key={p.id} product={p} isGray={index % 2 !== 0} />)
          : <tr><td colSpan={6} className="text-center">No products found</td></tr>}
      </tbody>
    </table>
  );
}
