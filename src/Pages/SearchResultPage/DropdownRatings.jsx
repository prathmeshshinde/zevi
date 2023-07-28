import React, { useState } from "react";
import { ReactComponent as DropDownIcon } from "../../assets/dropdown.svg";
import Star from "../../assets/star.png";

const DropdownRatings = () => {
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
            <input type="checkbox" className="mr-2" />{" "}
            <div className="flex">{showStars(5)}</div>
          </label>

          <label className="flex my-3">
            <input type="checkbox" className="mr-2" />
            <div className="flex">{showStars(4)}</div>
          </label>
          <label className="flex my-3">
            <input type="checkbox" className="mr-2" />
            <div className="flex">{showStars(3)}</div>
          </label>
          <label className="flex my-3">
            <input type="checkbox" className="mr-2" />
            <div className="flex">{showStars(2)}</div>
          </label>
          <label className="flex my-3">
            <input type="checkbox" className="mr-2" />
            <div className="flex">{showStars(1)}</div>
          </label>
        </>
      ) : null}
    </div>
  );
};

export default DropdownRatings;
