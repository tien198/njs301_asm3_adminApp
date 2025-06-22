import type { IProduct } from "../../interfaces/product";

import { Fallback } from "../UI/Fallback";
// css
import classes from "./ProductItem.module.css";

interface DetailProps {
  product: IProduct;
  className?: string;
  isFallback?: boolean;
}
export default function ProductItem({ product, className, isFallback = false }: DetailProps) {

  return (
    <section
      className={`flex flex-col gap-2 h-full justify-between items-center text-center
        ${classes["product-item"]} 
        // fade-in is definded in index.css
        fade-in
        ${className}`}
    >
      {isFallback
        ? <Fallback className={classes['img']} />
        : <img src={product.img1} alt={product.name}
          className={`object-contain ${classes['img']}`} />
      }
      <p>{isFallback ?
        product.name
        : product.name}</p>
      <span className="text-zinc-500">
        {isFallback ?
          <Fallback />
          : product?.price.toLocaleString()} VND
      </span>
    </section>
  );
}
