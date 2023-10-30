import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, title, price, img } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-center">{title}</h2>
                    <p className="text-[#FF3811] font-semibold">Price:${price}</p>
                    <div className="card-actions">
                        <Link to={`/book/${_id}`}>
                            <button className="btn btn-primary">Check Out</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;