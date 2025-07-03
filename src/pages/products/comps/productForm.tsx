import { useFetcher, useNavigation, type HTMLFormMethod } from "react-router";
import F, { Input, TextArea } from "../../../components/UI/input";
import useTwoWayBinding from "../../../hooks/useTwoWayBinding";
import type { IProduct } from "../../../interfaces/product";
import useValidate from "../../../hooks/useValidate";
import { isNotNull } from "../../../ulties/inputValidationUltil/validate";
import ErrorMsg from "../../../components/UI/ErrorMsg";
import { useRef, useState, type FormEvent } from "react";


type Props = {
    product?: Partial<IProduct>
    action?: string
    method: HTMLFormMethod
    isLoading?: boolean
}

export default function ProdForm({ product, action, method, isLoading = false }: Props) {

    const { state } = useNavigation()

    const fileInputRef = useRef<HTMLInputElement>(null)


    const [name, onChangeName] = useTwoWayBinding(product?.name ?? '')
    const [category, onChangeCategory] = useTwoWayBinding(product?.category ?? '')
    const [quantity, onChangeQuantity] = useTwoWayBinding(product?.totalQuantity ?? '0')
    const [price, onChangePrice] = useTwoWayBinding(product?.price ?? '0')
    const [shortDesc, onChangeShortDesc] = useTwoWayBinding(product?.short_desc ?? '')
    const [longDesc, onChangeLongDesc] = useTwoWayBinding(product?.long_desc ?? '')

    const invalidName = useValidate('Name', name, [isNotNull])
    const invalidCategory = useValidate('Category', category, [isNotNull])
    const invalidQuantity = useValidate('Quantity', quantity, [isNotNull])
    const invalidPrice = useValidate('Price', price, [isNotNull])
    const invalidShortDesc = useValidate('Short description', shortDesc, [isNotNull])
    const invalidLongDesc = useValidate('Long description', longDesc, [isNotNull])

    const [isSubmited, setIsSubmited] = useState(false)
    const submit = useFetcher().submit

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        setIsSubmited(true)

        if (invalidName || invalidCategory || invalidQuantity || invalidPrice || invalidShortDesc || invalidLongDesc)
            return

        const formData = new FormData()

        // Thêm các text fields
        formData.append('name', name)
        formData.append('category', category)
        formData.append('price', String(price))
        formData.append('totalQuantity', String(quantity))
        formData.append('short_desc', shortDesc)
        formData.append('long_desc', longDesc)

        // Thêm files nếu có
        if (fileInputRef.current?.files) {
            const files = fileInputRef.current.files
            for (let i = 0; i < files.length; i++) {
                formData.append('files', files[i])
            }
        }


        submit(formData, {
            action, method, encType: 'multipart/form-data'
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <F.Container label="Product Name">
                <Input placeholder="Enter Product Name" disabled={isLoading}
                    name='name' value={name} onChange={onChangeName} />
                <ErrorMsg msg={(isSubmited && invalidName) ? invalidName : ''} />
            </F.Container>

            <F.Container label="Price">
                <Input placeholder="Enter Price" disabled={isLoading}
                    name='price' value={price} onChange={onChangePrice} />
                <ErrorMsg msg={(isSubmited && invalidPrice) ? invalidPrice : ''} />

            </F.Container>

            <F.Container label="Category">
                <Input placeholder="Enter Category" disabled={isLoading}
                    name='category' value={category} onChange={onChangeCategory} />
                <ErrorMsg msg={(isSubmited && invalidCategory) ? invalidCategory : ''} />

            </F.Container>

            <F.Container label="Quantity">
                <Input placeholder="Enter In Stoke Quantity" disabled={isLoading} type="number"
                    name='totalQuantity' value={quantity} onChange={onChangeQuantity} />
                <ErrorMsg msg={(isSubmited && invalidQuantity) ? invalidQuantity : ''} />

            </F.Container>

            <F.Container label="Short Description" >
                <TextArea placeholder="Enter Short Description" disabled={isLoading}
                    rows={3}
                    name='long_desc' value={shortDesc} onChange={onChangeShortDesc} />
                <ErrorMsg msg={(isSubmited && invalidShortDesc) ? invalidLongDesc : ''} />
            </F.Container>

            <F.Container label="Long Description">
                <TextArea placeholder="Enter Long Description" disabled={isLoading}
                    rows={5}
                    name='short_desc' value={longDesc} onChange={onChangeLongDesc} />
                <ErrorMsg msg={(isSubmited && invalidLongDesc) ? invalidLongDesc : ''} />

            </F.Container>

            {/* <F.Container label="Upload image (5 images)">
                    <Input placeholder="image"
                        name='file' type="file" multiple accept="image/*" />
                </F.Container> */}

            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Upload image (5 images)</label>
                <input disabled={isLoading} ref={fileInputRef}
                    placeholder="image"
                    type="file"
                    name="files"
                    multiple
                    accept="image/*"
                    className="mt-2"
                />
            </div>

            <button disabled={state === 'submitting'}
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
            >
                Submit
            </button>
        </form>
    )
}