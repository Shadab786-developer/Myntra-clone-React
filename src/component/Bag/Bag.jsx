// This file is a React component for the Bag section of the Myntra clone.
// It contains the structure for displaying items in the user's shopping bag.

import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromBag,
  updateQuantity,
} from "../../Features/BagItems/BagSlice";
import { Link } from "react-router-dom";

function Bag() {
  // State variables for managing total MRP and total discount
  const [totalMRP, setTotalMRP] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const bagItems = useSelector((state) => state.bag.bagItems);
  const dispatch = useDispatch();

  // Function to handle payment
  const handlePayment = () => {
    const options = {
      key: "rzp_test_qxkQwV2MdKc0RD",
      key_secret: "qAFyRWef6bCntYmmhTxHAqPa",
      amount: parseInt(totalMRP - totalDiscount + 99) * 100,
      currency: "INR",
      name: "Myntra",
      description: "for testing purpose",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        console.log("paymant id", paymentId);
      },
      theme: {
        color: "#ffff",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  // Calculate total MRP and discount when bag items change
  useEffect(() => {
    calculateTotal();
    console.log(bagItems);
  }, [bagItems]);

  // Update quantity of bag items on component mount
  useEffect(() => {
    bagItems.forEach((item) => {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity }));
    });
  });

  // Function to calculate total MRP and discount
  const calculateTotal = () => {
    let mrp = 0;
    let discount = 0;
    bagItems.forEach((item) => {
      mrp += item.original_price;
      discount += item.original_price - item.current_price;
    });
    setTotalMRP(mrp);
    setTotalDiscount(discount);
  };

  return (
    <div>
      <main className="bg-pink-50 p-[20%]">
        <div className="w-3/4 ml-[12.5%]">
          {/* Render each item in the bag */}
          {bagItems.map((item, index) => (
            <div
              className="inline-block w-2/3 px-5 border-r border-[#eaeaec] mt-[10%] pt-8 text-[#282c3f] text-[32px] shadow-lg"
              key={index}
            >
              <div className="mb-2 bg-white text-[14px] border border-[#eaeaec] rounded-sm relative p-[12px 12px 10px 10px]">
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
                    <span className="text-[#03a685]">{item.delivery_date}</span>
                  </div>
                </div>

                <div
                  className="absolute text-[25px] top-3 right-5 w-4 h-4 cursor-pointer"
                  onClick={() => {
                    dispatch(removeFromBag(item._id));
                    console.log(bagItems);
                  }}
                >
                  X
                </div>
              </div>
            </div>
          ))}
        </div>
        {bagItems.length > 0 ? (
          <div className="ml-[70%] w-1/3 p-3 rounded-lg text-[#282c3f] text-[13px] bg-white  ">
            {
              <>
                <div className=" mb-4">
                  <div className="text-[12px] font-bold m-[24px 0 16px] text-[#535766]">
                    PRICE DETAILS ({bagItems.length} Items){" "}
                  </div>
                  <div className="mb-3 text-[14px] text-[#282c3f]">
                    <span className="price-item-tag">Total MRP</span>
                    <span className="float-right">₹${totalMRP}</span>
                  </div>
                  <div className="price-item">
                    <span className="price-item-tag">Discount on MRP</span>
                    <span className="price-item-value text-[#03a685]">
                      -₹$
                      {totalDiscount}
                    </span>
                  </div>
                  <div className="price-item">
                    <span className="price-item-tag">Convenience Fee</span>
                    <span className="price-item-value">₹99</span>
                  </div>
                  <hr />
                  <div className="font-bold text-[15px] pt-4 border-t border-[#eaeaec] text-[#3e4152]">
                    <span className="price-item-tag">Total Amount</span>
                    <span className="price-item-value">
                      ₹{totalMRP - totalDiscount + 99}
                    </span>
                  </div>
                </div>

                <button
                  className="w-full text-[14px] font-semibold rounded-sm p-[10px 16px] bg-pink-600 text-white cursor-pointer"
                  id="palce-btn"
                  onClick={() => handlePayment()}
                >
                  PLACE ORDER
                </button>
              </>
            }
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col">
            <img
              src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
              alt="empty image"
            />
            <p className="font-extrabold text-[20px] text-gray-800">
              Hey,it feels so light!
            </p>
            <p className="text-[15px] text-gray-500 mb-6">
              There is nothing in your bag Let`s add some items
            </p>
            <Link to={"/Wish"}>
              <button className="border border-pink-500 py-2 px-16 text-pink-500 text-[15px] font-bold cursor-pointer">
                ADD ITEMS FROM WISHLIST
              </button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}

export default Bag;
