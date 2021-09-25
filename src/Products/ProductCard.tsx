import { IoIosAddCircleOutline } from 'react-icons/io';

import "./ProductCard.css";
import { CartFunctionsType, CartType, ProductType } from './Types';

type ProductCardProp = {
    product: ProductType,
    cartList: CartType[],
} & CartFunctionsType

const ProductCard:React.FC<ProductCardProp> = (prop) => {
    const { product, cartList } = prop;

    return (
        <div className="product-card">
            <img className="product-image" src={product.imageUrl} alt="asa" loading="lazy"/>
            <p className="product-name">{product.name.substring(0,50)}</p>
            <p className="product-price">${product.price}</p>

            { !cartList.some(cart => cart.productId === product.productId) ? 
                <button className="product-addtocart" onClick={()=>prop.add(product)}><IoIosAddCircleOutline /> Add to Cart</button>
                :
                <div className="cart-button">
                    <button onClick={()=>prop.increaseQty(product.productId)}>+</button>
                    <button onClick={()=>prop.remove(product.productId)}>Remove from Cart ({cartList.filter(cart => {
                        return cart.productId === product.productId;
                    })[0].quantity})</button>
                    <button onClick={()=>prop.reduceQty(product.productId)}>-</button>
                </div>
            }

            
            
        </div>
    )
}

export default ProductCard;
