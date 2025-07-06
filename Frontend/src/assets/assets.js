
import Babycorn from './Babycorn.jpg'
import Beef from './Beef.jpg'
import Beverages from './Beverages.jpg'
import Biriyani from './Biriyani.jpg'
import Bread from './Bread.jpg'
import Burger from './Burger.jpg'
import Cakes from './Cakes.jpg'
import Chicken from './Chicken.jpg'
import Chole from './Chole.jpg'
import Coffee from './Coffee.jpg'
import Cookies from './Cookies.jpg'
import Crab from './Crab.jpg'
import Croissant from './Croissant.jpg'
import Donut from './Donut.jpg'
import Dosa from './Dosa.jpg'
import Fish from './Fish.jpg'
import IceCream from './IceCream.jpg'
import Kebab from './Kebab.jpg'
import Manchurian from './Manchurian.jpg'
import Mushroom from './Mushroom.jpg'
import Mutton from './Mutton.jpg'
import Noodles from './Noodles.jpg'
import Paneer from './Paneer.jpg'
import Pasta from './Pasta.jpg'
import Pizza from './Pizza.jpg'
import Prawns from './Prawns.jpg'
import Rolls from './Rolls.jpg'
import Roti from './Roti.jpg'
import Salads from './Salads.jpg'
import Samosa from './Samosa.jpg'
import Shawarma from './Shawarma.jpg'
import Soup from './Soup.jpg'
import Soya from './Soya.jpg'
import Vada from './Vada.jpg'


export const mainItems = [
  { id: 1, name: 'Beverages', image: Beverages },
  { id: 2, name: 'Biriyani', image: Biriyani },
  { id: 3, name: 'Fast Food', image: Pizza },
  { id: 4, name: 'Starters', image: Babycorn },
  { id: 5, name: 'Salads', image: Salads },
  { id: 6, name: 'North Indian', image: Roti },
  { id: 7, name: 'Noodles', image: Noodles },
  { id: 8, name: 'Desserts', image: Cakes },
  { id: 9, name: 'Sounth Indian', image: Vada },
  { id: 10, name: 'Non-Veg', image: Fish },
  { id: 11, name: 'Bakery', image: Bread },
]

