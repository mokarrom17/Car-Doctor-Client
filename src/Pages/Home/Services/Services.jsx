import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, serServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => serServices(data))
    }, [])
    return (
        <div>
            <div className="text-center mt-20">
                <h2 className="text-xl  text-[#FF3811] font-bold mb-5">Service</h2>
                <h3 className="text-5xl font-bold mb-5">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div>
                <div className="grid grid-cols-3 gap-6">
                    {
                        services.map(service =>
                            <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;