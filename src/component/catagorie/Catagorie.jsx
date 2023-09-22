/* eslint-disable react/prop-types */

const Catagorie = ({ catagorie }) => {
    const { logo, category_name, availability } = catagorie;
    return (
        <div className="bg-slate-200 px-4 py-10 rounded-xl">
            <img className="mb-3" src={logo} alt="" />
            <h2 className="text-xl font-semibold mb-1">{category_name}</h2>
            <p>{availability}</p>
        </div>
    );
};

export default Catagorie;