export const foodItems = [
  // Beverages
  { id: 1, name: 'Cold Coffee', image: Coffee, category: 'Beverages', description: 'Smooth, chilled coffee topped with foam, perfect for a caffeine boost.', price: 120 },
  { id: 2, name: 'Fruit Mocktail', image: Beverages, category: 'Beverages', description: 'Refreshing drink blended with mixed fruits and ice.', price: 130 },

  // Biriyani
  { id: 3, name: 'Hyderabadi Biriyani', image: Biriyani, category: 'Biriyani', description: 'Aromatic rice layered with marinated meat and traditional spices.', price: 260 },

  // Fast Food
  { id: 4, name: 'Cheesy Pizza', image: Pizza, category: 'Fast Food', description: 'Loaded cheese pizza with crispy base and herbs.', price: 299 },
  {
    id: 34, name: 'Cheese Burger', image: Burger, category: 'Fast Food', description: 'Juicy grilled patty topped with melted cheese, fresh lettuce, and sauces in a toasted bun.', price: 180
  },
  {
  id: 35, name: 'Creamy Alfredo Pasta', image: Pasta, category: 'Fast Food', description: 'Rich and creamy Alfredo pasta tossed with herbs, garlic, and parmesan cheese.', price: 240
},

  // Starters
  { id: 5, name: 'Babycorn Manchurian', image: Babycorn, category: 'Starters', description: 'Crispy babycorn tossed in tangy Indo-Chinese sauce.', price: 229 },
  { id: 6, name: 'Paneer Tikka', image: Paneer, category: 'Starters', description: 'Marinated paneer cubes grilled to perfection with spices.', price: 250 },
  { id: 7, name: 'Chilli Mushroom', image: Mushroom, category: 'Starters', description: 'Spicy and savory Indo-Chinese stir-fried mushrooms.', price: 240 },
  { id: 8, name: 'Manchurian Balls', image: Manchurian, category: 'Starters', description: 'Crispy veggie balls in spicy garlic-soy sauce.', price: 220 },

  // Salads
  { id: 9, name: 'Fresh Garden Salad', image: Salads, category: 'Salads', description: 'Colorful mix of fresh veggies with olive oil and herbs.', price: 160 },

  // North Indian
  { id: 10, name: 'Paneer Butter Masala', image: Paneer, category: 'North Indian', description: 'Creamy paneer curry with buttery tomato gravy.', price: 270 },
  { id: 11, name: 'Tandoori Roti', image: Roti, category: 'North Indian', description: 'Whole wheat flatbread baked in a clay oven.', price: 25 },
  { id: 12, name: 'Chole Masala', image: Chole, category: 'North Indian', description: 'Spiced chickpeas in rich Punjabi-style gravy.', price: 190 },

  // Noodles
  { id: 13, name: 'Hakka Noodles', image: Noodles, category: 'Noodles', description: 'Wok-tossed noodles with vegetables and soy sauce.', price: 199 },

  // Desserts
  { id: 14, name: 'Chocolate Cake', image: Cakes, category: 'Desserts', description: 'Moist chocolate sponge layered with ganache.', price: 350 },
  { id: 15, name: 'Swiss Roll', image: Rolls, category: 'Desserts', description: 'Soft cake roll filled with creamy chocolate.', price: 220 },

  // South Indian
  { id: 16, name: 'Medu Vada', image: Vada, category: 'Sounth Indian', description: 'Deep-fried lentil donuts served with sambar.', price: 80 },
  { id: 17, name: 'Masala Dosa', image: Dosa, category: 'Sounth Indian', description: 'Crispy rice crepe filled with spiced mashed potatoes.', price: 100 },

  // Bakery
  { id: 18, name: 'Fresh Bread', image: Bread, category: 'Bakery', description: 'Soft and fluffy white bread loaf.', price: 40 },
  { id: 19, name: 'Croissant', image: Croissant, category: 'Bakery', description: 'Buttery, flaky French pastry.', price: 90 },
  { id: 20, name: 'Cookies', image: Cookies, category: 'Bakery', description: 'Crunchy and sweet baked cookies.', price: 50 },
  { id: 21, name: 'Donut', image: Donut, category: 'Bakery', description: 'Soft ring-shaped pastry glazed with chocolate.', price: 60 },

  // Non-Veg
  { id: 22, name: 'Grilled Chicken Leg', image: Chicken, category: 'Non-Veg', description: 'Juicy chicken leg grilled with herbs and spices.', price: 180 },
  { id: 23, name: 'Mutton Curry', image: Mutton, category: 'Non-Veg', description: 'Tender pieces of mutton simmered in spicy gravy.', price: 280 },
  { id: 24, name: 'Fish Fry', image: Fish, category: 'Non-Veg', description: 'Crispy golden-fried fish fillets with lemon and herbs.', price: 240 },
  { id: 25, name: 'Prawns Masala', image: Prawns, category: 'Non-Veg', description: 'Spicy and flavorful prawns cooked in rich masala.', price: 320 },
  { id: 26, name: 'Beef Steak', image: Beef, category: 'Non-Veg', description: 'Grilled beef steak served with herbs and garlic butter.', price: 350 },
  { id: 27, name: 'Shawarma Roll', image: Shawarma, category: 'Non-Veg', description: 'Middle Eastern-style meat wrap filled with sauces and veggies.', price: 160 },
  { id: 28, name: 'Crab Platter', image: Crab, category: 'Non-Veg', description: 'Steamed crab served with spicy butter dip.', price: 450 },
  { id: 29, name: 'Kebab Skewers', image: Kebab, category: 'Non-Veg', description: 'Spiced meat grilled on skewers, served with mint chutney.', price: 220 },

  // Others
  { id: 30, name: 'Ice Cream Sundae', image: IceCream, category: 'Desserts', description: 'Scoops of ice cream with fruits and chocolate syrup.', price: 130 },
  { id: 31, name: 'Soya Chunks Curry', image: Soya, category: 'North Indian', description: 'Protein-rich soya chunks simmered in spicy curry.', price: 200 },
  { id: 32, name: 'Vegetable Soup', image: Soup, category: 'Starters', description: 'Warm and comforting soup loaded with vegetables.', price: 110 },
  { id: 33, name: 'Samosa Plate', image: Samosa, category: 'Starters', description: 'Crispy pastry filled with spiced potato, served with chutney.', price: 50 },
]
