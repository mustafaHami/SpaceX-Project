import { computeStyles } from '@popperjs/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useFetcher } from 'react-router-dom';
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

  
    const renderLaunchCard = <DetailLauncheCard key={launchData.flight_number} data={launchData} />;
    return !launchData ? ( 
    <div>
      Non trouvée
    </div>
    ) : (
    <div>
      {renderLaunchCard}
    </div>
    )
}

export default DetailLaunche;