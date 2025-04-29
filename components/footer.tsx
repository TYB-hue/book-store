'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaBookOpen } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { title: 'About Us', links: ['Our Story', 'Impact', 'Team', 'Careers'] },
    { title: 'Resources', links: ['Blog', 'Guides', 'Help Center', 'Community'] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
  ];

  const socialLinks = [
    { icon: <FaFacebook className="text-xl" />, url: '#' },
    { icon: <FaTwitter className="text-xl" />, url: '#' },
    { icon: <FaInstagram className="text-xl" />, url: '#' },
    { icon: <FaYoutube className="text-xl" />, url: '#' },
  ];

  return (
    <footer className="bg-black text-white border-t border-zinc-800">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <FaBookOpen className="text-purple-500 text-2xl" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                KUTTOB4U
              </span>
            </div>
            <p className="text-zinc-400 mb-6">
              Your gateway to endless stories and knowledge. Connecting readers worldwide with quality books.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="text-zinc-400 hover:text-purple-500 transition-colors duration-300"
                  aria-label={social.url.replace('#', '')}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {links.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-500">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      className="text-zinc-400 hover:text-purple-300 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-500">Stay Updated</h3>
            <p className="text-zinc-400 text-sm">
              Subscribe to our newsletter for the latest books and promotions.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {currentYear} KUTTOB4U. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-zinc-500 hover:text-purple-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-purple-300 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-purple-300 text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}