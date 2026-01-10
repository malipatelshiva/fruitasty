import { ArrowLeft, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

function Fruitasty() {
  const juices = [
    { name: 'Orange Juice',  image: 'https://cdn.pixabay.com/photo/2023/04/13/21/14/ai-generated-7923488_1280.jpg' },
    { name: 'Watermelon Juice', image: 'https://img.freepik.com/premium-photo/watermelon-juice-with-splashes-with-watermelon-fruit-isolated-white-background-studio-shot_741910-8400.jpg?w=2000' },
    { name: 'Pineapple Juice', image: 'https://png.pngtree.com/png-clipart/20250604/original/pngtree-pineapple-juice-png-image_21121890.png' },
    { name: 'Banana Juice', image: 'https://www.indianveggiedelight.com/wp-content/uploads/2022/08/banana-juice-featured.jpg' },
    { name: 'Apple Juice',  image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/apple-juice-recipe.jpg' },
    { name: 'Blackgrapes Juice',  image: 'https://www.cookingwithsiddhi.com/wp-content/uploads/2019/05/black-grapes-juice.jpeg' },
  ];

  const smoothies = [
    { name: 'Apple Banana',  image: 'https://i.ytimg.com/vi/LVw_rmhf-2g/maxresdefault.jpg' },
    { name: 'Banana Chocolate',  image: 'https://www.indianveggiedelight.com/wp-content/uploads/2024/02/oats-smoothie.jpg' },
    { name: 'Oaty Banana',  image: 'https://www.indianveggiedelight.com/wp-content/uploads/2024/02/oats-smoothie.jpg' },
    { name: 'Dry Fruit Banana Blend',  image: 'https://jbcostore.co.in/cdn/shop/articles/How_to_Make_Dry_Fruit_Milkshakes_for_Instant_Energy.jpg?v=1740028615' },
    { name: 'Strawberry Banana',  image: 'https://www.momontimeout.com/wp-content/uploads/2023/01/strawberry-banana-smoothie.jpeg' },
    { name: 'Avocado Blend',  image: 'https://img.freepik.com/premium-photo/avocado-banana-smoothie-blend_996379-5305.jpg' },
  ];

  const fruitBowls = [
    { name: 'Classic Fruit Bowl', image: 'https://i0.wp.com/themealpreplife.com/wp-content/uploads/2021/03/IMG_4845.jpg?fit=2500%2C1667&ssl=1' },
    { name: 'Fruit Bowl with Honey',  image: 'https://www.yourhomebasedmom.com/wp-content/uploads/2021/03/fruit-salad-3-of-8.jpg' },
    { name: 'Tropical Bowl',  image: 'https://i0.wp.com/themealpreplife.com/wp-content/uploads/2021/03/IMG_4845.jpg?fit=2500%2C1667&ssl=1' },
    { name: 'Fruit Bowl with Dryfruits', image: 'https://www.gatheranddine.com/wp-content/uploads/2014/06/Fruit-Yogurt-Nut-Plate-3.jpg' },
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
              <Leaf className="text-[#1F9D6A]" size={32} />
              <h1 className="text-2xl font-bold text-[#1F2933]">FRUITASTY</h1>
            </div>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-[#1F2933] mb-4">FRUITASTY</h1>
          <p className="text-2xl text-[#1F9D6A] font-medium mb-4">Fresh Juices, Smoothies & Fruit Bowls</p>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Experience the pure taste of nature with our handcrafted beverages made from the freshest fruits.
            No preservatives, no artificial flavors, just pure goodness.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#1F2933] mb-8">Fresh Juices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {juices.map((item, index) => (
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
                  {/* <p className="text-3xl font-bold text-[#1F9D6A]">{item.price}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#1F2933] mb-8">Smoothies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {smoothies.map((item, index) => (
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
                  {/* <p className="text-3xl font-bold text-[#1F9D6A]">{item.price}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#1F2933] mb-8">Fruit Bowls</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {fruitBowls.map((item, index) => (
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
                  {/* <p className="text-3xl font-bold text-[#1F9D6A]">{item.price}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[#1F2933] mb-6">Why Choose FRUITASTY?</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-8">
            <div>
              <div className="text-5xl mb-4">🍊</div>
              <h3 className="font-bold text-[#1F2933] mb-2">100% Fresh</h3>
              <p className="text-[#6B7280]">Fruits sourced daily from trusted suppliers</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🥤</div>
              <h3 className="font-bold text-[#1F2933] mb-2">No Preservatives</h3>
              <p className="text-[#6B7280]">Pure and natural, just as nature intended</p>
            </div>
            <div>
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-bold text-[#1F2933] mb-2">Hygienic</h3>
              <p className="text-[#6B7280]">Prepared in clean, sanitized conditions</p>
            </div>
            <div>
              <div className="text-5xl mb-4">💚</div>
              <h3 className="font-bold text-[#1F2933] mb-2">Healthy</h3>
              <p className="text-[#6B7280]">Packed with vitamins and nutrients</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1F2933] text-white py-12">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h3 className="text-2xl font-bold mb-2">FRUITASTY</h3>
          <p className="text-white/70">Freshness Unleashed | Since 2013</p>
          <Link to="/" className="inline-block mt-6 text-[#1F9D6A] hover:text-white transition-colors">
            Back to Main Site
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Fruitasty;
