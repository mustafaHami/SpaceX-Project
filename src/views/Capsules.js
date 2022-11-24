import React, { useEffect, useState } from "react";
import { fetchCapsules } from "../service/service";

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
  

  return (
    <div>
        <p>Caps SCREEN</p>
    </div>
  );
};

export default Capsules;