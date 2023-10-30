
const ProductCard = ({ product }) => {
    const { img, title, rating, price } = product
    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl h-[400px]">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="text-2xl">Rating:{rating}</h2>
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <p className="text-[#FF3811] font-semibold">Price:${price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;