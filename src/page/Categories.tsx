import { FoodCategory } from "@/components/FoodCategory";
import { GroceryCategory } from "@/components/GroceryCategory";
import { MedicineCategory } from "@/components/MedicineCategory";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const food = [
  {
    id: 1,
    name: "Vegetable Salad",
    type: "veg",
    price: 150,
    caption: "Fresh and healthy!",
    imgUrl:
      "https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Paneer Curry",
    type: "veg",
    price: 200,
    caption: "Rich and flavorful.",
    imgUrl:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Chicken Biryani",
    type: "non-veg",
    price: 300,
    caption: "Aromatic and spicy.",
    imgUrl:
      "https://www.kannammacooks.com/wp-content/uploads/buhari-hotel-chennai-chicken-biryani-recipe-1-4.jpg",
  },
  {
    id: 4,
    name: "Fish Curry",
    type: "non-veg",
    price: 250,
    caption: "Deliciously tangy.",
    imgUrl:
      "https://images.unsplash.com/photo-1654863404432-cac67587e25d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Veg Sandwich",
    type: "veg",
    price: 100,
    caption: "Quick and tasty.",
    imgUrl:
      "https://images.unsplash.com/photo-1619860860774-1e2e17343432?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Egg Curry",
    type: "non-veg",
    price: 150,
    caption: "Simple yet delightful.",
    imgUrl:
      "https://images.unsplash.com/photo-1590412200988-a436970781fa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Mixed Veg Soup",
    type: "veg",
    price: 120,
    caption: "Warm and comforting.",
    imgUrl:
      "https://images.unsplash.com/photo-1478749485505-2a903a729c63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const grocery = [
  {
    id: 8,
    name: "Rice",
    type: "must item",
    price: 60,
    caption: "Essential staple",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1705338026411-00639520a438?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Wheat Flour",
    type: "must item",
    price: 40,
    caption: "Perfect for baking",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1723672838967-6b743385f900?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Sugar",
    type: "must item",
    price: 50,
    caption: "Sweet and versatile",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1726072362679-2b2023862024?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Salt",
    type: "must item",
    price: 20,
    caption: "Essential for cooking",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1672349888046-361807de476f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Oil",
    type: "provision store item",
    price: 120,
    caption: "For cooking and frying",
    imgUrl:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "Spices Pack",
    type: "provision store item",
    price: 150,
    caption: "Enhance your flavor",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1692776206795-60a58a4dc817?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "Tea Powder",
    type: "provision store item",
    price: 100,
    caption: "For the perfect brew",
    imgUrl:
      "https://images.unsplash.com/photo-1575487426366-079595af2247?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const medicine = [
  {
    id: 15,
    name: "Paracetamol",
    type: "tablet",
    price: 20,
    caption: "For pain and fever relief.",
    imgUrl:
      "https://5.imimg.com/data5/SELLER/Default/2021/12/LK/ON/KX/43755673/paracetamol-500mg-tablet-500x500.jpg",
  },
  {
    id: 16,
    name: "Cough Syrup",
    type: "syrup",
    price: 80,
    caption: "For soothing throat and cough.",
    imgUrl:
      "https://images.apollo247.in/pub/media/catalog/product/k/o/kof0003_1-jan24_4_.jpg",
  },
  {
    id: 17,
    name: "Pain Relief Spray",
    type: "spray",
    price: 200,
    caption: "Relieves muscle and joint pain.",
    imgUrl: "https://m.media-amazon.com/images/I/51skvseP2NL.jpg",
  },
  {
    id: 18,
    name: "Vitamin C Tablets",
    type: "tablet",
    price: 100,
    caption: "Boosts immunity and health.",
    imgUrl: "https://m.media-amazon.com/images/I/81zpDdkKF6L.jpg",
  },
  {
    id: 19,
    name: "Antacid",
    type: "tablet",
    price: 50,
    caption: "For relief from acidity and indigestion.",
    imgUrl:
      "https://cdn01.pharmeasy.in/dam/products_otc/Z63893/liveasy-wellness-antacid-mint-flavour-sugar-free-bottle-of-200ml-oral-liquid-2-1695207631.jpg",
  },
  {
    id: 20,
    name: "Bandages",
    type: "first aid",
    price: 30,
    caption: "Essential for covering minor wounds.",
    imgUrl:
      "https://images-cdn.ubuy.co.in/64e7cb12185d9e16f91221e7-band-aid-brand-flexible-fabric-adhesive.jpg",
  },
  {
    id: 21,
    name: "Antiseptic Cream",
    type: "ointment",
    price: 60,
    caption: "Helps in healing cuts and wounds.",
    imgUrl:
      "https://himalayawellness.in/cdn/shop/products/antiseptic-cream.jpg?v=1622099573",
  },
];

export const Categories = () => {
  const [category, setCategory] = useState({
    food: false,
    grocery: false,
    medicine: false,
    subcategory: "",
  });

  function shuffle(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const nav = useNavigate();

  const allItems = [...food, ...grocery, ...medicine];
  const filteredArray = shuffle(allItems);

  const [filteredProducts, setFilteredProducts] = useState<any>(filteredArray);

  useEffect(() => {
    if (category.food) {
      if (category.subcategory === "all") {
        return setFilteredProducts(food);
      }
      const foodItems = food.filter(
        (item) => item.type === category.subcategory
      );
      setFilteredProducts(foodItems);
    } else if (category.grocery) {
      if (category.subcategory === "all") {
        return setFilteredProducts(grocery);
      }
      const groceryItems = grocery.filter(
        (item) => item.type === category.subcategory
      );
      setFilteredProducts(groceryItems);
    } else if (category.medicine) {
      if (category.subcategory === "all") {
        return setFilteredProducts(medicine);
      }
      const medicineItems = medicine.filter(
        (item) => item.type === category.subcategory
      );
      setFilteredProducts(medicineItems);
    }
  }, [category]);

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-6 py-8 bg-gray-100 pt-24">
        <h2 className="text-2xl font-semibold text-gray-800">
          Choose Your Category
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 px-2 ">
          <div className="flex sm:w-auto w-80 sm:flex-col items-center gap-4 sm:gap-2 bg-white shadow-md sm:p-4 p-2 px-4 rounded-md hover:scale-105 transition-transform duration-300">
            <p className="text-base font-medium text-gray-700">Food</p>
            <FoodCategory setCategory={setCategory} />
          </div>

          <div className="flex sm:flex-col sm:w-auto w-80 items-center gap-4 sm:gap-2 bg-white shadow-md sm:p-4 p-2 px-4 rounded-md hover:scale-105 transition-transform duration-300">
            <p className="text-base font-medium text-gray-700">Grocery</p>
            <GroceryCategory setCategory={setCategory} />
          </div>

          <div className="flex sm:flex-col items-center gap-4 sm:w-auto w-80 sm:gap-2 bg-white shadow-md sm:p-4 p-2 px-4 rounded-md hover:scale-105 transition-transform duration-300">
            <p className="text-base font-medium text-gray-700">Medicine</p>
            <MedicineCategory setCategory={setCategory} />
          </div>
        </div>
      </div>

      {/* Search Results Section */}
      <div className="py-8 bg-gray-50 px-4">
        <div className="container mx-auto px-4">
          <p className="text-xl font-medium text-gray-800">
            Search results for:{" "}
            <span className="font-semibold text-purple-600">
              {category.food
                ? "food"
                : category.grocery
                ? "grocery"
                : category.medicine
                ? "medicine"
                : null}
              {" - "}
              {category.subcategory}
            </span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-2">
            {filteredProducts?.map((prod: any, i: number) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-md p-6 flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full h-40 bg-gray-200 rounded-md overflow-hidden">
                  <img
                    src={prod.imgUrl}
                    alt={`product ${prod.id}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {prod?.name}
                  </h3>
                  <p className="text-sm text-gray-600">{prod.caption}</p>
                  <p className="text-lg font-medium text-purple-600 mt-2">
                    {prod.price} ₹
                  </p>
                </div>
                <button
                  onClick={() => nav("/signup")}
                  className="bg-purple-500 text-white text-center py-2 rounded-md hover:bg-purple-600 transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
