import React from "react";

const Loading = () => {
  return (
    <>
      {" "}
      {/* <!-- Preloader --> */}
      <div className="overlay_preloader">
        <div className="flex items-center justify-center h-screen">
          <img
            src="http://www.ladoganafood.com/wp-content/themes/ladogana/img/preloader.gif"
            alt="Preloader"
          />
        </div>
        <div className="text-3xl font-bold text-red-600 underline text-center">
          Hello world!
        </div>
      </div>
    </>
  );
};

export default Loading;
