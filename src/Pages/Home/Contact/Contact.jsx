import { SlCalender } from "react-icons/sl"
import { BsTelephone } from "react-icons/bs"
import { HiOutlineLocationMarker } from "react-icons/hi"

const Contact = () => {
    return (
        <div className=" grid lg:grid-cols-3 p-20 mt-10 rounded-xl bg-neutral text-neutral-content ">
            <div className="flex gap-5">
                <SlCalender className="text-5xl"></SlCalender>
                <p>We are open monday-friday<br />7:00 am - 9:00 pm</p>
            </div>
            <div className="flex gap-5">
                <BsTelephone className="text-5xl"></BsTelephone>
                <p>Have a question?<br />+2546 251 2658</p>
            </div>
            <div className="flex gap-5">
                <HiOutlineLocationMarker className="text-5xl text-[#FF3811]"></HiOutlineLocationMarker>
                <p>Need a repair? our address<br />Liza Street, New York</p>
            </div>
        </div >
    );
};

export default Contact;