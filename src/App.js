import React, { useEffect, useState } from "react";
import Tours from "./component/Tours";
import Loading from "./component/Loading";

// API in tours data
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

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
      console.log(error);
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
  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
