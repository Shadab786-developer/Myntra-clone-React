// This file is a React component for the Wishlist section of the Myntra clone.
// It contains state variables for managing wishlist items and functions for adding/removing items.

import { useSelector, useDispatch } from "react-redux";
import { addToBag } from "../../Features/BagItems/BagSlice";
import {
  removeFromWish,
  updateQuantity,
} from "../../Features/WishItems/WishSlice";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function WishList() {
  // State variable for wishlist items
  const wishItems = useSelector((state) => state.wish.wishItems);
  const dispatch = useDispatch();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  // Update quantity of wishlist items on component mount
  useEffect(() => {
    wishItems.forEach((item) => {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity }));
    });
  });

  return (
    <div>
      <main className=" bg-blue-100">
        {isAuthenticated ? (
          <div className=" w-3/4 ml-[12.5%]">
            {wishItems.map((item, index) => (
              <div
                className="mt-[10%] inline-block w-2/3 px-5 border-r border-[#eaeaec] pt-8 text-[#282c3f] text-[32px] "
                key={index}
              >
                <div className="mb-2 bg-white text-[14px] border border-[#eaeaec] rounded-sm relative p-[12px 12px 0]">
                  <div className="absolute bg-white h-36 w-28">
                    <img
                      className="w-full"
                      src={item.item_image}
                      alt={item.item_name}
                    />
                  </div>
                  <div className="pl-3 relative min-h-36 ml-28 mb-3">
                    <div className="company">{item.company_name}</div>
                    <div className="item-name">{item.item_name}</div>
                    <div className="price-container">
                      <span className="current-price">
                        Rs ${item.current_price}
                      </span>
                      <span className="original-price">
                        Rs ${item.original_price}
                      </span>
                      <span className="discount-percentage">
                        (${item.discount_percentage} % OFF)
                      </span>
                    </div>
                    <div className="inline-flex text-[14px] pt-2">
                      <span className="font-bold mr-1">
                        {item.return_period} days
                      </span>{" "}
                      return available
                    </div>

                    <div className="mt-1 text-[#282c3f] text-[12px] mb-2 ">
                      Delivery by
                      <span className="text-[#03a685]">
                        {item.delivery_date}
                      </span>
                    </div>
                  </div>

                  <div
                    className="absolute text-[25px] top-3 right-5 w-4 h-4 cursor-pointer"
                    onClick={() => {
                      dispatch(removeFromWish(item.id));
                      console.log(wishItems);
                    }}
                  >
                    X
                  </div>
                  <button
                    className="bg-[#f49999] py-1 px-4 rounded-lg w-full mr-1 text-[18px] mt-2 cursor-pointer"
                    onClick={() => {
                      dispatch(addToBag(item));
                      dispatch(removeFromWish(item));
                    }}
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col ">
            <p className="font-bold text-[40px] text-gray-900 mt-[20%]">
              PLEASE LOG IN
            </p>
            <p className="text-[15px] text-gray-500 mb-6">
              Login to view items in your wishlist.
            </p>
            <img
              src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
              alt="empty image"
              className="mr-12"
            />

            <button
              className="border border-blue-800 py-2 px-12 text-blue-800 text-[22px] font-bold cursor-pointer mb-[20%]"
              onClick={() => loginWithRedirect()}
            >
              LOGIN
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default WishList;
