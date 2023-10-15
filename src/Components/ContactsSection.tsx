import React from "react";
import { useState } from "react";
import aboutSectionImg from "../Assets/aboutSectionImg.png";
import contactsSectionImg from "../Assets/contactsSectionImg.png";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const ContactsSection = () => {
  const [accordion1Open, setAccordion1Open] = useState(false);
  const [accordion2Open, setAccordion2Open] = useState(false);
  const [accordion3Open, setAccordion3Open] = useState(false);
  const [accordion4Open, setAccordion4Open] = useState(false);
  const [accordion5Open, setAccordion5Open] = useState(false);
  const [accordion6Open, setAccordion6Open] = useState(false);
  const [accordion7Open, setAccordion7Open] = useState(false);

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

  const toggleAccordion5 = () => {
    setAccordion5Open(!accordion5Open);
  };

  const toggleAccordion6 = () => {
    setAccordion6Open(!accordion6Open);
  };

  const toggleAccordion7 = () => {
    setAccordion7Open(!accordion7Open);
  };

  return (
    <section className="flex justify-between flex-col md:flex-row">
      <div className="max-w-[800px] container mx-auto lg:p-0 p-3">
        <div className="container mx-auto flex justify-between">
          <h2 className="roboto text-[20px] font-bold uppercase">
            Послуга «Корегування розміру за індивідуальними параметрами»
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
            <p className="font-roboto text-[16px] pb-2">
              У кожної жінки індивідуальна фігура, параметри, і нам не потрібно
              підлаштовуватися під стандарти розмірної сітки. Ми прийняли
              рішення надати таку можливість пошиття одягу за індивідуальними
              параметрами нашим клієнтам. Нам важливо, щоб кожна куплена річ від
              DIIEVA стала частиною твого життя. Послуга «корегування розміру за
              індивідуальними параметрами" безкоштовна. Для замовлення зробіть
              запит в каталозі або напишіть у дірект нашої інстаграм-сторінки.
            </p>
            <p className="font-roboto text-[16px] max-w-[850px] pt-2 pb-2">
              Як це працює?
            </p>
            <p className="font-roboto text-[16px] max-w-[850px] pb-2">
              - Надсилаєте анкету, де вказуєте свої параметри (для зручності
              надаємо інструкцію зі зняття мірок)
              <br />
              - Менеджер повідомляє про результат запиту та строки виконання
              <br />
              - Вносите передоплату у розмірі 50% від суми товару
              <br />- Отримуєте одяг своєї мрії!
            </p>
            <p className="font-roboto text-[16px] max-w-[850px] pt-2 pb-2">
              *Ознайомтеся з умовами повернення та обміну
            </p>
            <p className="font-roboto text-[16px] max-w-[850px] pt-2 pb-2">
              Товар придбаний за послугою "Корегування розміру за
              індивідуальними параметрами" не підлягає поверненню. Якщо виріб
              після примірки не підходить по розміру – товар підлягає
              доопрацюванню. Усі витрати покриваються, включно з витратами
              перевізника. Для подальшої інформації зверніться до менеджера або
              в дірект нашої інстаграм-сторінки.{" "}
            </p>
          </div>
        )}
        <div className="container mx-auto flex justify-between">
          <h2 className="roboto text-[20px] font-bold uppercase">
            Онлайн-примірка
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
            <p className="font-roboto text-[16px] pb-2">
              Якщо у Вас виникли сумніви чи підійде вам розмір – пропонуємо
              послугу "Онлайн примірка".
              <br />
              Як це працює? <br />- Надсилаєте запит, де вказуєте свої параметри
              (для зручності надаємо інструкцію з із зняття мірок)
              <br />- Отримуєте результат, де буде вказано точний розмір
              вибраної моделі. <br />- Якщо з представлених розмірів немає
              потрібного Ви можете скористатися послугою "Корегування розміру за
              індивідуальними параметрами ".
            </p>
          </div>
        )}
        <div className="container mx-auto flex justify-between">
          <h2 className="roboto text-[20px] font-bold uppercase">Гарантія</h2>
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
            <p className="font-roboto text-[16px] pb-2">
              Гарантійний термін на товар 90 календарних днів з моменту
              придбання та пожиттєва гарантія на ручну вишивку. У випадку
              виявлення технологічних дефектів товарів, які не залежать від
              покупця, ми їх безкоштовно усуваємо.
            </p>
          </div>
        )}
        <div className="container mx-auto flex justify-between">
          <h2 className="roboto text-[20px] font-bold uppercase">
            Повернення та обмін
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
            <p className="font-roboto text-[16px] pb-2">
              Повернення товару може бути здійснено протягом 14 календарних днів
              згідно із законодавством України за умови, якщо товар зберіг свій
              товарний вигляд – сліди вжитку відсутні, етикетки та ярлики не
              пошкоджені.   Усі витрати, пов'язані з поверненням/обміном товару
              належної якості, несе покупець.  Після перевірки товару на
              відповідність умовам повернення, його повну вартість буде
              відшкодовано протягом 3-5 робочих днів.   * термін зарахування
              коштів на розрахунковий рахунок отримувача залежить від
              внутрішнього регламенту банка - отримувача.
            </p>
            <p className="font-roboto text-[16px] pb-2">
              Інструкція щодо повернення товару
            </p>
            <p className="font-roboto text-[16px] pb-2">
              1. Перед відправленням, будь ласка, заповніть форму повернення ,
              що знаходиться в коробці з товаром або зверніться до менеджера з
              обробки інтернет - замовлень. <br />
              2. Надішліть менеджеру заповнену електрону форму повернення або
              фотографію.
              <br />
              3. Коли менеджер підтвердить повернення разом з товаром, покладіть
              у коробку форму повернення
              <br />
              4. Надішліть товар за адресою, яка вказана в формі повернення.
              <br />
              Товар придбаний за послугою "Корегування розміру за
              індивідуальними параметрами" не підлягає поверненню. Якщо виріб
              після примірки не підходить по розміру – товар підлягає
              доопрацюванню. Усі витрати покриваються, включно з витратами
              перевізника. Для подальшої інформації зверніться до менеджера.
            </p>
          </div>
        )}
        <div className="container mx-auto flex justify-between">
          <h2 className="roboto text-[20px] font-bold uppercase">
            Як правильно зняти мірки і підібрати розмір
          </h2>
          <button onClick={toggleAccordion5}>
            {accordion5Open ? (
              <SlArrowUp className="text-[24px]" />
            ) : (
              <SlArrowDown className="text-[24px]" />
            )}
          </button>
        </div>
        <div className="line w-100% h-[1px] bg-[#BFBFBF] mt-[20px] mb-[20px]"></div>
        {accordion5Open && (
          <div>
            <p className="font-roboto text-[16px] pb-2">
              <br /> 1) Обхват грудей. Ця мірка знімається по найбільш
              виступаючих точках грудей. Сантиметр не слід занадто сильно
              натягувати чи послаблювати. Він повинен щільно, але без натягу
              прилягати до тіла.
              <br />
              2) Обхват талії. Зняти мірку потрібно по самому вузькому місцю,
              щільно обхопивши талію.
              <br />
              3) Обхват стегон. Мірка вимірюється по самим опуклим точкам
              сідниць.
              <br />
              4) Довжина рукава. Мірку знімають від точки закінчення плеча до
              зап'ястя по злегка зігнутою в лікті руці.
              <br />
              5) Довжина брюк Мірку знімають від талії до бажаної довжини брюк
              по зовнішній стороні стегна.
            </p>
          </div>
        )}
        <div className="container mx-auto flex justify-between">
          <h2 className="roboto text-[20px] font-bold uppercase">Оплата</h2>
          <button onClick={toggleAccordion6}>
            {accordion6Open ? (
              <SlArrowUp className="text-[24px]" />
            ) : (
              <SlArrowDown className="text-[24px]" />
            )}
          </button>
        </div>
        <div className="line w-100% h-[1px] bg-[#BFBFBF] mt-[20px] mb-[20px]"></div>
        {accordion6Open && (
          <div>
            <p className="font-roboto text-[16px] pb-2">
              Після онлайн - оплати ви отримуєте лист- підтвердження.Способи
              оплати:
            </p>
          </div>
        )}
        <div className="container mx-auto flex justify-between">
          <h2 className="roboto text-[20px] font-bold uppercase">Доставка</h2>
          <button onClick={toggleAccordion7}>
            {accordion7Open ? (
              <SlArrowUp className="text-[24px]" />
            ) : (
              <SlArrowDown className="text-[24px]" />
            )}
          </button>
        </div>
        <div className="line w-100% h-[1px] bg-[#BFBFBF] mt-[20px] mb-[20px]"></div>
        {accordion7Open && (
          <div>
            <p className="font-roboto text-[16px] pb-2">
              Способи доставки :<br />- Нова Пошта за тарифами перевізника.
              <br />- УкрПошта за тарифами перевізника
              <br />- Кур'єрська доставка Нової Пошти
              <br />- Доставка Uklon *Доставка здійснюється за тарифами
              перевізника
              <br />
              Термін доставки : від 5 до 10 робочих днів. Винятком та затримки
              можливі в календарні та державні свята.
            </p>
          </div>
        )}
      </div>
      <div className="w-[50%] mx-auto pt-4 md:mx-0 md:pt-0">
        <img src={contactsSectionImg} alt="" className="w-[100%]" />
      </div>
    </section>
  );
};

export default ContactsSection;
