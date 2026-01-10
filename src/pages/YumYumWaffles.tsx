import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function YumYumWaffles() {
  const waffles = [
    { name: 'Classic Belgian Waffle', price: '₹80', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/09/Classic-Waffles-0ae28b2.jpg' },
    { name: 'Chocolate Waffle', price: '₹100', image: 'https://1.bp.blogspot.com/-qerD8XlFz1s/Xok83NSQnsI/AAAAAAAA7K4/tav0492JTDM3O8wzyRBtgUm4tyjAjLOLQCPcBGAYYCw/s1600/9400.jpg' },
    { name: 'Strawberry Delight', price: '₹120', image: 'https://togetherasfamily.com/wp-content/uploads/2022/05/strawberry-waffles-8-450x600.jpg' },
    { name: 'Nutella Heaven', price: '₹130', image: 'https://i.pinimg.com/originals/fc/a2/3c/fca23c5c83e8824abdb9064e6d3c0017.jpg' },
    { name: 'Caramel Crunch', price: '₹110', image: 'https://foodjot.blog/wp-content/uploads/2024/07/Easy-Caramel-Waffles-78.jpg' },
    { name: 'Mixed Berry Waffle', price: '₹140', image: 'https://www.eatmovemake.com/wp-content/uploads/2015/07/Mixed-Berry-Cream-Cheese-Waffle-Cakes_recipe.jpg' },
    { name: 'Oreo Waffle', price: '₹120', image: 'https://i.pinimg.com/originals/fc/a2/3c/fca23c5c83e8824abdb9064e6d3c0017.jpg' },
    { name: 'Banana Split Waffle', price: '₹115', image: 'https://togetherasfamily.com/wp-content/uploads/2022/05/strawberry-waffles-8-450x600.jpg' },
    { name: 'Peanut Butter Waffle', price: '₹125', image: 'https://www.eatmovemake.com/wp-content/uploads/2015/07/Mixed-Berry-Cream-Cheese-Waffle-Cakes_recipe.jpg' },
  ];

  const shakes = [
    { name: 'Chocolate Shake', price: '₹90', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1600&q=90' },
    { name: 'Vanilla Shake', price: '₹80', image: 'https://tmbidigitalassetsazure.blob.core.windows.net/toh/GoogleImagesPostCard/Chocolate-Peanut-Butter-Shakes_EXPS_FT19_245766_F_1008_1.jpg' },
    { name: 'Strawberry Shake', price: '₹95', image: 'https://savoredsips.com/wp-content/uploads/2021/06/oreo-milkshake-t1.jpg' },
    { name: 'Oreo Shake', price: '₹110', image: 'https://savoredsips.com/wp-content/uploads/2021/06/oreo-milkshake-t1.jpg' },
    { name: 'Mango Shake', price: '₹100', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1600&q=90' },
    { name: 'KitKat Shake', price: '₹120', image: 'https://tmbidigitalassetsazure.blob.core.windows.net/toh/GoogleImagesPostCard/Chocolate-Peanut-Butter-Shakes_EXPS_FT19_245766_F_1008_1.jpg' },
  ];

  const desserts = [
    { name: 'Brownie with Ice Cream', price: '₹110', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1600&q=90' },
    { name: 'Chocolate Sundae', price: '₹90', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=90' },
    { name: 'Ice Cream Cup', price: '₹60', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1600&q=90' },
    { name: 'Fruit Sundae', price: '₹100', image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1600&q=90' },
  ];

  return (
    <div className="bg-[#CFF5E7] min-h-screen">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-[#F4B400] hover:text-[#d89f00] transition-colors">
              <ArrowLeft size={24} />
              <span className="font-bold text-lg">Back to Home</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-4xl">🧇</span>
              <h1 className="text-2xl font-bold text-[#1F2933]">YUM YUM WAFFLES</h1>
            </div>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-[#1F2933] mb-4">YUM YUM WAFFLES</h1>
          <p className="text-2xl text-[#F4B400] font-medium mb-4">Indulgent Waffles, Desserts & Shakes</p>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Indulge in our freshly made waffles topped with your favorite ingredients.
            Each waffle is crispy on the outside, fluffy on the inside, and absolutely delicious!
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#1F2933] mb-8">Our Signature Waffles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {waffles.map((item, index) => (
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
                  <p className="text-3xl font-bold text-[#F4B400]">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#1F2933] mb-8">Thick Shakes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {shakes.map((item, index) => (
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
                  <p className="text-3xl font-bold text-[#F4B400]">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#1F2933] mb-8">Desserts</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {desserts.map((item, index) => (
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
                  <p className="text-3xl font-bold text-[#F4B400]">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[#1F2933] mb-6">Why YUM YUM WAFFLES?</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-8">
            <div>
              <div className="text-5xl mb-4">🧇</div>
              <h3 className="font-bold text-[#1F2933] mb-2">Freshly Made</h3>
              <p className="text-[#6B7280]">Every waffle cooked to perfection</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🍫</div>
              <h3 className="font-bold text-[#1F2933] mb-2">Premium Toppings</h3>
              <p className="text-[#6B7280]">High-quality ingredients and sauces</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🍨</div>
              <h3 className="font-bold text-[#1F2933] mb-2">Ice Cream & More</h3>
              <p className="text-[#6B7280]">Complete dessert experience</p>
            </div>
            <div>
              <div className="text-5xl mb-4">😋</div>
              <h3 className="font-bold text-[#1F2933] mb-2">Irresistible</h3>
              <p className="text-[#6B7280]">Taste that keeps you coming back</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1F2933] text-white py-12">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h3 className="text-2xl font-bold mb-2">YUM YUM WAFFLES</h3>
          <p className="text-white/70">Part of the FRUITASTY Family | Since 2013</p>
          <Link to="/" className="inline-block mt-6 text-[#F4B400] hover:text-white transition-colors">
            Back to Main Site
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default YumYumWaffles;
