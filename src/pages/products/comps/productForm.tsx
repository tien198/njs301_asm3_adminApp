import { Form, type HTMLFormMethod } from "react-router";
import F, { Input, TextArea } from "../../../components/UI/input";
import useTwoWayBinding from "../../../hooks/useTwoWayBinding";
import type { IProduct } from "../../../interfaces/product";


type Props = {
    product?: Partial<IProduct>
    action?: string
    method: HTMLFormMethod
    isLoading?: boolean
}

export default function ProdForm({ product, action, method, isLoading = false }: Props) {

    const [name, onChangeName] = useTwoWayBinding(product?.name ?? '')
    const [category, onChangeCategory] = useTwoWayBinding(product?.category ?? '')
    const [price, onChangePrice] = useTwoWayBinding(product?.price ?? '0')
    const [shortDesc, onChangeShortDesc] = useTwoWayBinding(product?.short_desc ?? '')
    const [longDesc, onChangeLongDesc] = useTwoWayBinding(product?.long_desc ?? '')

    return (
        <Form action={action} method={method} encType="multipart/form-data">
            <F.Container label="Product Name">
                <Input placeholder="Enter Product Name" disabled={isLoading}
                    name='name' value={name} onChange={onChangeName} />
            </F.Container>

            <F.Container label="Price">
                <Input placeholder="Enter Price" disabled={isLoading}
                    name='price' value={price} onChange={onChangePrice} />
            </F.Container>

            <F.Container label="Category">
                <Input placeholder="Enter Category" disabled={isLoading}
                    name='category' value={category} onChange={onChangeCategory} />
            </F.Container>

            <F.Container label="Short Description" >
                <TextArea placeholder="Enter Short Description" disabled={isLoading}
                    rows={3}
                    name='long_desc' value={shortDesc} onChange={onChangeShortDesc} />
            </F.Container>

            <F.Container label="Long Description">
                <TextArea placeholder="Enter Long Description" disabled={isLoading}
                    rows={5}
                    name='short_desc' value={longDesc} onChange={onChangeLongDesc} />
            </F.Container>

            {/* <F.Container label="Upload image (5 images)">
                    <Input placeholder="image"
                        name='file' type="file" multiple accept="image/*" />
                </F.Container> */}

            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Upload image (5 images)</label>
                <input disabled={isLoading}
                    placeholder="image"
                    type="file"
                    name="files"
                    multiple
                    accept="image/*"
                    className="mt-2"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
            >
                Submit
            </button>
        </Form>
    )
}