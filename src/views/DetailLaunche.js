import { computeStyles } from '@popperjs/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { fetchLaunch } from '../service/service.js'
import DetailLauncheCard from "../components/DetailLauncheCard";

const DetailLaunche = (props) => {
    const { id } = useParams();
    const [launchData, setLaunchData] = useState([])
    
    useEffect(() => {
        const fetchLaunchData = async () => {
          await fetchLaunch(id).then((res) => {
            setLaunchData(res);
          });
        };
        fetchLaunchData();
      }, [id]);

    const renderLaunch = <DetailLauncheCard key={launchData.flight_number} data={launchData} />; 
    console.log(launchData) 
    return !launchData ? ( 
    <div>
      Non trouvée
    </div>
    ) : (
    <div>
      {renderLaunch}
    </div>
    )
}

export default DetailLaunche;