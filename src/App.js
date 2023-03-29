import React, { useEffect, useState } from "react";
import Tours from "./component/Tours";
import Loading from "./component/Loading";

// API in tours data
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  // filter and remove function
  const removeTour = (id) => {
    const newTours = tours && tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    // use try... catch statement
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      // console.log(response);
    } catch (error) {
      setLoading(false);
      // console.log(error);
    }
  };

  // use useEffect
  useEffect(() => {
    fetchTours();
  }, []);

  // loading function
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // ref function
  if (tours.length === 0) {
    return (
      <main className="items-center mx-auto">
        <div className="">
          <h2 className=" font-bold text-red-600 ">No Tours Left</h2>
          <button
            onClick={fetchTours}
            className="bg-blue-500  text-white font-bold py-2 px-4 rounded uppercase mx-28 my-2 -mt-3"
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
