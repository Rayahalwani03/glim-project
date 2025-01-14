function Footer() {
  const currentYear = new Date().getFullYear(); //for the copyright to change

  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {currentYear} WR. All rights reserved.</p>
        </div>

        <div className="container mx-auto px-4 text-center">
          <h1 className="text-red-700 text-3xl "> WR</h1>
        </div>

        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold">Sections</h2>
          <ul>
            <li>
              <a href="/map" className="text-white hover:underline">
                Map
              </a>
            </li>
            <li>
              <a href="/donation" className="text-white hover:underline">
                Donations
              </a>
            </li>
            <li>
              <a href="/allposts" className="text-white hover:underline">
                Posts
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
