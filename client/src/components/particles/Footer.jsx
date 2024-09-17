import React from 'react';

const Footer = () => {
  return (
    <div className="relative bg-black text-white py-16 px-4 lg:px-16">
      {/* Botón de subir (top) */}
     
      
      {/* Contenido del footer */}
      <footer className="flex flex-wrap justify-between">
        {/* Sección de contacto */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h3 className="text-2xl font-bold mb-4">Contatti</h3>
          <div className="mb-4">
            <p>Im not a stalker u tell me,<br />8424 - Napoli Italia</p>
          </div>
          <div className="mb-4">
            <p>
              Tel: (06) XX.XX.XXX <br />
              Fax: (06) I losted your phone number :( <br />
              <a href="mailto:info@ladoganafood.com" className="text-blue-400 hover:underline">talktome@gmail.com</a>
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/ladoganafood?ref=ts&fref=ts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              {/* Icono de Facebook */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M6.93 1.19c.09-.63.26-1.27.5-1.85C8.38-.57 9.34 0 9.9.42c.51.46.62 1.17.32 1.76-.3.59-.82.97-1.44.97-.5 0-.99-.22-1.36-.6-.37.37-.85.6-1.36.6-.67 0-1.27-.56-1.27-1.25V2.35c0-.63.51-1.14 1.14-1.14.65 0 1.22.54 1.22 1.22v.95c0 .28.22.5.5.5h.95c.28 0 .5-.22.5-.5V2.08c0-.28-.22-.5-.5-.5H7.7c-.28 0-.5-.22-.5-.5zM6 0C2.69 0 0 2.69 0 6s2.69 6 6 6c1.23 0 2.41-.36 3.4-.97.68.52 1.53.97 2.6.97 2.48 0 4.5-2.02 4.5-4.5S11.48 1.5 9 1.5 6.5 3.52 6.5 6c0 .59.49 1.08 1.08 1.08.6 0 1.08-.48 1.08-1.08V6.72c0-.28.22-.5.5-.5h.95c.28 0 .5.22.5.5v.68c0 1.1-.9 2-2 2-.54 0-1.03-.19-1.42-.5-.45.31-.99.5-1.58.5-1.2 0-2.17-.97-2.17-2.17s.97-2.17 2.17-2.17c1.2 0 2.17.97 2.17 2.17v.68c0 .28.22.5.5.5h.95c.28 0 .5-.22.5-.5v-.95c0-.65-.54-1.19-1.19-1.19-1.3 0-2.34 1.05-2.34 2.34s1.05 2.34 2.34 2.34c1.29 0 2.34-1.05 2.34-2.34V6c0-2.48-2.02-4.5-4.5-4.5z" />
              </svg>
            </a>
            {/* Puedes agregar otros iconos aquí */}
          </div>
        </div>

        {/* Sección de newsletter */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
          <p className="mb-4">Iscriviti alla nostra newsletter per rimanere sempre aggiornato.</p>
          <form
            name="alo_easymail_widget_form"
            id="alo_easymail_widget_form"
            className="flex flex-col space-y-4"
            method="post"
            action
            onSubmit={(e) => {
              e.preventDefault();
              // Implement form submission here
            }}
          >
            <div className="flex space-x-4">
              <input
                type="text"
                name="alo_em_opt_name"
                id="opt_name"
                className="input-text border border-gray-300 rounded py-2 px-4 w-full"
                placeholder="Nome"
              />
              <input
                type="text"
                name="alo_em_opt_email"
                id="opt_email"
                className="input-text border border-gray-300 rounded py-2 px-4 w-full"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="alo_em_opt_auth"
                id="opt_auth"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <label htmlFor="opt_auth" className="text-sm">
                Acconsento al trattamento dei miei dati personali ai sensi della legge 196/2003 Italiana
              </label>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
              disabled
            >
              Iscriviti
            </button>
          </form>
        </div>
      </footer>

      {/* Footer inferior */}
      <div className="mt-16 text-center">
        <a href="/credits" className="text-yellow-500 hover:underline">
          Design & Web Marketing by: Stoopid Hooman <img
            src="http://www.ladoganafood.com/wp-content/themes/ladogana/img/logo_secret_key.svg"
            alt="Logo Secret Key"
            className="inline-block h-8"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
