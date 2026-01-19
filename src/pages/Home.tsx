import { ArrowRight, Leaf, Users, TrendingUp, Phone, Globe } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import Gallery from "../components/Gallery";


function Home() {
  return (
    <div className="bg-[#CFF5E7] min-h-screen">
      <section className="container mx-auto px-6 pt-20 pb-32 max-w-7xl">
        <div className="text-center animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-bold text-[#1F2933] mb-6 tracking-tight">
            FRUITASTY
          </h1>
          <p className="text-2xl md:text-3xl text-[#1F9D6A] font-medium mb-4 tracking-wide">
            Juices • Smoothies • Waffles • Burgers • Café
          </p>
          <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto mb-12">
            A modern pure-veg fresh food & beverage ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#brands"
              className="bg-[#1F9D6A] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#178555] transition-all hover:shadow-lg inline-flex items-center gap-2"
            >
              Explore Brands <ArrowRight size={20} />
            </a>
            <a
              href="#franchise"
              className="bg-white text-[#1F9D6A] px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg transition-all border-2 border-[#1F9D6A]"
            >
              Franchise Opportunity
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-5xl font-bold text-[#1F2933] mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-lg text-[#6B7280] leading-relaxed">
            <p>
              Founded in 2013 in Adilabad, FRUITASTY began with a vision to deliver
              fresh, hygienic, and healthy fruit-based beverages.
            </p>
            <p>
              From sugarcane juice to a scalable pure-veg QSR ecosystem,
              FRUITASTY has evolved into a future-ready multi-brand food business.
            </p>
          </div>
        </div>
      </section>

      <section id="brands" className="py-24 container mx-auto px-6 max-w-7xl">
        <h2 className="text-5xl font-bold text-[#1F2933] mb-4 text-center">One Brand. Three Experiences.</h2>
        <p className="text-xl text-[#6B7280] mb-16 text-center">The FRUITASTY Ecosystem</p>

        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/fruitasty" className="bg-white p-10 rounded-2xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group">
            <div className="w-16 h-16 bg-[#1F9D6A] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Leaf className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-[#1F2933] mb-3">FRUITASTY</h3>
            <p className="text-[#6B7280] mb-4 leading-relaxed">
              Fresh juices, smoothies & fruit bowls
            </p>
            <p className="text-[#1F9D6A] font-bold text-xl">Contribution: 40%</p>
            <div className="mt-6 text-[#1F9D6A] group-hover:gap-3 flex items-center gap-2 transition-all">
              View Menu <ArrowRight size={20} />
            </div>
          </Link>

          <Link to="/yumyumwaffles" className="bg-white p-10 rounded-2xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group">
            <div className="w-16 h-16 bg-[#F4B400] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-white text-3xl">🧇</span>
            </div>
            <h3 className="text-3xl font-bold text-[#1F2933] mb-3">YUM YUM WAFFLES</h3>
            <p className="text-[#6B7280] mb-4 leading-relaxed">
              Indulgent waffles, desserts & shakes
            </p>
            <p className="text-[#F4B400] font-bold text-xl">Contribution: 30%</p>
            <div className="mt-6 text-[#F4B400] group-hover:gap-3 flex items-center gap-2 transition-all">
              View Menu <ArrowRight size={20} />
            </div>
          </Link>

          <Link to="/burgerz" className="bg-white p-10 rounded-2xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group">
            <div className="w-16 h-16 bg-[#1F9D6A] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-white text-3xl">🍔</span>
            </div>
            <h3 className="text-3xl font-bold text-[#1F2933] mb-3">BURGERZ</h3>
            <p className="text-[#6B7280] mb-4 leading-relaxed">
              Pure veg burgers, fries & combos
            </p>
            <p className="text-[#1F9D6A] font-bold text-xl">Contribution: 30%</p>
            <div className="mt-6 text-[#1F9D6A] group-hover:gap-3 flex items-center gap-2 transition-all">
              View Menu <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-5xl font-bold text-[#1F2933] mb-16 text-center">Why This Model Works</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-[#1F9D6A] mb-4">3 Brands</div>
              <div className="text-6xl font-bold text-[#1F9D6A] mb-4">1 Kitchen</div>
              <div className="text-6xl font-bold text-[#1F9D6A] mb-4">1 Rent</div>
              <div className="text-6xl font-bold text-[#1F9D6A]">1 Team</div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#1F9D6A] rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">✓</div>
                <p className="text-lg text-[#6B7280]">Lower operational cost</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#1F9D6A] rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">✓</div>
                <p className="text-lg text-[#6B7280]">Shared staff & infrastructure</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#1F9D6A] rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">✓</div>
                <p className="text-lg text-[#6B7280]">Balanced daily sales</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#1F9D6A] rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">✓</div>
                <p className="text-lg text-[#6B7280]">Recession-resilient model</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#1F9D6A] rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">✓</div>
                <p className="text-lg text-[#6B7280]">Ideal for new & experienced entrepreneurs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6 max-w-6xl">
        <h2 className="text-5xl font-bold text-[#1F2933] mb-16 text-center">Signature Menu Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-5xl">
              🥤
            </div>
            <h3 className="font-bold text-[#1F2933] text-lg">Fresh Juices</h3>
            <p className="text-[#F4B400] font-bold mt-2">₹40 - ₹80</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-5xl">
              🥤
            </div>
            <h3 className="font-bold text-[#1F2933] text-lg">Smoothies</h3>
            <p className="text-[#F4B400] font-bold mt-2">₹60 - ₹100</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-5xl">
              🧇
            </div>
            <h3 className="font-bold text-[#1F2933] text-lg">Waffles</h3>
            <p className="text-[#F4B400] font-bold mt-2">₹80 - ₹150</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-5xl">
              🥛
            </div>
            <h3 className="font-bold text-[#1F2933] text-lg">Shakes</h3>
            <p className="text-[#F4B400] font-bold mt-2">₹70 - ₹120</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-5xl">
              🍔
            </div>
            <h3 className="font-bold text-[#1F2933] text-lg">Burgers</h3>
            <p className="text-[#F4B400] font-bold mt-2">₹60 - ₹140</p>
          </div>
        </div>
      </section>

        {/* Gallery Section */}
      <Gallery />

      <section id="franchise" className="bg-white py-24">

      <section id="franchise" className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-5xl font-bold text-[#1F2933] mb-4 text-center">Franchise with FRUITASTY</h2>
          <p className="text-xl text-[#6B7280] mb-16 text-center">Your path to entrepreneurship starts here</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#CFF5E7] p-10 rounded-2xl">
              <h3 className="text-3xl font-bold text-[#1F2933] mb-8">Investment</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[#6B7280] mb-1">Total Investment</p>
                  <p className="text-3xl font-bold text-[#1F9D6A]">₹3.5 Lakhs</p>
                </div>
                <div>
                  <p className="text-[#6B7280] mb-1">Franchise Fee (One-Time)</p>
                  <p className="text-2xl font-bold text-[#1F2933]">₹50,000</p>
                </div>
                <div>
                  <p className="text-[#6B7280] mb-1">Equipment & Kit</p>
                  <p className="text-2xl font-bold text-[#1F2933]">₹3,00,000</p>
                </div>
                <div className="pt-4 border-t-2 border-[#1F9D6A]">
                  <p className="text-[#6B7280] mb-1">Royalty</p>
                  <p className="text-2xl font-bold text-[#1F9D6A]">0% – Forever</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1F9D6A] p-10 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-8">Returns</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-white/80 mb-1">Daily Sales</p>
                  <p className="text-2xl font-bold">₹6,000 – ₹8,000</p>
                </div>
                <div>
                  <p className="text-white/80 mb-1">Monthly Revenue</p>
                  <p className="text-2xl font-bold">₹1.8L – ₹2.4L</p>
                </div>
                <div>
                  <p className="text-white/80 mb-1">Net Profit/Month</p>
                  <p className="text-2xl font-bold">₹45,000 – ₹90,000</p>
                </div>
                <div>
                  <p className="text-white/80 mb-1">Break-even</p>
                  <p className="text-2xl font-bold">4–8 Months</p>
                </div>
                <div className="pt-4 border-t-2 border-white/30">
                  <p className="text-white/80 mb-1">Annual Profit</p>
                  <p className="text-3xl font-bold">₹5.5L – ₹10L</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-[#6B7280] mt-8 text-center max-w-3xl mx-auto">
            * Returns are indicative and may vary based on location, operations, and market conditions.
            Actual results depend on multiple factors including foot traffic, marketing, and management efficiency.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#CFF5E7]">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-[#1F2933] mb-8">Available on</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-4xl font-bold text-[#1F9D6A]">Swiggy</div>
            <div className="text-4xl font-bold text-[#1F9D6A]">Zomato</div>
            <div className="text-4xl font-bold text-[#1F9D6A]">Magicpin</div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-[#1F2933] leading-tight">
            "Building India's most trusted pure-veg fresh food lifestyle brand."
          </h2>
        </div>
      </section>

      <footer className="bg-[#1F2933] text-white py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">FRUITASTY</h3>
              <p className="text-white/70">Freshness Unleashed</p>
              <p className="text-white/70 mt-2">Since 2013</p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Our Brands</h4>
              <div className="space-y-2">
                <Link to="/fruitasty" className="block text-white/70 hover:text-white transition-colors">FRUITASTY</Link>
                <Link to="/yumyumwaffles" className="block text-white/70 hover:text-white transition-colors">YUM YUM WAFFLES</Link>
                <Link to="/burgerz" className="block text-white/70 hover:text-white transition-colors">BURGERZ</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white/70">
                  <Phone size={18} />
                  <span>72 2189 2189</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Globe size={18} />
                  <a href="http://www.fruitasty.in" className="hover:text-white transition-colors">www.fruitasty.in</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/50 text-sm">
            <p>© 2024 FRUITASTY. All rights reserved. | Pure-Veg Multi-Brand QSR</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
