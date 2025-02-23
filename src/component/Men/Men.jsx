// Import necessary CSS and components
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function Men() {
  // Slider settings for product images
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };

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

  // Array of product images
  const productImg = [
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/030ecab9-a46c-4add-90ca-bcea38b741e91732962414193-image_png_1486519316.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/9eb5fbaf-aa9c-4477-b941-879dadf134931732962450478-image_png1270292992.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/26d72ed6-e72f-47b1-9f85-cd26d9adceee1732961812540-image_png1589418439.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/8a2544b6-4584-412b-a977-61e3e2aaf1db1732962466066-image_png_138739460.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/28/7cNPpp20_b8dbe5f6cffe47bbba142629910cddc5.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/24330a16-0f31-4ae2-a873-e6b1603db2d91732962431903-image_png_950334215.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/28/TJVBihGn_5bb035e442a24ee09060e85d4c38e4d1.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/28/5BH2whU7_e913cb7ef1c74704ad44b61bdda296e4.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/28/prvqIsgQ_a4645ab8d9cb4e2f9cae534ea088353e.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/9d4ae794-e4ff-4e7c-965a-e0eec9a4c6391732962482427-image_png_1498368473.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/28/tlUrXUnL_8f273ea1efd4478f927a58182f0fc769.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/28/aWWpCuFu_609e439c83864359b3f6a5328c718ce2.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/28/TM1ihioy_1e50a24e48eb4d95ab2adfe50bc45b77.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/28/cU8fsOzW_aa7d13b0c7b34ce694eff1f7ff833559.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/28/ggsM80Ra_1e228fca8b50423fad833811d854b049.png",
    },
    {
      item_image:
        "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/75bbb96e-6a80-46ee-adf2-c12e43e4a06d1732961827223-image_png1602645073.png",
    },
  ];

  // Array of banner images
  const productBanImg = [
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/b54399f0-6ed5-44b3-84b0-e9d5c1657aaa1651599573991-CR7_Desk_Baner.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/846beb79-ada7-48c3-a6c6-4448f276c2111651599573979-Sports-Shoes_Desk.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/abd2b07f-954c-43ad-ba39-bfa50527d0641650180659364-Backpacks---Luggage_Desk.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/eb6408d8-b413-49f7-8525-317fddba53821650180659351-Casual---Sports-Shoes_Desk.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/a53b7f7e-37ab-4319-a1b4-5d9c0cca68601650180659343-Lancer_Desk.jpg",
  ];

  return (
    <>
      <div className="flex justify-around flex-col mr-[20%]  ml-[20%] sm:ml-[5%] sm:mr-[5%]">
        <div className="flex justify-center  mt-[10%] max-w-full max-h-full">
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/18/9B2TYAc1_1e7474ea4f194ee4aaefdf8a11245b2e.jpg"
            alt="this is an offer templet"
          />
        </div>

        <div className="h-full w-full ">
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

        <div className="text-gray-900 text-[35px] mt-12 mb-2 ml-8 max-h-10 font-semibold gap-3 text-left">
          {" "}
          BIGGEST DEALS ON TOP BRANDS
        </div>
        <div className="h-full w-full ">
          <Slider {...settings}>
            {productImg.map((product, index) => (
              <div
                className="grid gap-4 grid-cols-4 sm:grid-cols-6 sm:gap-2 "
                key={index}
              >
                <Link to={"/"} key={index}>
                  <img src={product.item_image} className="sm:col-span-1" />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-gray-900 text-[15px] sm:text-[35px] mt-12 mb-2 ml-8 text-nowrap max-h-10 font-semibold gap-3">
          CATEGORIES TO BAG{" "}
        </div>
        <div className="grid grid-cols-6 sm:grid-cols-6 sm:items-stretch">
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
        </div>
        <div className="text-gray-900 text-[15px] sm:text-[35px] mt-12 mb-2 ml-8 text-nowrap max-h-10 font-semibold gap-3">
          EXPLORE TOP BRANDS{" "}
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-5 sm:items-stretch">
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/a88b9390-5adb-493b-a1b3-702c59ccf53a1598348260502-Nike.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/c9f66558-feab-4d76-aa3c-adc68d81dce21598348260415-Levis.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/178c1e5d-69f2-402f-a2a5-ef44700a0f691596640983793-Roadster---.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/085719b1-c71e-4f47-950c-9a6b7f291fac1598348260370-Jack-_-Jones.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/774f42c4-f459-4514-9b90-cf8a60a5f68c1596644478087-hrx30.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
        </div>
        <div className="text-gray-900 text-[35px] mt-12 mb-2 ml-8 max-h-10 font-semibold">
          MYNTRA LUXE{" "}
        </div>
        <div className="grid grid-cols-6 sm:items-stretch">
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/85fa3b9b-9e7c-43a5-9de0-1cb32f3180151637149111314-MP-Farah.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/480f4bde-1d72-4517-be6d-af2dfef7528e1637149111337-MP-Collective.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/cadd8457-b8ec-464c-9bc6-6082a24075591637149111331-MP-OriginalPenguin.jpg"
                className="h-fit w-fit sm:col-span-1/"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/e185b9a2-0c12-4379-a85c-a4ceed2fe9931637149111326-MP-D1Milano.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/ab5c5029-d24f-4789-979c-d4910801ea191637149111321-MP-HUGOBoss.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/621ce33b-3383-4347-99bf-2038b95f27151637149369429-MP-Ducati.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
        </div>
        <div className="text-gray-900 text-[35px] mt-12 mb-2 ml-8 max-h-10 font-semibold">
          TRENDING IN INDIAN WEAR{" "}
        </div>
        <div className="grid grid-cols-5  sm:items-stretch">
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a9f68785-e282-425a-b270-c978c387b0f31597840342635-Content-ethnicwear-color-whites.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/0d1e0a28-3088-4719-a692-4cdaa7a33cc71597840342726-Content-ethnicwear-occasion-casuallook.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9d248917-d1b0-4910-8de0-4ed7c2b4af8e1595935030939-Content-ethnicwear-trends-printedkurtaset.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/83d9ca97-4aa3-46ce-bd28-b135d3b94a021595935030673-Content-ethnicwear-essentials-everydaykurtas.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9e4fb95e-6268-49c5-9ed1-e6b1bd4b5efd1595935030880-Content-ethnicwear-trend-fashionmeetcomfort.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
        </div>
        <div className="text-gray-900 text-[35px] mt-12 mb-2 ml-8 max-h-10 font-semibold">
          TRENDING IN SPORTS WEAR{" "}
        </div>
        <div className="grid grid-cols-5  sm:items-stretch">
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8becef46-f822-4874-b92a-a7cc7f58819d1597841103131-Content-sportswear-brand-nike.png"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7472ab66-adf2-4d1d-9379-4770a73c1efe1597841103172-Content-sportswear-brand-proline.png"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/65bafbc5-f83b-4158-8168-f7553043814c1597841103082-Content-sportswear-brand-Asics.png"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4aa58fe6-8c61-4e37-9fa8-436c31aecb211597840566511-Content-sportswear-essentials-activewear.png"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/eedc6c0c-c28b-4ccb-952f-a302c96c59ba1598030134978-Content-mostselling-Sportswear-Nikerevolution.jpeg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
        </div>
        <div className="text-gray-900 text-[35px] mt-12 mb-2 ml-8 max-h-10 font-semibold">
          TRENDING IN FOOTWEAR{" "}
        </div>
        <div className="grid grid-cols-5  sm:items-stretch">
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/647e166b-f645-443a-892d-df84ee345e781595935221231-Content-Footwear-men-Neutral-shades.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9654b0f9-42a9-4111-a4b7-27b26c5a22d41595935221284-Content-Footwear-Unisex-Sneakers-for-Dancers_.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/be0b0d6f-7c72-4752-859f-ee44902ff7171597912691244-Content-footwear-trend-sneakersmen.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a84d687a-1ff3-4b06-a47b-48021ba7cec11597840342959-Content-footwear-occasion-outbackoutdoor.png"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/49dd1ce9-d627-4c6e-b544-4be7e1f24a091597840342867-Content-footwear-essentials-flipflops.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
        </div>
        <div className="text-gray-900 text-[35px] mt-12 mb-2 ml-8 max-h-10 font-semibold">
          TRENDING IN ACCESSORIES{" "}
        </div>
        <div className="grid grid-cols-5  sm:items-stretch">
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8363b55c-446f-4de2-bc5b-e75fd6fdfb2d1597840217862-Content-accessories-brand-fastrack.png"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/2bcf907c-bc21-44cb-9021-7575a963b0ef1595934830671-Content-Accesories-Unisex-True-wirless-lets-get-free.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/bddd9c73-e4f1-43c0-a073-2ff3c0e376b51595934830554-Content-Accesories-men-Sporty-Watches_.jpg"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png"
                className="h-fit w-fit sm:col-span-1"
              />
            </a>
          </Link>
          <Link to={"/Menproduct"}>
            <a href="#" target="_blank">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/274b3659-420d-43c2-8e4c-17249e6eaf8d1597840218139-Content-accessories-trend-minimalist.png"
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

export default Men;
