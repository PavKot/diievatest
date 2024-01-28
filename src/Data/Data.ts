import card1 from "../Assets/card1.png";
import card1hover from "../Assets/card1hover.png";
import card2 from "../Assets/card2.png";
import card2hover from "../Assets/card2hover.png";
import card3 from "../Assets/card3.png";
import card3hover from "../Assets/card3hover.png";
import card4 from "../Assets/card4.png";
import card4hover from "../Assets/card4hover.png";
import card5 from "../Assets/card5.png";
import card5hover from "../Assets/card5hover.png";
import card6 from "../Assets/card6.png";
import card6hover from "../Assets/card6hover.png";
import card7 from "../Assets/card7.png";
import card7hover from "../Assets/card7hover.png";
import card8 from "../Assets/card8.png";
import card8hover from "../Assets/card8hover.png";
import card9 from "../Assets/card9.png";
import card9hover from "../Assets/card9hover.png";
import card10 from "../Assets/card10.png";
import card10hover from "../Assets/card10hover.png";
import product1 from "../Assets/product1.png";
import product2 from "../Assets/product2.png";
import product3 from "../Assets/product3.png";
import product4 from "../Assets/product4.png";
import product5 from "../Assets/product5.png";
import product6 from "../Assets/product6.png";
import product7 from "../Assets/product7.png";
import product8 from "../Assets/product8.png";
import product9 from "../Assets/product9.png";
import product10 from "../Assets/product10.png";
import product11 from "../Assets/product11.png";
import product12 from "../Assets/product12.png";
import product13 from "../Assets/product13.png";
import product14 from "../Assets/product14.png";
import product15 from "../Assets/product15.png";
import product16 from "../Assets/product16.png";
import product17 from "../Assets/product17.png";
import product18 from "../Assets/product18.png";
import product19 from "../Assets/product19.png";
import product21 from "../Assets/product21.png";
import product22 from "../Assets/product22.png";
import product23 from "../Assets/product23.png";
import product24 from "../Assets/product24.png";
import product25 from "../Assets/product25.png";
import product26 from "../Assets/product26.png";
import product27 from "../Assets/product27.png";
import product28 from "../Assets/product28.png";
import product29 from "../Assets/product29.png";

