// Define an array of items, each representing a product with various properties
const items = [
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13105598/2024/3/8/5fa9634d-4d4c-44bf-80e4-9b0d352a79d81709875645701-Lakme-9to5-Primer-Matte-Lipstick---Deep-Wine-MP6-46017098756-1.jpg", // URL of the item's image
    item_type: "beauty", // Category of the item
    rating: {
      stars: 4.5, // Rating out of 5 stars
      noOfReviews: "36.9k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Lakme", // Brand or company name
    item_name: "Powerplay Priming Lipstick", // Name of the item
    current_price: 311, // Current price of the item
    original_price: 599, // Original price before discount
    discount_percentage: 48, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/23/X150FxrK_8de1292fd0634dbc956ce5a88e6f5e6a.jpg", // URL of the item's image
    item_type: "beauty", // Category of the item
    rating: {
      stars: 3.9, // Rating out of 5 stars
      noOfReviews: 140, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "L.A colors", // Brand or company name
    item_name: "Color Balm Lip & Cheek Stick", // Name of the item
    current_price: 299, // Current price of the item
    original_price: 399, // Original price before discount
    discount_percentage: 12, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/4/je6Rr3sC_b4d47ef7a5bb43a78cb29fadf2bd6f90.jpg", // URL of the item's image
    item_type: "beauty", // Category of the item
    rating: {
      stars: 4.0, // Rating out of 5 stars
      noOfReviews: "40k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Lakme", // Brand or company name
    item_name: "Retinol Undereye Serum Creme", // Name of the item
    current_price: 854, // Current price of the item
    original_price: 899, // Original price before discount
    discount_percentage: 5, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/32062039/2025/1/9/c38d9cf8-1be6-42d3-b6bd-6e93b08ac3ba1736395467550-TEEN-TEEN-COSMETICS-Master-Coverage-Waterproof-Foundation----1.jpg", // URL of the item's image
    item_type: "beauty", // Category of the item
    rating: {
      stars: 3.0, // Rating out of 5 stars
      noOfReviews: 599, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "TEEN TEEN COSMETICS", // Brand or company name
    item_name: "Master Coverage Foundation-04", // Name of the item
    current_price: 339, // Current price of the item
    original_price: 399, // Original price before discount
    discount_percentage: 15, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/32256456/2025/1/8/37b2e834-fabc-42b3-8fe4-c4b8b90a44111736329112292Nirmalaya100PureNaturalFrankincenseAromaEssentialOil-15ml1.jpg", // URL of the item's image
    item_type: "beauty", // Category of the item
    rating: {
      stars: 3.5, // Rating out of 5 stars
      noOfReviews: "30k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Nirmalaya", // Brand or company name
    item_name: "Frankincense Essential Oil", // Name of the item
    current_price: 379, // Current price of the item
    original_price: 399, // Original price before discount
    discount_percentage: 5, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14543600/2024/8/28/e5c9e221-fe24-4053-8f36-a3ea5fc9bb141724834970392-Earth-Rhythm-Lip-Cheek-Tint---Brandy-5-ml-5671724834969832-1.jpg", // URL of the item's image
    item_type: "beauty", // Category of the item
    rating: {
      stars: 4.3, // Rating out of 5 stars
      noOfReviews: "6.2k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Earth Rhythm", // Brand or company name
    item_name: "Lip & Check Tint", // Name of the item
    current_price: 349, // Current price of the item
    original_price: 499, // Original price before discount
    discount_percentage: 30, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/55112/2024/2/7/60c28ab6-ca45-4c93-bf82-edb55c15a8921707303189091-Lakme-Perfect-Radiance-SPF-23-Compact---Ivory-Fair-01-867170-1.jpg", // URL of the item's image
    item_type: "beauty", // Category of the item
    rating: {
      stars: 4.4, // Rating out of 5 stars
      noOfReviews: "10.8k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Lakme", // Brand or company name
    item_name: "Ultimate Glam Compact", // Name of the item
    current_price: 188, // Current price of the item
    original_price: 269, // Original price before discount
    discount_percentage: 30, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2274020/2024/6/28/ecca5ee1-bf1d-4a5c-8c4e-e6d8e2145a321719563731032NiveaCherryShineLongLastingMoisturisationCaringLipBalm48g1.jpg", // URL of the item's image
    item_type: "beauty", // Category of the item
    rating: {
      stars: 4.5, // Rating out of 5 stars
      noOfReviews: "53.7k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Nivea", // Brand or company name
    item_name: "Lip Balm 4.8g", // Name of the item
    current_price: 158, // Current price of the item
    original_price: 260, // Original price before discount
    discount_percentage: 39, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15734050/2023/12/15/04cde14e-09f8-417d-8173-fcbad1c69c841702638290755-Lakme-9To5-Vitamin-C-Microcrystalline-Beads-For-Refreshed--G-1.jpg", // URL of the item's image
    item_type: "beauty", // Category of the item
    rating: {
      stars: 4.4, // Rating out of 5 stars
      noOfReviews: "1.9k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Lakme", // Brand or company name
    item_name: "9To5 Vitamin C Facewash", // Name of the item
    current_price: 186, // Current price of the item
    original_price: 249, // Original price before discount
    discount_percentage: 25, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/25901990/2024/7/5/9fa7dff6-3e03-4c5d-836b-c49a6caa816d1720162076747KIROpH-PlayLipCheekOil-55ml-PinkFunfetti1.jpg", // URL of the item's image
    item_type: "beauty", // Category of the item
    rating: {
      stars: 4.5, // Rating out of 5 stars
      noOfReviews: 335, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "KIRO", // Brand or company name
    item_name: "pH-Play Lip & Check Oil 5.5ml", // Name of the item
    current_price: 680, // Current price of the item
    original_price: 800, // Original price before discount
    discount_percentage: 15, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12371164/2025/1/21/39e4ab48-11a9-4e6e-800a-29c6545610171737461052984-LOreal-Paris-Extraordinary-Oil-Anti-Frizz-Serum-with-Heat-Pr-1.jpg", // URL of the item's image
    item_type: "beauty", // Category of the item
    rating: {
      stars: 4.5, // Rating out of 5 stars
      noOfReviews: "39.4k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "LOreal", // Brand or company name
    item_name: "Extraordinary Oil Serum 100 ml", // Name of the item
    current_price: 480, // Current price of the item
    original_price: 649, // Original price before discount
    discount_percentage: 26, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14920218/2024/10/1/25e74c51-9927-46a3-bcc8-ea6db361db5e1727776807903-Braun-Mini-Facial-Hair-Remover-FS1000-for-Upper-Lips-Chin--C-1.jpg", // URL of the item's image
    item_type: "beauty", // Category of the item
    rating: {
      stars: 4.5, // Rating out of 5 stars
      noOfReviews: "4.8k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Braun", // Brand or company name
    item_name: "Facial Hair Remover FS1000", // Name of the item
    current_price: 1759, // Current price of the item
    original_price: 2199, // Original price before discount
    discount_percentage: 20, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28219632/2024/3/12/2f53aaab-40e1-4c5b-8148-6ad150e5f4341710256687634CampusSutraMenClassicOpaqueCheckedCasualShirt2.jpg", // URL of the item's image
    item_type: "men", // Category of the item
    rating: {
      stars: 4.4, // Rating out of 5 stars
      noOfReviews: "11.8k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Campus Sutra", // Brand or company name
    item_name: "Sored Collar Casual Shirt", // Name of the item
    current_price: 702, // Current price of the item
    original_price: 1099, // Original price before discount
    discount_percentage: 63, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/28282918/2024/3/15/ae32aaf4-b7cb-452d-b066-eb28a5c118841710485348248CampusSutraMenRelaxedEasyWashTrousers1.jpg", // URL of the item's image
    item_type: "men", // Category of the item
    rating: {
      stars: 4, // Rating out of 5 stars
      noOfReviews: "2.5k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Campus Sutra", // Brand or company name
    item_name: "Men Related Cotton Trouser", // Name of the item
    current_price: 679, // Current price of the item
    original_price: 1999, // Original price before discount
    discount_percentage: 66, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/25373430/2023/10/7/23367a57-182b-429c-bc19-957d99e5c5b11696643967685CampusSutraMenSeaGreenCableKnitWoollenPullover1.jpg", // URL of the item's image
    item_type: "men", // Category of the item
    rating: {
      stars: 4.2, // Rating out of 5 stars
      noOfReviews: "3.3k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Campus Sutra", // Brand or company name
    item_name: "Cable Knit Wollen Pullover", // Name of the item
    current_price: 699, // Current price of the item
    original_price: 1999, // Original price before discount
    discount_percentage: 65, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/29120364/2024/4/23/d281eb05-fbf2-4765-9676-61780e8d5e181713871726191CampusSutraMenDenimDenimShorts5.jpg", // URL of the item's image
    item_type: "men", // Category of the item
    rating: {
      stars: 4.3, // Rating out of 5 stars
      noOfReviews: 337, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Campus Sutra", // Brand or company name
    item_name: "Men Mid-Rise Denim Shorts", // Name of the item
    current_price: 664, // Current price of the item
    original_price: 1899, // Original price before discount
    discount_percentage: 65, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/30889833/2024/9/17/d2f6d1c3-5c5d-4667-8fe9-0f1b400ada881726571008704-FCUK-Men-Trousers-4391726571008103-1.jpg", // URL of the item's image
    item_type: "men", // Category of the item
    rating: {
      stars: 4.3, // Rating out of 5 stars
      noOfReviews: 62, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "FCUK", // Brand or company name
    item_name: "Men Cargos Trousers", // Name of the item
    current_price: 1319, // Current price of the item
    original_price: 3299, // Original price before discount
    discount_percentage: 60, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/30961460/2024/9/20/6fd570ed-b4c8-47df-affc-07978ca5bd001726833971924-FCUK-Men-Trousers-1561726833971269-1.jpg", // URL of the item's image
    item_type: "men", // Category of the item
    rating: {
      stars: 4.5, // Rating out of 5 stars
      noOfReviews: 38, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Campus Sutra", // Brand or company name
    item_name: "Men Fit Joggers Troussers", // Name of the item
    current_price: 956, // Current price of the item
    original_price: 3299, // Original price before discount
    discount_percentage: 71, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/28088580/2024/3/7/4d51b8c5-4cf3-4427-9de1-9fb767a3f1941709804677382CampusSutraMenClassicOpaqueStripedCasualShirt1.jpg", // URL of the item's image
    item_type: "men", // Category of the item
    rating: {
      stars: 4.4, // Rating out of 5 stars
      noOfReviews: "11.8k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "FUCK", // Brand or company name
    item_name: "Stripe Creased Shirt", // Name of the item
    current_price: 702, // Current price of the item
    original_price: 1899, // Original price before discount
    discount_percentage: 63, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/20350362/2022/10/10/17a95dc4-f98b-4b2f-a9fc-ba9e559d53971665413851295CampusSutraMenGreenPullover1.jpg", // URL of the item's image
    item_type: "men", // Category of the item
    rating: {
      stars: 4.2, // Rating out of 5 stars
      noOfReviews: "1.3k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Campus Sutra", // Brand or company name
    item_name: "Men Pullover Sweater", // Name of the item
    current_price: 699, // Current price of the item
    original_price: 1999, // Original price before discount
    discount_percentage: 65, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },

  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19349174/2023/1/10/e7d0bed1-feb1-405c-a243-46d7b4b8deb11673344520571-Jack--Jones-Men-Orange-Printed-Sweatshirt-5751673344520116-1.jpg", // URL of the item's image
    item_type: "men", // Category of the item
    rating: {
      stars: 4.3, // Rating out of 5 stars
      noOfReviews: 43, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Jack & Jones", // Brand or company name
    item_name: "Men Printed Sweatershirt", // Name of the item
    current_price: 989, // Current price of the item
    original_price: 2799, // Original price before discount
    discount_percentage: 65, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/26012704/2023/11/23/ffd72174-b38b-404a-a0ad-2aae25dc135f1700738073929CampusSutraMenNavyBlueColourblockedWindcheaterOutdoorBikerJa1.jpg", // URL of the item's image
    item_type: "men", // Category of the item
    rating: {
      stars: 3.7, // Rating out of 5 stars
      noOfReviews: 33, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Campus Sutra", // Brand or company name
    item_name: "Windcheater Denim Jacket", // Name of the item
    current_price: 1599, // Current price of the item
    original_price: 3999, // Original price before discount
    discount_percentage: 60, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17772480/2022/4/6/0130ff5f-bded-4fa6-9c43-1acce8125cce1649234814564CampusSutraMenGreyBlueColourblockedTrackPants1.jpg", // URL of the item's image
    item_type: "men", // Category of the item
    rating: {
      stars: 4.2, // Rating out of 5 stars
      noOfReviews: 306, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Campus Sutra", // Brand or company name
    item_name: "Men Colourblocked Track Pants", // Name of the item
    current_price: 719, // Current price of the item
    original_price: 1799, // Original price before discount
    discount_percentage: 60, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/14/fbdidlok_aeaa21f5eed54317943a17a2b9ff1134.jpg", // URL of the item's image
    item_type: "men", // Category of the item
    rating: {
      stars: 3.2, // Rating out of 5 stars
      noOfReviews: 606, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "StyleCast x Revolte", // Brand or company name
    item_name: "Insulator Tailred Jacket", // Name of the item
    current_price: 1462, // Current price of the item
    original_price: 3749, // Original price before discount
    discount_percentage: 32, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/22/EgWBzctm_e8cfdc3237614e35be1bdbf39a9345ca.jpg", // URL of the item's image
    item_type: "women", // Category of the item
    rating: {
      stars: 4.4, // Rating out of 5 stars
      noOfReviews: 20, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Roadster", // Brand or company name
    item_name: "Wmbelished Maxl Goen Dress", // Name of the item
    current_price: 1449, // Current price of the item
    original_price: 8899, // Original price before discount
    discount_percentage: 40, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/22/0BECLHMV_079c24ae70004a8391d7c5b91143fa75.jpg", // URL of the item's image
    item_type: "women", // Category of the item
    rating: {
      stars: 3.6, // Rating out of 5 stars
      noOfReviews: 8, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Roadster", // Brand or company name
    item_name: "V-Neck Maxi Dress", // Name of the item
    current_price: 1499, // Current price of the item
    original_price: 8599, // Original price before discount
    discount_percentage: 45, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/16/Dy0KOs3T_fa6b81d8989e47d88cef1bf52977d282.jpg", // URL of the item's image
    item_type: "women", // Category of the item
    rating: {
      stars: 3, // Rating out of 5 stars
      noOfReviews: 525, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Roadster", // Brand or company name
    item_name: "Embelished Mini Dresses", // Name of the item
    current_price: 759, // Current price of the item
    original_price: 7599, // Original price before discount
    discount_percentage: 90, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/22/cVID49Tt_71269a2a811147f28bb9115966f32a0b.jpg", // URL of the item's image
    item_type: "women", // Category of the item
    rating: {
      stars: 4.5, // Rating out of 5 stars
      noOfReviews: "25.5k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Roadster", // Brand or company name
    item_name: "Long Sleever Fit & Flare Dress", // Name of the item
    current_price: 1999, // Current price of the item
    original_price: 8899, // Original price before discount
    discount_percentage: 55, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25806762/2023/12/13/efb396c3-c76a-493b-8701-0d511e465b391702465042880-Levis-Women-Jeans-4571702465042367-1.jpg", // URL of the item's image
    item_type: "women", // Category of the item
    rating: {
      stars: 4.2, // Rating out of 5 stars
      noOfReviews: "1.4k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Levis", // Brand or company name
    item_name: "Women Super Skinny Fit Jeans", // Name of the item
    current_price: 1449, // Current price of the item
    original_price: 2999, // Original price before discount
    discount_percentage: 50, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30053415/2024/JUNE/27/s4TmiGhk_4057e62c5ccb48e9bee460b8d757a8c0.jpg", // URL of the item's image
    item_type: "women", // Category of the item
    rating: {
      stars: 4.3, // Rating out of 5 stars
      noOfReviews: 18, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Marks & Spencer", // Brand or company name
    item_name: "Floral Print Top", // Name of the item
    current_price: 999, // Current price of the item
    original_price: 1999, // Original price before discount
    discount_percentage: 50, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8790741/2022/4/12/2fcb51eb-6ace-4c72-a401-3f873bacc6561649748057794MarksSpencerWomenWhiteRegularFitSolidTrousers1.jpg", // URL of the item's image
    item_type: "women", // Category of the item
    rating: {
      stars: 3.7, // Rating out of 5 stars
      noOfReviews: 118, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Marks & Spencer", // Brand or company name
    item_name: "Women Recular Fit Trousers", // Name of the item
    current_price: 1749, // Current price of the item
    original_price: 3499, // Original price before discount
    discount_percentage: 50, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28985794/2024/4/17/3529b778-de57-449e-bb58-e37b5783813b1713299076314MarksSpencerMaxiDress1.jpg", // URL of the item's image
    item_type: "women", // Category of the item
    rating: {
      stars: 4.2, // Rating out of 5 stars
      noOfReviews: 13, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Marks & Spencer", // Brand or company name
    item_name: "Textured Bodycon Maxi Dress", // Name of the item
    current_price: 1749, // Current price of the item
    original_price: 3499, // Original price before discount
    discount_percentage: 50, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19674622/2024/3/26/3adc5041-4dcc-4c76-9077-4053ab2b307f1711426468077-Libas-Women-Peach-Coloured-Floral-Kurta-with-Trousers--Dupat-12.jpg", // URL of the item's image
    item_type: "women", // Category of the item
    rating: {
      stars: 4.5, // Rating out of 5 stars
      noOfReviews: "5.4k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Libas", // Brand or company name
    item_name: "Women Kurta with Trousers W...", // Name of the item
    current_price: 2949, // Current price of the item
    original_price: 7999, // Original price before discount
    discount_percentage: 50, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19076450/2022/7/22/e158832a-4fba-4a11-bcca-bd022ac503321658487852198-Libas-Women-Kurta-Sets-2351658487851381-1.jpg", // URL of the item's image
    item_type: "women", // Category of the item
    rating: {
      stars: 4.5, // Rating out of 5 stars
      noOfReviews: "5.4k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Libas", // Brand or company name
    item_name: "Women Embroidered Kurta Set", // Name of the item
    current_price: 1999, // Current price of the item
    original_price: 5999, // Original price before discount
    discount_percentage: 30, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25295334/2024/9/28/7986ac3c-73ab-40f9-a860-a8e6227db3931727535636620-Libas-Ethnic-Motifs-Embroidered-Regular-Sequinned-Kurta-with-1.jpg", // URL of the item's image
    item_type: "women", // Category of the item
    rating: {
      stars: 4.6, // Rating out of 5 stars
      noOfReviews: 469, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Libas", // Brand or company name
    item_name: "Kurta with Trouser & Dupatta", // Name of the item
    current_price: 2599, // Current price of the item
    original_price: 6999, // Original price before discount
    discount_percentage: 30, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15055280/2021/8/23/cc05048f-e86b-46da-b2da-420fabb59cf11629694542345-Libas-Women-Kurta-Sets-1261629694541678-1.jpg", // URL of the item's image
    item_type: "women", // Category of the item
    rating: {
      stars: 4.3, // Rating out of 5 stars
      noOfReviews: "10.6k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Libas", // Brand or company name
    item_name: "Cotton Yoke Design Kurta Set", // Name of the item
    current_price: 1199, // Current price of the item
    original_price: 3499, // Original price before discount
    discount_percentage: 60, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16905012/2023/8/25/60d06d03-dd7b-490f-9149-3b5d72cce2e51692960268138-Voyage-Unisex-Black-Lens--Silver-Toned-Round-Sunglasses-with-1.jpg", // URL of the item's image
    item_type: "women", // Category of the item
    rating: {
      stars: 4.4, // Rating out of 5 stars
      noOfReviews: "4.1k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Voyage", // Brand or company name
    item_name: "Unisex Round Sunglasses With...", // Name of the item
    current_price: 750, // Current price of the item
    original_price: 300, // Original price before discount
    discount_percentage: 20, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15503848/2023/8/25/c3eee2f5-106b-44f9-bef3-1b611ecb62d11692959966244-Voyage-Unisex-Black-Lens--Silver-Toned-Oval-Sunglasses-with--7.jpg", // URL of the item's image
    item_type: "women", // Category of the item
    rating: {
      stars: 4.3, // Rating out of 5 stars
      noOfReviews: 495, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Voyage", // Brand or company name
    item_name: "Unisex Oval Sunglasses", // Name of the item
    current_price: 929, // Current price of the item
    original_price: 3000, // Original price before discount
    discount_percentage: 55, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25286588/2023/11/16/7052ec82-cfc8-4a0c-8f7c-5f4de8964ea01700125931989VoyageWomenSquareSunglassesWithUVProtectedLens-8926WMG27781.jpg", // URL of the item's image
    item_type: "women", // Category of the item
    rating: {
      stars: 4.5, // Rating out of 5 stars
      noOfReviews: "1k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Voyage", // Brand or company name
    item_name: "Women Square Sunglasses", // Name of the item
    current_price: 799, // Current price of the item
    original_price: 3000, // Original price before discount
    discount_percentage: 65, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/31642533/2024/11/22/db77ca58-b177-4e11-b740-896ec1e9b5511732269332228-Voyage-Unisex-Rectangle-Sunglasses-with-Polarised-and-UV-Pro-1.jpg", // URL of the item's image
    item_type: "women", // Category of the item
    rating: {
      stars: 4, // Rating out of 5 stars
      noOfReviews: 159, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Voyage", // Brand or company name
    item_name: "Unisex Rcatangle Sunglasses", // Name of the item
    current_price: 1499, // Current price of the item
    original_price: 3000, // Original price before discount
    discount_percentage: 50, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/OCTOBER/25/viNshk08_87072c92a39947c78dda5742187e860e.jpg", // URL of the item's image
    item_type: "Kids", // Category of the item
    rating: {
      stars: 5, // Rating out of 5 stars
      noOfReviews: 8, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "H&M", // Brand or company name
    item_name: "Unisex Kids-2-Pcs Printed set", // Name of the item
    current_price: 599, // Current price of the item
    original_price: 799, // Original price before discount
    discount_percentage: 25, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20412344/2022/10/15/922512cc-d23d-4d17-9f74-1c15b5e42e3f1665807925616SuperstretchSlimFitJeans1.jpg", // URL of the item's image
    item_type: "Kids", // Category of the item
    rating: {
      stars: 4.5, // Rating out of 5 stars
      noOfReviews: "3.8k", // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "H&M", // Brand or company name
    item_name: "Boys Slim Fit Jeans", // Name of the item
    current_price: 799, // Current price of the item
    original_price: 1999, // Original price before discount
    discount_percentage: 20, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19011374/2022/7/7/8de7f383-c6b9-40eb-bc74-98a41334ea301657208512603Brushed-insideleggings1.jpg", // URL of the item's image
    item_type: "Kids", // Category of the item
    rating: {
      stars: 4.5, // Rating out of 5 stars
      noOfReviews: 622, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "H&M", // Brand or company name
    item_name: "Brushed-Inside Leggings", // Name of the item
    current_price: 799, // Current price of the item
    original_price: 2599, // Original price before discount
    discount_percentage: 30, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23720410/2023/6/22/46faab5b-746e-44b2-92bd-51acc2b2e5e71687413034857Twilljoggers1.jpg", // URL of the item's image
    item_type: "Kids", // Category of the item
    rating: {
      stars: 4.5, // Rating out of 5 stars
      noOfReviews: 915, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "H&M", // Brand or company name
    item_name: "Boys Twill Joggers", // Name of the item
    current_price: 699, // Current price of the item
    original_price: 2999, // Original price before discount
    discount_percentage: 55, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17400972/2023/3/24/bf41f4f4-58d6-4925-9787-87149d10d74e1679647990727-YK-Girls-Dresses-1881679647990436-1.jpg", // URL of the item's image
    item_type: "Kids", // Category of the item
    rating: {
      stars: 4, // Rating out of 5 stars
      noOfReviews: 42, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "YK", // Brand or company name
    item_name: "Girls Striped Empire Dress", // Name of the item
    current_price: 219, // Current price of the item
    original_price: 1099, // Original price before discount
    discount_percentage: 80, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21022812/2023/3/6/22fdeda5-c8b5-4739-aa57-2adf114efb1d1678081007509-YK-Unisex-Kids-Casual-Shoes-9841678081007298-1.jpg", // URL of the item's image
    item_type: "Kids", // Category of the item
    rating: {
      stars: 3.9, // Rating out of 5 stars
      noOfReviews: 49, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "YK", // Brand or company name
    item_name: "Kids Woven Design Slip-On Sn...", // Name of the item
    current_price: 298, // Current price of the item
    original_price: 1299, // Original price before discount
    discount_percentage: 77, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21168242/2022/12/12/d524e0d4-460a-4257-a76b-1d47bf8912fe1670864232070YKPurpleGradientlensBowTieDesignOversizeSunglassesforKids1.jpg", // URL of the item's image
    item_type: "Kids", // Category of the item
    rating: {
      stars: 4, // Rating out of 5 stars
      noOfReviews: 999, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "YK", // Brand or company name
    item_name: "Unisex Kids Oversized Sunglasses", // Name of the item
    current_price: 318, // Current price of the item
    original_price: 1099, // Original price before discount
    discount_percentage: 71, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/30/05VUBF1L_4660750227734468a85cb59dffc76862.jpg", // URL of the item's image
    item_type: "Kids", // Category of the item
    rating: {
      stars: 2.7, // Rating out of 5 stars
      noOfReviews: 30, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "PRINTCYLTR", // Brand or company name
    item_name: "Boys Printed Cotton Kurta", // Name of the item
    current_price: 679, // Current price of the item
    original_price: 1999, // Original price before discount
    discount_percentage: 66, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28099406/2024/3/7/bdc7f9e7-6e33-4ac4-9a1c-ee5065b863961709822033144UnitedColorsofBenettonBoysStripedPoloCollarPureCottonPockets1.jpg", // URL of the item's image
    item_type: "Kids", // Category of the item
    rating: {
      stars: 4.7, // Rating out of 5 stars
      noOfReviews: 151, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "United Colors Of Benetton", // Brand or company name
    item_name: "Boys Striped Polo Collor Pock...", // Name of the item
    current_price: 569, // Current price of the item
    original_price: 1499, // Original price before discount
    discount_percentage: 62, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18918102/2023/8/8/1e3bf512-dbc5-4fe2-a938-8ed63ded19cb1691496342205-US-Polo-Assn-Kids-Boys-Navy-Blue-Puffer-Jacket-2551691496341-1.jpg", // URL of the item's image
    item_type: "Kids", // Category of the item
    rating: {
      stars: 4.5, // Rating out of 5 stars
      noOfReviews: 105, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "U.S. Polo Assn. Kids", // Brand or company name
    item_name: "Boys Solid Puffier Jacket", // Name of the item
    current_price: 1549, // Current price of the item
    original_price: 3099, // Original price before discount
    discount_percentage: 50, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18918014/2024/6/25/73bd9bda-eec9-4ac4-b887-9e53436b7f9a1719322668978USPoloAssnKidsBoysSolidSingleBreastedBlazer1.jpg", // URL of the item's image
    item_type: "Kids", // Category of the item
    rating: {
      stars: 4.1, // Rating out of 5 stars
      noOfReviews: 59, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "U.S. Polo Assn. Kids", // Brand or company name
    item_name: "Boys Single Breasted Blazer", // Name of the item
    current_price: 1899, // Current price of the item
    original_price: 3799, // Original price before discount
    discount_percentage: 50, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25749608/2023/11/3/8f9c5815-99f4-4a94-a49b-2ad59b1054201699017698619MarksSpencerBoysNavyBlueGreenStripedPullover1.jpg", // URL of the item's image
    item_type: "Kids", // Category of the item
    rating: {
      stars: 4, // Rating out of 5 stars
      noOfReviews: 589, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Marks & Spencer", // Brand or company name
    item_name: "Boys Striped Pullover", // Name of the item
    current_price: 799, // Current price of the item
    original_price: 1999, // Original price before discount
    discount_percentage: 60, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32298701/2025/1/10/1aed6c98-3ac4-46b0-bcdf-6040a3a99aff1736498829821MattressProtector1.jpg", // URL of the item's image
    item_type: "home&living", // Category of the item
    rating: {
      stars: 4.8, // Rating out of 5 stars
      noOfReviews: 5, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "AJISH", // Brand or company name
    item_name: "Polycotton Water Resistant", // Name of the item
    current_price: 899, // Current price of the item
    original_price: 3199, // Original price before discount
    discount_percentage: 80, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17282504/2022/2/24/cac69dee-4a68-41df-8cb5-12a51e0ea7861645700328591PillowCovers1.jpg", // URL of the item's image
    item_type: "home&living", // Category of the item
    rating: {
      stars: 4.7, // Rating out of 5 stars
      noOfReviews: 25, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Marks & Spencer", // Brand or company name
    item_name: "Set of 2 Cotton Pillow Covers", // Name of the item
    current_price: 699, // Current price of the item
    original_price: 999, // Original price before discount
    discount_percentage: 30, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29302602/2024/5/2/502dc421-515e-48c3-92c6-e57b016820f31714642767400Bedsheets1.jpg", // URL of the item's image
    item_type: "home&living", // Category of the item
    rating: {
      stars: 4, // Rating out of 5 stars
      noOfReviews: 456, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "SPACES", // Brand or company name
    item_name: "Bedsheet with 2 Pillow Cover", // Name of the item
    current_price: 2199, // Current price of the item
    // original_price: ,
    // discount_percentage: ,
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/27150212/2024/1/29/baadb3d7-b5db-403b-a964-78bd42f9314d1706548816888HOMEMONDEGold-TonedWhiteFloral210TCKingBedsheetwith2PillowCo1.jpg", // URL of the item's image
    item_type: "home&living", // Category of the item
    rating: {
      stars: 4.2, // Rating out of 5 stars
      noOfReviews: 41, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "HOMEMONDE", // Brand or company name
    item_name: "Cotton Fitted Bedsheet Set", // Name of the item
    current_price: 1388, // Current price of the item
    original_price: 3019, // Original price before discount
    discount_percentage: 54, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25079958/2023/9/21/815e4f54-814b-43d7-91a7-3a95ae99cd471695298337982Blanc9FloralPrinted4x55ftCottonCarpet1.jpg", // URL of the item's image
    item_type: "home&living", // Category of the item
    rating: {
      stars: 3.6, // Rating out of 5 stars
      noOfReviews: 16, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "BLANC9", // Brand or company name
    item_name: "Floral Printed Cotton Carpet", // Name of the item
    current_price: 1113, // Current price of the item
    original_price: 1590, // Original price before discount
    discount_percentage: 30, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23301742/2023/11/21/9a7a84a4-cd66-4919-a9d9-673538da3f2d1700559683173-Sangria-Yellow-5-Pieces-Printed-Pure-Cotton-Square-Cushion-C-1.jpg", // URL of the item's image
    item_type: "home&living", // Category of the item
    rating: {
      stars: 4.5, // Rating out of 5 stars
      noOfReviews: 31, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Sangria", // Brand or company name
    item_name: "5 Pieces Square Cushion Covers", // Name of the item
    current_price: 799, // Current price of the item
    original_price: 1999, // Original price before discount
    discount_percentage: 60, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15110508/2021/8/11/e787f409-7a3b-4d05-979c-ee160d34d76c1628680066921POLYESTEREMBELLISHEDFLORALCUSHIONCOVERSPACKOF2BYHOSTAHOMES1.jpg", // URL of the item's image
    item_type: "home&living", // Category of the item
    rating: {
      stars: 4.6, // Rating out of 5 stars
      noOfReviews: 187, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "HOSTA HOMES", // Brand or company name
    item_name: "Set of 2 Square Cushion Covers", // Name of the item
    current_price: 505, // Current price of the item
    original_price: 2199, // Original price before discount
    discount_percentage: 77, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20823444/2022/11/19/052234e2-0481-4646-b7b5-72b2954ef7711668855847239SPACESWhiteYellowSetof2FloralRoomDarkeningLongDoorCurtain1.jpg", // URL of the item's image
    item_type: "home&living", // Category of the item
    rating: {
      stars: 4.7, // Rating out of 5 stars
      noOfReviews: 28, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "SPACES", // Brand or company name
    item_name: "Set of 2 Floral Long Boor Curtain", // Name of the item
    current_price: 2714, // Current price of the item
    original_price: 3878, // Original price before discount
    discount_percentage: 30, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19883376/2022/9/10/212396ac-e59f-4db3-b5cd-91890da391991662829490172ArtificialFlowersandPlants1.jpg", // URL of the item's image
    item_type: "home&living", // Category of the item
    rating: {
      stars: 3.8, // Rating out of 5 stars
      noOfReviews: 307, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "TIED RIBBONS", // Brand or company name
    item_name: "Set of 3 Orchid Flower Sticks", // Name of the item
    current_price: 499, // Current price of the item
    original_price: 1248, // Original price before discount
    discount_percentage: 60, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32148183/2024/12/30/fcc006eb-3454-4245-ae76-3f0975087a9d1735567291414ColorfulButterflyMotivationalPositiveWallQuotesStickers30CMx1.jpg", // URL of the item's image
    item_type: "home&living", // Category of the item
    rating: {
      stars: 4.3, // Rating out of 5 stars
      noOfReviews: 589, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Jaamso Royals", // Brand or company name
    item_name: "Printed Self Adhesive Stickers", // Name of the item
    current_price: 789, // Current price of the item
    original_price: 2000, // Original price before discount
    discount_percentage: 60, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25911294/2023/11/16/4cf15964-fba9-4077-b60d-f654cd17bb8f1700141910320WallDecor1.jpg", // URL of the item's image
    item_type: "home&living", // Category of the item
    rating: {
      stars: 3.9, // Rating out of 5 stars
      noOfReviews: 22, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "ArtVibes", // Brand or company name
    item_name: "Printed Hanging Wall Decor", // Name of the item
    current_price: 255, // Current price of the item
    original_price: 1599, // Original price before discount
    discount_percentage: 84, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22989406/2023/5/3/c7a53296-b08c-41a5-8717-106e977810361683098984391TableLamps1.jpg", // URL of the item's image
    item_type: "home&living", // Category of the item
    rating: {
      stars: 4.3, // Rating out of 5 stars
      noOfReviews: 7, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Pure Home and Living", // Brand or company name
    item_name: "Cotton Shade Table Lamp", // Name of the item
    current_price: 909, // Current price of the item
    original_price: 1299, // Original price before discount
    discount_percentage: 30, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
  {
    id: crypto.randomUUID(), // Unique identifier for the item
    item_image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26134330/2023/12/5/bc68fe67-3dd7-48fd-9cb5-4f88e45bd3081701791406275ClovefryMulticolouredGlass1.jpg", // URL of the item's image
    item_type: "home&living", // Category of the item
    rating: {
      stars: 4.7, // Rating out of 5 stars
      noOfReviews: 22, // Number of reviews
    },
    quantity: 1, // Quantity of the item
    company_name: "Clovefry", // Brand or company name
    item_name: "Glass Table Lamp", // Name of the item
    current_price: 1373, // Current price of the item
    original_price: 2400, // Original price before discount
    discount_percentage: 20, // Discount percentage
    return_period: 8, // Return period in days
    delivery_date: "29th feb", // Expected delivery date
  },
];

export default items; // Export the items array for use in other parts of the application
