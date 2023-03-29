import React from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <section>
      <div className="">
        <h1 className="text-orange-700 underline text-center font-bold pt-3 ">
          Ours Tours
        </h1>
      </div>
      <div>
        {tours &&
          tours.map((tour) => {
            return <Tour key={tour.id} {...tour}></Tour>;
          })}
      </div>
    </section>
  );
};

export default Tours;
