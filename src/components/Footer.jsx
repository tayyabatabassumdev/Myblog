const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Postify — Made with ♥</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="/about" className="hover:text-white">
            About
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
