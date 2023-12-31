import React from "react";
import sizepopup from "../../Assets/sizepopup.png";

interface SizePopupProps {
  sizePopupOpen: boolean;
  setSizePopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SizePopup: React.FC<SizePopupProps> = ({
  sizePopupOpen,
  setSizePopupOpen,
}) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        sizePopupOpen ? "" : "hidden"
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="relative bg-white shadow-lg lg:w-1/2">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={() => {
            setSizePopupOpen(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-4">
          <img src={sizepopup} alt="sizepopup" className="lg:w-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default SizePopup;
