function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-400 to-amber-400 text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mate</h1>
        <nav>
          <ul className="flex space-x-3">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
