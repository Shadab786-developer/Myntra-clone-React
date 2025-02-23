import React, { useState } from "react";
import { Link } from "react-router-dom";

// This file is a React component for the Help section of the Myntra clone.
// It contains state variables for managing active sections and questions, and an array of FAQs.

function Help() {
  // State variables for managing active sections and questions
  const [activeSection, setActiveSection] = useState("order");
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [activeQSection, setActiveQSection] = useState(null);

  // Function to toggle the active question
  const toggleQuestion = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  // Function to toggle the active section
  const toggleSection = (sectionId) => {
    setActiveQSection(activeQSection === sectionId ? null : sectionId);
    setActiveQuestion(null);
  };

  // Array of FAQs with their sections and questions
  const faq = [
    {
      id: 1,
      title: "Login",
      questions: [
        {
          id: 14,
          question: "How do I login to my Myntra account?",
          answer:
            "You can login to your Myntra account with these 3 simple steps:Click on LOG IN/SIGN UP and enter your mobile number, then click on CONTINUE.An OTP will be sent to the mobile number entered by you.Verify the OTP and post successful verification, you will be able to log in to Myntra.",
        },
        {
          id: 2,
          question: "I am not able to login to my Myntra account.",
          answer:
            "Don’t worry! Click below to talk to our customer care executive.",
        },
        {
          id: 3,
          question: "Why am I not getting an OTP?",
          answer:
            "We recommend you follow these steps to get the OTP:Check if you entered the correct phone number registered to your Myntra account. Suggestion- Make sure you have entered the correct and registered phone number only.Try checking the network connection/SMS blocker due to which the OTP might be delayed/blocked.Request for OTP once more.Still unable to access your account? Click below to talk to our customer care executive.",
        },
        {
          id: 4,
          question: "I am not getting the Forgot Password link.",
          answer:
            "Don’t worry! Follow these steps to get the Forgot Password link:Check if the registered email id is invalid. Also, check the spam folder in your email.The password reset link is only active for 24 hours so check if the link has expired.Try to reset the password with 3 previous the passwords OR password mismatched.Still unable to access your account? Click below to talk to our customer care executive.",
        },
        {
          id: 5,
          question: "Why is my account locked?",
          answer:
            "Your Myntra account may get locked for a specified time period or permanently in case there are too many failed login attempts.This is for the security of your account. You should be able to gain access to your account by resetting your password.If the issue persists, click below to talk to our customer care executive.",
        },
        {
          id: 6,
          question: "Why are you collecting my personal details?",
          answer:
            "Myntra uses your information to help you with faster payments and delivery. We also save your likes and preferences to show you personalized content that suits your style.For more details on how we use your personal data please refer to the Myntra Privacy Policy.",
        },
      ],
    },
    {
      id: 2,
      title: "Exchanges",
      questions: [
        {
          id: 1,
          question: "What is Myntra's Return and Exchange policy?",
          answer:
            "Myntra provides a hassle-free return and exchange policy.The availability of return and exchange will be mentioned on each product’s description page. Generally, it ranges from 2 to 14 days, except for certain high-priced products that are non-returnable.The availability of exchange service depends on courier partner services and pin code.",
        },
        {
          id: 3,
          question: "What is Style Exchange?",
          answer:
            "Myntra provides a style exchange facility where you can exchange a product from your order with a different size, color or a completely new and different product from Myntra.If the new product’s amount is higher than the product you wish to exchange, you can pay that extra amount via cash on delivery or using any of the digital payment modes.If the new product’s amount is lower than the product you wish to exchange, you will get a refund for the excess amount either to your bank account or your original payment mode.",
        },
        {
          id: 4,
          question: "What is Self-Ship & how do I do it?",
          answer: `For a few pin codes and due to certain courier partners limitations, Myntra is unable to provide the product pick up option during returns.

If your pin code comes under this limitation, you can return the product by self-shipping the item to our return desk.

You can self-ship the item by sending the product to any one of the following Myntra return desks:

South

Survey Numbers 231, 232 and 233,Soukya Road, Samethanahalli Village,Anugondanahalli Hobli,Hoskote Taluk,Bangalore-560067

North

Khasra no - 1031/1 1032/1,Near grand Shobha hotel,Mahipalpur Village,New Delhi -110037

West

Survey Nos 42/2,42/3,51/2,51/3,51/4,51/5B(old sno.51/51A+B), 51/5A+6B,51/5B+6A,51/6,57/17,57/18, K Square Logistics Park,Prakhhyat Infraprojects Pvt Ltd,Building No 9, Near Padgha Toll Naka,Mumbai Nashik Highway, Tal -Bhiwandi, District Thane, Maharashtra -421302

East

Instakart Services Pvt Ltd, 430, Pashupati Bhattacharjee Road PS Behala, PO-Paschim Putiary Kolkata-700041`,
        },
        {
          id: 5,
          question: "What are my Pick-Up timelines?",
          answer: `We always try to get the pick-up done at the earliest. However, based on the pin codes and courier partner assignment, the pick-up timeline may vary from 3-7 days.

You can track the pick-up timeline for your active orders here.`,
        },
        {
          id: 6,
          question: "What are my Refund timelines?",
          answer: `Myntra initiates refunds once the product gets picked up and the quality check is done. For self-shipped items, the return is initiated after it arrives at our return desk and passes the quality check.

Refund time depends on the mode of refund selected by you.

For Bank Account:

1-3 business days after the item reaches us.

For Online Refund:

7-10 business days after the item reaches us.

For Wallets:

1 business day after the item reaches us.

You can track the refund timeline for your active orders here.`,
        },
        {
          id: 8,
          question: "Why is my Return put on hold/declined?",
          answer: `Usually, a return is put on hold/declined due to the following reasons:

SDA are supposed to perform a set of checks that reflect on their device as per the reason for return. In case of any check failure, SDA will refuse to pick up the product. You can ask the SDA the reason for the pickup denial.

Also, ensure you raise the return request with the correct reason code and hand over the right product to SDA to avoid such instances.

Click below to talk to our customer care executive.`,
        },
      ],
    },
    {
      id: 3,
      title: "Credits",
      questions: [
        {
          id: 1,
          question: "What is Myntra Credit?",
          answer: `Myntra Credit is Myntra’s wallet, where you can top up the amount, add Gift Cards and get refunds easily.

Click here for complete information.`,
        },
        {
          id: 2,
          question: "Can I choose Myntra Credit for Cancellation/Refund?",
          answer: `Yes, you can choose Myntra Credit as refund mode while returning/ cancelling the product. Myntra Credit helps in providing hassle-free refund experience to customers.

Click here for complete information.`,
        },
        {
          id: 4,
          question: "How can I check my Myntra Credit balance?",
          answer: `You can follow the navigation mentioned below to check your Myntra Credit balance:

Profile > Payments & Currencies > Myntra Credit

Click here for complete information.`,
        },
        {
          id: 5,
          question: "Can I transfer Myntra Credit to my bank account?",
          answer: `Unfortunately, the option to transfer Myntra Credit balance to any bank account is not available.

Click here for complete information.`,
        },
        {
          id: 6,
          question: "What is Myntra Insider & how can I become one?",
          answer: `By meeting the purchase criteria, you can become Insider.

Click here for complete information.`,
        },
      ],
    },
    {
      id: 4,
      title: "Offers",
      questions: [
        {
          id: 7,
          question: "What are the Current Bank Offers? Where can I find them?",
          answer: `The active offers are displayed on the Payments page.

Click below to talk to our customer care executive.`,
        },
        {
          id: 8,
          question: "What is Instant Cashback?",
          answer: `Instant Cashback is an offer type that is either applied directly to the product or order value in your cart. The cashback will be credited to your bank account/credit card as per the bank terms and conditions.`,
        },
        {
          id: 9,
          question: "How does Instant Cashback recovery happen?",
          answer: `If you place an order by availing an Instant Cashback offer but due to partial cancellation/return of items if the order value falls below the minimum required threshold as per the terms of the offer, the cashback provided as a part of the offer is subject to recovery.

Cashback amount will be deducted while refunding the amount or the order value will be adjusted.

Click below to talk to our customer care executive.`,
        },
        {
          id: 10,
          question: "Why am I not getting a full refund?",
          answer: `You had availed an instant cashback offer with the order. Upon cancelling the item(s), your minimum order value fell below the minimum threshold & hence the cashback provided to you has been deducted & adjusted by the bank from the refund amount.

If you had paid the convenience charges at the time of order delivery, then the convenience charges have been deducted from the refund as this is a non-refundable amount.

Click below to talk to our customer care executive.`,
        },
        {
          id: 11,
          question: "How do I apply Coupons?",
          answer: `In the payments page, there is an Apply Coupon option. By clicking on that option, all the coupons applicable on your cart will be visible along with the coupon discount.

You can view all the available coupons lille and HOME20 under the profile section.

Click here for complete information.`,
        },
        {
          id: 13,
          question: "Why am I not able to apply a Coupon?",
          answer: `You can apply for a coupon on the Cart page before you place an order.

The complete list of your unused and valid coupons is available under Profile > Coupons section. However, some coupons can only be added on select catalogs.

If the issue still persists, click below to talk to our customer care executive.`,
        },
      ],
    },
  ];

  const NonOrderComponent = () => (
    <>
      <div className="flex justify-center items-center flex-col mb-[20%]">
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">Browse Topics</h2>
          <div className="grid grid-cols-3 gap-6 mt-4">
            <div className="flex items-center justify-center  p-4 rounded-md text-gray-800 cursor-pointer">
              <div className="bg-pink-100 rounded-full mr-2 p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#282C3F"
                    fillRule="evenodd"
                    d="M9 4C6.796 4 5 5.796 5 8c0 2.204 1.796 4 4 4 2.204 0 4-1.796 4-4 0-2.204-1.796-4-4-4ZM6.5 8c0-1.376 1.124-2.5 2.5-2.5s2.5 1.124 2.5 2.5-1.124 2.5-2.5 2.5A2.506 2.506 0 0 1 6.5 8Z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#282C3F"
                    d="M6.75 13.5A4.749 4.749 0 0 0 2 18.25v1a.75.75 0 0 0 1.5 0v-1A3.249 3.249 0 0 1 6.75 15h4.5a3.249 3.249 0 0 1 3.25 3.25v1a.75.75 0 0 0 1.5 0v-1a4.749 4.749 0 0 0-4.75-4.75h-4.5ZM16.5 14.25a.75.75 0 0 1 .75-.75A4.749 4.749 0 0 1 22 18.25v1a.75.75 0 0 1-1.5 0v-1A3.249 3.249 0 0 0 17.25 15a.75.75 0 0 1-.75-.75ZM15 4.25a.75.75 0 0 0 0 1.5A2.259 2.259 0 0 1 17.25 8 2.259 2.259 0 0 1 15 10.25a.75.75 0 0 0 0 1.5A3.759 3.759 0 0 0 18.75 8 3.759 3.759 0 0 0 15 4.25Z"
                  ></path>
                </svg>
              </div>
              <span className="text-lg font-semibold">Account</span>
            </div>
            <div className="flex items-center justify-center  p-4 rounded-md text-gray-800 cursor-pointer">
              <div className="bg-gray-200 rounded-full mr-2 p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#282C3F"
                    d="M10.78 11.28a.75.75 0 0 1 0 1.06l-1.22 1.22h3.53a2.41 2.41 0 0 0 2.41-2.41 2.4 2.4 0 0 0-2.4-2.4h-1.96a.75.75 0 0 1 0-1.5h1.96a3.9 3.9 0 0 1 3.9 3.9 3.91 3.91 0 0 1-3.91 3.91H9.56l1.22 1.22a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.746.746 0 0 1-.035-1.023.748.748 0 0 1 .038-.041L9.72 11.28a.75.75 0 0 1 1.06 0Z"
                  ></path>
                  <path
                    fill="#282C3F"
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-8.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-lg font-semibold">Returns & Exchanges</span>
            </div>
            <div className="flex items-center justify-center  p-4 rounded-md text-gray-800 cursor-pointer">
              <div className="bg-yellow-100 rounded-full mr-2 p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#282C3F"
                    fillRule="evenodd"
                    d="m13.093 4.152 3.194 5.779 4.541-2.84c.968-.626 2.172.292 1.876 1.38l-2.488 9.234v.002A1.746 1.746 0 0 1 18.522 19H5.479a1.755 1.755 0 0 1-1.692-1.293v-.002l-2.49-9.233c-.305-1.126.924-1.967 1.867-1.387l.005.004 4.527 2.84L10.9 4.152a1.249 1.249 0 0 1 2.193 0Zm-1.097 1.115L8.624 11.35a.75.75 0 0 1-1.054.272L2.912 8.699l2.321 8.613c.03.11.131.187.246.187h13.044c.12 0 .215-.072.246-.187l2.322-8.615-4.68 2.926a.75.75 0 0 1-1.053-.274l-3.362-6.082Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-lg font-semibold">
                Myntra Credit & Insider
              </span>
            </div>
            <div className="flex items-center justify-center  p-4 rounded-md text-gray-800 cursor-pointer">
              <div className="bg-green-100  rounded-full mr-2 p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#282C3F"
                    d="M8.5 9.5c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1ZM9.25 15.5c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.5-5.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.5 5.5c-.15.15-.34.22-.53.22ZM13.5 14.5c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1Z"
                  ></path>
                  <path
                    fill="#282C3F"
                    fillRule="evenodd"
                    d="M10.188 21.77c.468.578.997 1.23 1.812 1.23.82 0 1.35-.66 1.83-1.26l.09-.105c.185-.219.425-.502.57-.545.188 0 .518.124.823.239l.057.021c.73.28 1.57.51 2.15.17.7-.4.83-1.23.94-1.96.04-.3.12-.79.22-.9.098-.09.5-.155.799-.203l.123-.02c.725-.12 1.542-.254 1.938-.937.384-.68.099-1.437-.159-2.12l-.011-.03c-.11-.29-.29-.77-.26-.91.05-.13.42-.44.65-.62l.01-.008C22.348 13.344 23 12.815 23 12c0-.815-.652-1.344-1.23-1.812l-.01-.008c-.23-.18-.61-.48-.67-.64-.03-.147.143-.602.254-.893l.006-.017c.27-.69.57-1.46.17-2.15-.4-.7-1.23-.83-1.96-.94-.29-.04-.79-.12-.9-.22-.087-.095-.15-.482-.199-.772l-.021-.128-.004-.022c-.119-.725-.253-1.542-.936-1.938-.59-.34-1.43-.11-2.15.17-.064.024-.13.05-.196.077-.266.106-.538.215-.714.183-.13-.05-.44-.42-.62-.65l-.008-.01C13.344 1.652 12.815 1 12 1c-.815 0-1.344.652-1.812 1.23l-.008.01c-.18.23-.48.61-.65.66-.21 0-.57-.14-.88-.27-.73-.27-1.56-.5-2.15-.16-.7.41-.83 1.23-.94 1.97-.04.3-.12.79-.22.9-.098.09-.5.155-.799.203l-.101.017c-.74.11-1.57.24-1.97.94-.39.68-.1 1.46.17 2.15l.033.086c.11.29.263.688.227.824-.05.14-.43.44-.66.62l-.01.008C1.652 10.656 1 11.185 1 12c0 .815.652 1.344 1.23 1.812l.01.008c.23.18.61.48.65.62.03.147-.143.602-.254.893l-.006.017-.011.03c-.258.682-.543 1.44-.149 2.12.4.7 1.23.83 1.97.94.29.04.79.12.9.22.087.095.15.482.199.773l.021.127.004.022c.119.725.253 1.542.936 1.938.59.35 1.42.12 2.15-.16l.132-.05c.281-.108.57-.219.778-.21.13.05.44.43.62.66l.008.01Zm-.238-2.12a1.86 1.86 0 0 0-.42-.05c-.475 0-.95.186-1.404.364l-.016.006-.013.005c-.307.119-.66.255-.827.275-.098-.098-.164-.507-.213-.807l-.017-.103c-.09-.63-.2-1.29-.64-1.73-.435-.444-1.084-.547-1.707-.646l-.023-.004-.07-.012c-.302-.05-.736-.122-.81-.168-.04-.15.14-.61.25-.89l.006-.015c.218-.576.463-1.22.304-1.825-.158-.582-.656-.989-1.14-1.384l-.02-.016c-.23-.18-.65-.52-.69-.63.05-.15.46-.49.69-.67.49-.39 1-.8 1.16-1.4.16-.61-.09-1.27-.31-1.84a24.122 24.122 0 0 0-.076-.21c-.096-.258-.204-.552-.204-.63.098-.098.507-.164.807-.213l.103-.017.016-.003c.625-.099 1.268-.2 1.714-.637.436-.446.538-1.089.637-1.714l.003-.016.007-.042c.05-.303.127-.762.203-.848.188 0 .544.138.852.257l.008.003c.6.23 1.27.46 1.84.29.582-.158.989-.656 1.384-1.14l.016-.02c.18-.23.52-.65.63-.69.15.04.49.46.67.69.39.49.8 1 1.4 1.16.56.15 1.24-.08 1.84-.31.31-.12.67-.25.84-.28.098.098.165.507.213.807l.017.103c.09.63.2 1.29.64 1.73.435.444 1.084.548 1.707.646l.023.004.07.012c.302.05.736.122.81.168.03.15-.14.61-.25.89l-.006.015c-.218.576-.463 1.22-.304 1.825.158.582.656.989 1.14 1.384l.02.016c.22.17.61.49.68.65-.07.16-.46.48-.68.65-.49.39-1 .8-1.16 1.4-.16.62.09 1.27.31 1.84l.076.21c.096.258.204.552.204.63-.098.098-.507.165-.807.213l-.103.017c-.63.1-1.29.21-1.73.65-.434.434-.537 1.083-.636 1.706l-.004.024-.007.042c-.05.302-.127.762-.203.848-.188 0-.544-.138-.852-.257l-.008-.003c-.6-.23-1.27-.46-1.84-.31-.582.158-.989.656-1.384 1.14l-.016.02c-.18.23-.52.65-.63.69-.15-.04-.49-.46-.67-.69-.39-.49-.8-1-1.4-1.16Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-lg font-semibold">Offers</span>
            </div>
            <div className="flex items-center justify-center  p-4 rounded-md text-gray-800 cursor-pointer">
              <div className="bg-green-100  rounded-full mr-2 p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <g fill="#282C3F" clipPath="url(#a)">
                    <path d="M18.5 15.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.01c-.41 0-.75.34-.75.75s.35.75.76.75ZM8.5 15.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75-.75.34-.75.75.34.75.75.75Z"></path>
                    <path d="M22.25 9H4.75c-.41 0-.75.34-.75.75v10.5c0 .42.34.75.75.75h17.5c.41 0 .75-.34.75-.75V9.75c0-.41-.34-.75-.75-.75Zm-.75 10.5h-16v-9h16v9Z"></path>
                    <path d="m1.67 7.73 15.17-4.06.87 3.26a.75.75 0 1 0 1.45-.39L18.1 2.56a.75.75 0 0 0-.92-.53L.56 6.47a.78.78 0 0 0-.46.35c-.1.17-.13.38-.07.57l1.49 5.57c.09.33.39.56.72.56.06 0 .13-.01.19-.03.4-.11.64-.52.53-.92L1.67 7.73ZM13.5 17.5a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5Zm0-3.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Z"></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h24v24H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-lg font-semibold">Payments</span>
            </div>
            <div className="flex items-center justify-center  p-4 rounded-md text-gray-800 cursor-pointer">
              <div className="bg-pink-200  rounded-full mr-2 p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#282C3F"
                    fillRule="evenodd"
                    d="M15.152 12.491a5.044 5.044 0 1 0-6.304 0h6.304Zm-.015.013h2.08l.01-.013H19.5a1 1 0 1 0 0-2h-1.247a6.522 6.522 0 0 1-1.035 2.013h-2.08ZM18.53 8.99a6.544 6.544 0 1 0-11.747 3.512h2.08-2.08l-.01-.012H4.5a1 1 0 1 1 0-2h1.247a6.52 6.52 0 0 1-.277-1.5H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1.47Zm-4.628-3.979h-3.806a.322.322 0 0 0-.269.144c-.148.224.027.522.295.52 1.553-.01 1.797.45 1.943.725l.03.054h-1.986a.346.346 0 1 0 0 .693h2.088c-.12 1.142-1.04 1.306-2.007 1.33a.493.493 0 0 0-.486.489c0 .11.038.217.107.303l2.43 3.039a.48.48 0 1 0 .751-.6l-2.165-2.703c1.778-.1 2.344-1.28 2.404-1.858h.671a.346.346 0 1 0 0-.693h-.707c-.018-.274-.226-.614-.328-.75h1.035a.346.346 0 1 0 0-.693Zm6.598 14.98v-6.209a2.491 2.491 0 0 1-1 .208h-15c-.356 0-.694-.074-1-.208v6.208a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-lg font-semibold">
                Cancellations & Charges
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full">
          {faq.map((section) => (
            <div key={section.id} className="mb-4">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full text-left p-4 bg-gray-100 font-semibold rounded-t-lg flex justify-between items-center"
              >
                {section.title}
                <span>{activeQSection === section.id ? "−" : "+"}</span>
              </button>

              {activeQSection === section.id && (
                <div className="border rounded-b-lg">
                  {section.questions.map((q) => (
                    <div key={q.id} className="border-t">
                      <button
                        onClick={() => toggleQuestion(q.id)}
                        className="w-full text-left p-4 hover:bg-gray-50 flex justify-between items-center"
                      >
                        {q.question}
                        <span>{activeQuestion === q.id ? "−" : "+"}</span>
                      </button>

                      {activeQuestion === q.id && (
                        <div className="p-4 bg-gray-50">{q.answer}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const OrderComponent = () => (
    <>
      <div className="w-3/4 bg-white shadow-lg rounded-md p-6 mt-[2%]">
        <div className="flex justify-center items-center mb-6">
          <div className="mt-6 pt-6">
            <p className="text-lg text-gray-600">
              Please Log In, if you have queries related to your recent
              purchases.
            </p>
            <button className="mt-4  text-teal-600 border border-teal-600 py-2 px-10 rounded-md ml-[50%]">
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );

  const renderComponent = () => {
    switch (activeSection) {
      case "order":
        return <OrderComponent />;
      case "Non-order":
        return <NonOrderComponent />;

      default:
        return <OrderComponent />;
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-6 py-8 sm:px-8 md:px-12 flex items-start justify-between ">
          {/* Left Sidebar */}
          <div className="mt-[10%] flex justify-between w-full items-center">
            <p className="text-gray-500 mb-6 mr-10">
              <strong> HELP CENTER</strong> <br />
              We are here to help you
            </p>
            <div className="border-gray-300 border px-[15%] py-2 flex justify-center items-center ">
              <span className="material-symbols-outlined action_icon text-gray-400 text-[90px] mr-8">
                shopping_bag
              </span>
              <p className="text-xl font-semibold text-gray-800 text-nowrap mr-[30%] ">
                Track, Cancel, Return/Exchange
              </p>
              <button className=" text-teal-600 border border-teal-600 py-2 px-10 rounded-md">
                Orders
              </button>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex justify-between items-center">
          <div className="w-1/4 h-full bg-white  rounded-md p-6 ">
            <div className="space-y-4">
              <div className="cursor-pointer">
                <span className="font-medium">Select Query Type</span>
              </div>
              <div
                className={`cursor-pointer hover:text-teal-500 mt-[3%] ${
                  activeSection === "orders" ? "active" : ""
                }`}
                onClick={() => setActiveSection("order")}
              >
                Order Related Queries
              </div>
              <div
                className={`cursor-pointer hover:text-teal-500 mt-[3%] ${
                  activeSection === "Non-order" ? "active" : ""
                }`}
                onClick={() => setActiveSection("Non-order")}
              >
                Non-order Related Issues
              </div>
              <div
                className={`cursor-pointer hover:text-teal-500 mt-[3%] ${
                  activeSection === "orders" ? "active" : ""
                }`}
                onClick={() => setActiveSection("order")}
              >
                Recent Issues
              </div>
              <hr />
              <Link to={"/FAQ"}>
                <div className="cursor-pointer hover:text-teal-500 mt-[3%]">
                  Frequently Asked Questions
                </div>
              </Link>
            </div>
          </div>
          {/* Right Content Section */}

          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default Help;
