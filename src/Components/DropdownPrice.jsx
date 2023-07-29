import React, { useState } from "react";
import { ReactComponent as DropDownIcon } from "../assets/dropdown.svg";

const DropdownPrice = ({ data, setFilterTags, setSelectedTags }) => {
  const [openDropdown, setOpenDropDown] = useState(true);

  const handleOpenDropDown = () => {
    setOpenDropDown(!openDropdown);
  };

  const handlePriceFilter = (event) => {
    const { name, checked } = event.target;

    setSelectedTags((prevState) => {
      return checked
        ? prevState.concat(name)
        : prevState.filter((item) => item !== name);
    });
  };

  return (
    <div className="mb-5 mt-7 pb-3 border-b-[1px] border-[rgba(0, 0, 0, 0.20)]">
      <div className="flex justify-between" onClick={handleOpenDropDown}>
        <h3 className="cursor-pointer font-medium text-lg uppercase text-[#2F3037]">
          price range
        </h3>{" "}
        <DropDownIcon className="cursor-pointer" />
      </div>

      {openDropdown ? (
        <>
          <label className=" flex my-3">
            <input
              type="checkbox"
              className="mr-2"
              onChange={handlePriceFilter}
              name="lessThan500"
            />{" "}
            <span className=" text-base font-normal capitalize">Under 500</span>
          </label>

          <label className="flex my-3">
            <input
              type="checkbox"
              className="mr-2"
              onChange={handlePriceFilter}
              name="between500And1000"
            />{" "}
            <span className=" text-base font-normal capitalize">
              500 to 1000
            </span>
          </label>
        </>
      ) : null}
    </div>
  );
};

export default DropdownPrice;
