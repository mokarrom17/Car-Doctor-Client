import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'
import team4 from '../../../assets/images/team/4.jpg'
import team5 from '../../../assets/images/team/5.jpg'
import team6 from '../../../assets/images/team/6.jpg'
const Team = () => {
    return (
        <div>
            <div className="text-center">
                <h2 className="text-xl text-[#FF3811]">Team</h2>
                <h2 className="text-3xl font-semibold">Meet Our Team</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 mt-6'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                    </div>
                    <div className='flex justify-center pb-2'>
                        <img className='mr-2' src={team4} alt="" />
                        <img className='mr-2' src={team5} alt="" />
                        <img src={team6} alt="" />
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                    </div>
                    <div className='flex justify-center pb-2'>
                        <img className='mr-2' src={team4} alt="" />
                        <img className='mr-2' src={team5} alt="" />
                        <img src={team6} alt="" />
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                    </div>
                    <div className='flex justify-center pb-2'>
                        <img className='mr-2' src={team4} alt="" />
                        <img className='mr-2' src={team5} alt="" />
                        <img src={team6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;