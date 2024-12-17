import { useState } from "react";
import {
  blog,
  chains,
  cross,
  dApps,
  dashboard,
  desktop,
  developers,
  ecosystem,
  gate,
  leapDashboard,
  like,
  Logo1,
  menu,
  mobileImg,
  pin,
  reddit,
  resources,
  security,
  settings,
  twitter,
  validators,
  wolf,
} from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navitems = [
    {
      name: "For Explorers",
      image: leapDashboard,
    },
    {
      name: "For Builders",
      image: developers,
    },
    {
      name: "Resources",
      image: resources,
    },
    {
      name: "Socials",
      image: like,
    },
  ];

  const mobNavitems = [
    {
      name: "Leap",
      image: leapDashboard,
      class: "bg-[#D7F5E0]",
    },
    {
      name: "Mobile App",
      image: mobileImg,
    },
    {
      name: "Browser Extension",
      image: desktop,
    },
    {
      name: "Leapboard",
      image: dashboard,
    },
    {
      name: "Ecosystem",
      image: ecosystem,
      class: "bg-[#F0EDFC]",
    },
    {
      name: "Chains",
      image: chains,
    },
    {
      name: "dApps",
      image: dApps,
    },
    {
      name: "Validators",
      image: validators,
    },
    {
      name: "Developers",
      image: developers,
      class: "bg-[#FCFBED]",
    },
    {
      name: "Elements",
      text: "Simplify onboarding for your Cosmos dApps.",
      image: settings,
    },
    {
      name: "MetaMask Snaps",
      text: "Enable MetaMask on your Cosmos dApps.",
      image: wolf,
    },
    {
      name: "Resources",
      image: resources,
      class: "bg-[#FCEDF3] ",
    },
    {
      name: "Security",
      text: "see how we keep your assets safe",
      image: security,
    },
    {
      name: "Blogs",
      text: "new , alpha ,tips and some tricks",
      image: blog,
    },
    {
      name: "support",
      text: "Enable MetaMask on your Cosmos dApps.",
      image: pin,
    },
    {
      name: "Socials",
      image: like,
      class: "bg-[#EDFCEE] ",
    },
    {
      name: "X",
      text: "Or twitter , whatever you call it",
      image: twitter,
    },
    {
      name: "Farchaster",
      text: "building a cosmos community on web3's social platform",
      image: gate,
    },
    {
      name: "Reddit",
      text: "Figuring this one out still, gonna be posting more memes here perhaps",
      image: reddit,
    },
  ];

  const navData = {
    leap: [
      {
        title: "Mobile App",
        text: "Explore interchain on-the-go. Smooth, secure & oh-so-clean!",
        image: mobileImg,
      },
      {
        title: "Desktop App",
        text: "Power up your interchain interactions",
        image: desktop,
      },
      {
        title: "Dashboard",
        text: "The one-stop dashboard for power users.",
        image: dashboard,
      },
    ],
    ecosystem: [
      {
        title: "Chains",
        text: "70+ chains supported. Which one's your fav?",
        image: chains,
      },
      {
        title: "dApps",
        text: "From NFTs to trading. There's something for everyone.",
        image: dApps,
      },
      {
        title: "Validators",
        text: "Validators and frens that we trust our assets with.",
        image: validators,
      },
    ],
    builders: [
      {
        title: "Elements",
        text: "Simplify onboarding for your Cosmos dApps.",
        image: settings,
      },
      {
        title: "MetaMask Snaps",
        text: "Enable MetaMask on your Cosmos dApps.",
        image: wolf,
      },
    ],
    resources: [
      {
        title: "Security",
        text: "see how we keep your assets safe",
        image: security,
      },
      {
        title: "Blogs",
        text: "new , alpha ,tips and some tricks",
        image: blog,
      },
      {
        title: "support",
        text: "Enable MetaMask on your Cosmos dApps.",
        image: pin,
      },
    ],
    socials: [
      {
        title: "X",
        text: "Or twitter , whatever you call it",
        image: twitter,
      },
      {
        title: "Farchaster",
        text: "building a cosmos community on web3's social platform",
        image: gate,
      },
      {
        title: "Reddit",
        text: "Figuring this one out still, gonna be posting more memes here perhaps",
        image: reddit,
      },
    ],
  };

  const [isDropdownVisible, setIsDropdownVisible] = useState("");
  const [isEcosystem, setIsEcosystem] = useState("");
  const [isMobile, setIsMobile] = useState("");

  const handleMouseEnter = (dropdown) => setIsDropdownVisible(dropdown);
  const handleMouseLeave = () => {
    setIsDropdownVisible("");
    setIsEcosystem("");
  };

  return (
    <div className="">
      <div className="nav flex justify-between items-center relative py-5 px-10 ">
        <div className="flex items-center gap-20">
          {/* Logo and Menu */}
          <div className="flex items-center">
            <div className="lg:hidden" onClick={() => setIsMobile(!isMobile)}>
              <img className="w-10" src={isMobile ? cross : menu} alt="Menu" />
            </div>
            <Link to="/">
              <div className="w-32">
                <img src={Logo1} alt="Logo" />
              </div>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="flex menu gap-10 max-lg:hidden">
            {navitems.map((items, index) => {
              const item = items.name;
              return (
                <div
                  key={index}
                  onMouseEnter={() =>
                    handleMouseEnter(item.toLowerCase().replace(/\s+/g, ""))
                  }
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
                  <p className="font-semibold cursor-default">{item}</p>
                  {isDropdownVisible === "forexplorers" &&
                    item === "For Explorers" && (
                      <div
                        className="nav-container absolute left-0  w-[650px] gap-5 flex shadow-2xl  cursor-pointer rounded-xl p-5"
                        onMouseEnter={() => handleMouseEnter("forexplorers")} // Ensure the dropdown stays open
                        onMouseLeave={handleMouseLeave} // Close when the mouse leaves this container
                      >
                        <ul className="w-52 rounded-lg">
                          <li
                            onMouseEnter={() => setIsEcosystem("leap")}
                            className="flex items-center gap-2 rounded-md m-2 px-2 py-2 cursor-pointer hover:bg-[#91e49e]"
                          >
                            <img
                              className="w-12 rounded-lg"
                              src={dashboard}
                              alt="Leap"
                            />
                            <p>Leap</p>
                          </li>
                          <li
                            onMouseEnter={() => setIsEcosystem("ecosystem")}
                            className="flex items-center gap-2 rounded-md m-2 px-2 py-2 cursor-pointer hover:bg-[#f0aee8]"
                          >
                            <img
                              className="w-12 rounded-lg"
                              src={ecosystem}
                              alt="Ecosystem"
                            />
                            <p>Ecosystem</p>
                          </li>
                        </ul>
                        <div className=" flex flex-col gap-5 p-5">
                          {(isEcosystem === "leap"
                            ? navData.leap
                            : navData.ecosystem
                          ).map((item, idx) => (
                           <Link    to={`/${item.title.split(" ")[0].toLowerCase()}`}         key={idx}> <div
               
                           className="flex gap-2 p-2 rounded-lg hover:bg-gray-100 items-center"
                         >
                           <img
                             className="w-12 rounded-lg"
                             src={item.image}
                             alt={item.title}
                           />
                           <span>
                             <p>{item.title}</p>
                             <p className="text-[12px]">{item.text}</p>
                           </span>
                         </div></Link>
                          ))}
                        </div>
                      </div>
                    )}
                  {isDropdownVisible === "forbuilders" &&
                    item === "For Builders" && (
                      <div
                        className="absolute w-[400px]  flex flex-col gap-5 rounded-xl shadow-2xl cursor-pointer  bg-white p-5"
                        onMouseEnter={() => handleMouseEnter("forbuilders")} // Ensure the dropdown stays open
                        onMouseLeave={handleMouseLeave} // Close when the mouse leaves this container
                      >
                        {navData.builders.map((item, index) => {
                          return (
          <Link to={`/${item.title.split(" ")[0].toLowerCase()}`} key={index}>                  <div
          className="  flex gap-5 py-2 px-5 items-center  hover:bg-gray-100 rounded-lg"
        >
          <img
            className="w-12 rounded-lg"
            src={item.image}
            alt=""
          />
          <span>
            <p>{item.title}</p>
            <p className="text-[12px]">{item.text}</p>
          </span>
        </div></Link>
                          );
                        })}
                      </div>
                    )}
                  {isDropdownVisible === "resources" &&
                    item === "Resources" && (
                      <div
                        className="absolute w-[400px] flex flex-col gap-5 rounded-xl shadow-2xl cursor-pointer  bg-white p-5"
                        onMouseEnter={() => handleMouseEnter("resources")} // Ensure the dropdown stays open
                        onMouseLeave={handleMouseLeave} // Close when the mouse leaves this container
                      >
                        {navData.resources.map((item, index) => {
                          return (
                          <Link to={`/${item.title}`} key={index}>  <div
                          className="  flex gap-5 py-2 px-5 items-center hover:bg-gray-100 rounded-lg"
                          key={index}
                        >
                          <img
                            className="w-12 rounded-lg"
                            src={item.image}
                            alt=""
                          />
                          <span>
                            <p>{item.title}</p>
                            <p className="text-[12px]">{item.text}</p>
                          </span>
                        </div></Link>
                          );
                        })}
                      </div>
                    )}
                  {isDropdownVisible === "socials" && item === "Socials" && (
                    <div
                      className="absolute w-[400px]  flex flex-col gap-5 rounded-xl shadow-2xl cursor-pointer  bg-white p-5"
                      onMouseEnter={() => handleMouseEnter("socials")} // Ensure the dropdown stays open
                      onMouseLeave={handleMouseLeave} // Close when the mouse leaves this container
                    >
                      {navData.socials.map((item, index) => {
                        return (
                         <Link to={`/${item.title}`} key={index}>
                           <div
                            className="  flex gap-5 py-2 px-5 items-center  hover:bg-gray-100 rounded-lg"
                          >
                            <img
                              className="w-12 rounded-lg"
                              src={item.image}
                              alt=""
                            />
                            <span>
                              <p>{item.title}</p>
                              <p className="text-[12px]">{item.text}</p>
                            </span>
                          </div>
                         </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Button */}
        <button className="w-20 lg:w-28 h-12 lg:h-16 rounded-full bg-[#A3F7C1] text-sm lg:text-lg font-bold">
          Get Leap{isMobile && "!"}
        </button>
      </div>
      {isMobile && (
        <div className="w-[95%]  lg:hidden flex  flex-col gap-5 mx-auto">
          {mobNavitems.map((item, index) => {
            return (
              <span
                key={index}
                className={`flex gap-2 rounded-lg items-center justify-start py-4 px-2 ${item.class}`}
              >
                <img className="w-12 rounded-lg" src={item.image} alt="" />
                <p>{item.name}</p>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
