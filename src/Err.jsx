import React from "react";
import { useNavigate } from "react-router-dom";

const Err = () => {
  const navigate = useNavigate();
  return (
    <div>
      <main>
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
          <div className="max-w-lg mx-auto space-y-3 text-center">
            {/* <h1 className="text-indigo-600 font-semibold text-29xl">404 Error</h1> */}
            <img
              className="h-[20rem] w-[20rem] object-cover"
              src="/error.png"
              alt="error"
            />
            <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
              Page not found
            </p>
            <p className="text-gray-600">
              Sorry, the page you are looking for could not be found or has been
              removed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  if (window.history?.length > 1) {
                    navigate(-1);
                  } else {
                    navigate("/", { replace: true });
                  }
                }}
                className="no-underline block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg"
              >
                Go back
              </button>
              <a
                href="javascript:void(0)"
                className="no-underline block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg"
              >
                Contact support
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Err;
