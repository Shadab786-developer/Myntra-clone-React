import React, { useEffect, useState } from "react";
import items from "../../details";
import { useDispatch } from "react-redux";
import { addToWish } from "../../Features/WishItems/WishSlice";

// Component to display kids products
function Kidsproduct() {
  const [showItems, setShowItems] = useState(true); // State to control visibility of items
  const dispatch = useDispatch(); // Hook to dispatch actions

  // Function to render a single product item
  const renderComponent = (item, index) => (
    <>
      <div className="w-64 m-4 " key={index}>
        <img className="w-full" src={item.item_image} alt="Item image" />
        <div className="text-[12px] font-bold">
          {item.rating.stars} ⭐ | {item.rating.noOfReviews}
        </div>
        <div className="mt-4 text-[16px] font-bold text-[#282c3f] mb-2 whitespace-nowrap">
          {item.company_name}
        </div>
        <div className="text-[#535766] text-[14px] mb-0 mt-0 whitespace-nowrap font-normal block">
          {item.item_name}
        </div>
        <div className="mt-3 text-[14p] whitespace-nowrap text-[#282c3f]">
          <span className="text-[14px] text-[#282c3f] font-bold">
            Rs.{item.current_price}
          </span>
          <span className="text-[#7e818c] text-[12px] font-normal ml-1">
            Rs.{item.original_price}
          </span>
          <span className="text-[#ff905a] text-[12px] font-normal ml-1">
            ({item.discount_precentage}% OFF)
          </span>
        </div>

        <button
          className="bg-white border border-black text-black py-1 px-4 rounded-lg w-full text-[18px] mt-2 cursor-pointer"
          onClick={() => {
            dispatch(addToWish(item)); // Dispatch action to add item to wish list
          }}
        >
          ❤ Wishlist
        </button>
      </div>
    </>
  );

  // Filter items to only include kids products
  const filterKidsItem = items.filter((item) => item.item_type === "Kids");

  // Function to handle showing items
  const handleShowItems = () => {
    setShowItems(items);
  };

  // Effect to handle showing items on component mount
  useEffect(() => {
    handleShowItems;
  }, []);

  return (
    <>
      <div>
        <hr className="border-[1px] border-[#535766]" />
        <main className="flex justify-between items-between w-full mt-[10%]">
          <div className="w-1/4 p-4 border-r">
            <h2 className="text-lg font-semibold mb-3">Filters</h2>
            <hr />
            <div>
              <ul className=" ">
                {/* Filter options */}
                <li className="flex justify-center flex-col items-start border-b-[1px] border-gray-300 h-fit w-full mr-[10%] mb-[5%]">
                  <h2 className="text-[#282c3f] mt-[3%] sm:mt-[5%] font-bold text-[30px] sm:text-[20px] mb-2 ml-3">
                    FILTER
                  </h2>
                  <label className="ml-6">
                    <input
                      type="radio"
                      className="rounded-full w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Boys
                  </label>
                  <label className="ml-6">
                    <input
                      type="radio"
                      className="rounded-full w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Girls
                  </label>
                </li>
                <h2 className="text-[#282c3f] font-bold text-[30px] mb-2 sm:text-[20px] ml-3">
                  CATEGORIES
                </h2>
                <li className="flex justify-center flex-col h-fit items-start border-b-[1px] border-gray-300">
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Tracksuits
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Tops
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Toothpaste and Tooth
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Rash Cream
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Trousers
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Feeding Essentials
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Mosquito Nets
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Baby Sleeping Bag
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Jackets
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Dungarees
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Blankets Quilts and Dohars
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Jackets
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Shirts
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Sleepsuit
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Dresses
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Shorts
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Trousers
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Clothing Set
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Tshirts
                  </label>
                </li>
                <h2 className="text-[#282c3f] font-bold text-[30px] sm:text-[20px] mb-2 ml-3">
                  BRAND
                </h2>
                <li className="flex justify-center flex-col h-fit items-start border-b-[1px] border-gray-300">
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    SmartRAHO
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Arendelle
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    AKKRITI BY PANTALOONS
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Wish Karo
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    IndiWeaves
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    StyleCast
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    V-Mart
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Pantaloons Junior
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    NUSYL
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Gini and Jony
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    BAESD
                  </label>
                </li>
                <h2 className="text-[#282c3f] font-bold mb-2 text-[30px] sm:text-[20px] ml-3">
                  PRICE
                </h2>
                <li className="flex justify-center flex-col  h-fit items-start border-b-[1px] border-gray-300">
                  <input
                    type="range"
                    className="w-full
    h-2
    bg-pink-600
    rounded-lg
    appearance-none
    cursor-pointer
    accent-pink-500
    hover:accent-pink-600
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:h-4
    [&::-webkit-slider-thumb]:w-4
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-pink-500
    [&::-webkit-slider-thumb]:hover:bg-pink-600
    mb-[5%]
    sm:mb-[5%]"
                    min={0}
                    max={100000000}
                  />
                  <span className="text-[12px] font-extrabold">
                    $0 - $10,000+
                  </span>
                </li>
                <h2 className="text-[#282c3f] font-bold mb-2 text-[30px] sm:text-[20px] ml-3">
                  COLOR
                </h2>
                <li className="flex justify-center flex-col h-fit items-start border-b-[1px] border-gray-300">
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-2"
                    />
                    <span className="border border-[black] text-white rounded-full h-2 w-3 bg-white">
                      oo
                    </span>
                    White
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-2"
                    />
                    <span className="border border-[black] rounded-full h-3 w-3 bg-black text-black ">
                      oo
                    </span>
                    Black
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-2"
                    />
                    <span className="border border-[black] rounded-full h-3 w-3 bg-red-950 text-red-950">
                      oo
                    </span>
                    Brown
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-2"
                    />
                    <span className="border border-[black] rounded-full h-3 w-3 bg-pink-600 text-pink-600">
                      oo
                    </span>
                    Pink
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-2"
                    />
                    <span className="border border-[black] rounded-full h-3 w-3 bg-green-700 text-green-700 ">
                      oo
                    </span>
                    Green
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-2"
                    />
                    <span className="border border-[black] rounded-full h-3 w-3 bg-yellow-400 text-yellow-400">
                      oo
                    </span>
                    Yellow
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-2"
                    />
                    <span className="border border-[black] rounded-full h-3 w-3 bg-blue-700 text-blue-700 ">
                      oo
                    </span>
                    Blue
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-2"
                    />
                    <span className="border border-[black] rounded-full h-3 w-3 bg-orange-600 text-orange-600">
                      oo
                    </span>
                    Orange
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-2"
                    />
                    <span className="border border-[black] rounded-full h-3 w-3 bg-emerald-700 text-emerald-700">
                      oo
                    </span>
                    Emerald
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-2"
                    />
                    <span className="border border-[black] rounded-full h-3 w-3 bg-purple-700 text-purple-700">
                      oo
                    </span>
                    Pink
                  </label>
                </li>
                <h2 className="text-[#282c3f] font-bold text-[30px] sm:text-[20px] mb-2 ml-3">
                  DISCOUNT RANGE
                </h2>
                <li className="flex justify-center flex-col h-fit items-start ">
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className=" w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    10% and above
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className=" w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    20% and above
                  </label>
                  <label className=" ml-6">
                    <input
                      type="checkbox"
                      className="mr-3 w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300"
                    />
                    30% and above
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="mr-3 w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300"
                    />
                    40% and above
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="mr-3 w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300"
                    />
                    50% and above
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="mr-3 w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300"
                    />
                    60% and above
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="mr-3 w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300"
                    />
                    70% and above
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="mr-3 w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300"
                    />
                    80% and above
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="mr-3 w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300"
                    />
                    90% and above
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      className="mr-3 w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300"
                    />
                    100% and above
                  </label>
                </li>
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-3/4 p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Kids Style</h2>
              <select className="border px-3 py-1 rounded">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="w-3/5 sm:w-4/5 m-[40px 10%] sm:m-[40px 10%] flex justify-between items-center flex-wrap">
              {showItems &&
                filterKidsItem.map((item, index) =>
                  renderComponent(item, index)
                )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Kidsproduct;
