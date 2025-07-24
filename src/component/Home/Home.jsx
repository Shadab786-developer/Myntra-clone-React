import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// This file is a React component for the Home section of the Myntra clone.
// It contains settings for carousels and arrays of product images to be displayed.

export default function Home() {
  // Carousel settings for product images
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
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
    speed: 700,
    autoplaySpeed: 3000,
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
  const productImg = [
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/jm3rOZrT_5047ca596a8b4b61b41cb837ca2a3b83.png",
      item_path: "/Womenproduct",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/b3b8e1d5-0b7f-4ac2-988a-e1a2a4b71ef51743664985845-image_png747386139.png",
      item_path: "/Womenproduct",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/aPMu8B2W_4445258dbac64d33b9ee551daf9557fb.png",
      item_path: "/Womenproduct",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/9dUbBicH_cb18c676b7d64c75b5ef8870dbcdf2be.png",
      item_path: "/Womenproduct",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/BGLBdxOz_4dcc1d8a0f40417caeebbe3df99c793c.png",
      item_path: "/Womenproduct",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/9eYV0INJ_db113e314ba947d5aac22d32252d303e.png",
      item_path: "/Menproduct",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/7m37tgHq_a95edf53a0544616b231b84486560fe9.png",
      item_path: "/Womenproduct",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/28/H3uJuCql_6e2bb370e239400f8873da272ac1ad53.png",
      item_path: "/Menproduct",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/Fyjvppmv_abc9546e03d9428c94562e45803f92d4.png",
      item_path: "/HomeAnsLivingproduct",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/nGMqvzVL_84bc70d8587b439c8e3a8e4613e1230e.png",
      item_path: "/Menproduct",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/9DxYUvNJ_2897e280351743ba8835e5d79a794322.png",
      item_path: "/Kidsproduct",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/17/1c39bcd6-3ac7-4d99-be1f-0a5ff8bac82e1734450134146-image_png_481891967.png",
      item_path: "/Menproduct",
    },
  ];

  // Array of banner images
  const productBanImg = [
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg",

    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg",

    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg",

    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg",
  ];

  // Array of brand images with their paths
  const productBrandImg = [
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/81bcb28d-55f3-4d7b-bb5a-7cf7ee7fd8031690773011370-The_Collective.png",
      item_path: "/Men",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/eb385972-caf6-4e84-a37c-3fc2b4ac52041691079093062-image_png892897249.png",
      item_path: "/Men",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/7aac1f32-1a1a-4ba6-924b-ee1c28553aed1690773011304-Nautica.png",
      item_path: "/Men",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0c399e2c-9797-483d-bf6c-0852d5d21db21690773010989-BHPC.png",
      item_path: "/Men",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
      item_path: "/Men",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/2/805eeb23-ec17-4b50-b798-1244133c02041690955797245-image_png_1993656242.png",
      item_path: "/Men",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/6b6c7162-0086-4967-90c8-ec4792ec200c1690773011082-Dorothy_Perkin-_Boohoo.png",
      item_path: "/Men",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/2/9699db4e-8162-406a-85ba-e92116f0019f1690955825591-image_png2047004151.png",
      item_path: "/Women",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/92d5e2ec-a736-4bfd-832b-6972121829c91690773010945-Aldo.png",
      item_path: "/Women",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/331d0d67-95de-4e58-b774-add891464af01690773011037-Calvin_Klein.png",
      item_path: "/Men",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png",
      item_path: "/Men",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d521c019-8fcd-4f36-a56f-7a1b9095e2661690773010958-Antony_Morato.png",
      item_path: "/Men",
    },
  ];
  return (
    <>
      <div className="flex justify-around items-center flex-col ">
        <main className="box-border h-full max-w-full mt-[35%] sm:mt-0">
          <div className="h-full w-full mt-[10%] flex justify-center items-center">
            <img
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/18/9B2TYAc1_1e7474ea4f194ee4aaefdf8a11245b2e.jpg"
              alt="this is an offer templet"
            />
          </div>

          <div className="h-full w-full">
            <Slider {...settingsBan}>
              {productBanImg.map((image, index) => (
                <div key={index}>
                  <img src={image} className="h-fit w-fit" />
                </div>
              ))}
            </Slider>
          </div>

          <div className="text-gray-700 text-[15px] sm:text-[35px] sm:m-16 text-left text-nowrap max-h-10 font-bold  gap-3">
            {" "}
            MEDAL WORTHY BRANDS TO BAG
          </div>
          <Slider {...settings}>
            {productImg.map((product, index) => (
              <div
                className="grid gap-4 grid-cols-4 sm:grid-cols-6 sm:gap-2 "
                key={index}
              >
                <Link to={product.item_path} key={index}>
                  <img src={product.item_image} className="sm:col-span-1" />
                </Link>
              </div>
            ))}
          </Slider>
          <div className="text-gray-700 text-[15px] sm:text-[35px] sm:m-16 text-left text-nowrap max-h-10 font-bold  gap-3">
            {" "}
            Grand Global Brands
          </div>
          <Slider {...settings}>
            {productBrandImg.map((product, index) => (
              <div
                className="grid gap-4 grid-cols-4 sm:grid-cols-6 sm:gap-2 "
                key={index}
              >
                <Link to={product.item_path} key={index}>
                  <img src={product.item_image} className="sm:col-span-1" />
                </Link>
              </div>
            ))}
          </Slider>
          <div className="text-gray-700 text-[15px] sm:text-[35px] sm:m-16 text-left text-nowrap max-h-10 font-bold  gap-3">
            SHOP BY CATEGORY{" "}
          </div>
          <div className="grid grid-cols-6 sm:grid-cols-8 sm:items-stretch">
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/hpEcrOrm_6a9dac6181ed4930aa2a7e12c5150175.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/50e3kk1G_e49c76b1d4634c7681c2662fb2fd3095.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/gx4ejH2p_e11304b9b8fe400baa493609fe88e365.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/5GPoLjgx_802886f8b9c74273803313b1103a8e16.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/ZBB1zqm6_120b40ac77a04d3db7503b4c6a13dd91.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/bIQP9wbr_67b3a95df792456b98bc1ba1237bb779.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/LlQfGoh3_b449e189dd9b48c6b6ab6a59f36acef0.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/G0tDeU5X_47e68f1ab94a4289842265de4d1b6e83.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/Njb0ABov_45db62506a1b42798513e8b783c7a98b.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/Q3zid8FM_61065ffcdeac466895ae4ed15b708158.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/5rDi1B23_c892152411964fd09fc7f6efd04c5fa0.jpg"
                className="h-full w-full sm:col-span-1/"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/Oyv2rmcn_4b883a02a10d43c1adb2a8b2f598324d.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/NLt0jbrr_4842380d08cb4b2a9e1f735fc8af96a6.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/Zthu96N4_af86499a08294db9acb0ed2248680fa5.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/yg29mbde_9659810f5c6e4b629c60d86afd9fec8a.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/f1hhXRXb_47fa218587514bf7902594e41d14e9f2.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/hKMNGktP_ad33524adea34688b025f947573673cb.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/Om1hvOEr_5f550103a1764cc5ab3e09abdf1acaf5.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/tXjn3xva_ffd20b0d874a4344829952735ed174a5.jpg"
                className="h-full w-full sm:col-span-1  "
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/9Po69KXA_e28249e405fb478fb556ad7a92ca445e.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="__blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/CdimVElj_ce97d46d5fe64428a08f51217b9f8b0b.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/CEcuo6U4_3f4fc4a160c247cfb41e70485f281d54.jpg" />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/VfNti6y8_a2e5ae944ecc4736b18efb8a75b1e191.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/uwqXL3Kq_0396ac2e5a1a4c12af1eec55c14917c8.jpg"
                className="h-full w-full sm:col-span-1"
              />
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
