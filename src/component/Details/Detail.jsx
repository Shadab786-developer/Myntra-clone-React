import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBag } from "../../Features/BagItems/BagSlice.js";
import { addToWish } from "../../Features/WishItems/WishSlice.js";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(location.state?.item || null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(!product);

  const dispatch = useDispatch();
  // State variable for wishlist items
  const wishItem = useSelector((state) => state.wish.wishItems);
  const bagItems = useSelector((state) => state.bag.bagItems);

  useEffect(() => {
    if (!product) {
      axios
        .get(
          `https://myntra-backend-8j4c.onrender.com/api/v1/products/getProduct/${id}`
        )
        .then((response) => {
          setProduct(response.data);
          console.log(response.data);

          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
          setLoading(false);
        });
    }
  }, [id, product]);

  const ratings = [
    { stars: 5, count: 144, color: "bg-green-500" },
    { stars: 4, count: 54, color: "bg-green-400" },
    { stars: 3, count: 51, color: "bg-yellow-400" },
    { stars: 2, count: 35, color: "bg-yellow-300" },
    { stars: 1, count: 174, color: "bg-red-500" },
  ];

  const thumbnails = [product.item_image];

  return (
    <div className="w-full bg-white px-4 md:px-20 py-10">
      <>
        <div className="grid md:grid-cols-2 gap-10 sm:mt-[15%]">
          {/* Left: Images */}
          <div className="grid grid-cols-1 gap-4">
            <img
              key={product._id}
              src={product.item_image}
              alt={`Product ${product._id}`}
              className="rounded border cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Right: Product Info */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">{product.company_name}</h1>
            <p className="text-sm text-gray-500">{product.item_name}</p>

            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-pink-600">
                ${product.current_price}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${product.original_price}
              </span>
              <span className="text-sm text-green-600 font-semibold">
                ({product.discount_percentage}% OFF)
              </span>
            </div>

            {/* Thumbnail Color Variants */}
            <div className="flex space-x-2">
              {thumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumb ${index}`}
                  className={`w-10 h-12 border ${
                    selectedImage === index ? "border-pink-500" : ""
                  } cursor-pointer`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>

            {/* Sizes */}
            <div className="flex space-x-2 mt-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="w-10 h-10 border border-gray-300 hover:border-black rounded"
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mt-4">
              <button
                className="bg-pink-600 text-white px-6 py-2 rounded"
                onClick={() => dispatch(addToBag(product))}
              >
                Add to Bag
              </button>
              <button
                className="border px-6 py-2 rounded border-gray-400"
                onClick={() => dispatch(addToWish(product))}
              >
                Wishlist
              </button>
            </div>

            {/* Delivery Info */}
            <div className="mt-6 text-sm text-gray-700">
              <p>100% Original Products</p>
              <p>Pay on delivery available</p>
              <p>Easy 14 days returns and exchanges</p>
            </div>

            {/* Product Details */}
            <div className="mt-4">
              <h2 className="font-semibold text-gray-800">Product Details</h2>
              <p className="text-sm text-gray-600 mt-1">
                {product.color} {product.item_name}, has a spread collar, button
                placket, 1 patch pocket, long sleeves, curved hem.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Material: Cotton Blend | Machine Wash
              </p>
            </div>

            {/* Ratings */}
            <div className="w-full max-w-md text-gray-800 text-sm space-y-4">
              {/* Ratings Overview */}
              <div className="flex items-center space-x-6 border-b pb-3">
                <div className="text-center">
                  <div className="text-3xl font-semibold text-gray-800">
                    {product.rating.stars}
                  </div>
                  <div className="text-yellow-500 text-xl">★</div>
                  <div className="text-xs text-gray-600 mt-1">
                    {product.rating.noOfReviews} Verified Buyers
                  </div>
                </div>

                {/* Rating Bars */}
                <div className="flex-1 space-y-1">
                  {ratings.map((rating) => (
                    <div
                      key={product.rating.stars}
                      className="flex items-center space-x-2"
                    >
                      <span className="w-5 text-gray-600">{rating.stars}</span>
                      <span className="text-yellow-500 text-xl">★</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded">
                        <div
                          className={`${rating.color} h-full rounded`}
                          style={{
                            width: `${
                              (rating.count / product.rating.noOfReviews) * 100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <span className="w-8 text-right text-gray-700">
                        {rating.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Customers Said */}
              <div>
                <h2 className="font-semibold text-sm mb-3">
                  WHAT CUSTOMERS SAID
                </h2>
                {/* Fit */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">Fit</span>
                  <div className="flex-1 h-2 bg-gray-200 mx-4 rounded">
                    <div className="bg-green-600 h-full w-[48%] rounded"></div>
                  </div>
                  <span className="text-gray-600 text-xs">
                    Just Right (48%)
                  </span>
                </div>

                {/* Length */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-700">Length</span>
                  <div className="flex-1 h-2 bg-gray-200 mx-4 rounded">
                    <div className="bg-green-600 h-full w-[51%] rounded"></div>
                  </div>
                  <span className="text-gray-600 text-xs">
                    Just Right (51%)
                  </span>
                </div>

                {/* View Details */}
                <div className="mt-2">
                  <button className="text-pink-600 text-sm font-medium hover:underline">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Detail;
