import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="text-center mt-20">
                <h2 className="text-xl text-[#FF3811] font-bold mb-5">Popular Products</h2>
                <h3 className="text-5xl font-bold mb-5">Browse Our Products</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable.   </p>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-12">
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Product;