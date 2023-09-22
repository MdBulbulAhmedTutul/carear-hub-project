
const Banner = () => {
    return (
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between bg-slate-100 mt-16 mb-16 px-6 rounded-sm">
            <div>
                <h2 className="text-4xl font-bold text-black mb-2">One Step <br /> Closer To Your <br /> <span className="text-[#7E90FE]">Dream Job</span></h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-lg text-white font-semibold mt-5">Get Startted</button>
            </div>
            <div>
                <img className="w-full" src="../../../images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;