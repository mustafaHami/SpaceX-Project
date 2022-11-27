import React from "react";
import "../assets/styles/LaunchesCard.css";
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/DateFormat';
import Badge from 'react-bootstrap/Badge';

function LaunchesCard(props) {
    const {
        links: { mission_patch_small },
        flight_number,
        details,
        launch_date_unix,
        launch_success,
        mission_name,
      } = props.data;

    return(
        <div className="col-6">
            <Link to={`/launches/${flight_number}`}>
                    <article className="postcard dark blue">
                        <img className="postcard__img" src={mission_patch_small} alt="Image Title" />
                        <div className="postcard__text">
                            <h1 className="postcard__title blue">{mission_name}</h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2020-05-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>{formatDate(launch_date_unix)}
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt"></div>
                            <ul className="postcard__tagbox">
                                <h3>
                                <Badge bg={launch_success ? 'success primary':'danger primary'} >
                                    {launch_success ? 'Success':'Failed'}
                                </Badge>  
                                </h3>
                            </ul>
                        </div>
                    </article>
	        </Link>
        </div>   
    );
};
export default LaunchesCard;