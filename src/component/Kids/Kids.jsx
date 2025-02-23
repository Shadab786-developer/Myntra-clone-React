// Import necessary modules and components
import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Kids() {
  // Slider settings for banner images
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

  // Slider settings for product images
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

  // Array of product images
  const productImg = [
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/cca065d6-f192-44dd-9e12-40be8c5ed9ee1649781648648-H_M.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/00a95486-20dc-42e4-95d9-91242ba7f83b1649781648667-Kids-wear.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/54794130-d358-421b-a73f-1ea5f98330641649781648655-Indian-Wear.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/2d7c5cdb-1859-4883-8ba6-8fa2bc8ace841649781648661-Jeans-_-Trousers.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/d535f930-b28d-4aaa-a3a1-e6cbf43ac18f1649781648685-Redtape.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/603cd248-fa30-43be-b649-55b5ec70e5431649781648679-Max.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/c97dcb69-4b36-4f4a-adde-d473b2e5ae9d1649781648698-Top-Brands.jpg",

    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/489b294a-84f4-4858-8f8e-ca485a36c5811649781648673-Kids-Wear-1.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/728e97e1-4845-41b8-8830-19e7cb0cf4161649781648642-Baby-Utilities.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/38907e29-87e1-46ec-8542-43a29e3c82c81649781648691-Teens-Clothing.jpg",
  ];

  // Array of banner images
  const productBanImg = [
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/a606c305-a23f-4fe3-a630-343ced4a10261649782019470-Kids-Wear_Desk_Banner.jpg?v1",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/09f0df54-6f8f-4bb0-a4b9-3b374d4538561649782019495-Top-Brands-2_Desk_Banner.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/7f5e46bd-da64-489b-bbab-ebf67b12f8091649782019457-Innerwear_Desk_Banner.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/0e977afc-87e2-4798-a0d6-bfb05ba796911649782019489-Super-Bottoms_Desk_Banner.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/b97efc90-2359-48ea-bf74-9c72d552fdef1649782019503-T-Shirts-_-Shorts_Desk_Banner.jpg",
  ];

  return (
    <>
      <div className="flex justify-around items-center flex-col mr-[20%]  ml-[20%] sm:ml-[5%] sm:mr-[5%]">
        <div className="flex justify-center  mt-[10%]  max-w-full max-h-full">
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/18/9B2TYAc1_1e7474ea4f194ee4aaefdf8a11245b2e.jpg" />
        </div>

        <div className="h-full w-full m-3 mr-3">
          <Slider {...settingsBan}>
            {productBanImg.map((image, index) => (
              <div key={index}>
                <img
                  className="h-fit w-fit  "
                  src={image}
                  alt="This is the banner image"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-gray-700 text-[25px] mt-12 mb-2 ml-8 max-h-10 font-extrabold  gap-3">
          FAVOURITE BRANDS
        </div>
        <div className="flex justify-center items-center">
          <Link to={"/Kidsproduct"}>
            <a>
              <img
                src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/ab69d015-a975-4bda-990c-49e68938f6b31604926460802-19-FavBrands-AllenSollyJuniors.jpg"
                alt="Brands"
                className="h-20 w-20 sm:h-40 sm:w-40"
              />
            </a>
          </Link>
          <Link to={"/Kidsproduct"}>
            <a>
              <img
                src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/fee6018d-c5dd-44b7-b1d1-9b994c1ae1e21604926460545-13-FavBrands-UCB.jpg"
                alt="Brands"
                className="h-20 w-20 sm:h-40 sm:w-40"
              />
            </a>
          </Link>
          <Link to={"/Kidsproduct"}>
            <a>
              <img
                src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4d3f0e9d-1b7a-458e-b05b-75d1f51db0411604926460628-15-FavBrands-NautiNati.jpg"
                alt="Brands"
                className="h-20 w-20 sm:h-40 sm:w-40"
              />
            </a>
          </Link>
          <Link to={"/Kidsproduct"}>
            <a>
              <img
                src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/a505cf6b-beab-4bea-ba8d-06d7302486761604926460589-14-FavBrands-USPA.jpg"
                alt="Brands"
                className="h-20 w-20 sm:h-40 sm:w-40"
              />
            </a>
          </Link>
          <Link to={"/Kidsproduct"}>
            <a>
              <img
                src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/20/dc3e538c-bdbe-4df6-b38d-e628f1b18e211605856135445-ShopBybrands-lilpicks.jpg"
                alt="Brands"
                className="h-20 w-20 sm:h-40 sm:w-40"
              />
            </a>
          </Link>
          <Link to={"/Kidsproduct"}>
            <a>
              <img
                src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/20/dc3e538c-bdbe-4df6-b38d-e628f1b18e211605856135445-ShopBybrands-lilpicks.jpg"
                alt="Brands"
                className="h-20 w-20 sm:h-40 sm:w-40"
              />
            </a>
          </Link>
          <Link to={"/Kidsproduct"}>
            <a>
              <img
                src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/0bb2a638-7a84-4e75-bbbb-152140d32fd51604926460667-16-FavBrands-Peppermint.jpg"
                alt="Brands"
                className="h-20 w-20 sm:h-40 sm:w-40"
              />
            </a>
          </Link>
          <Link to={"/Kidsproduct"}>
            <a>
              <img
                src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/7a43b5cc-7b14-465a-9043-153fe35fb4d91604926460506-12-FavBrands-Gini_Jony.jpg"
                alt="Brands"
                className="h-20 w-20 sm:h-40 sm:w-40"
              />
            </a>
          </Link>
          <Link to={"/Kidsproduct"}>
            <a>
              <img
                src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4f79cccf-f8af-4a41-b531-a02ffc8bb1151604926460459-11-FavBrands-YK.jpg"
                alt="Brands"
                className="h-20 w-20 sm:h-40 sm:w-40"
              />
            </a>
          </Link>
        </div>

        <div className="text-gray-700 text-[25px] mt-12 mb-2 ml-8 max-h-10 font-extrabold  gap-3">
          {" "}
          MEDAL WORTHY BRANDS TO BAG
        </div>
        <div className="h-full w-full ">
          <Slider {...settings}>
            {productImg.map((image, index) => (
              <Link to={"/Kidsproduct"} key={index}>
                <img src={image} className="h-20 w-20 sm:h-40 sm:w-40" />
              </Link>
            ))}
          </Slider>
        </div>
        <div className="text-gray-700 text-[25px] mt-12 mb-2 ml-8 max-h-10 font-extrabold">
          SHOP BY CATEGORY{" "}
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:items-stretch sm:gap-2">
          <Link to={"/Kidsproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f79446fb-46b9-455a-a6c0-4ffe3f58dd071604906586106-23-IconicBrands-H_M.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Kidsproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/2ba882da-667c-4f6e-a27e-292d0ffe477a1604906586228-26-IconicBrands-MangoKids.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Kidsproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/37147834-2bc5-4cdb-8eb9-68bf0fd48ca01604906586191-25-IconicBrands-Chicco.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Kidsproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f23d49ee-a598-4039-a6cd-33dab8a7e2011604906586056-22-IconicBrands-M_S.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Kidsproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/0f9ec937-304a-433a-9433-5409c556831c1604906586152-24-IconicBrands-TommyHilfiger.jpg"
                className="h-fit w-fit sm:col-span-1"
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

export default Kids;
