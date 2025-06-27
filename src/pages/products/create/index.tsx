import { useNavigate } from "react-router";
import { AppRoutes_Abs as AbsRoute } from "../../../ulties/appRoutes";
import InformModal from "../../../components/modal/InformModal";
import ProdForm from "../comps/productForm";

export default function CreateProduct() {

    const nav = useNavigate()

    return (
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded shadow">
            <ProdForm action={AbsRoute.CreateProduct} method="post" />
            <InformModal oncloseFnc={() => nav(AbsRoute.Products)} >
                Create Success !
            </InformModal>
        </div>
    );
}

