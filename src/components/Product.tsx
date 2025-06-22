import { type PropsWithChildren } from "react"

import style from './product.module.css'
import { AppRoutes_Abs } from "../ulties/appRoutes"
import { Link } from "react-router"
import { ServerAPI } from "../ulties/serverAPIs"
import type { IProduct } from "../interfaces/product"

type Props = { product: IProduct } & PropsWithChildren

export default function ProductComp({ product, children }: Props) {
    return (
        <article className={`card ${style['product-item']}`}>
            <Link to={AppRoutes_Abs.EditProduct + '/' + product.id} className='product-link'>
                <header className="card__header">
                    <h1 className={style['product__title']}>{product.name}</h1>
                </header>
                <div className="card__image">
                    <img src={ServerAPI.base + product.img1} alt={product.name} />
                </div>
                <div className="card__content">
                    <h2 className={style['product__price']}>${product.price}</h2>
                    <p className={style['product__description']}>{product.long_desc}</p>
                </div>
            </Link>
            <div className="card__actions">
                {children}
            </div>
        </article>

    )
}
