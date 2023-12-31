import { useEffect, useState } from "react";
import Job from "../Job/Job";
// import { data } from "autoprefixer";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold">Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7 mb-16">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="justify-center flex mb-16">
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button onClick={() => setDataLength(jobs.length)} className="bg-[#7E90FE]  px-4 py-2 rounded-lg font-semibold text-white">Show All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;