import React, { useState } from "react";
import Logo from "../../assets/zevilogo.png";
import { ReactComponent as Search } from "../../assets/search.svg";
import LatestTrendBox from "../../Components/LatestTrendBox";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const navigate = useNavigate();

  const showSuggestionBoxOnClick = () => {
    setShowSuggestionBox(true);
  };

  const onBlurSuggectionBox = () => {
    setShowSuggestionBox(false);
  };

  const handleSubmitForm = () => {
    navigate("/search");
  };

  return (
    <div className="App bg-[#00ee00] min-h-screen">
      <header className="flex justify-end">
        <img
          alt="ZeviLogo"
          src={Logo}
          style={{ height: "50px" }}
          className="m-8"
        />
      </header>
      <div className="flex justify-center">
        <form className="w-10/12 md:w-6/12" onSubmit={handleSubmitForm}>
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
              className="w-full h-12 rounded-xl py-2 pl-6 text-xl text-[rgba(0,0,0,0.40)] font-medium placeholder:text-xl placeholder:font-normal placeholder:text-[rgba(0, 0, 0, 0.40)] focus:outline-gray-300"
              onFocus={showSuggestionBoxOnClick}
              onBlur={onBlurSuggectionBox}
            />
          </div>
        </form>
      </div>
      <div className="flex justify-center mt-5">
        {showSuggestionBox ? <LatestTrendBox /> : ""}
      </div>
    </div>
  );
};

export default HomePage;