const productData = {
  product1: {
    collectionName: "Одяг",
    image: product1,
    imageHover: product1,
    name: "Жакет на шнурівці / Синій",
    price: "8 700 ₴",
    link: "/goods/8",
    type: "Жакети",
  },
  product2: {
    collectionName: "Одяг",
    image: product2,
    imageHover: product2,
    name: "Кроп-жакет асиметричний / Темно-зелений",
    price: "7 900 ₴",
    link: "/goods/13",
    type: "Жакети",
  },
  product3: {
    collectionName: "Одяг",
    image: product3,
    imageHover: product3,
    name: "Жакет з вовни / Бежевий",
    price: "9 550 ₴",
    link: "/goods/9",
    type: "Жакети",
  },
  product4: {
    collectionName: "Одяг",
    image: product4,
    imageHover: product4,
    name: "Жакет з вовни / Темно - синій",
    price: "9 550 ₴",
    link: "/goods/10",
    type: "Жакети",
  },
  product5: {
    collectionName: "Одяг",
    image: product5,
    imageHover: product5,
    name: "Брюки палаццо з вовни / Сині",
    price: "5 350 ₴",
    link: "/goods/4",
    type: "Брюки",
  },
  product6: {
    collectionName: "Одяг",
    image: product6,
    imageHover: product6,
    name: "Брюки палаццо з вовни / Бежеві",
    price: "5 350 ₴",
    link: "/goods/5",
    type: "Брюки",
  },
  product7: {
    collectionName: "Одяг",
    image: product7,
    imageHover: product7,
    name: "Кюлоти з завищеною талією / Сині",
    price: "4 300 ₴",
    link: "/goods/6",
    type: "Брюки",
  },
  product8: {
    collectionName: "Одяг",
    image: product8,
    imageHover: product8,
    name: "Костюм з вовни / Бежевий",
    price: "14 900 ₴",
    link: "/goods/12",
    type: "Костюми",
  },
  product9: {
    collectionName: "Одяг",
    image: product9,
    imageHover: product9,
    name: "Костюм з вовни / Темно-синій",
    price: "14 900 ₴",
    link: "/goods/15",
    type: "Костюми",
  },
  product10: {
    collectionName: "Одяг",
    image: product10,
    imageHover: product10,
    name: "Костюм з кроп-жакетом / Темно-зелений",
    price: "11 900 ₴",
    link: "/goods/16",
    type: "Костюми",
  },
  product11: {
    collectionName: "Одяг",
    image: product11,
    imageHover: product11,
    name: "Костюм на шнурівці / Синій",
    price: "13 000 ₴",
    link: "/goods/17",
    type: "Костюми",
  },
  product12: {
    collectionName: "Одяг",
    image: product12,
    imageHover: product12,
    name: "Спідниця міді з асиметричним розрізом / Темно-зелена",
    price: "4 000 ₴",
    link: "/goods/1",
    type: "Спідниці",
  },
  product13: {
    collectionName: "Одяг",
    image: product13,
    imageHover: product13,
    name: "Корсет з кісточками / Молочний",
    price: "4 300 ₴",
    link: "/goods/20",
    type: "Корсети",
  },
  product14: {
    collectionName: "Одяг",
    image: product14,
    imageHover: product14,
    name: "Корсет з кісточками / Темно - зелений",
    price: "4 300 ₴",
    link: "/goods/19",
    type: "Корсети",
  },
  product15: {
    collectionName: "Одяг",
    image: product15,
    imageHover: product15,
    name: "Жакет двобортний / Чорний",
    price: "7 900 ₴",
    link: "/goods/11",
    type: "Жакети",
  },
  product16: {
    collectionName: "Одяг",
    image: product16,
    imageHover: product16,
    name: "Костюм з Жакетом двобортним / Чорний",
    price: "11 500 ₴",
    link: "/goods/18",
    type: "Костюми",
  },
  product17: {
    collectionName: "Одяг",
    image: product17,
    imageHover: product17,
    name: "Бомбер вовняний / Синій",
    price: "12 900 ₴",
    link: "/goods/3",
    type: "Верхній одяг",
  },
  product18: {
    collectionName: "Одяг",
    image: product18,
    imageHover: product18,
    name: "Брюки завужені / Чорні",
    price: "3 600 ₴",
    link: "/goods/7",
    type: "Брюки",
  },
  product19: {
    collectionName: "Одяг",
    image: product19,
    imageHover: product19,
    name: "Пальто прямого крою / Сіре",
    price: "11 900 ₴",
    link: "/goods/2",
    type: "Верхній одяг",
  },
  product21: {
    collectionName: "Одяг",
    image: product21,
    imageHover: product21,
    name: "Корсетна сукня / Чорна",
    price: "9700 ₴",
    link: "/goods/21",
    type: "Сукні",
  },
  product22: {
    collectionName: "Аксесуари",
    image: product22,
    imageHover: product22,
    name: "Стрічковий ґердан",
    price: "2700 ₴",
    link: "/goods/22",
    type: "Аксесуари",
  },
  product23: {
    collectionName: "Аксесуари",
    image: product23,
    imageHover: product23,
    name: "Золотий ґердан",
    price: "2700 ₴",
    link: "/goods/23",
    type: "Аксесуари",
  },
  product24: {
    collectionName: "Аксесуари",
    image: product24,
    imageHover: product24,
    name: "Ґердан рожевий",
    price: "2500 ₴",
    link: "/goods/24",
    type: "Аксесуари",
  },
  product25: {
    collectionName: "Аксесуари",
    image: product25,
    imageHover: product25,
    name: "Ґердан срібний",
    price: "2500 ₴",
    link: "/goods/25",
    type: "Аксесуари",
  },
  product26: {
    collectionName: "Аксесуари",
    image: product26,
    imageHover: product26,
    name: "Чорний котильйон",
    price: "1400 ₴",
    link: "/goods/26",
    type: "Аксесуари",
  },
  product27: {
    collectionName: "Аксесуари",
    image: product27,
    imageHover: product27,
    name: "Червоний котильйон",
    price: "1400 ₴",
    link: "/goods/27",
    type: "Аксесуари",
  },
  product28: {
    collectionName: "Аксесуари",
    image: product28,
    imageHover: product28,
    name: "Чорна силянка",
    price: "1950 ₴",
    link: "/goods/28",
    type: "Аксесуари",
  },
  product29: {
    collectionName: "Аксесуари",
    image: product29,
    imageHover: product29,
    name: "Прозора силянка",
    price: "1950 ₴",
    link: "/goods/29",
    type: "Аксесуари",
  },
};

export default productData;
