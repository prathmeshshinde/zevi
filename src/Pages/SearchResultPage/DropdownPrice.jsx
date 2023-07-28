import React, { useState } from "react";
import { ReactComponent as DropDownIcon } from "../../assets/dropdown.svg";

const DropdownPrice = ({ filterTags, setFilterTags }) => {
  const [openDropdown, setOpenDropDown] = useState(true);

  const handleOpenDropDown = () => {
    setOpenDropDown(!openDropdown);
  };

  const filterHandler = (event) => {
    if (event.target.checked) {
      setFilterTags([...filterTags, event.target.value]);
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== event.target.value)
      );
    }
  };

  const handlePriceFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilterTags((prevFilter) => ({
      ...prevFilter,
      [name]: checked,
    }));
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
              onChange={handlePriceFilterChange}
              value="100"
              name="check1"
              checked={filterTags.check1}
            />{" "}
            <span className=" text-base font-normal capitalize">Under 100</span>
          </label>

          <label className=" flex my-3">
            <input
              type="checkbox"
              className="mr-2"
              onChange={filterHandler}
              value="100 to 500"
            />{" "}
            <span className=" text-base font-normal capitalize">
              1000 to 3000
            </span>
          </label>
        </>
      ) : null}
    </div>
  );
};

export default DropdownPrice;
