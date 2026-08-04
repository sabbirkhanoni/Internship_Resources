const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-white">MyWebsite</h2>
            <p className="mt-4 text-sm">
              We build modern and responsive web applications using React and
              Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Services
            </h3>

            <ul className="space-y-2">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Contact
            </h3>

            <p>Email: info@example.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;