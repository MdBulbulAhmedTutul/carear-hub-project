/* eslint-disable react/prop-types */
import {BiMap} from "react-icons/bi"
import {AiFillDollarCircle} from "react-icons/ai"
const Job = ({ job }) => {
    const { logo, job_title, company_name, location, remote_or_onsite, job_type, salary } = job;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <img className="w-32" src={logo} alt="" />
                <h2 className="card-title">{job_title}</h2>
                <h2 className="text-xl font-medium">{company_name}</h2>
                <div className="flex justify-evenly ">
                    <div>
                        <button className="border border-[#7E90FE] font-semibold rounded-lg px-4 py-2">{remote_or_onsite}</button>
                    </div>
                    <div>
                        <button className="border border-[#7E90FE] font-semibold rounded-lg px-4 py-2">{job_type}</button>
                    </div>
                </div>
                <div className="flex justify-evenly">
                    <div className="flex items-center">
                        <p><BiMap></BiMap></p>
                        <p>{location}</p>
                    </div>
                    <div className="flex items-center">
                        <p><AiFillDollarCircle></AiFillDollarCircle></p>
                        <p>Sallary: {salary}</p>
                    </div>
                </div>
                <div className="card-actions justify-start">
                    <button className="bg-[#7E90FE] px-4 py-2 rounded-lg font-semibold text-white">Veiw Detail</button>
                </div>
            </div>
        </div>
    );
};

export default Job;