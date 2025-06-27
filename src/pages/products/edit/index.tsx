import type { ProdLoader } from "./loader";

import { Await, useLoaderData, useNavigate } from "react-router";
import { AppRoutes_Abs as AbsRoute } from "../../../ulties/appRoutes";
import InformModal from "../../../components/modal/InformModal";
import ProdForm from "../comps/productForm";
import { Suspense } from "react";

export default function EditProduct() {

    const loader = useLoaderData<ProdLoader>()
    const nav = useNavigate()

    return (
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded shadow">
            <Suspense fallback={<ProdForm method="put" isLoading />}>
                <Await resolve={loader.prod}>{prod => {

                    if (!prod) throw Response.json(null, {
                        statusText: 'Product not found'
                    })
                    return <ProdForm method="put" product={prod} />
                }
                }</Await>
            </Suspense>
            <InformModal oncloseFnc={() => nav(AbsRoute.Products)} >
                Edit Success !
            </InformModal>
        </div>
    );
}

