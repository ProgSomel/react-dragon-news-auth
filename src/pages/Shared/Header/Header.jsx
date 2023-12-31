import logo from "../../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center">
            <div className="flex justify-center">
            <img src={logo} alt="" />
            
            </div>
            <p className="mt-5">Journalism Without Fear or Favour</p>
            <p className="text-xl mt-3">{
                moment().format("dddd, MMMM D, YYYY")
            }</p>
        </div>
    );
};

export default Header;