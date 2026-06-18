function Header() {
  return (
    <header className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">
          SLA
        </div>

        <h1 className="text-2xl font-bold">
          SLA Institute
        </h1>
      </div>

      <nav>
        <ul className="flex gap-6 font-medium">
          <li className="cursor-pointer hover:text-gray-200">Home</li>
          <li className="cursor-pointer hover:text-gray-200">About</li>
          <li className="cursor-pointer hover:text-gray-200">Services</li>
          <li className="cursor-pointer hover:text-gray-200">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;