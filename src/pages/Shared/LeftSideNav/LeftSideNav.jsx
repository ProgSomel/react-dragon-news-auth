import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        fetch("./categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">All Categories</h2>
            {
                categories.map((category)=><NavLink to={`/category/${category.id}`} className=" block p-2 ml-8 " key={category.id}>  {category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;