import React, { useState } from "react";
import Star from "../../assets/star.png";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as HeartFill } from "../../assets/heartfill.svg";

const Card = ({ item }) => {
  const [heart, setHeart] = useState(false);

  const showStars = (count) => {
    const stars = [];

    for (let i = 0; i < count; i++) {
      stars.push(<img key={i} src={Star} alt="stars" className="w-5 mr-1" />);
    }
    return stars;
  };

  const acctualPrice = (price) => {
    const accPrice = parseInt(price) + 100;

    return accPrice;
  };

  const handleHeartClick = () => {
    setHeart(!heart);
  };

  return (
    <div className="rounded group cursor-pointer transition duration-300 ease-out transform hover:scale-105 ">
      <div className=" relative">
        <div className=" absolute right-2 top-2">
          <button onClick={handleHeartClick}>
            {heart ? <HeartFill /> : <Heart />}
          </button>
        </div>
        <img src={item.img} alt="porductImage" className="w-52 rounded-t" />
        <div className="hidden group-hover:block absolute bottom-0 w-full bg-[#6d84ffb5] p-3">
          <p className="text-white text-center text-base font-medium">
            View Product
          </p>
        </div>
      </div>
      <p className=" text-xl font-normal">{item.name}</p>
      <p className="text-xl font-semibold text-[#6D84FF]">
        {" "}
        <span className="text-[rgba(0,0,0,0.40)] font-light mr-2 line-through">
          Rs. {acctualPrice(item.price)}
        </span>
        Rs. {item.price}
      </p>

      <div className="flex items-center">
        <p className="flex mr-2">{showStars(item.star)}</p>
        <p className="text-[rgba(0, 0, 0, 0.80)] text-sm font-light">(210)</p>
      </div>
    </div>
  );
};

export default Card;
