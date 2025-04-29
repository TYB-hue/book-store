'use client';
import { FaBookOpen, FaUsers, FaGlobe, FaHeart } from 'react-icons/fa';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
const AboutPage = () => {
  const features = [
    {
      icon: <FaBookOpen className="text-purple-500 text-4xl" />,
      title: "Curated Collection",
      description: "Thousands of carefully selected titles across all genres"
    },
    {
      icon: <FaUsers className="text-purple-500 text-4xl" />,
      title: "Community Focused",
      description: "Supporting local authors and independent publishers"
    },
    {
      icon: <FaGlobe className="text-purple-500 text-4xl" />,
      title: "Global Reach",
      description: "Shipping worldwide with eco-friendly packaging"
    },
    {
      icon: <FaHeart className="text-purple-500 text-4xl" />,
      title: "Passionate Team",
      description: "Book lovers dedicated to your reading experience"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Component */}
      <Navbar />
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-900/50 to-black">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            KUTTOB4U was born from a shared love of books and a desire to create a welcoming space for readers everywhere.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-zinc-900 rounded-xl p-8 md:p-12 border border-purple-900/50">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To connect readers with stories that inspire, educate, and entertain while supporting authors and the literary community.
            </p>
            <p className="text-gray-300">
              Since our founding in 2020, we&apos;ve grown from a small online bookstore to a thriving community of book lovers, 
              but our core values remain the same: quality, diversity, and accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-zinc-900 rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gradient-to-t from-purple-900/50 to-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-400 mb-12">Meet The Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Our dedicated team of book enthusiasts is here to help you find your next favorite read.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded hover:opacity-80 transition-opacity duration-300">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default AboutPage;