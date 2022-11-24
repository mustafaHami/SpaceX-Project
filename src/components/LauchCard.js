import React from "react";
import "./Lauche.css";
import { formatDate } from '../utils/DateFormat';

const LaunchCard = (props) => {
    const {
      mission_name,
      launch_date_unix,
      launch_success,
      links: { mission_patch_small },
      flight_number,
    } = props.data;

    return(
        <div class="card" style="width: 18rem;">
            <img src={mission_patch_small} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <p class="card-text">{mission_name}</p>
                <div>
                    <p className="text-sm font-light">Launch on</p>
                    <p>{formatDate(launch_date_unix)}</p>
                </div>
                <div>
                    <p className="text-sm font-light">Launch status</p>
                    <p>{launch_success ? 'Success' : 'Failed'}</p>
                </div>
            </div>
        </div>
    );
};
export default LaunchCard;