import React, { useState } from "react";
import { ReactComponent as DropDownIcon } from "../../assets/dropdown.svg";
import Star from "../../assets/star.png";

const DropdownRatings = ({ data, setFilterTags }) => {
  const [openDropdown, setOpenDropDown] = useState(true);

  const handleOpenDropDown = () => {
    setOpenDropDown(!openDropdown);
  };

  const showStars = (count) => {
    const stars = [];

    for (let i = 0; i < count; i++) {
      stars.push(<img key={i} src={Star} alt="stars" className="w-5 mr-1" />);
    }
    return stars;
  };

  const handlePriceFilter = (event) => {
    const { name, checked } = event.target;

    if (name === "5") {
      const filtered = data.filter((product) => product.star === 5);
      setFilterTags((prevState) =>
        checked
          ? prevState.concat(filtered)
          : prevState.filter((p) => !filtered.includes(p))
      );
    } else if (name === "4") {
      const filtered = data.filter((product) => product.star === 4);
      setFilterTags((prevState) =>
        checked
          ? prevState.concat(filtered)
          : prevState.filter((p) => !filtered.includes(p))
      );
    } else if (name === "3") {
      const filtered = data.filter((product) => product.star === 3);
      setFilterTags((prevState) =>
        checked
          ? prevState.concat(filtered)
          : prevState.filter((p) => !filtered.includes(p))
      );
    } else if (name === "2") {
      const filtered = data.filter((product) => product.star === 2);
      setFilterTags((prevState) =>
        checked
          ? prevState.concat(filtered)
          : prevState.filter((p) => !filtered.includes(p))
      );
    } else if (name === "1") {
      const filtered = data.filter((product) => product.star === 1);
      setFilterTags((prevState) =>
        checked
          ? prevState.concat(filtered)
          : prevState.filter((p) => !filtered.includes(p))
      );
    }
  };

  return (
    <div className="my-5">
      <div className="flex justify-between " onClick={handleOpenDropDown}>
        <h3 className="cursor-pointer font-medium text-lg uppercase text-[#2F3037]">
          ratings
        </h3>{" "}
        <DropDownIcon className="cursor-pointer" />
      </div>

      {openDropdown ? (
        <>
          <label className="flex my-3">
            <input
              type="checkbox"
              className="mr-2"
              name="5"
              onChange={handlePriceFilter}
            />{" "}
            <div className="flex">{showStars(5)}</div>
          </label>

          <label className="flex my-3">
            <input
              type="checkbox"
              className="mr-2"
              name="4"
              onChange={handlePriceFilter}
            />
            <div className="flex">{showStars(4)}</div>
          </label>
          <label className="flex my-3">
            <input
              type="checkbox"
              className="mr-2"
              name="3"
              onChange={handlePriceFilter}
            />
            <div className="flex">{showStars(3)}</div>
          </label>
          <label className="flex my-3">
            <input
              type="checkbox"
              className="mr-2"
              name="2"
              onChange={handlePriceFilter}
            />
            <div className="flex">{showStars(2)}</div>
          </label>
          <label className="flex my-3">
            <input
              type="checkbox"
              className="mr-2"
              name="1"
              onChange={handlePriceFilter}
            />
            <div className="flex">{showStars(1)}</div>
          </label>
        </>
      ) : null}
    </div>
  );
};

export default DropdownRatings;
