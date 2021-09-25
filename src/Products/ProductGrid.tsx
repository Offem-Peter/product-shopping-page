import ProductCard from "./ProductCard";
import "./ProductGrid.css";
import { CartFunctionsType, CartType, ProductType } from "./Types";

type ProductGridProp =  {
    products: ProductType[],
    cartList: CartType[],

} & CartFunctionsType

const ProductGrid:React.FC<ProductGridProp> = (prop) => {
    const {products} = prop;

    return (    
       <div className="product-grid">
            {products.map((product: ProductType) =>
                <ProductCard key={product.productId} product={product} {...prop}/>
            )}
        </div>
    )
}

export default ProductGrid;