import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div >
            <div className="p-4 space-y-3">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full text-blue-700">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Google
                </button>
            </div>
            <div className="p-4">
                <h2 className="text-3xl my-2">Find Us On</h2>
                <a className="p-4 flex gap-2 items-center text-lg border rounded-t-lg" href="">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className="p-4 flex gap-2 items-center text-lg border-x" href="">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a className="p-4 flex gap-2 items-center text-lg border rounded-b-lg" href="">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* Q- zone */}
            <div className="p-4 bg-slate-100">
                <h2 className="text-3xl my-2">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;