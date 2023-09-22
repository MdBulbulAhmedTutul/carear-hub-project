import { useEffect, useState } from "react";
import Catagorie from "../catagorie/Catagorie";

const CatagoriList = () => {
    const [catagories, setCatagorie] = useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCatagorie(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl text-center font-semibold">Job Catagorie List</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 mb-16">
                {
                    catagories.map(catagorie => <Catagorie key={catagorie.id} catagorie={catagorie}></Catagorie>)
                }
            </div>
        </div>
    );
};

export default CatagoriList;