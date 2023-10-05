import { Outlet } from "react-router-dom";

const MainLayouts = () => {
    return (
        <div className="max-w-screen-xl my-8 px-4 md:px-8 lg:px-16 mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;