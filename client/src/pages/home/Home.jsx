import React from "react";

import { useNavigate } from "react-router-dom";

import "./Home.css";
import Header from "../../components/particles/Header";
import Slider from "../../components/particles/Slider";
import ParallaxSection from "../../components/particles/ParallaxSection";
import Footer
 from "../../components/particles/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <ParallaxSection />

      <div className="relative bg-cover bg-center min-h-screen img-ctn">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4">Parti per un viaggio</h2>
            <h2 className="text-4xl font-bold">NEI SAPORI DI NAPOLI</h2>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="bg-white relative py-16 px-4 md:px-16">
        {/* <!-- START row --> */}
        <div className="flex flex-wrap h-full">
          {/* <!-- Primera columna --> */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left mb-8 md:mb-0 animate__animated animate__fadeInRight">
            <div className="mb-6">
              <h2 className="text-4xl font-bold mb-2">Le nostre</h2>
              <h2 className="text-4xl font-bold mb-2">
                Lezioni di Cucina a Napoli
              </h2>
              <span className="block w-16 h-1 bg-black mx-auto mt-2"></span>
            </div>
            <div className="mb-6">
              Scopri l'arte della cucina napoletana con le nostre lezioni
              pratiche. Dai piatti iconici come la pizza napoletana e la pasta
              al ragù, fino a dolci tradizionali come la sfogliatella. Imparerai
              i segreti che rendono questa cucina famosa in tutto il mondo.
              Un'esperienza culinaria che stimola il palato e accende la
              passione per la gastronomia autentica.
            </div>
            <a
              className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
              href="lezioni-cucina-napoli/"
            >
              Scopri di più
            </a>
          </div>

          {/* <!-- Segunda columna --> */}
          <div className="w-full md:w-1/2 flex justify-center animate__animated animate__fadeInLeft">
            <div className="flex flex-wrap justify-between">
              {/* <!-- 2 / 4 fotos --> */}
              <figure className="w-1/2 p-1">
                <a data-size="800x800">
                  <img
                    src="http://www.ladoganafood.com/wp-content/uploads/2022/01/gamberetti-agrodolce-250x250.jpg"
                    alt="Imagen 1"
                    className="w-full h-auto"
                  />
                </a>
              </figure>
              <figure className="w-1/2 p-1">
                <a
                  href="http://www.ladoganafood.com/wp-content/uploads/2022/01/gamberetti-agrodolce-250x250.jpg"
                  data-size="800x800"
                >
                  <img
                    src="http://www.ladoganafood.com/wp-content/uploads/2022/01/gamberetti-agrodolce-250x250.jpg"
                    alt="Imagen 2"
                    className="w-full h-auto"
                  />
                </a>
              </figure>
              <figure className="w-1/2 p-1">
                <a
                  href="http://www.ladoganafood.com/wp-content/uploads/2022/01/pollo-curry-rosso-250x250.jpg"
                  data-size="800x800"
                >
                  <img
                    src="http://www.ladoganafood.com/wp-content/uploads/2022/01/pollo-curry-rosso-250x250.jpg"
                    alt="Imagen 3"
                    className="w-full h-auto"
                  />
                </a>
              </figure>
              <figure className="w-1/2 p-1">
                <a
                  href="http://www.ladoganafood.com/wp-content/uploads/2022/01/ali-di-pollo-croccanti-250x250.jpg"
                  data-size="800x800"
                >
                  <img
                    src="http://www.ladoganafood.com/wp-content/uploads/2022/01/ali-di-pollo-croccanti-250x250.jpg"
                    alt="Imagen 4"
                    className="w-full h-auto"
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>
        {/* <!-- END row --> */}
      </div>

      <div className="relative bg-cover bg-center min-h-screen amore">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-2">L'amore per</h2>
            <h2 className="text-4xl font-bold">la Cucina</h2>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* <!-- START Container location section--> */}
      <div className="relative bg-white z-10 py-16 px-4 md:px-16">
    {/* <!-- START row --> */}
    <div className="flex flex-wrap h-full">
        {/* <!-- Primera columna --> */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left mb-8 md:mb-0 animate__animated animate__fadeInLeft">
            <div className="mb-6">
                <h2 className="text-4xl font-bold mb-2">Dove siamo</h2>
                <h2 className="text-4xl font-bold mb-2">Napoli</h2>
                <span className="block w-16 h-1 bg-black mx-auto mt-2"></span>
            </div>
            <div className="mb-6">
                Il nostro corso di cucina si trova nel cuore di Napoli, la città simbolo
                della tradizione culinaria italiana. Impara a cucinare i piatti più
                iconici, come la pizza napoletana e la pasta al ragù, in una delle
                capitali gastronomiche del mondo. Che tu sia un principiante o un
                appassionato, le nostre lezioni ti faranno vivere un'esperienza
                indimenticabile, stimolando il tuo amore per la cucina.
            </div>
            <a className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600" href="dove-siamo/">Scopri di più</a>
        </div>
{/*         
        <!-- Segunda columna --> */}
        <div className="w-full md:w-1/2 flex justify-center items-center animate__animated animate__fadeInRight">
            <div className="flex flex-wrap justify-center space-x-4">
                {/* <!-- 2 / 4 fotos --> */}
                <figure className="w-1/2 p-1">
                    <a href="./img/napoli.png" data-size="490x762">
                        <img src="./home/napoli.png" alt="Napoli Image 1" className="w-full h-auto"/>
                    </a>
                </figure>
                
            </div>
        </div>
    </div>
    {/* <!-- END row --> */}
</div>

      {/* <!-- END Container location section--> */}
      <Footer />
    </>
  );
};

export default Home;
