import type { IProduct } from "../../interfaces/product";
import ProductItem from "./ProductIem";

export default function ProductsFallback() {
    return (
        <>
            <ProductItem product={new Object() as IProduct} isFallback={true} />
            <ProductItem product={new Object() as IProduct} isFallback={true} />
            <ProductItem product={new Object() as IProduct} isFallback={true} />
        </>
    );
}
