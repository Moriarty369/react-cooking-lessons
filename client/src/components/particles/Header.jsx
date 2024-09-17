import React from "react";

const Header = () => {
  return (
    <header className="header hidden md:flex items-center justify-between py-4">
      <div className="flex items-right justify-around w-full">
        {/* <!-- OJO FALTA Logo --> */}
        <div className="logo">
          {/* <!-- <a href="http://www.ladoganafood.com"><img src="http://www.ladoganafood.com/wp-content/themes/ladogana/img/logo_dogana.svg" alt="Logo La Dogana" /></a> --> */}
        </div>



        {/* <!-- Navigation --> */}
        <nav className="flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.instagram.com/alessandra_villani/"
                className="hover:underline"
              >
                Il Mio Blog di Cucina
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/alessandra_villani/"
                className="hover:underline"
              >
                Lezioni di Cucina
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/alessandra_villani/"
                className="hover:underline"
              >
                Ristoranti Dove Puoi Trovarmi
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/alessandra_villani/"
                className="hover:underline"
              >
                Eventi
              </a>
            </li>
          </ul>
       
        </nav>
      </div>
    </header>
  );
};

export default Header;
