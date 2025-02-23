// This file is a React component for the Home and Living section of the Myntra clone.
// It will contain the main structure and logic for displaying Home and Living products.

import React from "react";
import { Link } from "react-router-dom";

function HomeAndLiving() {
  return (
    <>
      <div className="flex justify-around items-center flex-col mr-[20%]  ml-[20%] sm:ml-[5%] sm:mr-[5%]">
        <div className=" flex justify-center mt-[10%] max-w-full max-h-full">
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/18/9B2TYAc1_1e7474ea4f194ee4aaefdf8a11245b2e.jpg" />
        </div>
        <div className="h-full w-full m-3 mr-3">
          <img
            className="h-fit w-fit  "
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/6/8/eff01060-f706-468d-b97c-95cdf43174f91528443826867-Desktop-Home-Banner.jpg"
            alt="This is the banner image"
          />
        </div>
        <div className="text-gray-700 text-[25px] mt-12 mb-2 ml-8 max-h-10 font-extrabold  gap-3">
          {" "}
          MEDAL WORTHY BRANDS TO BAG
        </div>
        <div className="flex justify-center items-center flex-wrap">
          <Link to={"/HomeAnsLivingproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563660020-bed.jpg"
                className="sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/HomeAnsLivingproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563782565-furnishings.jpg"
                className="sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/HomeAnsLivingproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563810789-art-n-decor.jpg"
                className="sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/HomeAnsLivingproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563866590-lamps.jpg"
                className="sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/HomeAnsLivingproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563925069-kitchen.jpg"
                className="sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/HomeAnsLivingproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563958962-bath.jpg"
                className="sm:col-span-1"
              />
            </a>
          </Link>
        </div>
        <img
          className="h-full w-full"
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478281102-Home-page-Desktop_12.jpg"
          alt=""
        />
        <div className="flex justify-center h-full w-full">
          <Link to={"/HomeAnsLivingproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517485441956-Wedding-checklist.jpg"
                className="sm:col-span-1 m-5"
              />
            </a>
          </Link>
          <Link to={"/HomeAnsLivingproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478592904-Home-page-Desktop_14.jpg"
                className="sm:col-span-1 m-5"
              />
            </a>
          </Link>
          <Link to={"/HomeAnsLivingproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478592892-Home-page-Desktop_15.jpg"
                className="sm:col-span-1 m-5"
              />
            </a>
          </Link>
        </div>
        <div className="text-gray-700 text-[25px] mt-12 mb-2 ml-8 max-h-10 font-extrabold  gap-3">
          FEATURED BRANDS
        </div>
        <div className="flex justify-center items-center gap-2">
          <Link to={"/HomeAnsLivingproduct"}>
            <a>
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/13606c4a-14e9-48e4-a56a-a9c3979e7db21650971940091-swayam_logo_new_1980_x_1280.jpg"
                alt="featured brands"
                className="h-full w-full"
              />
            </a>
          </Link>
          <Link to={"/HomeAnsLivingproduct"}>
            <a>
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/ff6b8a0b-83fa-4f9f-bbb3-0fc51fd9454a1647517771374-updated-logo.jpg"
                alt="featured brands"
                className="h-full w-full"
              />
            </a>
          </Link>
          <Link to={"/HomeAnsLivingproduct"}>
            <a>
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/9830dff5-9056-402f-9bf0-ba3ead0abcaf1647499996169-SPACES---LOGO-01--BEDBATHRUGS-.jpg"
                alt="featured brands"
                className="h-full w-full"
              />
            </a>
          </Link>
          <Link to={"/HomeAnsLivingproduct"}>
            <a>
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/06f9e39d-a4d4-4ba4-b4cb-960c87ff5d511647499996189-M-S-Logo.jpg"
                alt="featured brands"
                className="h-full w-full"
              />
            </a>
          </Link>
          <Link to={"/HomeAnsLivingproduct"}>
            <a>
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/1/a38e440e-1ff7-4092-acbe-46d74b38384a1551443106457-Home-page-Desktop-Brands_13.jpg"
                alt="featured brands"
                className="h-full w-full"
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

export default HomeAndLiving;
