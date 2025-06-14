import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#fff0f0] to-white min-h-screen">
      {/* Container */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-[#FF3E3E] mb-4">
            About <span className="text-gray-800">Us</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Satisfying cravings, one order at a time 🍕🍔🥗
          </p>
        </div>

        {/* Card Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Welcome to <span className="font-semibold text-[#FF3E3E]">FoodHouse</span> – your one-stop destination for exploring and ordering delicious meals from the best restaurants around you. Whether you're hungry for comforting classics or gourmet delicacies, we've got something for every craving.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our platform brings together a curated selection of top-rated eateries and hidden gems, making food discovery exciting and hassle-free. From fast food to healthy bites, everything is just a tap away.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed italic border-l-4 border-[#FF3E3E] pl-4">
            “Our mission is simple: to serve happiness through food and technology.”
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Designed for foodies, by foodies – <span className="font-semibold text-[#FF3E3E]">FoodHouse</span> is fast, secure, and always hungry for innovation. Let's make every meal memorable!
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
  <Link to="/top-rated">
    <button className="bg-[#FF3E3E] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#e63232] transition-all">
      Explore Our Top Rated Food 🍕🍔🥗
    </button>
  </Link>
</div>
      </div>
    </div>
  );
};

export default About;
