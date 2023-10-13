import React, { useEffect, useState } from "react";
import { BsSortUp, BsSortDown } from "react-icons/bs";
import productData from "../Data/Data";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const GoodsSection = ({}) => {
  const { category: urlCategory } = useParams();
  const [sortedProducts, setSortedProducts] = useState(
    Object.values(productData)
  );
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState(
    urlCategory || "all"
  );

  const navigate = useNavigate();

  const handleSort = () => {
    const sorted = [...sortedProducts];
    if (sortOrder === "asc") {
      sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      setSortOrder("desc");
    } else {
      sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      setSortOrder("asc");
    }
    setSortedProducts(sorted);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);

    // Filter products based on the selected category
    const filteredProducts =
      category === "all"
        ? Object.values(productData)
        : Object.values(productData).filter(
            (product) => product.type === category
          );

    setSortedProducts(filteredProducts);
    navigate(`/goods/${category}`);
  };

  useEffect(() => {
    const filteredProducts =
      selectedCategory === "all"
        ? Object.values(productData)
        : Object.values(productData).filter(
            (product) => product.type === selectedCategory
          );

    setSortedProducts(filteredProducts);
  }, [selectedCategory]);

  return (
    <>
      <div className="flex justify-between container mx-auto lg:p-0 p-5 flex-col lg:flex-row">
        <div>
          <p className="text-[#7B7B7B] font-roboto text-[14px]">
            DIIEVA / Каталог / Все{" "}
          </p>
          <p className="text-[15px] font-bold font-roboto pt-[11px]">ВСЕ</p>
        </div>
        <div className="flex gap-10">
          <button className="flex items-center gap-3" onClick={handleSort}>
            Сортувати
            {sortOrder === "asc" ? (
              <BsSortUp className="text-[24px]" />
            ) : (
              <BsSortDown className="text-[24px]" />
            )}
          </button>
          <select
            name="select"
            id="select"
            className="cursor-pointer border-black border-2 px-10 py-0"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">Все</option>
            <option value="Жакети">Жакети</option>
            <option value="Брюки">Брюки</option>
            <option value="Костюми">Костюми</option>
            <option value="Спідниці">Спідниці</option>
            <option value="Корсети">Корсети</option>
            <option value="Верхній одяг">Верхній одяг</option>
          </select>
        </div>
      </div>
      <div className="container md:grid grid-cols-3 mx-auto gap-10 pb-[100px] flex flex-col lg:p-0 p-5 lg:pb-[100px]">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.link}
            name={product.name}
            price={product.price}
            image={product.image}
            imageHover={product.imageHover}
            link={product.link}
            type={product.type}
          />
        ))}
      </div>
    </>
  );
};

export default GoodsSection;
