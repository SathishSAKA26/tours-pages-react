import React, { useState } from "react";

const Tour = ({ id, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="shadow-2xl w-96 m-auto  items-center mb-5">
      <img
        src="http://hd.wallpaperswide.com/thumbs/house_island_2-t1.jpg"
        alt={name}
        className="mx-auto"
      />
      <footer className="">
        <div className="flex justify-around font-bold mx-3">
          <h3 className="text-gray-700">{name}</h3>
          <h3 className="text-red-700">${price}</h3>
        </div>
        <p className="px-4">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => setReadMore(!readMore)}
            className="text-blue-600 font-bold"
          >
            {readMore ? "Show less" : "Read more"}
          </button>
        </p>
        <button
          className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded uppercase mx-28 my-2 -mt-3"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
