import { useEffect, useState } from 'react';

import ProductCategory from './ProductCategory';
import ProductGrid from './ProductGrid';

import { ProductType, CartType, CartFunctionsType } from './Types';
import "./Products.css";


type ProductsProp = {
    data: object[],
}

const flatData = (data: object[]): ProductType[] => {
    let prod: ProductType[] = [];
    data.forEach((product:any)=>{
        prod.push({
            productId: product.productId.value,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
            category: product.category,
        })
    });
    return prod;
}

const getCategories = (products: ProductType[]): string[] => {

    let categories: string[] = [];
    products.forEach(product => {
        if(product.category !== "")
            categories.push(product.category);
    })
    const catSet = new Set(categories);

    return Array.from(catSet);
}

const Products: React.FC<ProductsProp> = ({data}) =>{
    const [products, setProducts] = useState<ProductType[]>([]);
    const [cart, setCart] = useState<CartType[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
    const [categoryList, setCategoryList] = useState<string[]>([]);
    
    useEffect(() => {
        console.log("USE-EFFECT");
        
        let prod: ProductType[] = flatData(data);
        setProducts(prod);
        setFilteredProducts(prod);

        setCategoryList(getCategories(prod));
    },[data]);

    const filterProducts = (category: string): void => {
        if(category === "reset"){
            setFilteredProducts(products);
        }else{
            let data = products.filter((product : ProductType)=>{
                return product.category === category;
            })
            setFilteredProducts(data);
        }
    }

    const cartFunctions: CartFunctionsType = {
        add: (product) => {
            let data: CartType[] = [...cart];

            //check if item in cart
            var index = data.findIndex(prod => prod.productId === product.productId);

            if(index !== -1){
                data = [...cart];
                data[index].quantity += 1;
            }else{
                let item: CartType = {
                    ...product,
                    quantity: 1,
                };
                data = [...cart, item];
            }
            setCart(data);
        },
        remove: (productId) => {
            let data: CartType[] = [...cart];
            data = data.filter(prod => prod.productId !== productId);
            setCart(data);
        },
        increaseQty: (productId) => {
            let data: CartType[] = [...cart];
            var index = data.findIndex(prod => prod.productId === productId);
            data[index].quantity += 1;
            setCart(data);
        },
        reduceQty: (productId) => {
            let data: CartType[] = [...cart];
            var index = data.findIndex(prod => prod.productId === productId);
            data[index].quantity -= 1;
            if(data[index].quantity === 0){
                data = data.filter(prod => prod.productId !== productId);
            }
            setCart(data);
        },
    }

    return (
        <div className="products">
            <ProductCategory categoryList={categoryList} onCategoryClicked={filterProducts}/>
            <ProductGrid products={filteredProducts} cartList={cart} {...cartFunctions}/>
        </div>
    )
}

export default Products;