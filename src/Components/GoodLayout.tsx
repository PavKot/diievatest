import React from "react";
import { IoIosResize } from "react-icons/io";
import { useState, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import greencol from "../Assets/greencol.png";
import good1_1 from "../Assets/good1_1.png";
import good1_2 from "../Assets/good1_2.png";
import good1_3 from "../Assets/good1_3.png";
import good1_4 from "../Assets/good1_4.png";
import good1_5 from "../Assets/good1_5.png";
import ProductCard from "./ProductCard";
import productData from "../Data/Data";
import SizePopup from "./Popups/SizePopup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Cart";
import RequestPopup from "./Popups/RequestPopup";
declare const fbq: any;

interface Product {
  name: string;
  price: string;
  image: string;
  imageHover: string;
  link: string;
  type: string;
}

interface Props {
  name: string;
  price: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  path: string;
  addToCart: (item: any) => void;
  setCart?: (cart: any) => void;
  cart?: any;
  toggleCart?: () => void;
  colorImg?: string;
  color2Img?: string;
  color2Name?: string;
  color2Link?: string;
  colorName?: string;
  details1Name?: string;
  details1Desc?: string;
  details2First?: string;
  details2Second?: string;
  details2Third?: string;
  details3First?: string;
  details4First?: string;
}
const GoodLayout: React.FC<Props> = ({
  name,
  price,
  image1,
  image2,
  image3,
  image4,
  image5,
  path,
  colorImg,
  color2Img,
  color2Name,
  color2Link,
  colorName,
  addToCart,
  details1Name,
  details1Desc,
  details2First,
  details2Second,
  details2Third,
  details3First,
  details4First,
}: Props) => {
  const product: Product = productData.product1;
  const randomProductIndex = Math.floor(Math.random() * 19) + 1;
  const randomProductIndex2 = Math.floor(Math.random() * 19) + 1;
  const randomProductIndex3 = Math.floor(Math.random() * 19) + 1;
  const randomProduct: Product =
    productData[`product${randomProductIndex}` as keyof typeof productData];
  const randomProduct2: Product =
    productData[`product${randomProductIndex2}` as keyof typeof productData];
  const randomProduct3: Product =
    productData[`product${randomProductIndex3}` as keyof typeof productData];
  const [accordion1Open, setAccordion1Open] = useState(false);
  const [accordion2Open, setAccordion2Open] = useState(false);
  const [accordion3Open, setAccordion3Open] = useState(false);
  const [accordion4Open, setAccordion4Open] = useState(false);
  const [selectedSize, setSelectedSize] = useState("XS");
  const [sizePopupOpen, setSizePopupOpen] = useState(false);
  const [requestPopupOpen, setRequestPopupOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
    console.log("opened");
  };

  const toggleAccordion1 = () => {
    setAccordion1Open(!accordion1Open);
  };

  const toggleAccordion2 = () => {
    setAccordion2Open(!accordion2Open);
  };

  const toggleAccordion3 = () => {
    setAccordion3Open(!accordion3Open);
  };

  const toggleAccordion4 = () => {
    setAccordion4Open(!accordion4Open);
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <>
      <Cart isOpen={isOpen} toggleCart={toggleCart} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <SizePopup
        sizePopupOpen={sizePopupOpen}
        setSizePopupOpen={setSizePopupOpen}
      />
      <RequestPopup
        requestPopupOpen={requestPopupOpen}
        setRequestPopupOpen={setRequestPopupOpen}
      />
      <div className="flex justify-between container mx-auto">
        <div className="p-5 lg:p-0">
          <p className="text-[#7B7B7B] font-roboto text-[14px]">{path}</p>
        </div>
      </div>
      <div className="flex container mx-auto gap-5 flex-col lg:flex-row">
        <div className="flex flex-col">
          <div className="flex items-center flex-col lg:flex-row">
            <img src={image1} alt="Спідниця міді з асемитричним розрізом" />
            <img src={image2} alt="Спідниця міді з асемитричним розрізом" />
          </div>
          <div className="flex items-center flex-col lg:flex-row">
            <img src={image3} alt="Спідниця міді з асемитричним розрізом" />
            <img src={image4} alt="Спідниця міді з асемитричним розрізом" />
            {image5 != "none" && (
              <img src={image5} alt="Спідниця міді з асемитричним розрізом" />
            )}
          </div>
        </div>
        <div className="max-w-[500px] p-5 lg:p-0">
          <h1 className="font-roboto font-bold text-[24px]">{name}</h1>
          <h1 className="font-roboto font-bold text-[24px] pt-[35px]">
            {price} UAH
          </h1>
          <div className="line w-100% h-[1px] bg-[#BFBFBF] mt-[20px]"></div>
          <button onClick={() => setSizePopupOpen(!sizePopupOpen)}>
            <p className="text-[#7B7B7B] font-roboto text-[14px] flex items-center gap-3 pt-[30px]">
              <IoIosResize className="text-[24px]" />
              Розмірна сітка
            </p>
          </button>
          <div className="flex gap-5 mt-[15px]">
            <button
              className={`border-2 px-[20px] py-[5px] border-black font-bold ${
                selectedSize === "XS" ? "bg-black text-white" : ""
              }`}
              onClick={() => handleSizeClick("XS")}
            >
              XS
            </button>
            <button
              className={`border-2 px-[20px] py-[5px] border-black font-bold ${
                selectedSize === "S" ? "bg-black text-white" : ""
              }`}
              onClick={() => handleSizeClick("S")}
            >
              S
            </button>
            <button
              className={`border-2 px-[20px] py-[5px] border-black font-bold ${
                selectedSize === "M" ? "bg-black text-white" : ""
              }`}
              onClick={() => handleSizeClick("M")}
            >
              M
            </button>
            <button
              className={`border-2 px-[20px] py-[5px] border-black font-bold ${
                selectedSize === "L" ? "bg-black text-white" : ""
              }`}
              onClick={() => handleSizeClick("L")}
            >
              L
            </button>
          </div>
          <div className="pt-[32px]">
            <p className="font-bold roboto text-[16px]">
              Індивідуальне коригування розміру по вашим параметрам
            </p>
            <p className="roboto text-[16px] text-[#7B7B7B]">
              *Відбувається після попереднього замовлення. Виготовлення 7 - 10
              робочих днів
            </p>
            <button
              onClick={() => {
                setRequestPopupOpen(true);
              }}
              className="mt-[4px] w-full border-2 px-[20px] py-[10px] border-black"
            >
              Зробити запит
            </button>
          </div>
          <div className="p-[15px] bg-[#F5F5F5] w-full mt-[50px]">
            <p className="font-bold roboto text-[16px]">Колір</p>
            <div className="flex gap-4">
              <div className="flex items-start flex-col justify-center">
                <button className="mt-[4px] border-2 px-[5px] py-[5px] border-black">
                  <img src={colorImg} alt={colorName} />
                </button>
                <p className=" roboto text-[14px] text-[#7B7B7B]">
                  {colorName}
                </p>
              </div>

              {color2Img && (
                <div className="flex items-start flex-col justify-center">
                  <a href={color2Link}>
                    <button className="mt-[4px] border-2 px-[5px] py-[5px] border-black">
                      <img src={color2Img} alt={color2Name} />
                    </button>
                  </a>
                  <p className=" roboto text-[14px] text-[#7B7B7B]">
                    {color2Name}
                  </p>
                </div>
              )}
            </div>
            <p className="roboto text-[16px] text-[#7B7B7B]">Є в наявності</p>
          </div>
          <button
            onClick={() => {
              addToCart({
                name,
                price,
                image1,
                image2,
                image3,
                image4,
                selectedSize,
              });
              /* black friday -13%
              addToCart({
                name,
                price: (parseInt(price) * 0.87).toString(),
                image1,
                image2,
                image3,
                image4,
                selectedSize,
              });
              */
              toast.success("Товар додано до кошика");
              toggleCart();
              fbq("track", "AddToCart");
              /*
              setTimeout(() => {
                window.location.reload();
              }, 2000);
              */
            }}
            className="mt-[4px] w-full px-[20px] py-[15px] bg-[#333333] text-white mt-[32px]"
          >
            В кошик
          </button>
          <p className="roboto text-[16px] text-[#7B7B7B] pt-[10px]">
            Відправлення 3-5 робочих днів
          </p>
        </div>
      </div>
      <div className="mt-[40px] container mx-auto p-5 lg:p-0">
        <div className="container mx-auto flex justify-between">
          <h2 className="roboto text-[20px] font-bold uppercase">
            Деталі товару
          </h2>
          <button onClick={toggleAccordion1}>
            {accordion1Open ? (
              <SlArrowUp className="text-[24px]" />
            ) : (
              <SlArrowDown className="text-[24px]" />
            )}
          </button>
        </div>
        <div className="line w-100% h-[1px] bg-[#BFBFBF] mt-[20px] mb-[20px]"></div>
        {accordion1Open && (
          <div>
            <p className="font-bold font-roboto text-[16px]">{details1Name}</p>
            <p className="font-roboto text-[16px] max-w-[850px] pt-2 pb-2">
              {details1Desc}
            </p>
          </div>
        )}
        <div className="container mx-auto flex justify-between">
          <h2 className="roboto text-[20px] font-bold uppercase">
            Склад виробу
          </h2>
          <button onClick={toggleAccordion2}>
            {accordion2Open ? (
              <SlArrowUp className="text-[24px]" />
            ) : (
              <SlArrowDown className="text-[24px]" />
            )}
          </button>
        </div>
        <div className="line w-100% h-[1px] bg-[#BFBFBF] mt-[20px] mb-[20px]"></div>
        {accordion2Open && (
          <div>
            <p className="font-bold font-roboto text-[16px] pb-2">
              {details2First}
            </p>
            <p className="font-bold font-roboto text-[16px] py-2">
              {details2Second}
            </p>
            <p className="font-bold font-roboto text-[16px] py-2">
              {details2Third}
            </p>
          </div>
        )}

        {details3First != "none" && (
          <>
            <div className="container mx-auto flex justify-between">
              <h2 className="roboto text-[20px] font-bold uppercase">
                Склад НИТОК ДЛЯ ВИШИВКИ
              </h2>
              <button onClick={toggleAccordion3}>
                {accordion3Open ? (
                  <SlArrowUp className="text-[24px]" />
                ) : (
                  <SlArrowDown className="text-[24px]" />
                )}
              </button>
            </div>
            <div className="line w-100% h-[1px] bg-[#BFBFBF] mt-[20px] mb-[20px]"></div>
            {accordion3Open && (
              <div>
                <p className="font-bold font-roboto text-[16px] pb-2">
                  {details3First}
                </p>
              </div>
            )}
          </>
        )}
        {details4First != "none" && (
          <>
            <div className="container mx-auto flex justify-between">
              <h2 className="roboto text-[20px] font-bold uppercase">
                ПІДКЛАД
              </h2>
              <button onClick={toggleAccordion4}>
                {accordion4Open ? (
                  <SlArrowUp className="text-[24px]" />
                ) : (
                  <SlArrowDown className="text-[24px]" />
                )}
              </button>
            </div>
            <div className="line w-100% h-[1px] bg-[#BFBFBF] mt-[20px] mb-[20px]"></div>
            {accordion4Open && (
              <div>
                <p className="font-bold font-roboto text-[16px] pb-2">
                  {details4First}
                </p>
              </div>
            )}
          </>
        )}
      </div>
      <div className="container mx-auto lg:pb-[100px] p-5 lg:p-0 lg:pt-10">
        <h2 className="text-[20px] roboto">Вас може зацікавити</h2>
        <div className="flex flex-col lg:flex-row justify-between pt-2">
          <ProductCard
            name={randomProduct.name}
            price={randomProduct.price}
            image={randomProduct.image}
            imageHover={randomProduct.imageHover}
            link={randomProduct.link}
            type={randomProduct.type}
          />
          <ProductCard
            name={randomProduct2.name}
            price={randomProduct2.price}
            image={randomProduct2.image}
            imageHover={randomProduct2.imageHover}
            link={randomProduct2.link}
            type={randomProduct2.type}
          />
          <ProductCard
            name={randomProduct3.name}
            price={randomProduct3.price}
            image={randomProduct3.image}
            imageHover={randomProduct3.imageHover}
            link={randomProduct3.link}
            type={randomProduct3.type}
          />
        </div>
      </div>
    </>
  );
};

export default GoodLayout;
