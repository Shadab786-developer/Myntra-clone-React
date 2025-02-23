// This file is a React component for the Footer section of the Myntra clone.
// It will contain the main structure and logic for displaying the footer.

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="font-sans">
        <div className="flex flex-wrap justify-evenly pt-8 pb-10 bg-slate-50">
          <div className="flex flex-col ml-[5%]">
            <h3 className="text-gray-900 font-bold text-[14px] mb-6">
              ONLINE SHOPPING
            </h3>
            <a
              href="#"
              className="text-gray-400 text-[15px] decoration-white pb-1"
            >
              Men
            </a>
            <a
              href="#"
              className="text-gray-400 text-[15px] decoration-white pb-1"
            >
              Women
            </a>
            <a
              href="#"
              className="text-gray-400 text-[15px] decoration-white pb-1"
            >
              Kids
            </a>
            <a
              href="#"
              className="text-gray-400 text-[15px] decoration-white pb-1"
            >
              Home & living
            </a>
            <a
              href="#"
              className="text-gray-400 text-[15px] decoration-white pb-1"
            >
              Beauty
            </a>
            <a
              href="#"
              className="text-gray-400 text-[15px] decoration-white pb-1"
            >
              Studio <sup>New</sup>
            </a>
            <a
              href="#"
              className="text-gray-400 text-[15px] decoration-white pb-1"
            >
              Gift Card
            </a>
            <a
              href="#"
              className="text-gray-400 text-[15px] decoration-white pb-1"
            >
              Myntra Insider
            </a>
          </div>
          <div className="flex flex-col ml-[5%]">
            <h3 className="text-gray-900 font-bold text-[14px] mb-6">
              CUSTOMER POLICIES
            </h3>
            <Link to={"/Help"}>
              <a
                href="#"
                className="text-gray-400 text-[15px] decoration-white pb-1"
              >
                Contact Us
              </a>
            </Link>
            <Link to={"/FAQ"}>
              <a
                href="#"
                className="text-gray-400 text-[15px] decoration-white pb-1"
              >
                FAQ
              </a>
            </Link>
            <a
              href="#"
              className="text-gray-400 text-[15px] decoration-white pb-1"
            >
              T&C
            </a>
            <a
              href="#"
              className="text-gray-400 text-[15px] decoration-white pb-1"
            >
              Terms Of Uses
            </a>
            <a
              href="#"
              className="text-gray-400 text-[15px] decoration-white pb-1"
            >
              Track Orders
            </a>
            <a
              href="#"
              className="text-gray-400 text-[15px] decoration-white pb-1"
            >
              Shipping
            </a>
            <a
              href="#"
              className="text-gray-400 text-[15px] decoration-white pb-1"
            >
              Cancellation
            </a>
            <a
              href="#"
              className="text-gray-400 text-[15px] decoration-white pb-1"
            >
              Returns
            </a>
            <a
              href="#"
              className="text-gray-400 text-[15px] decoration-white pb-1"
            >
              Privacy policy
            </a>
            <a
              href="#"
              className="text-gray-400 text-[15px] decoration-white pb-1"
            >
              Grievance Redressal
            </a>
          </div>

          <div className="flex justify-start items-start flex-col ml-[5%]">
            <h3 className="text-gray-900 font-bold text-[14px] mb-6">
              EXPERIENCE MYNTRA APP ON MOBILE
            </h3>
            <div className="flex justify-center">
              <a href="https://play.google.com/store/apps/details?id=com.myntra.android">
                <img
                  src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                  alt="Enjoy with android"
                  className="h-10 w-full"
                />
              </a>
              <a href="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059">
                <img
                  src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                  alt="Enjoy with IOs"
                  className="h-10 w-full ml-3"
                />
              </a>
            </div>

            <h3 className="text-gray-900 font-bold text-[14px] mt-6 mb-2">
              KEEP IN TOUCH
            </h3>
            <div className="flex justify-start">
              <a href="https://www.facebook.com/myntra">
                <img
                  src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png"
                  alt="Join wiht facebook"
                  className="h-1/2 mr-4 w-1/2"
                />
              </a>
              <a href="https://www.facebook.com/myntra">
                <img
                  src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png"
                  alt="Join with twitter"
                  className="h-1/2 mr-4 w-1/2"
                />
              </a>
              <a href="https://www.youtube.com/user/myntradotcom">
                <img
                  src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png"
                  alt="Join with youtube"
                  className="h-1/2 mr-4 w-1/2"
                />
              </a>
              <a href="https://www.instagram.com/myntra/#">
                <img
                  src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"
                  alt="Join with instagram"
                  className="h-1/2 mr-4 w-1/2"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-start flex-col ml-[5%]">
            <div className="flex justify-center ml-5">
              <img
                src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                alt="Gaurantee for porduct"
                className="h-3/4 w-1/6 mr-2"
              />
              <p>
                <strong>100% ORIGINAL</strong>
                guarantee for <br /> all products at myntra.com{" "}
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
                alt="Returning period"
                className="h-3/4 w-1/6 mr-2"
              />
              <p>
                <strong>Return within 14days</strong>
                of <br /> receiving your order
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col ml-[8%]">
          <h3 className="text-gray-900 font-bold text-[14px] mb-6">
            USEFUL LINKS
          </h3>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            Careers
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            Site Map
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            Corporate Information
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            Whitehat
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            Cleartrip
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            Gift Card
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            Myntra Insider
          </a>
        </div>
        <div className="mt-[5%] ml-[4%]">
          <h3 className="text-gray-900 font-bold text-[14px] mb-6">
            POPULAR SEARCHES
          </h3>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            Dress For Girls
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | T-Shirts
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Sandals
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Headphones
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Blazer For Men
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Ladies Watches
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Bag
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Sport Shoes
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Reebok Shoes
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Puma Shoes
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Makeup
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Boxers
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Wallets
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Tops
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Earrings
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Fastract Watches
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Kurtis
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Smart Watches
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Titan Watches
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Designer Blouse
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Gowns
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Rings
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Cricket Shoes
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Forever 21
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Eye Makeup
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Phota Frame
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Punjabi Suits
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Bikni
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Myntra Fashion Show
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Lipstick
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Saree
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Watches
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Dresses
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Lehenga
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Nike Shoes
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Goggies
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Suit
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Chinos
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Shoes
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Adidas Shoes
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Woodland Shoes
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Jewellery
          </a>
          <a
            href="#"
            className="text-gray-400 text-[15px] decoration-white pb-1"
          >
            {" "}
            | Designers Sarees
          </a>
        </div>

        <div className="text-gray-400 text-end p-4">
          © 2024 www.myntra.com. All rights reserved.
        </div>
        <div className="m-2 p-3">
          <h4>ONLINE SHOPPING MADE EASY AT MYNTRA</h4>
          <p className="m-5">
            If you would like to experience the best of online shopping for men,
            women and kids in India, you are at the right place. Myntra is the
            ultimate destination for fashion and lifestyle, being host to a wide
            array of merchandise including clothing, footwear, accessories,
            jewellery, personal care products and more. It is time to redefine
            your style statement with our treasure-trove of trendy items. Our
            online store brings you the latest in designer products straight out
            of fashion houses. You can shop online at Myntra from the comfort of
            your home and get your favourites delivered right to your doorstep.
          </p>
        </div>

        <div className=" m-2 p-3">
          <h4>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h4>
          <pre className="w-full m-5 text-balance font-sans">
            Be it clothing, footwear or accessories, Myntra offers you the ideal
            combination of fashion and functionality for men, women and kids.
            You will realise that the sky is the limit when it comes to the
            types of outfits that you can purchase for different occasions.
            Smart men’s clothing - At Myntra you will find myriad options in
            smart formal shirts and trousers, cool T-shirts and jeans, or kurta
            and pyjama combinations for men. Wear your attitude with printed
            T-shirts. Create the back-to-campus vibe with varsity T-shirts and
            distressed jeans. Be it gingham, buffalo, or window-pane style,
            checked shirts are unbeatably smart. Team them up with chinos,
            cuffed jeans or cropped trousers for a smart casual look. Opt for a
            stylish layered look with biker jackets. Head out in cloudy weather
            with courage in water-resistant jackets. Browse through our
            innerwear section to find supportive garments which would keep you
            confident in any outfit. Trendy women’s clothing - Online shopping
            for women at Myntra is a mood-elevating experience. Look hip and
            stay comfortable with chinos and printed shorts this summer. Look
            hot on your date dressed in a little black dress, or opt for red
            dresses for a sassy vibe. Striped dresses and T-shirts represent the
            classNameic spirit of nautical fashion. Choose your favourites from
            among Bardot, off-shoulder, shirt-style, blouson, embroidered and
            peplum tops, to name a few. Team them up with skinny-fit jeans,
            skirts or palazzos. Kurtis and jeans make the perfect fusion-wear
            combination for the cool urbanite. Our grand sarees and
            lehenga-choli selections are perfect to make an impression at big
            social events such as weddings. Our salwar-kameez sets, kurtas and
            Patiala suits make comfortable options for regular wear. Fashionable
            footwear - While clothes maketh the man, the type of footwear you
            wear reflects your personality. We bring you an exhaustive lineup of
            options in casual shoes for men, such as sneakers and loafers. Make
            a power statement at work dressed in brogues and oxfords. Practice
            for your marathon with running shoes for men and women. Choose shoes
            for individual games such as tennis, football, basketball, and the
            like. Or step into the casual style and comfort offered by sandals,
            sliders, and flip-flops. Explore our lineup of fashionable footwear
            for ladies, including pumps, heeled boots, wedge-heels, and
            pencil-heels. Or enjoy the best of comfort and style with
            embellished and metallic flats. Stylish accessories - Myntra is one
            of the best online shopping sites for classNamey accessories that
            perfectly complement your outfits. You can select smart analogue or
            digital watches and match them up with belts and ties. Pick up
            spacious bags, backpacks, and wallets to store your essentials in
            style. Whether you prefer minimal jewellery or grand and sparkling
            pieces, our online jewellery collection offers you many impressive
            options. Fun and frolic - Online shopping for kids at Myntra is a
            complete joy. Your little princess is going to love the wide variety
            of pretty dresses, ballerina shoes, headbands and clips. Delight
            your son by picking up sports shoes, superhero T-shirts, football
            jerseys and much more from our online store. Check out our lineup of
            toys with which you can create memories to cherish. Beauty begins
            here - You can also refresh, rejuvenate and reveal beautiful skin
            with personal care, beauty and grooming products from Myntra. Our
            soaps, shower gels, skin care creams, lotions and other ayurvedic
            products are specially formulated to reduce the effect of aging and
            offer the ideal cleansing experience. Keep your scalp clean and your
            hair uber-stylish with shampoos and hair care products. Choose
            makeup to enhance your natural beauty. Myntra is one of the best
            online shopping sites in India which could help transform your
            living spaces completely. Add colour and personality to your
            bedrooms with bed linen and curtains. Use smart tableware to impress
            your guest. Wall decor, clocks, photo frames and artificial plants
            are sure to breathe life into any corner of your home.
          </pre>
        </div>

        <div className="m-5 text-balance font-sans">
          <h4>HISTORY OF MYNTRA</h4>
          <pre className="text-balance m-5 font-sans">
            Becoming India’s no. 1 fashion destination is not an easy feat.
            Sincere efforts, digital enhancements and a team of dedicated
            personnel with an equally loyal customer base have made Myntra the
            online platform that it is today. The original B2B venture for
            personalized gifts was conceived in 2007 but transitioned into a
            full-fledged ecommerce giant within a span of just a few years. By
            2012, Myntra had introduced 350 Indian and international brands to
            its platform, and this has only grown in number each passing year.
            Today Myntra sits on top of the online fashion game with an
            astounding social media following, a loyalty program dedicated to
            its customers, and tempting, hard-to-say-no-to deals. The Myntra
            shopping app came into existence in the year 2015 to further
            encourage customers’ shopping sprees. Download the app on your
            Android or IOS device this very minute to experience fashion like
            never before
          </pre>
        </div>

        <div className="m-2 p-3 font-sans">
          <h4>SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</h4>
          <pre className="text-balance font-sans">
            Another reason why Myntra is the best of all online stores is the
            complete convenience that it offers. You can view your favourite
            brands with price options for different products in one place. A
            user-friendly interface will guide you through your selection
            process. Comprehensive size charts, product information and
            high-resolution images help you make the best buying decisions. You
            also have the freedom to choose your payment options, be it card or
            cash-on-delivery. The 14-day returns policy gives you more power as
            a buyer. Additionally, the try-and-buy option for select products
            takes customer-friendliness to the next level. Enjoy the hassle-free
            experience as you shop comfortably from your home or your workplace.
            You can also shop for your friends, family and loved-ones and avail
            our gift services for special occasions.
          </pre>
        </div>
      </footer>
    </>
  );
}
