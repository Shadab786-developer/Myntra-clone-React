import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWish } from "../../Features/WishItems/WishSlice";
import { useNavigate } from "react-router-dom";

const PAGE_LIMIT = 5;
const ITEM_TYPE = "Kids";
const token = localStorage.getItem("accessToken");
// Component to display kids products
function Kidsproduct() {
  const navigate = useNavigate();
  // State variable for managing the display of items
  const [currentPage, setCurrentPage] = useState(1); // e.g., access 3rd page
  const [totalProductsPages, setTotalProductsPages] = useState(1);

  const [totalProducts, setTotaProducts] = useState(0);
  const [items, setItems] = useState([]); // state for fetched items
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error handling

  const dispatch = useDispatch();
  // State variable for wishlist items
  const wishItem = useSelector((state) => state.wish.wishItems);

  // feaching the data from backend
  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `https://myntra-backend-8j4c.onrender.com/api/v1/products/getProducts?page=${currentPage}&limit=${PAGE_LIMIT}`
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      console.log(json);

      setItems(json.message.products); // adjust based on your actual response structure
      filterByCategory();

      console.log(totalProducts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  async function filterByCategory() {
    const resp = await fetch(
      `https://myntra-backend-8j4c.onrender.com/api/v1/filter/filterByCategory?page=${currentPage}&limit=${PAGE_LIMIT}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ categories: [ITEM_TYPE] }),
      }
    );
    if (!resp.ok) throw new Error(await resp.text());
    const data = await resp.json();
    console.log("filterByCategory", data.message);
    setItems(data.message.products);
    setTotalProductsPages(data.message.totalPages || 1);
    console.log(totalProductsPages);

    setTotaProducts(
      data.totalProducts ||
        (data.message.products ? data.message.products.length : 0)
    );

    return data.message; // array of clients
  }
  useEffect(() => {
    fetchProducts();
    console.log("Items men :", items);
  }, [currentPage]);

  //Filter section
  const [filters, setFilters] = useState({
    current_price: "",
    companyNames: "",
    discount_percentage: "",
    colors: "",
  });
  const handleFilterInputChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };
  const clearFilters = () => {
    setFilters({
      current_price: "",
      companyNames: "",
      discount_percentage: "",
      colors: "",
    });
    fetchProducts();
  };
  const addFilters = async () => {
    setLoading(true);

    // Apply filters one by one (since each API filters by one field)
    for (const [field, value] of Object.entries(filters)) {
      if (value) {
        let url = "";
        let body = {};
        switch (field) {
          case "current_price":
            url =
              "https://myntra-backend-8j4c.onrender.com/api/v1/filter/filterByCurrentPrice";
            body = { minPrice: value, maxPrice: value };
            break;
          case "company_name":
            url =
              "https://myntra-backend-8j4c.onrender.com/api/v1/filter/filterByCompanyName";
            body = { companyNames: [value] };
            break;
          case "discount_percentage":
            url =
              "https://myntra-backend-8j4c.onrender.com/api/v1/filter/filterByDiscount";
            body = { minDiscount: value, maxDiscount: value };
            break;
          case "colors":
            url =
              "https://myntra-backend-8j4c.onrender.com/api/v1/filter/filterByColor";
            body = { colors: [value] };
            break;

          default:
            continue;
        }
        try {
          if (!token) {
            alert("No token found. Please log in.");
            setLoading(false);
            return;
          }
          const res = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
          });
          if (res.status === 401) {
            alert("Unauthorized. Please log in again.");
            setLoading(false);
            return;
          }
          const data = await res.json();
          // Intersect results if multiple filters, else just assign
          console.log(data);
          const product = data.message.map((item) => {
            if ((item.item_type === ITEM_TYPE) === true) {
              return item;
            }
          });
          console.log("Women Filter Product", product);
          const man = product.filter((item) => item !== undefined);
          if (man) {
            setItems(man);
          } else {
            alert("No such products in mens category");
          }
        } catch (err) {
          alert("Failed to filter Product", err.message);
          setLoading(false);
          return;
        }
      }
    }

    console.log(items);

    setLoading(false);
  };
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalProductsPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Function to render the page buttons (Myntra-like)
  const renderPageButtons = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Adjust this number based on your design preference
    let startPage, endPage;

    if (totalProductsPages <= maxPagesToShow) {
      // Show all pages if total pages are less than or equal to maxPagesToShow
      startPage = 1;
      endPage = totalProductsPages;
    } else {
      // Calculate start and end pages for pagination ellipsis
      if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (
        currentPage + Math.floor(maxPagesToShow / 2) >=
        totalProductsPages
      ) {
        startPage = totalProductsPages - maxPagesToShow + 1;
        endPage = totalProductsPages;
      } else {
        startPage = currentPage - Math.floor(maxPagesToShow / 2);
        endPage = currentPage + Math.floor(maxPagesToShow / 2);
      }
    }

    // Add first page if it's not in the range
    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push("..."); // Ellipsis
      }
    }

    // Add pages within the calculated range
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Add last page if it's not in the range
    if (endPage < totalProductsPages) {
      if (endPage < totalProductsPages - 1) {
        pageNumbers.push("..."); // Ellipsis
      }
      pageNumbers.push(totalProductsPages);
    }
    return (
      <div className="flex justify-center items-center gap-2">
        {pageNumbers.map((pageNumber, index) =>
          pageNumber === "..." ? (
            <span key={index} className="px-3 py-1.5 text-black text-[18px]">
              ...
            </span>
          ) : (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`
                px-6 py-3 rounded-lg font-medium transition-all duration-300
                ${
                  currentPage === pageNumber
                    ? "bg-white text-black shadow-lg" // Active state for Myntra-like
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200" // Inactive state
                }
                focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50
              `}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    );
  };
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalProductsPages) setCurrentPage(currentPage + 1);
  };
  if (loading) return <div>🔄 Loading products...</div>;
  if (error) return <div>⚠️ Error: {error}</div>;

  const handleProductClick = (item) => {
    navigate(`/details/${item._id}`, {
      state: { item },
    });
  };
  // Function to render a single item component
  const renderComponent = () => (
    <>
      <div className="flex flex-wrap gap-x-20 max-w-full items-center justify-center">
        {items.map((item, index) => {
          return (
            <div
              className="w-64 m-4 "
              key={index}
              onClick={() => handleProductClick(item)}
            >
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
                  {" "}
                  Rs.{item.current_price}
                </span>
                <span className="text-[#7e818c] text-[12px] font-normal ml-1">
                  Rs.{item.original_price}
                </span>
                <span className="text-[#ff905a] text-[12px] font-normal ml-1">
                  {" "}
                  ({item.discount_percentage}% OFF)
                </span>
              </div>

              <button
                className="bg-white border border-black text-black py-1 px-4 rounded-lg w-full text-[18px] mt-2 cursor-pointer"
                onClick={() => {
                  dispatch(addToWish(item));
                  console.log(wishItem);
                }}
              >
                ❤ Wishlist
              </button>
            </div>
          );
        })}
      </div>
    </>
  );

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
                      value={"SmartRAHO"}
                      onChange={(e) => {
                        handleFilterInputChange("company_name", e.target.value);
                      }}
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    SmartRAHO
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={"Arendelle"}
                      onChange={(e) => {
                        handleFilterInputChange("company_name", e.target.value);
                      }}
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Arendelle
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={"AKKRITI by Pantaloons"}
                      onChange={(e) => {
                        handleFilterInputChange("company_name", e.target.value);
                      }}
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    AKKRITI BY PANTALOONS
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={"wish Karo"}
                      onChange={(e) => {
                        handleFilterInputChange("company_name", e.target.value);
                      }}
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Wish Karo
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={"IndiWeaves"}
                      onChange={(e) => {
                        handleFilterInputChange("company_name", e.target.value);
                      }}
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    IndiWeaves
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={"StyleCast"}
                      onChange={(e) => {
                        handleFilterInputChange("company_name", e.target.value);
                      }}
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    StyleCast
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={"v-Mart"}
                      onChange={(e) => {
                        handleFilterInputChange("company_name", e.target.value);
                      }}
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    V-Mart
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={"Pantaloons Junior"}
                      onChange={(e) => {
                        handleFilterInputChange("company_name", e.target.value);
                      }}
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Pantaloons Junior
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={"NUSYL"}
                      onChange={(e) => {
                        handleFilterInputChange("company_name", e.target.value);
                      }}
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    NUSYL
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={"Gini and Jony"}
                      onChange={(e) => {
                        handleFilterInputChange("company_name", e.target.value);
                      }}
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    Gini and Jony
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={"baesd"}
                      onChange={(e) => {
                        handleFilterInputChange("company_name", e.target.value);
                      }}
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
                    onChange={(e) => {
                      handleFilterInputChange("current_price", e.target.value);
                    }}
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
                      value={"white"}
                      onChange={(e) => {
                        handleFilterInputChange("colors", e.target.value);
                      }}
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
                      value={"black"}
                      onChange={(e) => {
                        handleFilterInputChange("colors", e.target.value);
                      }}
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
                      value={"brown"}
                      onChange={(e) => {
                        handleFilterInputChange("colors", e.target.value);
                      }}
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
                      value={"pink"}
                      onChange={(e) => {
                        handleFilterInputChange("colors", e.target.value);
                      }}
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
                      value={"green"}
                      onChange={(e) => {
                        handleFilterInputChange("colors", e.target.value);
                      }}
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
                      value={"yellow"}
                      onChange={(e) => {
                        handleFilterInputChange("colors", e.target.value);
                      }}
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
                      value={"blue"}
                      onChange={(e) => {
                        handleFilterInputChange("colors", e.target.value);
                      }}
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
                      value={"orange"}
                      onChange={(e) => {
                        handleFilterInputChange("colors", e.target.value);
                      }}
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
                      value={"emerald"}
                      onChange={(e) => {
                        handleFilterInputChange("colors", e.target.value);
                      }}
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
                      value={"purple"}
                      onChange={(e) => {
                        handleFilterInputChange("colors", e.target.value);
                      }}
                      className="w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-2"
                    />
                    <span className="border border-[black] rounded-full h-3 w-3 bg-purple-700 text-purple-700">
                      oo
                    </span>
                    Purple
                  </label>
                </li>
                <h2 className="text-[#282c3f] font-bold text-[30px] sm:text-[20px] mb-2 ml-3">
                  DISCOUNT RANGE
                </h2>
                <li className="flex justify-center flex-col h-fit items-start ">
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={10}
                      onChange={(e) => {
                        handleFilterInputChange(
                          "discount_percentage",
                          e.target.value
                        );
                      }}
                      className=" w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    10% and above
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={20}
                      onChange={(e) => {
                        handleFilterInputChange(
                          "discount_percentage",
                          e.target.value
                        );
                      }}
                      className=" w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300 mr-3"
                    />
                    20% and above
                  </label>
                  <label className=" ml-6">
                    <input
                      type="checkbox"
                      value={30}
                      onChange={(e) => {
                        handleFilterInputChange(
                          "discount_percentage",
                          e.target.value
                        );
                      }}
                      className="mr-3 w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300"
                    />
                    30% and above
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={40}
                      onChange={(e) => {
                        handleFilterInputChange(
                          "discount_percentage",
                          e.target.value
                        );
                      }}
                      className="mr-3 w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300"
                    />
                    40% and above
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={50}
                      onChange={(e) => {
                        handleFilterInputChange(
                          "discount_percentage",
                          e.target.value
                        );
                      }}
                      className="mr-3 w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300"
                    />
                    50% and above
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={60}
                      onChange={(e) => {
                        handleFilterInputChange(
                          "discount_percentage",
                          e.target.value
                        );
                      }}
                      className="mr-3 w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300"
                    />
                    60% and above
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={70}
                      onChange={(e) => {
                        handleFilterInputChange(
                          "discount_percentage",
                          e.target.value
                        );
                      }}
                      className="mr-3 w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300"
                    />
                    70% and above
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={80}
                      onChange={(e) => {
                        handleFilterInputChange(
                          "discount_percentage",
                          e.target.value
                        );
                      }}
                      className="mr-3 w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300"
                    />
                    80% and above
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={90}
                      onChange={(e) => {
                        handleFilterInputChange(
                          "discount_percentage",
                          e.target.value
                        );
                      }}
                      className="mr-3 w-3 h-3 accent-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-300"
                    />
                    90% and above
                  </label>
                  <label className="ml-6">
                    <input
                      type="checkbox"
                      value={100}
                      onChange={(e) => {
                        handleFilterInputChange(
                          "discount_percentage",
                          e.target.value
                        );
                      }}
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
              <button
                className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 transition"
                onClick={addFilters}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-blue-600"
                >
                  <path d="M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 .8 1.6l-6.6 8.8V19a1 1 0 0 1-1.45.89l-2-1A1 1 0 0 1 10 18v-4.6L3.2 6.6A1 1 0 0 1 3 5z" />
                </svg>
              </button>
              <button
                className="p-3 rounded-full bg-red-50 hover:bg-red-100 transition"
                onClick={clearFilters}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-red-600"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M15 9l-6 6M9 9l6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full flex flex-col items-center max-h-28">
              {renderComponent()}
              {totalProductsPages > 0 && (
                <div className="flex flex-wrap justify-center items-center gap-4 py-6">
                  {/* Previous Button */}
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`
              px-8 py-3 rounded-md font-medium transition-all duration-300
              flex items-center gap-1 text-[18px]
              ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white text-black shadow-2xl"
              }
              focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50
            `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  {/* Page Number Buttons */}
                  {renderPageButtons()}

                  {/* Next Button */}
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalProductsPages}
                    className={`
              px-8 py-3 rounded-lg font-lg transition-all duration-300
              flex items-center gap-1
              ${
                currentPage === totalProductsPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white text-black shadow-2xl"
              }
              focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50
            `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Kidsproduct;
