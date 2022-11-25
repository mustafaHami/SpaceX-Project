import React, { useEffect, useState } from "react";
import LaunchesCard from "../components/LaunchesCard";
import { fetchLaunches } from "../service/service";

const Launches = () => {
  const [launchesData, setLaunchesData] = useState([]);
  useEffect(() => {
    const fetchLaunchesData = async () => {
      await fetchLaunches({ limit: 10, offset: 0 }).then((res) => {
        setLaunchesData(res);
      });
    };
    fetchLaunchesData();
  }, []);
  
  const renderLaunchCards = launchesData.map((record) => {
    return <LaunchesCard key={record.flight_number} data={record} />;
  });

  const debounce = (func, delay) => {
    let inDebounce;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const handleScrolling = debounce((e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    if (clientHeight + scrollTop + 3 >= scrollHeight) {
      setOffset(offset + 10);
    }
  }, 120);

  return (
    <div className="mt-2 flex flex-wrap h-screen overflow-y-auto overscroll-auto scrollable"
          onScroll={handleScrolling}
        >
          {renderLaunchCards}
        </div>
  );
};

export default Launches;