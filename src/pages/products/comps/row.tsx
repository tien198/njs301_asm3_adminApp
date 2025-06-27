import type { IProduct } from "../../../interfaces/product";

import { Link } from "react-router";
import { AppRoutes_Abs } from "../../../ulties/appRoutes";



type Props = {
  product: IProduct
  isGray?: boolean
  deleteProdFnc: (prodId: string) => void
}
export default function ProductRow({ product, isGray = false, deleteProdFnc }: Props) {

  return (
    <tr className={`${isGray ? 'bg-gray-100' : ''} hover:bg-gray-200 text-gray-600`}>
      <td className="px-4 py-2 border border-gray-300">{product.id}</td>
      <td className="px-4 py-2 border border-gray-300">{product.name}</td>
      <td className="px-4 py-2 border border-gray-300">{product.price.toLocaleString()} VNĐ</td>
      <td className="px-4 py-2 border border-gray-300">
        <img src={product.img1} alt={product.name} className="w-10 h-12 object-cover" />
      </td>
      <td className="px-4 py-2 border border-gray-300 capitalize">{product.category}</td>
      <td className="px-4 py-2 border border-gray-300">
        <div className="flex gap-4">
          <Link to={AppRoutes_Abs.EditProduct + '/' + product.id} className="bg-green-500 text-white px-4 py-2 rounded hover:cursor-pointer">Update</Link>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:cursor-pointer"
            onClick={() => deleteProdFnc(product.id)}>Delete</button>

        </div>
      </td>
    </tr>
  );
}