import React from "react";
import { IoIosResize } from "react-icons/io";
import greencol from "../Assets/greencol.png";
import good1_1 from "../Assets/good1_1.png";
import good1_2 from "../Assets/good1_2.png";
import good1_3 from "../Assets/good1_3.png";
import good1_4 from "../Assets/good1_4.png";
import good1_5 from "../Assets/good1_5.png";

const GoodLayout = () => {
  return (
    <>
      <div className="flex justify-between container mx-auto">
        <div>
          <p className="text-[#7B7B7B] font-roboto text-[14px]">
            DIIEVA / Каталог / Спідниці / Спідниця міді з асемитричним розрізом
          </p>
        </div>
      </div>
      <div className="flex container mx-auto gap-5">
        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={good1_1} alt="Спідниця міді з асемитричним розрізом" />
            <img src={good1_2} alt="Спідниця міді з асемитричним розрізом" />
          </div>
          <div className="flex items-center">
            <img src={good1_3} alt="Спідниця міді з асемитричним розрізом" />
            <img src={good1_4} alt="Спідниця міді з асемитричним розрізом" />
            <img src={good1_5} alt="Спідниця міді з асемитричним розрізом" />
          </div>
        </div>
        <div className="max-w-[500px]">
          <h1 className="font-roboto font-bold text-[24px]">
            Спідниця міді з асиметричним розрізом \ Темно - зелена
          </h1>
          <h1 className="font-roboto font-bold text-[24px] pt-[35px]">
            Price UAH
          </h1>
          <div className="line w-100% h-[1px] bg-[#BFBFBF] mt-[20px]"></div>
          <p className="text-[#7B7B7B] font-roboto text-[14px] flex items-center gap-3 pt-[30px]">
            <IoIosResize className="text-[24px]" />
            Розмірна сітка
          </p>
          <div className="flex gap-5 mt-[15px]">
            <button className="border-2 px-[20px] py-[5px] border-black font-bold">
              XS
            </button>
            <button className="border-2 px-[20px] py-[5px] border-black font-bold">
              S
            </button>
            <button className="border-2 px-[20px] py-[5px] border-black font-bold">
              M
            </button>
            <button className="border-2 px-[20px] py-[5px] border-black font-bold">
              L
            </button>
          </div>
          <div className="pt-[32px]">
            <p className="font-bold roboto text-[16px]">
              Індивідуальне коригування розміру по вашим параметрам
            </p>
            <p className="roboto text-[16px] text-[#7B7B7B]">
              *Відбувається після попереднього замовлення. Виготовлення 5 - 10
              робочих днів
            </p>
            <button className="mt-[4px] w-full border-2 px-[20px] py-[10px] border-black">
              Зробити запит
            </button>
          </div>
          <div className="p-[15px] bg-[#F5F5F5] w-full mt-[50px]">
            <p className="font-bold roboto text-[16px]">Колір</p>
            <div className="flex items-start flex-col justify-center">
              <button className="mt-[4px] border-2 px-[5px] py-[5px] border-black">
                <img src={greencol} alt="Зелений" />
              </button>
              <p className=" roboto text-[14px] text-[#7B7B7B]">Зелений</p>
            </div>
            <p className="roboto text-[16px] text-[#7B7B7B]">Є в наявності</p>
          </div>
          <button className="mt-[4px] w-full px-[20px] py-[15px] bg-[#333333] text-white mt-[32px]">
            В кошик
          </button>
          <p className="roboto text-[16px] text-[#7B7B7B] pt-[10px]">
            Відправлення 2 робочих дня
          </p>
        </div>
      </div>
    </>
  );
};

export default GoodLayout;
