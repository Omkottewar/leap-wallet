import { Link } from "react-router-dom";
import { Logo1 } from "../assets";

const Footer = () => {
  return (
    <div className="bg-[#D7F5E0] p-10 lg:p-32 mt-32">
      <img className="w-32" src={Logo1} alt="" />
      <div className="flex flex-wrap max-lg:flex-col lg:w-[1200px] gap-20 mt-10 ">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[#4BB971]">Products</h1>
          <Link to="/mobile">Mobile App</Link>
          <Link to="/desktop">Extension</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/">Leap Validator</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[#4BB971]">Ecosystem</h1>
          <Link to="/chains">Chains</Link>
          <Link to="/dapps">dApps</Link>
          <Link to="/validators">Validators</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[#4BB971]">For Builders</h1>
          <Link to="/elements">Elements</Link>
          <Link to="/snaps">Snaps</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[#4BB971]">Resources</h1>
          <Link to="/blog">Blog</Link>
          <Link to="/support">Support</Link>
          <Link to="/security">Security</Link>
          <Link to="/changelog">Changelog</Link>
          <Link to="/media-kit">Media Kit</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[#4BB971]">Community</h1>
          <Link to="/twitter">Twitter</Link>
          <Link to="/reddit">Reddit</Link>
          <Link to="/farcaster">Farcaster</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[#4BB971]">Company</h1>
          <Link to="/careers">
            Careers{" "}
            <span className="bg-[#32DA6D] text-[10px] p-1 rounded-full">
              WE'RE HIRING!
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
