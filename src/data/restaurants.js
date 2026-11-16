export const restaurants = [
  {
    id: 1,
    name: "Wevee's",
    category: "Fast Food, Pizza, Burgers",
    area: "Canal Road, Near Water Works, Jaranwala",
    isOpen: true,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60",
    deliveryTime: "25-35 mins",
    rating: 4.9,
    whatsapp: "923260481022",
    menu: [
      { id: 101, name: "Classic Beef Burger", price: 580, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60", description: "Juicy beef patty with special signature sauce" },
      { id: 102, name: "OG Zinger Burger", price: 450, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60", description: "Crispy chicken fillet with lettuce and mayo" },
      { 
        id: 103, 
        name: "Wevee's Special Pizza", 
        prices: { small: 500, medium: 1100, large: 1550, xl: 2200 }, 
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60", 
        description: "Loaded with special chicken, jalapenos, mushrooms & cheese" 
      },
      { 
        id: 104, 
        name: "Malai Boti Pizza", 
        prices: { small: 500, medium: 1100, large: 1550, xl: 2200 }, 
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60", 
        description: "Creamy malai boti chunks with onions and mozzarella" 
      },
      { id: 105, name: "Wevee's Special Platter", price: 800, image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=600&auto=format&fit=crop&q=60", description: "Assorted crispy chicken items and fries combo" },
      { id: 106, name: "Creamy Pasta", price: 750, image: "https://images.unsplash.com/photo-1621996346565-e3d5d62847ba?w=600&auto=format&fit=crop&q=60", description: "Rich white sauce pasta with tender chicken chunks" },
      { id: 107, name: "Loaded Fries", price: 450, image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&auto=format&fit=crop&q=60", description: "Fries topped with liquid cheese and chicken chunks" }
    ]
  },
  {
    id: 2,
    name: "Food Studio",
    category: "Fast Food, Pasta, Karahi",
    area: "Grain Market, Jaranwala",
    isOpen: true,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop&q=60",
    deliveryTime: "30-45 mins",
    rating: 4.8,
    whatsapp: "923000000002",
    menu: [
      { 
        id: 201, 
        name: "Food Studio Special Pizza", 
        prices: { small: 500, medium: 1150, large: 1600 }, 
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60", 
        description: "Chef special toppings with extra mozzarella cheese" 
      },
      { id: 202, name: "Tower Burger", price: 510, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60", description: "Double zinger patty with cheese and special sauce" },
      { id: 203, name: "Regular Chicken Karahi (Full)", price: 1700, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60", description: "Traditional desi chicken karahi cooked in fresh tomatoes & ghee" },
      { id: 204, name: "Special Mutton Karahi (Full)", price: 3700, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=60", description: "Juicy mutton pieces cooked with authentic spices" },
      { id: 205, name: "BBQ Platter (4 Persons)", price: 3000, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=60", description: "Mix of Malai Boti, Tikka Boti, Kebabs with drinks & naan" },
      { id: 206, name: "Alfredo Pasta (Full)", price: 700, image: "https://images.unsplash.com/photo-1621996346565-e3d5d62847ba?w=600&auto=format&fit=crop&q=60", description: "Penne pasta in creamy white sauce" },
      { id: 207, name: "Fresh Lime", price: 150, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=60", description: "Refreshing citrus cold drink" }
    ]
  },
  {
    id: 3,
    name: "Melt 'n Bite",
    category: "Pizzas, Fast Food, Wraps",
    area: "Jhal Styana Road, Jaranwala",
    isOpen: true,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60",
    deliveryTime: "25-35 mins",
    rating: 4.9,
    whatsapp: "923000000003",
    menu: [
      { 
        id: 301, 
        name: "Melt'n Bite Special Pizza", 
        prices: { small: 500, medium: 750, large: 1350, xl: 2000 }, 
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60", 
        description: "Ultimate loaded pizza with extra cheese and chicken" 
      },
      { id: 302, name: "Melt'n Bite Beef Burger", price: 600, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60", description: "Special thick grilled beef patty with cheddar cheese" },
      { id: 303, name: "Tower Burger", price: 500, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60", description: "Double decker crispy burger with cheese slice" },
      { id: 304, name: "Malai Boti Shawarma", price: 280, image: "https://images.unsplash.com/photo-1529042298742-b5e12815124b?w=600&auto=format&fit=crop&q=60", description: "Soft bread wrapped with creamy malai boti & garlic sauce" },
      { id: 305, name: "Zinger Paratha Roll", price: 350, image: "https://images.unsplash.com/photo-1529042298742-b5e12815124b?w=600&auto=format&fit=crop&q=60", description: "Crispy zinger strip rolled inside a flaky paratha" },
      { id: 306, name: "Loaded Fries", price: 400, image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&auto=format&fit=crop&q=60", description: "Fries smothered in cheese sauce and jalapenos" },
      { id: 307, name: "Crunchy Pasta", price: 550, image: "https://images.unsplash.com/photo-1621996346565-e3d5d62847ba?w=600&auto=format&fit=crop&q=60", description: "Baked pasta topped with crispy chicken pieces" }
    ]
  },
  {
    id: 4,
    name: "Kaly’s Fri Chicken",
    category: "Fried Chicken, Broast, Burgers",
    area: "Near Police Khidmat Markaz, Circular Road, Jaranwala",
    isOpen: true,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&auto=format&fit=crop&q=60",
    deliveryTime: "20-30 mins",
    rating: 4.9,
    whatsapp: "923000000004",
    menu: [
      { 
        id: 401, 
        name: "Kaly's Special Pizza", 
        prices: { small: 650, medium: 1199, large: 1699, xl: 2399 }, 
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60", 
        description: "Special chef sauce, diced kebab, bell peppers, black olives" 
      },
      { id: 402, name: "Zinger Burger", price: 370, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60", description: "Crispy chicken fillet with signature mayo and lettuce" },
      { id: 403, name: "Steak Burger", price: 550, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60", description: "Juicy beef steak style burger patty with special sauce" },
      { id: 404, name: "Chicken Special Shawarma", price: 250, image: "https://images.unsplash.com/photo-1529042298742-b5e12815124b?w=600&auto=format&fit=crop&q=60", description: "Loaded chicken chunks with garlic dip" },
      { id: 405, name: "Chicken & Cheese Paratha Roll", price: 380, image: "https://images.unsplash.com/photo-1529042298742-b5e12815124b?w=600&auto=format&fit=crop&q=60", description: "Flaky paratha loaded with chicken and melted cheese" },
      { id: 406, name: "Hot Wings (10 Pcs)", price: 500, image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=600&auto=format&fit=crop&q=60", description: "Spicy glazed fried chicken wings" },
      { id: 407, name: "Diamond Deal 1 (Zinger + Fries + Drink)", price: 699, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60", description: "1 Zinger Burger, Reg Fries, Reg Drink" }
    ]
  },
  {
    id: 5,
    name: "Food Shood",
    category: "Fast Food, Rolls, Burgers",
    area: "Faisalabad Road, Jaranwala",
    isOpen: true,
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&auto=format&fit=crop&q=60",
    deliveryTime: "30-45 mins",
    rating: 4.7,
    whatsapp: "923000000005",
    menu: [
      { 
        id: 501, 
        name: "Food Shood Special Pizza", 
        prices: { small: 500, medium: 1150, large: 1649 }, 
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60", 
        description: "Loaded with special chicken, mushrooms, olives & extra cheese" 
      },
      { id: 502, name: "Tower Burger", price: 500, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60", description: "Double zinger patty with cheese and sauces" },
      { id: 503, name: "Chicken Mayo Garlic Roll", price: 250, image: "https://images.unsplash.com/photo-1529042298742-b5e12815124b?w=600&auto=format&fit=crop&q=60", description: "Juicy chicken wrapped in soft paratha with garlic sauce" },
      { id: 504, name: "Club Sandwich", price: 399, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=60", description: "Classic triple-layer sandwich with chicken, egg and fries" },
      { id: 505, name: "Full Chicken Broast", price: 599, image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&auto=format&fit=crop&q=60", description: "Golden crispy fried chicken broast full portion" },
      { id: 506, name: "Cheesy Fries", price: 199, image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&auto=format&fit=crop&q=60", description: "Fries topped with hot liquid cheddar cheese" },
      { id: 507, name: "Jumbo Platter", price: 449, image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=600&auto=format&fit=crop&q=60", description: "Spring rolls, oven-baked wings, fries and cold drink" }
    ]
  },
  {
    id: 6,
    name: "Pizza Plant",
    category: "Pizzas, Fast Food, Wraps",
    area: "Railway Road, Jaranwala",
    isOpen: true,
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&auto=format&fit=crop&q=60",
    deliveryTime: "30-45 mins",
    rating: 4.8,
    whatsapp: "923000000006",
    menu: [
      { 
        id: 601, 
        name: "Mastani Boti Pizza", 
        prices: { small: 1050, medium: 1570, large: 2250 }, 
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60", 
        description: "Special creamy boti chunks with herbs and cheese" 
      },
      { 
        id: 602, 
        name: "Shish Taouk Pizza", 
        prices: { small: 1050, medium: 1570, large: 2250 }, 
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60", 
        description: "Middle eastern flavored chicken with olives & cheese" 
      },
      { id: 603, name: "Monster Burger", price: 480, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60", description: "Heavy burger with multiple patties and cheese" },
      { id: 604, name: "Shish Taouk Wrap", price: 600, image: "https://images.unsplash.com/photo-1529042298742-b5e12815124b?w=600&auto=format&fit=crop&q=60", description: "Special wrap with grilled chicken and garlic mayo" },
      { id: 605, name: "Pizza Fries", price: 500, image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&auto=format&fit=crop&q=60", description: "Fries baked with pizza toppings and melted cheese" },
      { id: 606, name: "Crunchy Pasta", price: 650, image: "https://images.unsplash.com/photo-1621996346565-e3d5d62847ba?w=600&auto=format&fit=crop&q=60", description: "Oven baked creamy pasta with crunchy chicken" },
      { id: 607, name: "Planet Deal 1 (2 Large Pizzas + 1.5L Drink)", price: 3320, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=60", description: "Family saver pizza deal" }
    ]
  },
  {
    id: 7,
    name: "Royal Casino",
    category: "Fast Food, Traditional, BBQ",
    area: "Ghalla Mandi Road, Jaranwala",
    isOpen: true,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=60",
    deliveryTime: "35-50 mins",
    rating: 4.6,
    whatsapp: "923000000007",
    menu: [
      { id: 701, name: "Chicken Special Karahi (Full)", price: 1900, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60", description: "Special chef recipe chicken karahi with butter and spices" },
      { id: 702, name: "Mutton Shinwari Karahi (Full)", price: 3400, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60", description: "Authentic Shinwari style mutton karahi in pure fat/oil" },
      { id: 703, name: "Chicken Seekh Kebab (4 Pcs)", price: 400, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=60", description: "Juicy charcoal grilled kebabs with mint chutney" },
      { id: 704, name: "Chicken Manchurian with Rice", price: 600, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&auto=format&fit=crop&q=60", description: "Classic Chinese gravy with fried rice" },
      { id: 705, name: "Mughlai Handi (Full)", price: 1300, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60", description: "Boneless chicken cooked in rich creamy gravy" },
      { id: 706, name: "Garlic Naan", price: 80, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60", description: "Fresh tandoori naan brushed with garlic butter" },
      { id: 707, name: "Russian Salad", price: 400, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=60", description: "Fresh creamy fruit and vegetable salad" }
    ]
  },
  {
    id: 8,
    name: "Grill City",
    category: "BBQ, Fast Food, Burgers",
    area: "Circular Road Near Food Studio, Jaranwala",
    isOpen: true,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60",
    deliveryTime: "30-45 mins",
    rating: 4.9,
    whatsapp: "923000000008",
    menu: [
      { 
        id: 801, 
        name: "Grill City Special Pizza", 
        prices: { small: 400, medium: 950, large: 1350, xl: 1900 }, 
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60", 
        description: "Loaded with smoky chicken chunks, mushrooms and extra cheese" 
      },
      { id: 802, name: "Mighty Burger", price: 550, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60", description: "Triple patty monster burger with melted cheese" },
      { id: 803, name: "Box Master Wrap", price: 400, image: "https://images.unsplash.com/photo-1529042298742-b5e12815124b?w=600&auto=format&fit=crop&q=60", description: "Crispy chicken strip wrapped with hash brown and cheese" },
      { id: 804, name: "BBQ Platter for 2", price: 1399, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=60", description: "Mix of Malai Boti, Seekh Kebabs, Tikka and Paratha" },
      { id: 805, name: "Loaded Fries", price: 500, image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&auto=format&fit=crop&q=60", description: "Crispy fries loaded with cheese and chicken chunks" },
      { id: 807, name: "4 Guys Deal (4 Burgers + 1L Drink)", price: 1400, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60", description: "Group discount deal" }
    ]
  }
];