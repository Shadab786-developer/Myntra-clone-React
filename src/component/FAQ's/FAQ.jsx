// This file is a React component for the FAQ section of the Myntra clone.
// It contains state variables for managing active questions and sections, and an array of FAQs.

import React, { useState } from "react";

const FAQ = () => {
  // State variables for managing active questions and sections
  const [isQuestion, setIsQuestion] = useState(null);
  const [isSection, setIsSection] = useState(null);

  // Function to toggle the active question
  const toggleQuestion = (questionId) => {
    setIsQuestion(isQuestion === questionId ? null : questionId);
  };

  // Function to toggle the active section
  const toggleSection = (sectionId) => {
    setIsSection(isSection === sectionId ? null : sectionId);
    setIsQuestion(null);
  };

  // Array of FAQs with their sections and questions
  const faq = [
    {
      id: 1,
      title: "Top Queries",
      questions: [
        {
          id: 14,
          question:
            "Why are there different prices for the same product? Is it legal?",
          answer:
            "Myntra is an online marketplace platform that enables independent sellers to sell their products to buyers. The prices are solely decided by the sellers, and Myntra does not interfere in the same. There could be a possibility that the same product is sold by different sellers at different prices. Myntra rightfully fulfils all legal compliances of onboarding multiple sellers on its forum as it is a marketplace platform.",
        },
        {
          id: 2,
          question:
            "I saw the product at Rs. 1000 but post clicking on the product, there are multiple prices and the size which I want is being sold for Rs. 1600. Why is there a change in price in the product description page?",
          answer:
            "Myntra is an online marketplace, and multiple sellers could be selling a particular style at different prices as may be set by each such seller respectively. The product price on the listing page of the platform, may not always reflect the lowest price for that particular style. This is because the seller whose price is displayed on the list page is selected based on the application of a number of parameters and price is only one such parameter. However, once you land on the product display page on the platform for a specific style, you will have access to the price offered by all sellers on the platform for the relevant style.",
        },
        {
          id: 3,
          question:
            "How will I detect fraudulent emails/calls seeking sensitive personal and confidential information?",
          answer: `If you receive an e-mail, a call from a person/association claiming to be from Myntra seeking sensitive confidential information like debit/credit card PIN, net-banking or mobile banking password, we request you to never provide such confidential and personal data. We at Myntra or our affiliate logistics partner never ask for such confidential and personal data. If you have already revealed such information, report it immediately to an appropriate law enforcement agency.

Here are a couple of baits fraudsters often use to cheat consumers:


Congratulations! You have been nominated as a ‘Top Myntra customer’ and are now eligible for a luxury gift item. Please share your proof of address and your debit/credit card details to avail this great offer.


Hi, I’m calling from Myntra. We are happy to let you know that you have won an exclusive lucky draw coupon of Rs. 5000 on your latest purchase. Please share your credit/debit card number so we can credit the money directly into your bank account.`,
        },
        {
          id: 4,
          question: "How will I identify a genuine appointment letter?",
          answer: `Please beware of the fraudulent individuals/agencies that are enticing job seekers by promising them career opportunities at Myntra in lieu of 1.) recruitment fee 2.) processing fee 3.) security deposit 4.) software or equipment charges 5.) on-boarding charges etc. Please be cautious that, Myntra and its recruitment partners never ask for any fee in exchange for an offer letter or interview calls. All offer related communications are sent from an official Myntra email id only.`,
        },
        {
          id: 5,
          question: "Why will 'My Cashback' not be available on Myntra?",
          answer: `To make your shopping experience easier and simpler, 'My Cashback' will be replaced by PhonePe. PhonePe wallet can be used on Myntra and other PhonePe partners. To use your PhonePe balance, you will have to activate/verify your PhonePe account`,
        },
        {
          id: 6,
          question: "How do I cancel the order, I have placed?",
          answer: `Order can be canceled till the same is out for delivery. Note: This may not be applicable for certain logistics partner. You would see an option to cancel within 'My Orders' section under the main menu of your App/Website/M-site then select the item or order you want to cancel. In case you are unable to cancel the order from'My Orders' section, you can refuse it at the time of delivery and refund will be processed into the source account, if order amount was paid online.`,
        },
        {
          id: 7,
          question: "How do I create a Return Request?",
          answer: `You can create a Return in three simple steps


Tap on MyOrders
Choose the item to be Returned
Enter details requested and create a return request`,
        },
        {
          id: 8,
          question:
            "I have created a Return request. When will the product be picked up?",
          answer: `Number of days to pickup a product may vary as per the Logistics team that will be assigned to pickup your product. The product will be picked anywhere between 4 – 7 days.`,
        },
        {
          id: 9,
          question:
            "I have created a Return request. When will I get the refund?",
          answer: `Refund will be initiated upon successful pickup as per the Returns Policy. The refund amount is expected to reflect in the customer account within the following timelines:


NEFT - 1 to 3 business days post refund initiation
Myntra Credit - Instant
Online Refund – 7 to 10 days post refund initiation, depending on your bank partner
“PhonePe wallet” – Instant

Note: You can maintain up to five bank accounts for NEFT/IMPS refunds and a single bank account can be linked upto five Myntra accounts. If you wish to add a new bank account over and above, please delete an existing bank account.`,
        },
        {
          id: 10,
          question: "Where should I self-ship the Returns?",
          answer: `You can send the return to any one of the following returns processing facilities listed below. Please ensure that you specify the name of the seller you purchased the products from (You can find the seller name on your order invoice) and dispatch the package to the address listed below. Kindly do not send it to any other address as the return package would not be treated as accepted.


**Bangalore

Instakart Service private limited, Anjaneya storage and warehousing, #421/1 and 43 Kacherakanahalli village,
jadigenahalli, Soukya Road Hosakote Taluk,
Bangalore Rural - 560067


**Hyderabad

Flipkart India Pvt.Ltd, Sy no 696, Gundlapochampally Village, Medchal Mandal, ranga reddy Dist, Secunderabad-501401


**Maharashtra

Survey nos. 42/2, 42/3, 51/2, 51/3, 51/4, 51/5B (old survey no.51/5A+B), 51/5A+6B, 51/5B+6A, 51/6, 57/17, 57/18, in K-square Industrial Park, Before Padgha Toll Naka, Nashik – Mumbai Highway, After Pushkar Mela Hotel, Kurund village, Bhiwandi, Maharashtra – 421101


**Kolkata

INSTAKART SERVICES PRIVATE LIMITED, Stellar FC, L.R. KHATIAN NO.5820, J.L. NO.11,MOUZA-BELUMILKI, BLOCK- SERAMPORE UTTARPARA,P.S- SERAMPORE,GRAM PANCHAYAT, PEARAPUR, HOOGHLY (D)- 712223


**Haryana

Block C, Embassy Industrial Parks Private Limited, Village Pathredi, Tehsil -Manesar, Gurugram(D) Haryana, INDIA- 122413`,
        },
        {
          id: 11,
          question:
            "I have accumulated Myntra Points in my account. How can I redeem them?",
          answer: `To redeem Myntra Points, you will have to continue shopping with us on App/M-site/Website. In case, you don’t have access to the App/Website or M-site, don’t worry, your Myntra Points are safe with us, whenever you get access of these Platforms in future, you can redeem the same (unless points have not expired)`,
        },
      ],
    },
    {
      id: 2,
      title: "Social Carnival Event",
      questions: [
        {
          id: 1,
          question: "What is Myntra Social Carnival?",
          answer: `Myntra Social Carnival is a social-commerce event to be held on 11th Nov, ‘21 exclusively on Myntra mobile app (“Platform”), in which fashion and beauty content creators will feature their looks and chosen products on Myntra Studio (“Studio”) and Myntra-Live (“M-Live”). Along with this, Myntra Fashion Superstar (“MFS”) Season 3 would also premiere on Studio on the same day.

Customers can share their feedback by writing to support_socialcarnival@myntra.com`,
        },
        {
          id: 2,
          question:
            "What is Myntra Studio, and how can I shop through Myntra Studio ?",
          answer: `Myntra Studio is an on-demand influencer-led content platform where you can view content (images/videos/polls/quizzes) posted by influencers and brands. You can also shop for select products featured on the Studio posts.

You can access Studio by clicking on “Studio” icon in the bottom navigation pane on the Myntra app. To shop for products featured on the post (or similar products), click on “Shop Products” on the bottom left of the post.

You can either wishlist products by clicking on the wishlist (heart) button or go to the detailed product page by clicking on the image of the product. From the product page, you can add the product to your cart, and check out.`,
        },
        {
          id: 3,
          question:
            "What is Myntra Live, and how do I shop through Myntra Live?",
          answer: `Myntra Live is a live shopping construct where fashion influencers will be livestreaming and featuring products and looks, which can be bought by the customers. Users can ask questions in comments, wishlist and/or shop the products being shown by the influencers in real time.

The ongoing live streams can be accessed at any point of time by going to Studio, and clicking within the “live shopping with top influencers” widget. Once in the live stream, you can check the featured products in the product carousel at the bottom of the page. On clicking any of the products, a mini product page opens up where you can choose the size you want to order. You can then go to your cart to check out by clicking on “Go to Bag”.`,
        },
        {
          id: 4,
          question:
            "How can you sign up to be an influencer on Myntra Studio or Myntra Live?",
          answer: `You can sign up to be an influencer on Myntra by registering on https://studio.galleri5.com/. Representatives from Myntra will reach out to you for the next steps.`,
        },
        {
          id: 5,
          question:
            "How do I redeem the MLive Coupons which I saw Influencers calling out in live streaming?",
          answer: `The coupons that are shown in MLive will also be available on the cart page. Click on Apply Coupon option in cart page to view all the eligible coupons.`,
        },
      ],
    },
    {
      id: 3,
      title: "Shipping, Order Tracking & Delivery",
      questions: [
        {
          id: 1,
          question: "What is Myntra's Platform Fee?",
          answer: `Platform fee is levied by Myntra to sustain the efficient operations and continuous improvement of the platform, for a hassle-free app experience.`,
        },
        {
          id: 2,
          question: "Refund of Platform Fee",
          answer: `a) If the order is lost or undelivered to the preferred location, the complete order amount will be refunded if paid online, including the platform fee.


b) If a customer cancels an order partially or returns an order, platform charges will not be refunded.


c) Platform charges will be refunded in case of a full order cancellation


d) For accounts whose return behavior does not adhere to our fair usage policy, platform fee will be non-refundable irrespective of order value*.

*Order value is calculated after applying discounts/VAT/GST or any other applicable charges.`,
        },
        {
          id: 3,
          question: "What is Myntra's Shipping Fee?",
          answer: `a) Shipping fee is charged towards providing delivery and post order services including but not limited to, higher than average returns


b) Shipping is a value added service charge levied under one of the following circumstances:


Orders below a certain value. The value can vary based on the category

a) Orders below INR 1199 for all categories except personal care and personal care orders below INR 299 (not applicable for Insiders) are charged with Shipping fee.

b) The final shipping fee is calculated post application of any 'coupon benefit' and offers

c) The threshold values can change, please review the Shipping Fee at the time of checkout


c) Shipping fee is not levied to Myntra Insiders, irrespective of the order value.`,
        },
        {
          id: 4,
          question: "Refund of Shipping Fee",
          answer: `a) If the entire order is lost or undelivered to the preferred location, the complete order amount will be refunded if paid online, including the shipping fee.


b) If an order is cancelled partially, shipping charges will not be refunded. In case of whole order cancellation, shipping charges will be refunded.


c) In case item/ order is returned, shipping fee is not refunded


d) For accounts whose return behavior does not adhere to our fair usage policy, shipping fee will be non-refundable irrespective of order value*.

*Order value is calculated after applying discounts/VAT/GST or any other applicable charges.`,
        },
        {
          id: 5,
          question: "What is Myntra’s Fair Usage Policy?",
          answer: `We always strive to provide the best experience to our customers. However, very rarely, there are some accounts that misuse Myntra's customer-friendly return service. These accounts typically return more items compared to an average user or frequently choose to not accept their shipments. Myntra reserves the rights to levy shipping fee on customers whose return rates are higher than average and are not adhering to the liberal returns service.`,
        },
        {
          id: 6,
          question: "I am an Insider. Why am I seeing the shipping fee?",
          answer: `Shipping fee is a charge levied by Myntra, for the services rendered by Myntra on the platform . As an Insider, you continue to enjoy free shipping benefits without any minimum order value limits.


However, a shipping fee is charged to all customers by Myntra for providing technical expertise, brand aggregation, and post sales support. The fees help mitigate various costs incurred by the platform and ensure smooth running and efficient customer service.`,
        },
        {
          id: 7,
          question: "How do I check the status of my order?",
          answer: `Please tap on “My Orders” section under main menu of App/Website/M-site to check your order status.`,
        },
        {
          id: 8,
          question: "How can I check if Myntra delivers to my PIN Code?",
          answer: `You can find out if Myntra delivers to your PIN Code using the courier serviceability tool available on the product page. Please tap on “Check Delivery options” and enter your area PIN code in the respective field to get the required information about standard order delivery time and availability of Cash on Delivery for the Product selected. The PIN codes serviced by us are frequently updated, so if we do not deliver to your PIN code today, please come back and check to see if this has changed.`,
        },
        {
          id: 9,
          question: "How are orders placed on Myntra delivered to me?",
          answer: `All orders placed on Myntra are dispatched through our own courier service - Myntra Logistics or through other courier partners such as Blue Dart, Delhivery Etc.`,
        },
        {
          id: 10,
          question: "Does Myntra deliver products outside India?",
          answer: `No. At this point, Myntra delivers products only within India.`,
        },
        {
          id: 11,
          question: "How can I get my order delivered faster?",
          answer: `Sorry, currently we do not have any service available to expedite the order delivery. In future, if we are offering such service and your area pincode is serviceable, you will receive a communication from our end.`,
        },
        {
          id: 12,
          question:
            "I have received a partial item/partial order or an Untenanted/Void packet?",
          answer: `Kindly reach out to us for pilferage within 72 hours of delivery failing which the claim will not be entertained. Whilst we investigate, request you to please make note of the below pointers:


Please do not use the item for which claim is being raised.


You may be required to information’s like, short description of the case (A few questions will be asked to help us understand the scenario)


The snapshots of the packet and other boxes (If any) (Try to cover the sides which look tampered/damaged as per the Users


The refund for prepaid/Cash on delivery orders will be done after the investigation


You may not be liable for a refund, if he/she falls in any of the scenarios stated below:


Failure to provide adequate information about the case.


Failure to provide snapshots of the packet and box(if any)


If a pilferage delivery was received, pilferage claims must be made the same day.


You must not dispose of the packaging for 3 - 4 days post - delivery. We might need to pick-up your packaging for investigation at our end.


You have used the item for which claim was raised.


In case of a component missing from a multi-component item such as Kurta, Bed - sheets, inner wear sets etc.only exchange return option would be provided basis serviceability and product type`,
        },
      ],
    },
    {
      id: 4,
      title: "Cancellations and Modifications",
      questions: [
        {
          id: 1,
          question: "What is Myntra's Cancellation Policy?",
          answer: `You can now cancel an order when it is in packed/shipped status, as long as the cancel option is available on App/Website/M-site. This includes items purchased on sale also. Any amount paid will be credited into the same payment mode using which the payment was made`,
        },

        {
          id: 2,
          question:
            "Can I modify the shipping address of my order after it has been placed?",
          answer: `Yes, You can modify the shipping address of your order before we have processed (packed) it, by updating it under 'change address' option which is available under ‘My order’ section of App/Website/M-site`,
        },

        {
          id: 3,
          question: "How do I cancel my Order?",
          answer: `Tap on “My Orders” section under the main menu of your App/Website/M-site and then select the item or order you want to cancel`,
        },

        {
          id: 4,
          question: "I just cancelled my order. When will I receive my refund?",
          answer: `If you had selected Cash on Delivery, there is no amount to be refunded because you haven't paid for your order. For payments made via Credit Card, Debit Card, Net Banking, or Wallet you will receive refund into the source account within 7-10 days from the time of order cancellation. If payment was made by redeeming PhonePe wallet balance then, then refund will be instant post order cancellation, which can be later transferred into your bank account, by contacting PhonePe customer support team.`,
        },
      ],
    },
    {
      id: 5,
      title: "Returns and Exchange",
      questions: [
        {
          id: 1,
          question:
            "What is Myntra's Return and Exchange Policy? How does it work?",
          answer: `Myntra's returns and exchange policy gives you an option to return or exchange items purchased on Myntra for any reason within the specified return/exchange period (check product details page for the same) Returns will be picked from the same address where the product is delivered. Feel free to try on a product but all we ask is that the product remains unused and is preserved in its original condition along with the tags and packaging. In case a Seal Tag is received with the item, ensure that it remains attached & intact with the product to avoid any hassles in the event of a return/exchange. There are two ways to return the product to us:


Pick up: In most locations, we offer a free pick up service. You will see a pickup option when you submit a return request.
Self-Ship: If we don't offer a pick up at your location. In such cases, we will credit the shipping costs in the form of Myntra credits provided the product meets the return policy and you have shared scan copy of the courier receipt with us.

During Pick Up, our delivery agent may do a quality check on the return. For a successful pick up, we will initiate a doorstep refund for the return amount into the refund mode selected at the time of initiating the return request. This doorstep refund may not be applicable for some pin codes in which case refund will be initiated after the product has been received at our warehouse and has passed a quality check. If the picked up product does not pass the quality check, we shall ship it back to you. If you choose to exchange the item for reason of mismatch of size or receipt of a defective item, you will be provided with a replacement of the item, free of cost. However all exchanges are subject to stock availability and subject to your address being serviceable for an exchange. If you choose to exchange an item, our delivery representative will deliver the new item to you and simultaneously pick up the original item from you. Please note that we offer you an option to exchange items purchased by you on Myntra for same or different sizes of same style or for any other item of the same or different value from Myntra within the specified exchange period subject to your address being serviceable for an exchange.

The following EXCEPTIONS and RULES apply to this Policy:


Swarovski, Precious Jewelry, Rayban Sunglasses, Socks, Briefs, Shapewear Bottoms, any Lingerie Set that includes a Brief, Swimwear, Mittens, Wrist-Bands cannot be exchanged or returned.

Some products like fine jewellery, watches and selected products which are susceptible to damage can only be returned/exchanged for a limited number of days. Certain products like sherwanis can only be exchanged not returned. Please read the Product Detail Page to see the number of days upto which a product can be returned/exchanged, post-delivery.

Due to the intimate nature, we handle returns for certain Innerwear, Sleepwear and Lingerie items differently. Only self-ship return is allowed for such items, hence pickup facility will not be available. Also, these items cannot be exchanged.

All items to be returned or exchanged must be unused and in their original condition with all original tags and packaging intact (for e.g. shoes must be packed in the original shoe box).

Under Exchange Policy,

Note: Exchange/Replacement will be delivered at the same address where the original product was delivered. In case you wish to receive an exchange to a new address, we recommend returning the item for a refund and placing a new order with the new address.


a) If you choose to exchange the item purchased by you on Myntra within the specified exchange period for the same size or different size of same style, you will be provided with a replacement of the item, free of cost.


b) If you choose to exchange item purchased by you on Myntra for any other item of the same or different value from Myntra. In such case, if exchanged item is of the higher value, differences in amount will be charged to you and if exchanged item is of the lower value, differences in amount will be refunded to you post successful pick up of original item from you.


c) Net amount paid by you (excluding instant cashback/discount) to purchase original item will be considered to calculate difference in amount of original and exchanged item which will be payable by you or refundable by Myntra as the case may be, for an exchange.


d) Applicable refund for exchange will be trigger post successful pick of original item from you.


6) All exchanges are subject to stock availability and subject to your address being serviceable for an exchange.

7) Item cannot be exchanged for multiple products and you are allowed to select single item for exchange. While customer can exchange multiple item at a time by initiating separate exchange request for each of the item.

8) Non- returnable products/categories cannot be exchanged.

9) Platform Handling Fee (as defined under ‘Terms of Use’) is not applicable to exchanged orders.

10) Myntra shall reserve the right to restrict exchange of the items purchased on Myntra if customer in any way breaches or misuse this policy, as determined in Myntra’s sole discretion.In case you have purchased an item which has a free gift/offer associated with it and you wish to return the main item, then you will have to return the free product as well.

11) Myntra will not be liable for the products returned by mistake. In circumstances where an extra or a different product is returned by mistake, Myntra would not be accountable for misplacement or replacement of the product and is not responsible for its delivery back to the User

12) If you self-ship your returns, kindly pack the items securely to prevent any loss or damage during transit. For all self-shipped returns, we recommend you use a reliable courier service.

13) If you self-ship your returns, your shipping costs would be reimbursed subject to your return having met our Returns and Exchange Policy and the image of the courier receipt is shared by you and validated by us. For self ship returns the refund for returned products will only be initiated if they pass through a quality check conducted at the warehouse. If the quality check fails the product will be reshipped back to you.`,
        },
        {
          id: 2,
          question: "To return a product to Myntra, please follow these steps:",
          answer: `You can return products purchased from Myntra within the specified return/exchange period(check product details page for the same), except for our non-returnable products and high-value products which can only be returned for limited number of days.


Create a 'Return Request' under “My Orders” section of App/Website/M-site. Follow the screens that come up after tapping on the 'Return’ button. Please make a note of the Return ID that we generate at the end of the process. Keep the item ready for pick up or ship it to us basis on the return mode

We offer pick-up facility in selected locations basis our courier serviceability.

If reverse pick-up option is not available at your location you can self-ship the product to us

Pick-up: If you select to schedule a pick-up, please place the product in a packet and the product must be unused, unwashed and all the tags are intact.Keep the packet ready and open to expedite the return pickup. Our staff may initially examine the product at the time of pickup and a further quality check of the product will be conducted at our Returns Desk.


Self-ship: In case your area pincode is not eligible for “Pick-up” mode then, please self-ship the product to our Returns desk.Please pack the product and ensure product is unused, unwashed and all the tags are intact.Also, please mention Order No and Return id on a piece of paper and place it in the packet. Kindly address the package to the address of the Returns desk closest to you. We have listed out the addresses of the Returns desk in another section on this page.


We will send you a confirmation email as soon as we receive the shipment at our warehouse. At any time, you can track the status of your return request on App/Website/Msite.

NOTE: NO PRODUCTS SHALL BE ACCEPTED IF THE WARRANTY CARD IS MISSING WHILE RETURN OR EXCHANGE OF THE PRODUCTS.`,
        },
        {
          id: 3,
          question: "How do I place an exchange request on Myntra?",
          answer: `If you would like to exchange products purchased from Myntra, please follow below mentioned steps:


You can create exchange for products purchased from Myntra within the specified return/exchange period (check product details page for the same) under “My Orders” section of App/Website/M-site. If your address is serviceable for exchange you will be able to proceed and generate an exchange id. Please note down your exchange id for future reference

Place the product in a packet but do not seal it. Please ensure product is unused, unwashed with all the tags intact.

Hand over the original product to our delivery staff and receive the exchange item from him. Please ensure that you have the original item available with you at the same address which has been selected for delivery of the exchange item.
At any time, you can track the status of your exchange requests under “My Orders” of App/Website/M-site.`,
        },
        {
          id: 4,
          question: "What is No Questions Asked Returns?",
          answer: `Once you create a return via App / Desktop as per the returns policy, Myntra will ensure a quick, easy and seamless returns experience for you. Our delivery agents may perform a simple quality check at your doorstep and upon acceptance of the return, your refund will be initiated immediately.`,
        },
        {
          id: 5,
          question:
            "Why has my return been put on hold despite No Questions Asked Returns Policy?",
          answer: `At the time of creating a return, customers are requested to confirm (via a check box click) that the product being returned is unused with original tags intact. At the time of pickup, if the above conditions are not found to be met, your return may be put on hold pending further clarification with our Contact Center.`,
        },
        {
          id: 6,
          question: "What is Instant Refunds?",
          answer: `Upon successful pickup of the return product at your doorstep, Myntra will instantly initiate the refund to your source account or chosen method of refund. Instant Refunds is not available in a few select pin codes and for all self ship returns.`,
        },
        {
          id: 7,
          question:
            "Why have I not received my Refund despite Instant Refunds policy?",
          answer: `For refunds taken into source accounts via UPI & Wallet, your refund will reflect instantly(48hrs in case of delay).For refunds taken to source accounts (that is Credit Card, Debit Card and Netbanking), your refund may take 5 business days to reflect in your account depending upon your bank partner.`,
        },
        {
          id: 8,
          question:
            "How long would it take me to receive the refund of the returned product?",
          answer: `After the refund has been initiated by Myntra as per the Returns Policy, the refund amount is expected to reflect in the customer account as per the following timelines:


NEFT - 1 to 3 business days post refund initiation
Myntra Credit - Instant
Online Refund – 5 business days post refund initiation, depending on your bank partner
PhonePe wallet –Instant

Please note, Myntra initiates the refund upon successful return pick up, or after the returned item has reached us and quality check is successful. Therefore, the refund initiation time may vary by time taken by the courier partner to deliver the return to a Myntra warehouse. In case of any refund discrepancies, Myntra may at its sole discretion, request you to share with us a screenshot of your bank statement.


Note : You can maintain up to five bank accounts for NEFT/IMPS refunds and a single bank account can be linked upto five Myntra accounts. If you wish to add a new bank account over and above, please delete an existing bank account.`,
        },
        {
          id: 9,
          question: "How do I return multiple products from a single order?",
          answer: `If you are returning multiple products from a single order then, you will receive a separate Return ID via e-mail for each item. If you are self-shipping the products, you can ship all the products in a single shipment. Please mention the Return IDs for all the products on a single sheet of paper and place it inside the packet.If mode of return is Pickup, our courier person will pickup the products from the pickup address.`,
        },
        {
          id: 10,
          question:
            "Does Myntra pick up the product I want to return from my location?",
          answer: `Currently, we pick up products only from selected PIN Codes. If your area pincode is serviceable, you will be able to select the pickup option when you create a Return Request on App/Website/M-site.


We will pick up the return within 4 - 7 days from the request placement date.
Please keep the return shipment ready.`,
        },
        {
          id: 11,
          question: "How can I Self-Ship the product to Myntra?",
          answer: `If your area pin code is not serviceable for pickup, you will need to self-ship the return item via any reliable courier partner. Please ensure to place a sheet of paper with the details of Order ID and Return ID for each item included in the package. For all self-shipped returns, you will be duly reimbursed the shipping costs. Therefore, please ensure that scan copy of courier bill/receipt is shared via Contact us option available on App/Website/M-site. The courier bill/receipt should satisfy the following conditions for successful processing:


It should capture the weight of the return package.
Residential/office address, destination address, shipment date, amount and other details should be mentioned.
The information on the receipt should NOT be edited/over-written.
The courier charge (amount mentioned on the receipt) should not overshoot the Sender-Destination-Service combination and shall be cross checked with the courier company.

This is subject to your returns being inspected and successfully processed upon receipt at our end.`,
        },
        {
          id: 12,
          question: "Where should I self-ship the Returns?",
          answer: `You can send the return to any one of the following returns processing facilities listed below. Please ensure that you specify the name of the seller you purchased the products from (You can find the seller name on your order invoice) and dispatch the package to the address listed below. Kindly do not send it to any other address as the return package would not be treated as accepted.


**Bangalore

Survey Numbers 231, 232 and 233, Soukya Road, Samethanahalli Village,
Anugondanahalli Hobli,
Hoskote Taluk,
Bangalore-560067


**Hyderabad

Flipkart India Pvt.Ltd, Sy no 696, Gundlapochampally Village, Medchal Mandal, ranga reddy Dist, Secunderabad-501401


**Maharashtra

Survey nos. 42/2, 42/3, 51/2, 51/3, 51/4, 51/5B (old survey no.51/5A+B), 51/5A+6B, 51/5B+6A, 51/6, 57/17, 57/18, in K-square Industrial Park, Before Padgha Toll Naka, Nashik – Mumbai Highway, After Pushkar Mela Hotel, Kurund village, Bhiwandi, Maharashtra – 421101


**Kolkata

INSTAKART SERVICES PRIVATE LIMITED, Stellar FC, L.R. KHATIAN NO.5820, J.L. NO.11,MOUZA-BELUMILKI, BLOCK- SERAMPORE UTTARPARA,P.S- SERAMPORE,GRAM PANCHAYAT, PEARAPUR, HOOGHLY (D)- 712223


**Haryana

Block C, Embassy Industrial Parks Private Limited, Village Pathredi, Tehsil -Manesar, Gurugram(D) Haryana, INDIA- 122413`,
        },
        {
          id: 13,
          question: "Why has my return request been declined?",
          answer: `This may have happened, if the item you returned is used, damaged or original tags are missing. In the event that the return request is declined, the user shall not be eligible for a refund, and Myntra assumes no liability in this regard. For more details, please call our customer care.`,
        },
        {
          id: 14,
          question: "Why did the pick up of my product fail?",
          answer: `We make three attempts to pick up the item, if the item is not picked up in the third attempt, Pickup request will be marked as failed. You can initiate a new return request, if item meets the return criteria and is within the specified return/exchange period (check product details page for the same). For more details, please call our customer care.`,
        },
        {
          id: 15,
          question: "Why is my returned product re-shipped?",
          answer: `This may have happened, if the item you have returned is used, damaged or original tags or MRP tags are missing. In the event that you fail to accept the receipt of the re-shipped item, you shall continue to be not eligible for a refund, and Myntra assumes no liability with respect to the return or refund for the said re-shipped item. For more details, please call our customer care.`,
        },
      ],
    },
    {
      id: 6,
      title: "Sign Up and Login",
      questions: [
        {
          id: 1,
          question: "How do I create an account on Myntra?",
          answer: `You can create your account on Myntra by entering and verifying your mobile number. Click on "Create New Account" after that and fill up the form to create your Myntra account.`,
        },
        {
          id: 2,
          question:
            "How do I login on Myntra? I used to login with email, Google/Facebook login.",
          answer: `For older users of Myntra who used to login with email/Google/Facebook, enter your mobile number and OTP, then choose your method of login under "Already have an account?". Once you have entered the details, you will be logged in to your account. Next time onwards, you can use your mobile and OTP for easy login.`,
        },
        {
          id: 3,
          question:
            "Why am I asked for password after entering OTP while trying to login?",
          answer: `Myntra's security policy sometimes requires you to enter your password if you have not logged in with OTP for a very long time. This is done to ensure that no one else can access your account after you have discarded your mobile number and it is assigned to someone else as per government policy.`,
        },
        {
          id: 4,
          question: "Can I still login with password on Myntra?",
          answer: `You can login with mobile number and password. This works if your mobile number is verified on your account. To login with mobile and password, enter your mobile number and "Continue". On the OTP page, you will find the option to login with password. However, it is highly recommended that you login with OTP for convenience and security.`,
        },
        {
          id: 5,
          question:
            "What if I don't receive an OTP due to poor network connectivity?",
          answer: `If you are not receiving an OTP use the "Login with password" option to login to your Myntra account.`,
        },
        {
          id: 6,
          question:
            "What is an alternate mobile number? Why does Myntra ask for it?",
          answer: `Alternate Mobile Number is another mobile number that can be used to gain access to your account if you loose your login mobile number, for example if you lose your mobile or you just decided to change your number. In such a case, you can enter your login mobile number and alternate mobile number, the OTP will be sent to the alternate mobile number and you will be able to login to your account and change your password and your login mobile number.`,
        },
        {
          id: 7,
          question:
            "Do I need to provide email to create an account on Myntra?",
          answer: `Providing an email is not mandatory to create an account on Myntra. However, we still recommend adding your email to your account as it will allow you to easily reset your password if you need to.`,
        },
        {
          id: 8,
          question:
            "I have given my mobile number in my last order? Can I use that number to log in to Myntra?",
          answer: `Mobile numbers given along with shipping address cannot be used to log in on Myntra. To use a number for login on Myntra, you need to add your number to your profile and verify it with OTP. This can be done under profile section in Account.`,
        },
        {
          id: 9,
          question: "What is account recovery on Myntra?",
          answer: `Account recovery is the process of getting access to your account in case you have changed or lost your mobile number and did not change the mobile number on your Myntra account before you lost that number. This can be done by validating a saved credit/debit card expiry date (Myntra does not charge anything for this) or by entering an OTP sent to your alternate mobile number.`,
        },
        {
          id: 10,
          question:
            "Why am I asked for my credit card details to access my account?",
          answer: `In case you do not have your mobile number with you anymore, Myntra can use a saved credit/debit card detail from your account, to match for expiry date and give you the option to change your password and update your new mobile number in your account. There is no charge made to the card in this process. Alternatively, you can log in to your account with password if you remember it and change the login mobile number from your profile.`,
        },
        {
          id: 11,
          question:
            "What happens if my mobile number is given to someone else by the telecom operator. Is my Myntra account still safe?",
          answer: `Yes, your Myntra account is safe. The other person cannot access your account as he will need to enter your account password. Myntra systems can smartly detect such SIM handovers and ask the user to enter password additionally in such cases. The new user, however, will be able to create a new account with that number.`,
        },
        {
          id: 12,
          question:
            "How can i change my mobile number that I use to login on Myntra?",
          answer: `You can log in to your account and change it from your Profile > Edit Profile.`,
        },
        {
          id: 13,
          question:
            "I do not have my old mobile number? How can I log into my account and change mobile number?",
          answer: `You can update your account details by going to Account Recovery. For that, you will need to enter your old mobile number and go to the OTP page. You will find an option "Get Help" there to recover your account.`,
        },
        {
          id: 14,
          question: "Does Myntra read my SMSes?",
          answer: `Myntra can only read OTP SMSes that are sent by Myntra. This is in accordance with guidelines provided by Google and Apple in line with user privacy policies.`,
        },
        {
          id: 15,
          question: "Why is my account locked?",
          answer: `Myntra locks accounts for a specified time period or permanently in case there are too many failed login attempts to your account. This is for the security of your account. You should be able to gain access back to your account by resetting your password or call customer care for further help.`,
        },
      ],
    },
    {
      id: 7,
      title: "Payments",
      questions: [
        {
          id: 1,
          question: "How can I pay for my order at Myntra?",
          answer: `We support the following payment options at Myntra:


Cash On Delivery (available in selected pin codes)
Credit Card
Debit Card
Net banking
Gift Card
Wallet`,
        },
        {
          id: 2,
          question: "How does the COD (Cash on Delivery) payment option work?",
          answer: `Myntra's Cash on Delivery option allows you to pay order value at the time of delivery for all orders between Rs. 299 and Rs. 49999. Your existing limits will be revised once, there is a delivery or order rejected against your account, from the new limit implementation logic, if required.To pay for any order using Cash on Delivery (COD) mode of payment, please select the 'Cash On Delivery' option on the payment page. Cash on Delivery option is available only in selected pincodes.However the COD limit may differ from customer to customer depending upon the order rejection percentage from a particular customers registered email id. For avoidance of doubt, 'Order Rejection Percentage' shall mean any undelivered orders which are returned from the address provided by the customer even, after three successful delivery attempts. In event of COD limit breach, your order will be cancelled and you will have to place a new order using Pre-payment options.

Further, the COD limit for any user may get decreased to Rs. 24,999, Rs.1500, Rs.0 basis on order rejection percentage and can be reset to Rs.49,999 basis on Order acceptance percentage and number of prepaid orders placed, post limit decrease.`,
        },
        {
          id: 3,
          question:
            "Does Myntra accept Rs. 2,000 currency notes for Cash on Delivery (COD) payments?",
          answer: `Effective September 20, 2023, we will no longer be able to accept Rs. 2,000 currency notes for Cash on Delivery (COD) orders, in compliance with the guidelines provided by the Reserve Bank of India on May 19, 2023.`,
        },
        {
          id: 4,
          question:
            "I have placed a Cash on Delivery (COD) order and intended to pay with Rs. 2,000 notes, but the Delivery Associate is not accepting them. What should I do in this situation?",
          answer: `As per the RBI laid guidelines, Myntra is not accepting Rs. 2000 notes for COD, effective September 20, 2023.

Instead, you can choose a UPI method of payment or use alternate currency notes to make the payment.

In case you are unable to arrange for an alternate currency, please consider rescheduling your delivery. Request the Style Delivery agent to reattempt the delivery.`,
        },
        {
          id: 5,
          question: "Why can't I see the COD option on my payment page?",
          answer: `If you do not see a COD option on your payment page, this may be due to one of the following reasons:


Your order value may be less than Rs. 299 or over Rs. 49,999.
Our courier partners may not support the Cash on Delivery option for your delivery address.
You may have placed another order using the COD option which is pending delivery. If the amount of this order when added to your current order exceeds Rs. 49,999, then the COD option will be disabled temporarily.For all Tanishq products COD limit is Rs. 15,000`,
        },
        {
          id: 6,
          question: "What is COD limit?",
          answer: `Myntra reserves the right to determine the COD limit for every customer and/or orders. The COD limit includes any undelivered, unpaid orders and any new orders being placed.`,
        },
        {
          id: 7,
          question: "What is Myntra's Cash/Pay on Delivery Fee (COD) Fee?",
          answer: `We apply a small fee for Cash/Pay on Delivery orders towards the handling costs of such orders.`,
        },
        {
          id: 8,
          question: "Refund Policy for Cash/Pay on Delivery Fee (COD):",
          answer: `The COD fee is non-refundable in case of an unlikely event of cancellation (partial or full) or return of the order. Please note that the order value considered for refunds is calculated after all discounts, VAT/ GST, or any other applicable charges have been applied.`,
        },
        {
          id: 9,
          question: "I want to know about EMI (credit card) payment option?",
          answer: `EMI (Credit Card) is a convenient payment option that you can choose to pay for the order in easy installments to the credit card issuing bank. The option is available only on credit cards issued by the following banks:


HDFC
ICICI
SBI
Axis
Amex
HSBC
Induslnd
Kotak
RBL
Standard Chartered.

This EMI option is facilitated by the card issuing bank. The EMI eligibility, payment plan and refund rules are solely on the internal discretion and approvals of the bank.`,
        },
        {
          id: 10,
          question: "How do I make payment using EMI (Credit Card) option?",
          answer: `Add the desired products to your Myntra shopping bag, proceed to checkout, select delivery address and proceed to payment. On payment page, select EMI (Credit Card) under payment options and follow these simple steps:


Select your Credit Card issuing bank you wish to pay from
Select the repayment duration (3, 6, 9, 12, 18 or 24 months). The interest rate, monthly EMI and total interest paid will be displayed.
Enter your Credit Card details
Click ‘Pay Now’.

The order will be confirmed and shipped on successful payment.`,
        },
        {
          id: 11,
          question: "What is the eligibility criteria to avail EMI option?",
          answer: `EMI is available for all products on Myntra except, Jewellery products. Also, the payment option is available only above a minimum order value which varies from bank to bank. For given order value, only the eligible banks will be displayed under the issuing bank list on the EMI payment page.`,
        },
        {
          id: 12,
          question: "Why is sum total of EMI’s more than the order value?",
          answer: `The issuing bank charges interest per EMI transaction. The interest rates are decided by the bank and are displayed at the time of completing the transaction. There is no processing or shipping fees charged on any EMI transactions.`,
        },
        {
          id: 13,
          question: "What happens if bank rejects EMI conversion?",
          answer: `Customer needs to pay full amount of transaction to the bank, since EMI facility is at sole discretion of the issuing bank, please contact your card issuing bank.`,
        },
        {
          id: 14,
          question:
            "Why is the transaction amount not converted into EMI in 7 working days?",
          answer: `Conversion of transaction into EMI is at the sole discretion of card issuing bank and can also be rejected in unfortunate circumstances. In case the paid amount is not converted to EMI within 7 days then contact your card issuing bank.`,
        },
        {
          id: 15,
          question: "What should I do if my payment fails?",
          answer: `Please retry making the payment after ensuring that the information entered is accurate, including all account details, billing addresses and passwords. If your payment still fails, you can use the Cash on Delivery (COD) payment option, if available on the payment page to place your order. If your payment is debited from your account after a payment failure, it will be credited back within 7-10 days, after we receive a confirmation from the bank.`,
        },
        {
          id: 16,
          question: "I am being charged GST amount on my order. What is GST?",
          answer: `GST is a single tax on the supply of goods and services that is levied on every value addition (through production and services) and is added to a product's sale price. GST has to borne/paid by the ultimate consumer of the product or service. If your order is fulfilled on or after July 1st 2017, GST will be applicable on your orders. GST subsumes all other taxes like Excise duty, VAT, Entry tax etc.`,
        },
        {
          id: 17,
          question: "How is the GST amount decided?",
          answer: `Following rules will govern whether or not additional GST will be applicable on the products purchased by you:


1) GST applicability:

(a) For a product,

(i) if the fulfillment is done on or after July 1st, 2017 and

(ii) if the order is placed before 15th November, 2019, and,

(iii) total discount percentage is more than 19% of MRP,

then GST may be collected from customer in addition to product price, post discounts. The discounts include those resulting from special offers such as Buy 1 Get 1 and similar offers.

(b) For a product, if the order is placed on or after 15th November 2019, the discounted prices displayed on Myntra platform shall be inclusive of all taxes, including GST.

2) GST amount: If applicable, the amount of GST collected from customer depends on category, for example

(i) Apparel/Clothing: Max 12%

(ii) Footwear: Max 18%

(iii) Home Furnishing: Max. 28%

(iv) Accessories/Other Categories: Max 28%

3) On and from 15th November, 2019, the discounted prices displayed on the Myntra platform shall be inclusive of all taxes.`,
        },
        {
          id: 18,
          question:
            "If I return/cancel the purchased product will the GST/VAT amount charged be refunded?",
          answer: `Yes. If you return the product the applicable GST/VAT amount will also be refunded into the source account selected at the time of return initiation. However no refunds of GST/VAT shall be made in relation to platform handling fee collected from the consumer under Myntra shipping policy.`,
        },
        {
          id: 19,
          question: "Disclaimer on Charges levied?",
          answer: `In our journey to provide best-in-class shopping experience to its customers, Myntra may undertake various tests and experiments from time to time. These could result in some deviations from normal for a small set of users for a limited window of time, depending on multiple factors in their purchase history and may affect the charges levied.`,
        },
      ],
    },
    {
      id: 8,
      title: "Myntra Credit",
      questions: [
        {
          id: 1,
          question: "How can I add money into Myntra Credit?",
          answer: `You may add money in Myntra Credit in following ways -

Refunds to Myntra Credit - You may take refunds of returned items.

Add a Myntra Gift Card - Add your Myntra Gift Card to Myntra Credit

Top Up - You may top-up Myntra Credit by available online payment methods at Myntra App or Website.`,
        },
        {
          id: 2,
          question:
            "What Payment Methods can I use to top up my Myntra Credit?",
          answer: `You may use Net Banking, Credit/Debit Cards, PhonePe wallet.

However, Cash on delivery, International Cards, Gift Cards are not acceptable modes of payment for the top-up of Myntra Credit. The acceptable payment methods shall be visible to you at the checkout.`,
        },
        {
          id: 3,
          question: "How much money can I add in my Myntra Credit?",
          answer: `You may keep Myntra Credits of value up to Rs. 50,000, after that you may still receive your refunds to Myntra Credit, but you shall not be able to top-up it further.`,
        },
        {
          id: 4,
          question: "How do I check balance in my Myntra Credit?",
          answer: `You need to sign-in your Account in Myntra App or Website and go to your profile. There, in the Myntra Credit tab, you shall be able to see the Myntra Credit Balance amount.`,
        },
        {
          id: 5,
          question:
            "How do I use Myntra Credit to buy items on Myntra App/Website?",
          answer: `You shall be able to use Myntra Credit as a Payment method available at the checkout. Gift Cards and Myntra Credit Top Up can not be done by payment with Myntra Credit`,
        },
        {
          id: 6,
          question: "Can I redeem Myntra Credit to Cash?",
          answer: `You may not redeem Myntra Credit for Cash. Myntra Credit is also not allowed to be transferred to Bank, Wallets or other users accounts.`,
        },
        {
          id: 7,
          question:
            "Can I buy items on other e-commerce websites with Myntra Credit?",
          answer: `Myntra Credit can only be used to purchase products at Myntra App or Website. It cannot be used to purchase or pay for anything on other ecommerce websites/apps.`,
        },
        {
          id: 8,
          question:
            "Do I need to have an account on Myntra App/Website to use Myntra Credit?",
          answer: `Yes, Myntra Credit requires a Myntra Account.`,
        },
        {
          id: 9,
          question:
            "Can I transfer my Myntra Credits to another Myntra Account?",
          answer: `Myntra Credit cannot be transferred to other Myntra users accounts. It can also not be used to pay for purchased being made by other Myntra Account users.`,
        },
        {
          id: 10,
          question: "Can my Myntra Credit account be suspended/closed?",
          answer: `Myntra Credit account may be suspended or closed if your Myntra Account is suspended or closed for any reason.`,
        },
        {
          id: 11,
          question:
            "What happens to my Myntra Credit if I Uninstall the Myntra App?",
          answer: `Your Myntra Credit account is still active. You may re-install the Myntra App or login on the Myntra Website to access your account .`,
        },
        {
          id: 12,
          question:
            "What happens to my Myntra Credit if I am not able to access my Myntra Account?",
          answer: `Your Myntra Credit account is still active, you may reset you Myntra Account password or take help of customer care team to gain access to your Myntra Account.`,
        },
        {
          id: 13,
          question:
            "What happens to my Myntra Credit if I don’t use Myntra App for over 1 year?",
          answer: `Your Myntra Credit account stays active, however please note that every credit transaction into Myntra Credit comes with an expiry time, at which a part or full amount from your Myntra Credit will expire. The user shall be sent a reminder about the expiry of the Myntra Credits one month in advance, by an email to the registered email id.`,
        },
        {
          id: 14,
          question:
            "What happens if someone uses Myntra Credit from my Myntra account without my permission?",
          answer: `You need to protect your Myntra Account. If someone gets unauthorized access to your Myntra Account, they may use your Myntra Credit to purchase products at Myntra on your behalf without your knowledge.`,
        },
        {
          id: 15,
          question:
            "What happens if I return the Items which I have bought with Myntra Credit?",
          answer: `The refunded amount of these returned items shall be added to your Myntra Credit.`,
        },
        {
          id: 16,
          question:
            "Can I pay for an Item partially from Myntra Credit and Partially from other payment options?",
          answer: `Yes, you may use other payment methods available to pay along with Myntra Credit. However, the money shall be deducted from Myntra Credit first and the remaining amount can be paid through other available online payment methods.`,
        },
        {
          id: 17,
          question:
            "Can I decide the amount which I can pay from the Myntra Credit and the rest from other payment options?",
          answer: `If you have balance in your Myntra Credit, then that will be used first. The remaining amount, if any, might be paid through other available online payment methods.`,
        },
        {
          id: 18,
          question:
            "Can I decide to not pay through Myntra Credit, even though I might have amount available?",
          answer: `If user has Myntra Credit balance, then it is up to the user to use it, however if Myntra Credit is being used then the order value will first be taken from Myntra Credit and the remaining order value, if any, shall be paid by other available online payment method.`,
        },
        {
          id: 19,
          question:
            "Is there any maintenance charge for keeping Myntra Credit?",
          answer: `There are no maintenance charges for keeping Myntra Credit Balance.`,
        },
        {
          id: 20,
          question: "What is the maximum validity of Myntra Credit?",
          answer: `Myntra Credit has maximum expiry time of 1 year for refunds and top ups. For each credit to Myntra Credit, you shall see a corresponding expiry date for the balance. Please ensure that you use the amount before expiry, after that it shall lapse.`,
        },
        {
          id: 21,
          question:
            "Is there any minimum amount to be maintained in Myntra Credit Account?",
          answer: `There is no minimum amount to keep in Myntra Credit. It can go upto 0.00 as well.`,
        },
        {
          id: 22,
          question: "What are the benefits of taking refund to Myntra Credit?",
          answer: `Faster Check-out by using Myntra Credit

Don’t wait for refunds to source which take (0-7+ days) and use money to buy other products immediately after return refund.`,
        },
      ],
    },
    {
      id: 9,
      title: "Coupons and “My Cashback”",
      questions: [
        {
          id: 7,
          question: "How do I apply a coupon on my order?",
          answer: `You can apply a coupon on cart page before order placement. The complete list of your unused and valid coupons will be available under “My Coupons” tab of App/Website/M-site.`,
        },
        {
          id: 7,
          question: "Why will 'My Cashback' not be available on Myntra?",
          answer: `To make your shopping experience easier and simpler, 'My Cashback' will be replaced by PhonePe. PhonePe wallet can be used as a payment option on Myntra and other PhonePe partners. To use your PhonePe balance, you will have to activate/verify your PhonePe account on Myntra.`,
        },
        {
          id: 7,
          question:
            "How can I access 'My Cashback' balance transferred to PhonePe wallet?",
          answer: `To access your PhonePe balance, you have to login to your Myntra account, click on ‘My Account’ then on ‘PhonePe wallet’. Also, PhonePe wallet balance can be viewed and applied on payment page at the time of placing an order.`,
        },
        {
          id: 7,
          question:
            "As 'My cashback' is no more a payment option, what will happen to 'My Cashback' balance?",
          answer: `You may utilize entire outstanding amount available in ‘My Cashback’ by making purchases on Myntra on or before 31st August, 2016. You may also transfer ‘My Cashback’ balance into your bank account by filling your bank details under payment option of ‘Contact Us’ form. On and from 01 Sep, 2016, ‘My Cashback’ will not be available and outstanding balance (if any) will be transferred to your PhonePe wallet. You will receive an email to activate/verify your PhonePe account.

You can also transfer your PhonePe balance at any time to bank account of your choice.`,
        },
        {
          id: 7,
          question:
            "I have not received ‘My Cashback’ balance into the PhonePe wallet, what should I do?",
          answer: `Please reach out to our customer service team via ‘Contact Us’ option available on our App/Website and we will try to resolve the issue for you.`,
        },
        {
          id: 7,
          question:
            "I was given a coupon when you cancelled my last order. How can I use it?",
          answer: `When a seller initiates a cancellation, customer is provided goodwill coupon as a token of apology. To use your coupon, you will have to continue shopping with us on App/Website/M-site. In case, you don’t have access to the App/Website/M-site currently, don’t worry, your coupons are safe with us. Whenever you have the access in future, you will be able to use the coupon (unless it has not expired).`,
        },
        {
          id: 7,
          question: "What is discount capping on coupons?",
          answer: `For certain products there may be policies restricting maximum discount (including product discount and coupon discount) to a fixed percentage of product MRP. In such cases, the discount on certain coupons might get capped. Please check Cart for final coupon discount value applied.`,
        },
        {
          id: 7,
          question:
            "I have accumulated Myntra Points in my account. How can I redeem them?",
          answer: `To redeem Myntra Points, you will have to continue shopping with us on App/Website/M-site. In case, you don’t have access to these Platforms, don’t worry, your Myntra Points are safe with us.Whenever you get access in future, you can redeem the points (unless points have not expired).`,
        },
      ],
    },
    {
      id: 10,
      title: "PhonePe Wallet",
      questions: [
        {
          id: 7,
          question: "What is PhonePe wallet?",
          answer: `PhonePe wallet is RBI approved semi-closed payment instrument and can be used on Myntra and any other PhonePe partners. You can use your PhonePe wallet for quick purchases and easy refunds. You can also withdraw your PhonePe balance at any time into a bank account of your choice.`,
        },

        {
          id: 7,
          question: "Do I need to have a PhonePe account to shop on Myntra?",
          answer: `PhonePe account is not mandatory to shop on Myntra. However, we recommend you to have a PhonePe account for quick purchases and easy refunds. Also, any refund initiated by Myntra in exceptional cases will be credited only to the PhonePe wallet. You can sign up for PhonePe account by visiting the PhonePe page under ‘My Account’.`,
        },

        {
          id: 7,
          question:
            "What will happen to my money, if an order placed using PhonePe wallet fails or is rejected?",
          answer: `If an order is not successful, it can also be due to payment failure and in these cases you are not liable for any refund. In scenarios, wherein payment is received at our end and order is rejected, payment made through PhonePe wallet will be automatically refunded to PhonePe wallet. Kindly reach out to our Customer Care, if the money is not refunded to your wallet.`,
        },

        {
          id: 7,
          question:
            "I am a PhonePe user, how can I link my PhonePe account on Myntra?",
          answer: `Follow these instructions to link your PhonePe account to your Myntra account:

Login to your Myntra account

Click on 'My Account' and then on, 'PhonePe wallet'

Click on 'Add PhonePe Account'

Sign in with your PhonePe account`,
        },

        {
          id: 7,
          question:
            "What is the maximum balance that I can have in PhonePe wallet and How do I check my balance?",
          answer: `You can store up to Rs. 10,000 as wallet balance. To view your PhonePe wallet balance, login to your Myntra account, click or tap on 'My Account' and then on PhonePe wallet. You can also view the PhonePe wallet balance on the payment page at the time of order placement.`,
        },

        {
          id: 7,
          question:
            "How can I transfer PhonePe wallet balance to my bank account? How do I use PhonePe wallet to make a payment?",
          answer: `You can withdraw your PhonePe wallet balance into your linked bank account instantly. Under Phonepe Wallet App, click on ‘My Account’ and then on ‘Withdraw Balance’ and amount will reflect in your bank account instantly. If you do not have a linked bank account, please add it in the PhonePe App or under Myntra PhonePe option directly. For any assistance, please reach out to support@phonepe.com. Maximum of Rs. 5,000 can be transferred at a time from PhonePe to bank account.

You can select PhonePe wallet to make a payment on the ‘payment page’ while placing an order.`,
        },

        {
          id: 7,
          question:
            "How soon will refund reflect in PhonePe wallet post order cancellation/return?",
          answer: `If an order is cancelled, refund will reflect immediately in your PhonePe wallet. In case of return, refund will reflect instantly post return acceptance.`,
        },

        {
          id: 7,
          question:
            "What happens when I return an item purchased using the PhonePe wallet?",
          answer: `Partial or full Payment made through PhonePe wallet will be refunded to the same PhonePe wallet account.`,
        },
      ],
    },
    {
      id: 11,
      title: "Gift Cards",
      questions: [
        {
          id: 1,
          question: "How can I purchase Myntra Gift Card?",
          answer: `To purchase Myntra Gift card, please follow below mentioned steps:

click on Gift Card option on Myntra

Then, on 'Buy Gift Card' option

Enter recipient email address

Select or enter the Gift Card value

Make payment using your credit card, debit card or net banking

On successful payment, the Gift Card details will be sent to the recipients email address.`,
        },

        {
          id: 2,
          question: "I just received a Myntra Gift Card. How do I use it?",
          answer: `For making a purchase with your Gift Card on Myntra App/website simply enter your 16 digit Gift card number and 6 digit PIN at the checkout page.The purchase amount will be deducted from your Gift Card's available balance. Follow the below mentioned steps to redeem the gift card:

Click on ‘Place Order’

Once you’ve reviewed and confirmed your address, click on ‘Proceed to Payment’

Select ‘Gift Card’ from ‘Other Payment Options’

Enter your 16 digit gift card code and 6 digit PIN

Click on ‘Apply’ to redeem the balance.`,
        },

        {
          id: 3,
          question:
            "How do I check the available balance or expiry date on my Gift Card?",
          answer: `To check Gift Card balance, click on Gift Card section on Myntra then, enter 16 digit card no. and 6 digit pin`,
        },

        {
          id: 4,
          question:
            "What should I do if, I have not received the e-mail that had Gift Card details?",
          answer: `For Gift cards issued by Myntra, sender can resend the Gift card e-mail, from 'My Orders' section of his Myntra account. Sender has to also verify few details mentioned below:

Confirm the recipient email address entered is correct. If an incorrect email address is entered, we will not be able to re-send the Gift Card details to the right recipient.

Confirm that the Gift Card is not in the recipient's Spam/Junk inbox.

If you have not received the Gift Card details purchased from different merchant, please contact the sender, they can resend the copy of the e-mail received while purchasing the Gift Card.`,
        },

        {
          id: 5,
          question: "Does Myntra Gift Cards expire?",
          answer: `Yes, Myntra Gift Card expires in 12 months from date of issue.`,
        },

        {
          id: 6,
          question:
            "When is the Myntra issued Gift Card sent to the recipient?",
          answer: `The Gift Card email is typically sent to the recipient within 24 hours of your purchase. If a Gift Card has not arrived within a reasonable time-frame please ensure that recipient checks e-mail'Spam/Junk' inbox before contacting Myntra Customer Support Team.`,
        },

        {
          id: 7,
          question: "What can my Gift Card not be used for or to purchase?",
          answer: `Gift Cards cannot be used to make credit card payments or any account deposits. Gift Cards are non-refundable following the loading of funds onto the Card. Gift Cards cannot be exchanged for cash. Cash cannot be withdrawn from the available balance of a Gift Card.`,
        },

        {
          id: 8,
          question: "How do I cancel a Gift Card?",
          answer: `For Myntra issued giftcards, we will not be able to perform cancellations and refunds after you have placed the order. Please review your order to ensure value entered is correct and the recipient details are accurate before completing your purchase.

Gift cards purchased from different merchants, you should contact the business provider or establishment who you purchased the Gift Card from, to cancel it.`,
        },

        {
          id: 9,
          question:
            "What exactly does the recipient receive when I send a Myntra issued Gift Card?",
          answer: `On the date of your purchase, an email is sent to the recipient informing him/her of your gift. The email contains card details such as the 16 digit card number, 6 digit PIN, card value, sender name, personal message, instructions to redeem etc.`,
        },

        {
          id: 10,
          question:
            "What can I do to ensure that the Gift Card is delivered to the recipient?",
          answer: `We adhere to the industry best practices to ensure successful delivery of the Gift Card email. It is possible that some email clients may treat the Gift Card as Spam/Junk.Please ensure that:

Correct email address of the recipient is provided;

The recipient's e-mail inbox allows emails from the domain '@myntra.com'`,
        },

        {
          id: 11,
          question:
            "What happens if I need to return something I purchased with my Gift Card?",
          answer: `Partial or full Payment made through Gift Card will be refunded to the same Gift Card.`,
        },

        {
          id: 12,
          question: "Who is the issuer of Myntra Gift Cards?",
          answer: `Myntra Gift Card is issued by QwikCilver Solutions Pvt. Ltd which is a private limited company incorporated under the laws of India, and is authorized by the Reserve Bank of India 'RBI' to issue such Gift Cards.`,
        },

        {
          id: 13,
          question: "How many Gift Cards can be used in one transaction?",
          answer: `If you have received a Gift Card, you are eligible to use only one Gift Card in one transaction.`,
        },
      ],
    },
    {
      id: 12,
      title: "Gift Wrapping",
      questions: [
        {
          id: 1,
          question: "Can I use Myntra to send gifts to others?",
          answer: `We are delighted to offer the option of sending gift orders to your loved ones on our platform. This service is applicable for select category products. For an additional charge of Rs. 35, you can choose to gift wrap your order by selecting the option in your shopping bag. Your gift will also include a personalized message from you.`,
        },
        {
          id: 2,
          question: "What payment methods can I use to pay for a gift order?",
          answer: `You can use any payment method that Myntra supports, except Cash on Delivery.`,
        },
        {
          id: 3,
          question:
            "Will the pricing, discount and payment information be displayed on the package sent to the recipient?",
          answer: `No. The external packaging slip/invoice will not include any pricing, discount, or payment information. However, the original product tag with the MRP will be intact on the products inside the package.`,
        },
        {
          id: 4,
          question:
            "Can I apply a coupon or discount on the gift wrapping charge?",
          answer: `No. Discounts and coupons are not applicable on the gift wrap charge.`,
        },
      ],
    },
    {
      id: 13,
      title: "E-mail verification policy",
      questions: [
        {
          id: 1,
          question: "What is Myntra's E-mail verification policy?",
          answer: `We always strive hard to provide the best experience to our customers. However, we have noticed that few accounts abuse our customer friendly policies. Therefore, please ensure that the details you provide us are correct and complete and inform us immediately of any changes to the information that you provided while registering. Myntra verifies the email addresses to ensure important communication about orders and shipments are reaching our customers. Email addresses that have an invalid domain, no mail server, or no mail box, fail the verification processes set by Myntra and Myntra reserves the right to disable any cash on delivery option for orders placed from such accounts that fail the email verification process.`,
        },
      ],
    },
    {
      id: 14,
      title: "Donations",
      questions: [
        {
          id: 1,
          question: "How will the donation amount be used?",
          answer: `Flipkart Foundation, a registered Section 8, not–for profit company under the Companies Act 2013, will utilize your contribution to support social impact projects for the underprivileged through its implementing partners. For more details, visit https://www.flipkartfoundation.org/`,
        },
        {
          id: 2,
          question: "How much amount can I donate?",
          answer: `You can donate an amount between Rs. 10 to Rs. 100 in an order placed on Myntra.`,
        },
        {
          id: 3,
          question: "Will I get a receipt for the donation amount?",
          answer: `No 80G receipt will be provided for this donation.`,
        },
        {
          id: 4,
          question: "Can the donation amount be refunded?",
          answer: `Donation amount is non-refundable. If you cancel or return the products in the order where the donation amount was also added, then the refund will only be made for the canceled/returned products.`,
        },
        {
          id: 5,
          question: "Can I make a donation in a Cash On Delivery Order?",
          answer: `Yes, the donation amount will be collected at the time of delivery of the shipment subject to opting for donation during the placement of the order.`,
        },
        {
          id: 6,
          question: "Where are the applicable Terms & Conditions ?",
          answer: `Flipkart Foundation is a Section 8 company registered under the Companies Act 2013.

The amount received as donation will be donated to NGOs and similar charitable organizations working in the selected thematic - areas. You can visit www.flipkartfoundation.org to know more on this.

The contribution, once made, will not be refunded.

No certificate under section 80G of the Income Tax Act, 1961 will be issued.

By proceeding to donate, you understand and confirm that this donation is not from any foreign source as defined under Foreign Contribution (Regulation) Act, 2010.

Flipkart Foundation disclaims any and all liability and assumes no responsibility whatsoever for consequences resulting from any actions or inactions of the NGOs or charitable organizations.

By proceeding to donate the money, you consent and expressly waive any and all claims, rights of action and/or remedies (under law or otherwise) that you may have against any of the Flipkart Group entities arising out of or in connection with the aforesaid transaction.

The donation is being collected for the Flipkart Foundation. Myntra Designs Private Limited disclaims all liabilities and assumes no responsibility from consequences resulting from actions/ inactions of the Flipkart Foundation.`,
        },
        {
          id: 7,
          question: "I want to know more about the program. What do I do?",
          answer: `Please reach out to flipkartfoundation@flipkart.com for more info.`,
        },
      ],
    },
    {
      id: 15,
      title: "Open Box Delivery",
      questions: [
        {
          id: 1,
          question: "What is Open Box Delivery?",
          answer: `Open Box delivery is a service by Myntra where our delivery partners will open the outer as well as the brand packet for showing the contents to the customer after taking customer’s consent. After the customer is satisfied with the product, OTP must be shared by the customer with the delivery partner to hand over the product to the customer and complete the process of Open Box Delivery.`,
        },

        {
          id: 2,
          question: "Is this Service available everywhere?",
          answer: `Open Box Delivery will only be available for select pincodes.`,
        },

        {
          id: 3,
          question: "Is Open box delivery a free service?",
          answer: `Yes, Open Box Delivery is a free service. You can enjoy the benefits of having your package opened in front of you without incurring any additional charges.`,
        },

        {
          id: 4,
          question:
            "In the case of COD, when should I make payment? Before or After Open Box Delivery?",
          answer: `To avail of Open Box Delivery, it is necessary to make the payment first. After making the payment, the delivery partner will start the unboxing procedure to show the product to the customer. Once the package is opened in front of you, you have the opportunity to check the contents of the order. If you discover that the product is missing, damaged, or significantly different from what you ordered, you have the option to return the product immediately and get the on-spot refund immediately.`,
        },

        {
          id: 5,
          question:
            "What will happen if the product is found to be missing/damaged/wrong (Completely different from what I ordered) at the time of the delivery?",
          answer: `In case you find the product or parts of the product to be missing, damaged or completely different from what you ordered, please do not accept it and ask our delivery partner to take it back. In case of COD orders, you'll get your refund immediately from our delivery partner. In case of prepaid orders, you'll get a refund credited back to the source.`,
        },

        {
          id: 6,
          question: "Can I try the product to check size and fit issue?",
          answer: `Customers can try their products at their convenience after the Open Box Delivery has been successfully completed and the product has been handed over to the customer. In case of any size and fit issues, the customer needs to raise a separate return/exchange request.`,
        },

        {
          id: 7,
          question:
            "Can I get a replacement instead of a refund in case of wrong/ damaged/ Missing product is found at the time of delivery?",
          answer: `The Open Box Delivery feature does not allow replacement or exchange if the customer marks the product as Wrong/Damaged/Missing. Once the customer confirms that they do not want to receive the product owing to the above reasons, only refund can be enabled.However, if the customer is satisfied with the contents of the product and accepts the product, then the customer will have the option to exchange the product for a different size, color and also anyother product on the platform.`,
        },

        {
          id: 8,
          question:
            "What if I found that my product is wrong/damaged or a component is missing after delivery will I have an option to return the product?",
          answer: `A return request for a Missing, Damaged or wrong product will NOT be accepted once Open Box Delivery is successfully completed. The purpose of this feature is to ensure that customers are satisfied with the products that they are receiving, after getting a chance to thoroughly check the product and giving consent. The option to return or exchange under other reasons, apart from the ones mentioned above, will still be available to the customer.`,
        },

        {
          id: 9,
          question: "For Electronics what if the device is not working?",
          answer: `You can get in touch with us for such issues.`,
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto mb-[20%] px-4 py-8 l">
      <div className="flex items-start justify-between mt-[10%] ">
        <h1 className="text-[60px] font-semibold">
          Frequently Asked Questions
        </h1>
        <div className="text-sm">
          <a href="#contact" className="text-blue-600 hover:underline">
            Still need help? Contact Us
          </a>
        </div>
      </div>
      {faq.map((section, index) => (
        <>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <ul className="space-y-2">
                <li
                  className="flex items-center text-black font-bold text-[30px]"
                  key={index}
                >
                  <svg
                    className="h-5 w-5 text-yellow-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15.618l-4.472 2.354a1 1 0 01-1.448-1.118l1.329-5.56-4.065-3.759a1 1 0 011.069-1.692l5.707-.5 2.363-5.174a1 1 0 011.896 0l2.363 5.174 5.707.5a1 1 0 011.069 1.692l-4.065 3.759 1.329 5.56a1 1 0 01-1.448 1.118L10 15.618z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {section.title}
                </li>
              </ul>
            </div>

            <div className="space-y-4 ">
              <h2
                className="w-full text-left p-4 font-bold text-[20px] rounded-t-lg flex justify-between items-center"
                onClick={() => toggleSection(section.id)}
              >
                {section.title}
                <span>
                  {isSection === section.id ? (
                    <svg
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-8 w-10 transform rotate-180"
                    >
                      <path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17"></path>
                    </svg>
                  ) : (
                    <svg
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-8 w-10"
                    >
                      <path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17"></path>
                    </svg>
                  )}
                </span>
              </h2>
              {isSection === section.id && (
                <div className="">
                  {section.questions.map((q, index) => (
                    <ul className="space-y-2">
                      <li
                        className="text-black mt-5 text-lg font-semibold"
                        key={index}
                        onClick={() => toggleQuestion(q.id)}
                      >
                        {q.question}
                      </li>
                      {isQuestion === q.id && (
                        <div className=" text-gray-700">{q.answer}</div>
                      )}
                    </ul>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default FAQ;
