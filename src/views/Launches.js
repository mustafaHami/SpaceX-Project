import React, { useEffect, useState } from "react";
import LaunchesCard from "../components/LaunchesCard";
import { fetchLaunches } from "../service/service";

const Launches = () => {
  const [launchesData, setLaunchesData] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const fetchLaunchesData = async () => {
      await fetchLaunches().then((res) => {
        setLaunchesData(res);
      });
    };
    fetchLaunchesData();
  }, []);

  useEffect(() => {

    const fetchLaunchesData = async () => {
      await fetchLaunches().then((res) => {
        setLaunchesData([...launchesData, ...res]);
      });
    };
    fetchLaunchesData();
  }, []);

  const renderLaunchCards = launchesData.map((record) => {
    return <LaunchesCard key={record.flight_number} data={record} />;
  });

  return (
    <div>
          {renderLaunchCards}
    </div>
  );
};

export default Launches;