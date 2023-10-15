import axios from "axios";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface RequestPopupProps {
  requestPopupOpen: boolean;
  setRequestPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RequestPopup: React.FC<RequestPopupProps> = ({
  requestPopupOpen,
  setRequestPopupOpen,
}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [breast, setBreast] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [height, setHeight] = useState("");

  const handleSend = () => {
    axios
      .post("https://35.228.109.35:5001/contact", {
        name,
        number,
        email,
        breast,
        waist,
        hips,
        height,
      })
      .then((response) => {
        console.log(response);
        toast.success("Ваш запит успішно відправлено!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <ToastContainer />
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 ${
          requestPopupOpen ? "" : "hidden"
        }`}
      >
        <div className="fixed inset-0 bg-black opacity-50"></div>

        <div className="relative bg-white shadow-lg lg:w-1/2">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            onClick={() => {
              setRequestPopupOpen(false);
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
            <div className="flex justify-center flex-col lg:flex-row">
              <div className="flex flex-col">
                <label htmlFor="breast">Вкажіть заміри по грудям</label>
                <input
                  className="border-[1px] border-black py-2 px-4"
                  type="text"
                  id="breast"
                  name="breast"
                  onChange={(e) => setBreast(e.target.value)}
                />
                <label htmlFor="hips">Вкажіть заміри талії</label>
                <input
                  className="border-[1px] border-black py-2 px-4"
                  type="text"
                  id="waist"
                  name="waist"
                  onChange={(e) => setWaist(e.target.value)}
                />
                <label htmlFor="hips">Вкажіть заміри по стегнам</label>
                <input
                  className="border-[1px] border-black py-2 px-4"
                  type="text"
                  id="hips"
                  name="hips"
                  onChange={(e) => setHips(e.target.value)}
                />
                <label htmlFor="height">Вкажіть ваш зріст</label>
                <input
                  className="border-[1px] border-black py-2 px-4"
                  type="text"
                  id="height"
                  name="height"
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="flex flex-col lg:ml-8">
                <label htmlFor="name">Ім'я</label>
                <input
                  className="border-[1px] border-black py-2 px-4"
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">Номер телефону</label>
                <input
                  className="border-[1px] border-black py-2 px-4"
                  type="text"
                  id="number"
                  name="number"
                  onChange={(e) => setNumber(e.target.value)}
                />
                <label htmlFor="name">Електронна пошта</label>
                <input
                  className="border-[1px] border-black py-2 px-4"
                  type="text"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={handleSend}
                  className="mb-5 bg-white border-[1px] border-black text-black font-roboto text-[20px] p-2 mt-2"
                >
                  ЗАМОВИТИ КОНСУЛЬТАЦІЮ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestPopup;
