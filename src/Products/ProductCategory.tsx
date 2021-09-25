import React from 'react';
import { BiListCheck } from 'react-icons/bi';

import "./ProductCategory.css";

type ProductCategoryProp = {
    categoryList: string[]
    onCategoryClicked: (category: string) => void,
}


const ProductCategory: React.FC<ProductCategoryProp> = ({categoryList, onCategoryClicked}) => {

    return (
        <div className="product-category">
            <p>Shop by category</p>
            <div className="product-category-buttons">
                {categoryList.map((category)=>{
                    return <button key={category} onClick={()=>onCategoryClicked(category)}>{category}</button>
                })}
                <button onClick={()=>onCategoryClicked("reset")}><BiListCheck /></button>
            </div>
        </div>
        
    )
}

export default ProductCategory;