const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Todo App</h1>

        <nav>
          <ul className="flex gap-6">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Services</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            <li><a href="#" className="hover:text-blue-600">Login</a></li>
            <li><a href="#" className="hover:text-blue-600">Register</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;