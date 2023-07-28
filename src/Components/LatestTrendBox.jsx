import React, { useEffect, useState } from "react";
import { createFakeProducts } from "../utils/createFakeProducts";

const LatestTrendBox = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = createFakeProducts(5);
    setData(loadData);
    console.log(loadData);
  }, []);

  return (
    <div className="bg-white w-7/12 p-5 rounded shadow-[0_4px_40px_0px_rgba(0,0,0,0.25)] shadow-[rgba(0, 0, 0, 0.25)]">
      <div>
        <h6 className="text-xl font-medium mb-5">Latest Trends</h6>
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-10">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex items-center flex-col ">
                <img src={item.img} alt="img" className="rounded" />
                <div className="w-full flex justify-start items-start">
                  <p className="text-sm font-normal">{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>

        <h6 className="text-xl font-medium my-5">Popular suggestions</h6>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <p className="font-normal text-base my-1.5">{item.man}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestTrendBox;
