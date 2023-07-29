import React, { useCallback, useEffect, useState } from "react";
import Logo from "../../assets/zevilogo.png";
import { ReactComponent as Search } from "../../assets/search.svg";
import DropdownPrice from "./DropdownPrice";
import DropdownRatings from "./DropdownRatings";
import Card from "./Card";
import { createFakeProducts } from "../../utils/createFakeProducts";

const SearchResultPage = () => {
  const [data, setData] = useState([]);
  const [filterTags, setFilterTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const handlePriceFilter = useCallback(() => {
    let filteredData = [];

    filteredData = selectedTags.reduce((prev, current) => {
      if (current === "lessThan500") {
        return (prev.length > 0 ? prev : data).filter(
          (product) => product.price < 500
        );
      } else if (current === "between500And1000") {
        return (prev.length > 0 ? prev : data).filter(
          (product) => product.price >= 500 && product.price <= 1000
        );
      } else {
        return (prev.length > 0 ? prev : data).filter(
          (product) => product.star === Number(current)
        );
      }
    }, filteredData);

    setFilterTags(filteredData);

    console.log(filteredData);
  }, [selectedTags, data]);

  console.log(filterTags);

  useEffect(() => {
    const loadData = createFakeProducts(10);
    setData(loadData);
  }, []);

  useEffect(() => {
    handlePriceFilter();
  }, [selectedTags]);

  const filteredCards = selectedTags.length > 0 ? filterTags : data;

  return (
    <div className="bg-[#fffff]">
      <header className="flex relative justify-center">
        <div className="flex justify-center w-10/12">
          <form className="w-10/12 md:w-6/12">
            <div className="flex justify-center mt-10 relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                <button
                  className="p-1 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  <Search className="w-7 h-7" />
                </button>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="border-2 border-[rgba(0, 0, 0, 0.50)]  w-full h-12 rounded-xl py-2 pl-6 text-xl text-[rgba(0,0,0,0.40)] font-medium placeholder:text-xl placeholder:font-normal placeholder:text-[rgba(0, 0, 0, 0.40)] focus:outline-gray-300"
              />
            </div>
          </form>
        </div>
        <img
          alt="ZeviLogo"
          src={Logo}
          style={{ height: "50px" }}
          className="m-8 right-10 absolute md:block hidden"
        />
      </header>

      <div className="p-5 flex justify-center flex-wrap lg:justify-evenly  ">
        <div className="mb-10">
          <h4 className="text-4xl font-normal mb-5">Search Results</h4>
          <DropdownPrice
            data={data}
            setFilterTags={setFilterTags}
            setSelectedTags={setSelectedTags}
          />
          <DropdownRatings
            data={data}
            setFilterTags={setFilterTags}
            setSelectedTags={setSelectedTags}
          />
        </div>
        <div className="grid min-[440px]:grid-cols-2 grid-cols-1 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 gap-10 mt-14">
          {selectedTags.length === 0
            ? "No resukts"
            : filteredCards.map((item, index) => {
                return (
                  <div key={index} className="flex items-center flex-col">
                    <Card item={item} />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
