import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Burgerz() {
  const burgers = [
    { name: 'Classic Veg Burger', price: '₹60', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1600&q=90' },
    { name: 'Cheese Burger', price: '₹80', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=90' },
    { name: 'Mexican Burger', price: '₹100', image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Paneer Burger', price: '₹90', image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Corn & Cheese Burger', price: '₹95', image: 'https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Double Decker Burger', price: '₹120', image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Crispy Burger', price: '₹85', image: 'https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Aloo Tikki Sandwich', price: '₹70', image: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Jumbo Burger', price: '₹140', image: 'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  const sides = [
    { name: 'French Fries', price: '₹50', image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Peri Peri Fries', price: '₹70', image: 'https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Cheese Fries', price: '₹80', image: 'https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Onion Rings', price: '₹60', image: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Nuggets Burger (6 pcs)', price: '₹90', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=1600&q=90' },
    { name: 'Veg Wrap', price: '₹100', image: 'https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  const combos = [
    { name: 'Burger + Fries', price: '₹100', image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=1600&q=90' },
    { name: 'Burger + Drink', price: '₹95', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=1600&q=90' },
    { name: 'Combo Meal', price: '₹140', description: 'Burger + Fries + Drink', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=90' },
    { name: 'Family Pack', price: '₹400', description: '3 Burgers + 2 Fries + 3 Drinks', image: 'https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  return (
    <div className="bg-[#CFF5E7] min-h-screen">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-[#1F9D6A] hover:text-[#178555] transition-colors">
              <ArrowLeft size={24} />
              <span className="font-bold text-lg">Back to Home</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-4xl">🍔</span>
              <h1 className="text-2xl font-bold text-[#1F2933]">BURGERZ</h1>
            </div>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-[#1F2933] mb-4">BURGERZ</h1>
          <p className="text-2xl text-[#1F9D6A] font-medium mb-4">Pure Veg Burgers, Fries & Combos</p>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Satisfy your cravings with our delicious pure vegetarian burgers made with fresh ingredients
            and served with crispy fries. 100% vegetarian, 100% tasty!
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#1F2933] mb-8">Our Burgers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {burgers.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1F2933] mb-2">{item.name}</h3>
                  <p className="text-3xl font-bold text-[#1F9D6A]">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#1F2933] mb-8">Sides & More</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sides.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1F2933] mb-2">{item.name}</h3>
                  <p className="text-3xl font-bold text-[#1F9D6A]">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#1F2933] mb-8">Value Combos</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {combos.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1F2933] mb-2">{item.name}</h3>
                  {item.description && (
                    <p className="text-[#6B7280] text-sm mb-2">{item.description}</p>
                  )}
                  <p className="text-3xl font-bold text-[#1F9D6A]">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[#1F2933] mb-6">Why Choose BURGERZ?</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-8">
            <div>
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="font-bold text-[#1F2933] mb-2">100% Vegetarian</h3>
              <p className="text-[#6B7280]">Pure veg ingredients only</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🍔</div>
              <h3 className="font-bold text-[#1F2933] mb-2">Fresh & Hot</h3>
              <p className="text-[#6B7280]">Made to order every time</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🧀</div>
              <h3 className="font-bold text-[#1F2933] mb-2">Quality Ingredients</h3>
              <p className="text-[#6B7280]">Premium cheese and vegetables</p>
            </div>
            <div>
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold text-[#1F2933] mb-2">Great Value</h3>
              <p className="text-[#6B7280]">Delicious food at fair prices</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1F2933] text-white py-12">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h3 className="text-2xl font-bold mb-2">BURGERZ</h3>
          <p className="text-white/70">Part of the FRUITASTY Family | Since 2013</p>
          <Link to="/" className="inline-block mt-6 text-[#1F9D6A] hover:text-white transition-colors">
            Back to Main Site
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Burgerz;
