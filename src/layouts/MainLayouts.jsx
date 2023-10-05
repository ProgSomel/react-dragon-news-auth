import { Outlet } from "react-router-dom";

const MainLayouts = () => {
    return (
        <div className="max-w-screen-2xl my-8 text-center mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;