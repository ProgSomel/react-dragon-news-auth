import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"


const RightSideNav = () => {
  return (
    <div>
      <div className='space-y-3 mb-6'>
        <h2 className="text-2xl font-bold ">login with</h2>
        <button className="btn btn-outline w-full text-blue-400">
        <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full ">
        <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>
      {/* Find Us on  */}
      <div className=' mb-8'>
        <h2 className=" font-bold mb-4 ">Find Us On</h2>
        <a className='flex items-center gap-3 p-4 font-extralight border rounded-t-lg' href="">
        <FaFacebook></FaFacebook>
        Facebook</a>

        <a className='flex items-center gap-3 p-4 font-extralight border ' href="">
        <FaTwitter></FaTwitter>
        Twitter</a>

        <a className='flex items-center gap-3 p-4 font-extralight border rounded-b-lg ' href="">
        <FaInstagram></FaInstagram>
        Instagram</a>
      </div>

      {/* q Zone  */}
      <div className='space-y-3 mb-6 bg-gray-100 p-3'>
        <h2 className=" font-bold ">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
        
      </div>
    </div>
  );
};

export default RightSideNav;
