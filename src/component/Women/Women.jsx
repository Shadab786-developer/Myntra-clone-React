import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// This file is a React component for the Women section of the Myntra clone.
// It contains settings for carousels and arrays of product images to be displayed.

function Women() {
  // Carousel settings for product images
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Carousel settings for banner images
  const settingsBan = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Array of product images with their paths
  const productImgWomen = [
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/jm3rOZrT_5047ca596a8b4b61b41cb837ca2a3b83.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/7m37tgHq_a95edf53a0544616b231b84486560fe9.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/9dUbBicH_cb18c676b7d64c75b5ef8870dbcdf2be.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/17/bf541a9e-49ad-4351-89bf-ac2ee33d95651734451313681-image_jpeg442386857.jpg",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/17/bf541a9e-49ad-4351-89bf-ac2ee33d95651734451313681-image_jpeg442386857.jpg",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/9DxYUvNJ_2897e280351743ba8835e5d79a794322.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/aPMu8B2W_4445258dbac64d33b9ee551daf9557fb.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/BGLBdxOz_4dcc1d8a0f40417caeebbe3df99c793c.png",
    },
  ];
  const productBanImg = [
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/3f6d1e2a-5ef6-4921-be5d-443a11b11d801651599573985-Dresses_Desk.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/744f6742-7705-45a9-b555-892c309b36cd1650181498588-Premium-Collection_Desk.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/1377cd42-3e4c-4cd7-ae0e-1719e81ff1db1650181498574-Formal-Footwear_Desk.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/9dc6368b-8168-495f-8259-97e29f523b0c1649582887347-Loungewear_Desk.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/7feef02b-0072-4c1b-b83d-4e46a5d93c6b1649530621162-Sangria_Desk_Banner.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/c74bac2c-e09d-484f-8e25-c07747c867241649530728935-Tops---Tees_Desk.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/38f37101-f335-44be-af8f-5d53de15c75e1649530843725-Casual---Sports-Shoes_Desk--1-.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/f1874a9d-c423-44d3-a529-6c63521d6f991650181498608-Sarees_Desk.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/5f930503-ecb2-489a-9ab8-5081e10a15681649581894257-Staycation-Essentials_DEsk.jpg",
  ];
  return (
    <>
      <div className="flex justify-around flex-col mr-[20%]  ml-[20%] sm:ml-[5%] sm:mr-[5%]">
        <div className=" flex justify-center  mt-[10%] max-w-full max-h-full">
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/18/9B2TYAc1_1e7474ea4f194ee4aaefdf8a11245b2e.jpg" />
        </div>

        <div className="h-full w-full ">
          <Slider {...settingsBan}>
            {productBanImg.map((image, index) => (
              <div key={index}>
                <img
                  className="h-fit w-full "
                  src={image}
                  alt="This is the banner image"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-gray-900 text-[35px] mt-12 mb-2 ml-8 max-h-10 font-semibold  gap-3">
          {" "}
          BIGGEST BEALS ON TOP BRANDS
        </div>
        <div className="h-full w-full ">
          <Slider {...settings}>
            {productImgWomen.map((product, index) => (
              <div
                className="grid grid-cols-4 gap-4 sm:grid-cols-4 sm:gap-2"
                key={index}
              >
                <Link to={"/Womenproduct"} key={index}>
                  <img src={product.item_image} className="sm:col-span-1 " />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-gray-900 text-[35px] mt-12 mb-2 ml-8 max-h-10 font-semibold">
          CATEGORIES TO BAG{" "}
        </div>
        <div className="grid grid-cols-6  sm:items-stretch">
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/8d992d81-49e6-4dec-89a4-49a8af8beb5d1594222967220-Kurtas-_-Kurta-Sets.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a048cca8-7b5d-417e-9645-ca98f4b6e52c1594222967506-Sarees.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a4dedaa4-3710-4061-b7d6-ca8c83ce9d021594222967117-Heels.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/b0f459a0-9ef0-4392-a9ed-23892a36e79c1594222966859-Dresses.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a352f908-57c8-4c66-b052-18137cf15e6c1594222967074-Handbags.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/18eb31db-8dcb-4efa-b92d-61c8ebe0ee811594222834368-Shorts.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
        </div>
        <div className="text-gray-900 text-[35px] mt-12 mb-2 ml-8 max-h-10 font-semibold">
          EXPLORE TOP BRANDS{" "}
        </div>
        <div className="grid grid-cols-5  sm:items-stretch">
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f6e40444-b1a4-4c91-bb3c-fe213356e7de1598348260541-Only.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/a6de806a-b58b-460b-97fd-d78d80eab39b1596641021693-Women-s-Ethnic-Wear_Anouk.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/8d13b55d-a6a0-40ae-b39f-16f43e7911681598348260460-MAC.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/046ab589-87d5-4afa-8ab3-10e06fdbe6a61598348260596-W.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f2fdda02-423c-4f11-8f1b-618ba807e5841598348260323-H_M.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
        </div>
        <div className="text-gray-900 text-[35px] mt-12 mb-2 ml-8 max-h-10 font-semibold">
          TRENDING IN WESTERN WEAR{" "}
        </div>
        <div className="grid grid-cols-5 sm:items-stretch">
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f7585d6d-78ee-42bd-baf2-07eefada7fb31597840566666-Content-westerncasual-color-moss.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/d7f59b96-8e15-470e-a47b-5d5005e4273f1597840566776-Content-westerncasual-mostselling-modblocking.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8116410f-af2c-4980-95ef-04a4162092491597840566722-Content-westerncasual-color-preppyred.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/580b804c-c529-421c-b0be-b311cab6e10b1598030134933-Content-mostselling-casualwear-Normalisboring.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/a6d9d467-d37e-4428-b2dd-a9f45756c1fc1595936000278-Content-westernwear-lifestyle-Ecovero.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
        </div>
        <div className="text-gray-900 text-[35px] mt-12 mb-2 ml-8 max-h-10 font-semibold">
          TRENDING IN INDIAN WEAR{" "}
        </div>
        <div className="grid grid-cols-5  sm:items-stretch">
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/87b0957c-41f7-4522-9f30-f69087a0dce61597840342593-Content-ethnicwear-color-mustard.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/2ff5c4e9-da10-4d12-9aae-86c38f4c281a1597840342549-Content-ethnicwear-brand-fusiondress.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/99463248-ae80-47de-836f-3bafe2262bff1598029618274-Content-mostselling-Ethnicwear-Kurtasetsbiba.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/e4fe9b08-9d0a-4349-868f-6ac5aa7123ed1595935030800-Content-ethnicwear-trend-Bsummerreadyethnicdresses.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
        </div>
        <div className="text-gray-900 text-[35px] mt-12 mb-2 ml-8 max-h-10 font-semibold">
          TRENDING IN SPORTS WEAR{" "}
        </div>
        <div className="grid grid-cols-5 sm:items-stretch">
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/48f02c04-8b83-495b-a2df-27ed8a9837a61597840566563-Content-sportswear-mostselling-skechers.png"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7c0ac6d4-94aa-4c56-b6e7-86f7367a1ead1597841103213-Content-sportswear-brand-UA.png"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/ffc6f4f2-9541-47a2-ba12-e3c68c9407461595935799402-Content-sportswear-Women-Under-Armour-daily-wear-Joggers.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/ba7ebb65-b743-4947-b7b0-2f62a3c912cf1595935799269-Content-sportswear-Women-Athleisure.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/0faf749f-5450-4550-8b48-54b2d2e311b51595935799329-Content-sportswear-Women-Running.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
        </div>
        <div className="text-gray-900 text-[35px] mt-12 mb-2 ml-8 max-h-10 font-semibold">
          TRENDING IN FOOTWEAR{" "}
        </div>
        <div className="grid grid-cols-5 sm:items-stretch">
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/cb3b10a6-a216-4f20-a4f1-81828bc923581597912691297-Content-footwear-trend-sneakerswomen.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/bb73b79f-ff6e-4472-b9da-33f5747c6d861597840342909-Content-footwear-occasion-classics.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/1fb4a81c-d5e2-4e46-93d8-b6a87ca92c021597840342817-Content-footwear-color-colorblock.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/76d839cb-b561-42a5-aaa3-6d4e49d0c56f1598030134822-Content-mostselling-Footwear-Rocia.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/1b444433-164b-4551-9749-d2915a286ee01595935221365-Content-Footwear-Women-Comfort-Wear.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
        </div>
        <div className="text-gray-900 text-[35px] mt-12 mb-2 ml-8 max-h-10 font-semibold">
          TRENDING IN ACCESSORIES{" "}
        </div>
        <div className="grid grid-cols-5 sm:items-stretch">
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/225f77f5-c299-4849-8586-3ed41b70b1f91597840217917-Content-accessories-brand-imittire.png"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/b5fb5332-cad0-4c04-bd5e-70189f5efef01597840218056-Content-accessories-mostselling-mangalsutra.png"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4dbcc869-ba34-43df-8348-56c7816363c41597840218100-Content-accessories-trend-handcraftedjewel.png"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/bc36f35b-f5ce-4168-bd96-d3c1f65ec4e21598030134870-Content-mostselling-Accessories-Rosegoldwatch.jpeg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Womenproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            className="h-full  w-full"
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/18/CH3OJp88_77193d7b8a4c4a2289a48f5bbda182de.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Women;
