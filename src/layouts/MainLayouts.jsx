import { Outlet } from "react-router-dom";

const MainLayouts = () => {
    return (
        <div className="max-w-screen-lg my-8  mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;