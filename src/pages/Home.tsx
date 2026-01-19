import { ArrowRight, Leaf, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <div className="bg-[#CFF5E7] min-h-screen">

      {/* HERO SECTION */}
      <section className="container mx-auto px-6 pt-20 pb-32 max-w-7xl">
        <div className="text-center animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-bold text-[#1F2933] mb-6">
            FRUITASTY
          </h1>
          <p className="text-2xl md:text-3xl text-[#1F9D6A] mb-4">
            Juices • Smoothies • Waffles • Burgers • Café
          </p>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto mb-12">
            A modern pure-veg fresh food & beverage ecosystem.
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href="#brands"
              className="bg-[#1F9D6A] text-white px-8 py-4 rounded-lg flex items-center gap-2"
            >
              Explore Brands <ArrowRight size={20} />
            </a>
            <a
              href="#franchise"
              className="bg-white text-[#1F9D6A] px-8 py-4 rounded-lg border-2 border-[#1F9D6A]"
            >
              Franchise Opportunity
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-5xl font-bold mb-8">Our Story</h2>
          <p className="text-lg text-gray-600">
            Founded in 2013 in Adilabad, FRUITASTY delivers fresh,
            hygienic, and healthy food experiences.
          </p>
        </div>
      </section>

      {/* BRANDS */}
      <section id="brands" className="py-24 container mx-auto px-6 max-w-7xl">
        <h2 className="text-5xl font-bold text-center mb-16">
          One Brand. Three Experiences.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/fruitasty" className="bg-white p-10 rounded-2xl">
            <Leaf size={40} className="text-[#1F9D6A] mb-4" />
            <h3 className="text-3xl font-bold">FRUITASTY</h3>
          </Link>

          <Link to="/yumyumwaffles" className="bg-white p-10 rounded-2xl">
            <span className="text-4xl">🧇</span>
            <h3 className="text-3xl font-bold mt-4">YUM YUM WAFFLES</h3>
          </Link>

          <Link to="/burgerz" className="bg-white p-10 rounded-2xl">
            <span className="text-4xl">🍔</span>
            <h3 className="text-3xl font-bold mt-4">BURGERZ</h3>
          </Link>
        </div>
      </section>

      {/* SIGNATURE MENU */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-5xl font-bold mb-16">Signature Menu Highlights</h2>
      </section>

      {/* ✅ GALLERY SECTION */}
      <Gallery />

      {/* FRANCHISE */}
      <section id="franchise" className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-5xl font-bold mb-6">
            Franchise with FRUITASTY
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Your path to entrepreneurship starts here
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#CFF5E7] p-10 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">Investment</h3>
              <p className="text-2xl font-bold text-[#1F9D6A]">₹3.5 Lakhs</p>
            </div>

            <div className="bg-[#1F9D6A] p-10 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">Returns</h3>
              <p className="text-xl">₹45,000 – ₹90,000 / month</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1F2933] text-white py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-bold">FRUITASTY</h3>
            <p className="text-white/70">Freshness Unleashed</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Our Brands</h4>
            <Link to="/fruitasty">FRUITASTY</Link><br />
            <Link to="/yumyumwaffles">YUM YUM WAFFLES</Link><br />
            <Link to="/burgerz">BURGERZ</Link>
          </div>

          <div>
            <div className="flex gap-2">
              <Phone size={18} /> 72 2189 2189
            </div>
            <div className="flex gap-2 mt-2">
              <Globe size={18} />
              <a href="http://www.fruitasty.in">www.fruitasty.in</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;
