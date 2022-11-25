import React, { useEffect, useState } from "react";
import { fetchCapsules } from "../service/service";
import CapsulesCard from "../components/CapsulesCard";
import "../assets/styles/Capsules.css";



const Capsules = () => {
  const [capsulesData, setCapsulesData] = useState([]);
  // when page load for the first time.
  useEffect(() => {
    const fetchCapsulesData = async () => {
      await fetchCapsules({ limit: 10, offset: 0 }).then((res) => {
        setCapsulesData(res);
      });
    };
    fetchCapsulesData();
  }, []);
  
  const renderCapsulesCards = capsulesData.map((record) => {
    return <CapsulesCard key={record.capsule_serial} data={record} />;
  });





  return (
    <div className="m-5">
          <div className="grid-capsules">
            {renderCapsulesCards}
          </div>
        </div>
  );
};

export default Capsules;