import React from "react";
import collection1 from "../Assets/collection1.png";
import smallcollection1 from "../Assets/smallcollection1.png";
import smallcollection2 from "../Assets/smallcollection2.png";
import smallcollection3 from "../Assets/smallcollection3.png";
import smallcollection4 from "../Assets/smallcollection4.png";
import smallcollection5 from "../Assets/smallcollection5.png";
import smallcollection6 from "../Assets/smallcollection6.png";

const CollectionsSection = () => {
  return (
    <div className="flex justify-between container mx-auto pb-[200px] flex-col md:flex-row">
      <div>
        <h4 className="font-roboto text-[16px] font-bold">
          FW’23/24 INCODE: roots matter
        </h4>
      </div>
      <div>
        <img src={collection1} alt="Winter - Fall 23 DIIEVA collection" />
      </div>
      <div className="2xl:max-w-[600px] max-w-[350px] pl-[20px] md:pl-0 mx-auto md:mx-0">
        <h4 className="font-roboto text-[20px] font-bold">
          FW’23/24 INCODE: roots matter
        </h4>
        <p className="pt-[80px]">
          Дебютна колекція FW` 23/24 INCODE: roots matter – це втілення
          сучасності, традиційності та краси. В колекції закладена концепція
          поєднання розслаблених силуетів та напівприталених класичних форм з
          акцентною українською вишивкою
        </p>
        <p className="pt-[45px]">
          У найдавніших збережених вишитих сорочках використані змережувальні
          шви, які ми інтегрували в одяг DIIEVA. Ця техніка має багату історію
          походження і ми вважаємо своєю місією збереження цих традиційних
          технік вишивання в fashion-тенденціях.
        </p>
        <p className="pt-[45px]">
          З одягом DIIEVA можна створити повноцінний образ або додати окремі
          елементи в свій гардероб. В асортименті представлені: костюм з брюками
          палаццо, кюлотами, класичними брюками, асиметричний костюм зі
          спідницею та корсет. Також верхній одяг: пальто класичного крою та
          утеплений бомбер.
        </p>
        <p className="pt-[45px]">
          В колекції домінують чіткі лінії та монументальний підхід до форм.
          Пріоритетом є використання високоякісної натуральної тканини: вовна,
          напіввовна, бавовна, віскоза та нитки льону. Палітра кольорів для
          колекції обрана в приємних природних відтінках: хакі, бежевий, синій,
          сірий, чорний. Фактура, якість тканин та фурнітура сприяють
          комфортному використанню та довговічності виробів.
        </p>
        <p className="pt-[45px]">
          <span className="font-bold"> Дебютна колекція WF` 23/24 INCODE:</span>{" "}
          roots matter є унікальною та самобутньою, і кожна деталь зроблена з
          любов’ю до тебе! Будь DIIEVA – твоє коріння має значення.
        </p>
        <img
          src={smallcollection2}
          alt="Winter - Fall 23 DIIEVA collection"
          className="pt-[20px]"
        />
        <img
          src={smallcollection3}
          alt="Winter - Fall 23 DIIEVA collection"
          className="pt-[20px]"
        />
        <img
          src={smallcollection4}
          alt="Winter - Fall 23 DIIEVA collection"
          className="pt-[20px]"
        />
        <img
          src={smallcollection5}
          alt="Winter - Fall 23 DIIEVA collection"
          className="pt-[20px]"
        />
        <img
          src={smallcollection6}
          alt="Winter - Fall 23 DIIEVA collection"
          className="pt-[20px]"
        />
      </div>
    </div>
  );
};

export default CollectionsSection;
