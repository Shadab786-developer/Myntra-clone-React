import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import items from "../../details";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import { useAuth0 } from "@auth0/auth0-react";

// This file is a React component for the Header section of the Myntra clone.
// It contains state variables for managing search input, results, and hover states.

export default function Header() {
  // State variables for managing search input and results
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [isActive, setIsActive] = useState(false);

  // State variables for managing items in the bag and wishlist
  const bagItem = useSelector((state) => state.bag.bagItems);
  const wihsItem = useSelector((state) => state.wish.wishItems);

  // Authentication functions from Auth0
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [showSide, setShowSide] = useState(false);

  // Function to toggle the navigation sidebar
  const handleToggleNav = () => {
    setShowSide(!showSide);
  };

  // Component for the profile dropdown
  const ProfileDropdown = ({ children }) => {
    return ReactDOM.createPortal(
      <div
        className="z-[9999] bg-white shadow-lg "
        style={{
          top: "40px", // Adjust based on your header height
        }}
      >
        {children}
      </div>,
      document.body
    );
  };

  // Function to fetch data based on search input
  const fetchData = (value) => {
    const results = items.filter((item) => {
      return (
        value &&
        item &&
        item.item_type &&
        item.item_type.toLowerCase().includes(value)
      );
    });
    setResults(results);
    console.log(results);
  };

  // Function to handle search input changes
  const handleSearchItems = (value) => {
    setInput(value);
    fetchData(value);
  };

  // State variables for managing hover states of different sections
  const [isHovered, setIsHovered] = useState({
    men: false,
    women: false,
    kids: false,
    living: false,
    beauty: false,
    profile: false,
    studio: false,
  });

  return (
    <>
      <header className="flex justify-between items-center fixed bg-white shadow-sm mb-1 h-20 w-full z-[9999] ">
        <div className="bg-transparent min-w-[100px] sm:min-w-[110px] px-4">
          <a href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXA1QUsZw0J-GYgqwwcxqKyHw8wHYpXERHw&s"
              alt="myntralogo"
              className="w-full h-fit object-contain max-w-[60px] md:max-w-[80px]"
            />
          </a>
        </div>
        <nav className="justify-around text-nowrap md:flex  mr-20 w-fit hidden">
          {/* Sidebar */}

          <div
            onMouseEnter={() => setIsHovered({ ...isHovered, men: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, men: false })}
            className="relative mt-3 "
          >
            {" "}
            <NavLink
              to={"/Men"}
              className="text-gray-900 font-semibold py-3 px-4 transform-cpu text-[14px] decoration-white    hover:border-b-pink-600 border-b-4 border-white "
              href="#"
            >
              MEN
            </NavLink>
            {isHovered.men && (
              <ProfileDropdown>
                <div className="absolute bg-white w-4/5 top-20 left-12 flex items-center text-left justify-between">
                  <div className="flex bg-white justify-center items-center ml-[10%]">
                    <div className="flex flex-col m-[5%] items-start ">
                      <h2 className="text-pink-500 font-bold text-[16px] mb-2 ">
                        Topwear
                      </h2>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        T-shirt
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Causal shirt{" "}
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Sweaters{" "}
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Formal shirt
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Jackets
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Blazers & Coats
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Suits
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Rain Jacket
                      </Link>
                    </div>

                    <div className="flex flex-col m-[5%] items-start">
                      <h2 className="text-pink-500 font-bold text-[16px] mb-2 ">
                        Bottomwear
                      </h2>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Jeans
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Causal trousers{" "}
                      </Link>

                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Formal trousers
                      </Link>

                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Shorts
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Trackpant & Joggers
                      </Link>
                    </div>

                    <div className="flex flex-col m-[5%]  items-start">
                      <h2 className="text-pink-500 font-bold text-[16px] mb-2 ">
                        Footwear
                      </h2>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Casual Shoes
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Sports Shoes{" "}
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Formal Shoes{" "}
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Sneakers
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Sandle & Floaters
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Flip Flops
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Socks
                      </Link>
                    </div>
                    <div className="flex flex-col m-[5%] items-start">
                      <h2 className="text-pink-500 font-bold text-[16px] mb-2 ">
                        Fashion Accessories
                      </h2>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Watches
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Wallets{" "}
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Belts{" "}
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Perfumes & Body Mists
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Trimmers & Grooming Kits
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Caps & Hats
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Phone Cases
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Rings & Wristwear
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Deodorants
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Ties, Cufflinks & Pocket Squares
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Helmets & Riding Gear
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Scarves & Mufflers
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Accessory Gift Sets
                      </Link>
                    </div>
                  </div>
                </div>
              </ProfileDropdown>
            )}
          </div>
          <div
            onMouseEnter={() => setIsHovered({ ...isHovered, women: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, women: false })}
            className="relativem mt-3"
          >
            {" "}
            <NavLink
              to={"/Women"}
              className="text-gray-900 font-semibold py-3 px-4 transform-cpu text-[14px] decoration-white    hover:border-b-pink-600 border-b-4 border-white "
              href="#"
            >
              WOMEN
            </NavLink>
            {isHovered.women && (
              <ProfileDropdown>
                <div className="absolute bg-white w-4/5 top-20 left-12 flex  items-center text-left justify-between">
                  <div className="flex bg-white justify-center items-center ml-[10%]">
                    <div className="flex flex-col m-[5%] items-start ">
                      <h2 className="text-pink-500 font-bold text-[16px] mb-2 ">
                        Western Wear
                      </h2>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Dresses
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Tops{" "}
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Tshirts{" "}
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Jeans
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Trousers & Capris
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Shorts & Skirts
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Shrugs & Jackets
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Jumpsuits & Playsuits
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Co-ords
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Sweaters & Sweatshirts
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Dress Material
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Blazers & Waistcoats
                      </Link>
                    </div>

                    <div className="flex flex-col m-[5%] items-start">
                      <h2 className="text-pink-500 font-bold text-[16px] mb-2 ">
                        Indian & Fusion Wear
                      </h2>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Kurtas & Kurtis
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Kurttis,Tunics & Tops{" "}
                      </Link>

                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Sarees & Blouses
                      </Link>

                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Leggings,Salwar & Churidars
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Dress Material
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Dupattas & Shawls
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Lehenga Cholis
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Anarkali Suits
                      </Link>
                    </div>

                    <div className="flex flex-col m-[5%]  items-start">
                      <h2 className="text-pink-500 font-bold text-[16px] mb-2 ">
                        Footwear
                      </h2>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Flats & Casual Shoes
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Sports Shoes{" "}
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Heels{" "}
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Boots
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Sport Shoes & Floaters
                      </Link>
                    </div>
                    <div className="flex flex-col 5 items-start">
                      <h2 className="text-pink-500 font-bold text-[16px] mb-2 ">
                        Beauty & Personal Care
                      </h2>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Makeup
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Skincare{" "}
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Premium Beauty{" "}
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Lipsticks
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Nailpaints
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Fragrances
                      </Link>
                    </div>
                    <div className="flex flex-col m-[5%] items-start">
                      <h2 className="text-pink-500 font-bold text-[16px] mb-2 ">
                        Jwellery & Gadgets
                      </h2>

                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Earrings
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Fashion Jewellery
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Fine Jewellery
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Smart Wearables
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Fitness Gadgets
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Headphones
                      </Link>
                      <Link
                        to={"/Womenproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Speakers
                      </Link>
                    </div>
                  </div>
                </div>
              </ProfileDropdown>
            )}
          </div>
          <div
            onMouseEnter={() => setIsHovered({ ...isHovered, kids: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, kids: false })}
            className="relativem mt-3"
          >
            {" "}
            <NavLink
              to={"/Kids"}
              className="text-gray-900 font-semibold py-3 px-4 transform-cpu text-[14px] decoration-white    hover:border-b-pink-600 border-b-4 border-white "
              href="#"
            >
              KIDS
            </NavLink>
            {isHovered.kids && (
              <ProfileDropdown>
                <div className="absolute bg-white w-4/5 top-20 left-12 flex items-center text-left justify-between">
                  <div className="flex bg-white justify-center items-center ml-[10%]">
                    <div className="flex flex-col m-[5%] items-start ">
                      <h2 className="text-pink-500 font-bold text-[16px] mb-2 ">
                        Boys Clothing
                      </h2>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        T-shirt
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Shirts{" "}
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Shorts{" "}
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Jeans
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Trousers
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Trackpant & Joggers
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Clothing Sets
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Ethnic Sets
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Sweaters & Sweatshirts
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Party Wear
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Innerwear & Thermals
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Nightwear & Loungewear
                      </Link>
                    </div>

                    <div className="flex flex-col m-[5%] items-start">
                      <h2 className="text-pink-500 font-bold text-[16px] mb-2 ">
                        Girls Clothing
                      </h2>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Dresses
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Tops{" "}
                      </Link>

                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Tshirts{" "}
                      </Link>

                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Clothing Sets
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Party wear
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Dupattas & Shawls
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Lehenga Cholis
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Jeans, Trousers & Capris
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Tights & Leggings
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Skirts & Shorts
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Jacket, Sweater & Sweatshirts
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Innerwear & Thermals
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Dungarees & Jumpsuits
                      </Link>
                    </div>

                    <div className="flex flex-col m-[5%] items-start">
                      <h2 className="text-pink-500 font-bold text-[16px] mb-2 ">
                        Footwear
                      </h2>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        School Shoes
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Sports Shoes{" "}
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Casual Shoes{" "}
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Flats
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Sandals
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Flip Flops
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Socks
                      </Link>
                    </div>
                    <div className="flex flex-col m-[5%] items-start">
                      <h2 className="text-pink-500 font-bold text-[16px] mb-2 ">
                        Toys & Games
                      </h2>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Learning & Development
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Activity Toys{" "}
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Soft Toys{" "}
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Action Figure / Play set
                      </Link>
                    </div>
                    <div className="flex flex-col m-[5%] items-start">
                      <h2 className="text-pink-500 font-bold text-[16px] mb-2 ">
                        Infants
                      </h2>

                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Bodysuits
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Rompers & Sleepsuits
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Tshirts & Tops
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Bottom wear
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Winter Wear
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Innerwear & Sleepwear{" "}
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Infant Care
                      </Link>
                    </div>
                  </div>
                </div>
              </ProfileDropdown>
            )}
          </div>
          <div
            onMouseEnter={() => setIsHovered({ ...isHovered, living: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, living: false })}
            className="relativem mt-3"
          >
            {" "}
            <NavLink
              to={"/Home & Living"}
              className="text-gray-900 font-semibold py-3 px-4 transform-cpu text-[14px] decoration-white    hover:border-b-yellow-300 border-b-4 border-white "
              href="#"
            >
              HOME & LIVING
            </NavLink>
            {isHovered.living && (
              <ProfileDropdown>
                <div className="absolute bg-white w-4/5 top-20 left-12 flex items-center text-left justify-between">
                  <div className="flex bg-white justify-center items-center ml-[10%]">
                    <div className="flex flex-col m-5% items-start ">
                      <h2 className="text-yellow-300 font-bold text-[16px] mb-2 ">
                        Bed Linen & Furnishing
                      </h2>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Bet Runners
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Matters Protectors{" "}
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Bedsheets{" "}
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Blankets, Quilts & Dohars
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Pillows & Pillow Covers
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Bedding Sets
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Bedding Covers
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Diwan Sets
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Chair Pads & Cushions
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Sofa Covers
                      </Link>
                    </div>

                    <div className="flex flex-col m-[5%] items-start">
                      <h2 className="text-yellow-300 font-bold text-[16px] mb-2 ">
                        Bath
                      </h2>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Bath Towels
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Hand & Face Towels{" "}
                      </Link>

                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Beach Towels{" "}
                      </Link>

                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Towels Sets
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Bath Mats
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Bath Robes
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Shower Curtains
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Bathroom Accessories
                      </Link>
                    </div>

                    <div className="flex flex-col m-[5%] items-start">
                      <h2 className="text-yellow-300 font-bold text-[16px] mb-2 ">
                        Lamps & Lighting
                      </h2>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Table Lamps
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Floor Lamps{" "}
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Celling Lamps{" "}
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Wall Lamps
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Outdoor Lamps
                      </Link>
                    </div>
                    <div className="flex flex-col m-[5%] items-start">
                      <h2 className="text-yellow-300 font-bold text-[16px] mb-2 ">
                        Home Decor
                      </h2>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Wall Decor
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Plants & Planters{" "}
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Aromas & Candles{" "}
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Clocks
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Mirrors
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Photo Frames
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Vases & Flowers
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Wall Shelves
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Wall Plates
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Wall Hooks
                      </Link>
                    </div>
                    <div className="flex flex-col m-[5%] items-start">
                      <h2 className="text-yellow-300 font-bold text-[16px] mb-2 ">
                        Kitchen & Dining
                      </h2>

                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Cookware
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Kitchen Tools & Accessories
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Tableware & Dinnerware
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Kitchen Storage & Containers
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Barware
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Dinnerware & Serveware{" "}
                      </Link>
                      <Link
                        to={"/Kidsproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Drinkware & Bar
                      </Link>
                    </div>
                  </div>
                </div>
              </ProfileDropdown>
            )}
          </div>
          <div
            onMouseEnter={() => setIsHovered({ ...isHovered, beauty: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, beauty: false })}
            className="relativem mt-3"
          >
            {" "}
            <NavLink
              to={"/Beauty"}
              className="text-gray-900 font-semibold py-3 px-4 transform-cpu text-[14px] decoration-white    hover:border-b-blue-300 border-b-4 border-white "
              href="#"
            >
              BEAUTY
            </NavLink>
            {isHovered.beauty && (
              <ProfileDropdown>
                <div className="absolute bg-white w-4/5 top-20 left-12 flex items-center text-left justify-between ">
                  <div className="flex bg-white justify-center items-center ml-[10%]">
                    <div className="flex flex-col m-[5%] items-start ">
                      <h2 className="text-blue-300 font-bold text-[16px] mb-2 ">
                        Makeup
                      </h2>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Lipstick
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Lip Gloss{" "}
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Lip Liner{" "}
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Lip Balm
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Eye Shadow
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Eye Liner
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Mascara
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Kajal & Kohl
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Foundation
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Compact
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Primer
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Concealer
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Blush
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Nail Polish
                      </Link>
                    </div>

                    <div className="flex flex-col m-[5%] items-start">
                      <h2 className="text-blue-300 font-bold text-[16px] mb-2 ">
                        Skincare, Bath & Body
                      </h2>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Face Wash & Cleanser
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Mask & Peel{" "}
                      </Link>

                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Moisturizer & Cream{" "}
                      </Link>

                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Sunscreen & Tanning
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Body Lotion & Butter
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Serum
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Body Wash & Shower Gel
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Body Scrub
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Bath Salts & Bubbles
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Hand Cream
                      </Link>
                    </div>

                    <div className="flex flex-col m-[5%] items-start">
                      <h2 className="text-blue-300 font-bold text-[16px] mb-2 ">
                        Haircare
                      </h2>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Shampoo
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Conditioner{" "}
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Hair Cream{" "}
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Hair Oil
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Hair Serum
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Hair Mask
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Hair Color
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Hair Styling
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Hair Accessories
                      </Link>
                    </div>
                    <div className="flex flex-col m- items-start">
                      <h2 className="text-blue-300 font-bold text-[16px] mb-2 ">
                        Top Brands
                      </h2>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Lakme
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Maybelline{" "}
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        LOreal{" "}
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        M.A.C
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Nivea
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Biotique
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        The BODY Shop
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Philips
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Gillette
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Biotique
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Mamaearth
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        MCaffeine
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Lotus Herbals
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        LOrela Professionnel
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        KAMA AYURVEDA
                      </Link>
                      <Link
                        to={"/Menproduct"}
                        className="text-gray-400 text-[14px] mb-1 hover:text-black hover:font-bold hover:text-[16px]"
                      >
                        Forest Essentials
                      </Link>
                    </div>
                  </div>
                </div>
              </ProfileDropdown>
            )}
          </div>
          <div
            onMouseEnter={() => setIsHovered({ ...isHovered, studio: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, studio: false })}
            className="relative mt-3"
          >
            <a
              href="https://www.myntra.com/studio/home"
              className="text-gray-900 font-semibold py-3 px-4 transform-cpu text-[14px]  decoration-white  hover:border-b-pink-600 border-b-4 border-white"
            >
              STUDIO <sup className="text-pink-600 text-[14px]">New</sup>
              {isHovered.studio && (
                <div className="absolute bg-white w-4/5 top-10 left-12 flex items-center text-right justify-center ">
                  <div className="flex bg-white justify-center items-center flex-col ml-[10%]  p-[25%] ">
                    <img
                      src="https://constant.myntassets.com/web/assets/img/studio-logo-new.svg"
                      alt="studio-logo"
                      className="m-7"
                    />
                    <p className="text-[12px] text-gray-400 text-center m-4">
                      Your daily inspiration for everything fashion{" "}
                    </p>
                    <img
                      src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"
                      alt="studio-banner"
                      className="m-5 h-full w-full"
                    />
                    <button className="border border-gray-200 font-bold text-gray-900 text-[12px] m-4 py-2 px-16">
                      EXPLORE STUDIO{" "}
                    </button>
                  </div>
                </div>
              )}
            </a>
          </div>
        </nav>
        {showSide ? (
          <div className="relative mt-20 overscroll-auto">
            <nav className=" justify-around text-nowrap w-fit  pl-10 flex flex-col -ml-32 h-fit bg-white left-0 md:hidden absolute">
              <NavLink
                to={"/Men"}
                className="text-gray-900 font-semibold py- py-77 px-4 transform-cpu text-[14px] decoration-white    hover:border-b-pink-600 border-b-4 border-white "
                href="#"
              >
                MEN
              </NavLink>
              <NavLink
                to={"/Men"}
                className="text-gray-900 font-semibold py-7  px-4 transform-cpu text-[14px] decoration-white    hover:border-b-pink-600 border-b-4 border-white "
                href="#"
              >
                WOMEN
              </NavLink>
              <NavLink
                to={"/Men"}
                className="text-gray-900 font-semibold py-7  px-4 transform-cpu text-[14px] decoration-white    hover:border-b-pink-600 border-b-4 border-white "
                href="#"
              >
                KIDS
              </NavLink>
              <NavLink
                to={"/Men"}
                className="text-gray-900 font-semibold py-7  px-4 transform-cpu text-[14px] decoration-white    hover:border-b-pink-600 border-b-4 border-white "
                href="#"
              >
                HOME & LIVING
              </NavLink>
              <NavLink
                to={"/Men"}
                className="text-gray-900 font-semibold py-7  px-4 transform-cpu text-[14px] decoration-white    hover:border-b-pink-600 border-b-4 border-white "
                href="#"
              >
                BEAUTY
              </NavLink>
              <a
                href="https://www.myntra.com/studio/home"
                className="text-gray-900 font-semibold py-7  px-4 transform-cpu text-[14px]  decoration-white  hover:border-b-pink-600 border-b-4 border-white"
              >
                STUDIO <sup className="text-pink-600 text-[14px]">New</sup>
              </a>
              <div className="flex min-w-52 justify-around w-fit sm:ml-2 mr-6 sm:mr-4 pb-44 pt-11 pr-4 ">
                <div className="flex flex-col items-center relative hover:border-b-4 hover:border-b-pink-600">
                  <span className="material-symbols-outlined text-gray-400 ">
                    person
                  </span>
                  <span className="">profile</span>
                </div>

                <Link to={"/Wish"}>
                  <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined text-gray-400">
                      favorite{" "}
                    </span>
                    <span className="action_name">Wishlist</span>
                    {wihsItem.length > 0 ? (
                      <span className="bg-[#f16565] whitespace-nowrap text-center px-[6px] h-5 relative rounded-full text-[12px] text-[#fff]  font-normal left-3 bottom-12 cursor-pointer">
                        {wihsItem.length}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
                <Link to={"/Bag"}>
                  <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined action_icon text-gray-400">
                      shopping_bag
                    </span>
                    <span className="action_name">Bag</span>
                    {bagItem.length > 0 ? (
                      <span className="bg-[#f16565] whitespace-nowrap text-center px-[6px] h-5 relative rounded-full text-[12px] text-[#fff]  font-normal left-3 bottom-12 cursor-pointer">
                        {bagItem.length}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
              </div>
            </nav>
          </div>
        ) : (
          ""
        )}
        <div className="md:hidden">
          <button onClick={handleToggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center items-center ml-[20%] sm:ml-[10%] mr-[20%] sm:mr-[10%] h-10 text-gray-600 w-15 bg-gray-100 rounded-sm ">
          <span className="material-symbols-outlined  text-gray-400 h-5 p-3 font-normal mb-5 ">
            search
          </span>

          <input
            value={input}
            type="text"
            placeholder="Search for product , brand and more "
            className="h-10 min-w-80 max-w-96 w-1/3 px-[5%] flex-grow items-start py-2 bg-gray-100 rounded-sm focus:bg-white focus:text-black"
            onChange={(e) => handleSearchItems(e.target.value)}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
          />
          {isActive && (
            <div className="w-1/3 h-80 bg-white flex-col shadow-lg overflow-scroll flex justify-center items-start top-20 absolute z-[9999] ">
              {items.map((item, index) => (
                <div className="px-28 py-2" key={index}>
                  {item.item_name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="md:flex min-w-52 justify-around w-fit ml-6 sm:ml-2 mr-6 sm:mr-4 hidden">
          <div
            className="flex flex-col items-center relative hover:border-b-4 hover:border-b-pink-600"
            onMouseEnter={() => setIsHovered({ ...isHovered, profile: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, profile: false })}
          >
            <span className="material-symbols-outlined text-gray-400 ">
              person
            </span>
            <span className="">profile</span>

            {isHovered.profile && (
              <ProfileDropdown>
                <div className="absolute top-20 right-0 w-96 bg-white  rounded-lg shadow-lg">
                  <div className="p-2">
                    <div className="flex flex-col">
                      <h1 className="text-gray-700 font-bold text-[20px]">
                        Welcome{" "}
                      </h1>
                      <h4 className="text-gray-600 text-[16px] text-nowrap">
                        To access account and manage orders
                      </h4>
                      {isAuthenticated ? (
                        <button
                          className="border border-gray-200 text-pink-600 font-bold text-[20px] rounded-sm py-3 px-4 mr-10 mt-3 mb-3 hover:border-pink-600"
                          onClick={() =>
                            logout({
                              logoutParams: {
                                returnTo: window.location.origin,
                              },
                            })
                          }
                        >
                          LOGOUT
                        </button>
                      ) : (
                        <button
                          className="border border-gray-200 text-pink-600 font-bold text-[20px] rounded-sm py-3 px-4 mr-10 mt-3 mb-3 hover:border-pink-600"
                          onClick={() => loginWithRedirect()}
                        >
                          LOGIN / SIGNUP
                        </button>
                      )}
                      <hr />
                      <div className="flex justify-center items-start flex-col m-5 border-b-2 border-gray-200">
                        <a
                          href="/myntranew"
                          className="py-2 px-4 text-gray-700 hover:text-black hover:font-bold rounded-md"
                        >
                          Orders
                        </a>
                        <a
                          href="/myntranew"
                          className="py-2 px-4 text-gray-700 hover:text-black hover:font-bold rounded-md"
                        >
                          Wishlist
                        </a>
                        <a
                          href="/myntranew"
                          className="py-2 px-4 text-gray-700 hover:text-black hover:font-bold rounded-md"
                        ></a>
                        <a
                          href="/myntranew"
                          className="py-2 px-4 text-gray-700 hover:text-black hover:font-bold rounded-md"
                        >
                          Gift Cards
                        </a>
                        <Link to={"/Help"}>
                          <a
                            href="/myntranew"
                            className="py-2 px-4 text-gray-700 hover:text-black hover:font-bold rounded-md"
                          >
                            Contact Us
                          </a>
                        </Link>
                        <a
                          href="/myntranew"
                          className="py-2 px-4 text-gray-700 hover:text-black hover:font-bold rounded-md transform  -skew-x-[10deg]"
                        >
                          Myntra Insider
                          <span className="bg-pink-600 text-white italic px-2 text-[12px] ml-3 rounded-sm transform skew-x-[10deg] ">
                            New
                          </span>
                        </a>
                      </div>
                      <div className="flex justify-center items-start flex-col m-5 border-b-2 border-gray-200">
                        <a
                          href="/myntranew"
                          className="py-2 px-4 text-gray-700 hover:text-black hover:font-bold rounded-md"
                        >
                          Myntra Credits
                        </a>
                        <a
                          href="/myntranew"
                          className="py-2 px-4 text-gray-700 hover:text-black hover:font-bold rounded-md"
                        >
                          Coupons
                        </a>
                        <a
                          href="/myntranew"
                          className="py-2 px-4 text-gray-700 hover:text-black hover:font-bold rounded-md"
                        >
                          Save Cards
                        </a>
                        <a
                          href="/myntranew"
                          className="py-2 px-4 text-gray-700 hover:text-black hover:font-bold rounded-md"
                        >
                          Save VPA
                        </a>
                        <a
                          href="/myntranew"
                          className="py-2 px-4 text-gray-700 hover:text-black hover:font-bold rounded-md"
                        >
                          Save Addresses
                        </a>
                        <a
                          href="/myntranew"
                          className="py-2 px-4 text-gray-700 hover:text-black hover:font-bold rounded-md"
                        ></a>
                        <a
                          href="/myntranew"
                          className="py-2 px-4 text-gray-700 hover:text-black hover:font-bold rounded-md"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </ProfileDropdown>
            )}
          </div>

          <Link to={"/Wish"}>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-gray-400">
                favorite{" "}
              </span>
              <span className="action_name">Wishlist</span>
              {wihsItem.length > 0 ? (
                <span className="bg-[#f16565] whitespace-nowrap text-center px-[6px] h-5 relative rounded-full text-[12px] text-[#fff]  font-normal left-3 bottom-12 cursor-pointer">
                  {wihsItem.length}
                </span>
              ) : (
                ""
              )}
            </div>
          </Link>
          <Link to={"/Bag"}>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined action_icon text-gray-400">
                shopping_bag
              </span>
              <span className="action_name">Bag</span>
              {bagItem.length > 0 ? (
                <span className="bg-[#f16565] whitespace-nowrap text-center px-[6px] h-5 relative rounded-full text-[12px] text-[#fff]  font-normal left-3 bottom-12 cursor-pointer">
                  {bagItem.length}
                </span>
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}
