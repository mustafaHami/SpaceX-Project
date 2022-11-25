import React from "react";
import "../assets/styles/LaunchesCard.css";
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/DateFormat2';
import Badge from 'react-bootstrap/Badge';


function DetailLauncheCard(props) {
    const {
        links: { mission_patch_small },
        flight_number,
        details,
        launch_date_unix,
        launch_success,
        mission_name,
      } = props.data;

    return(
        <div>
            <Link to={`/launches/${flight_number}`}>
            <section className="dark">
	            <div className="container py-4">
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
                            <div className="postcard__preview-txt">{details=== null ? "No details": details}</div>
                            <ul className="postcard__tagbox">
                            
                                <h3>
                                <Badge bg={launch_success ? 'success primary':'danger primary'} >
                                    {launch_success ? 'Success':'Failed'}
                                </Badge>  
                                </h3>
                            </ul>
                        </div>
                    </article>
	            </div>
            </section>
            </Link>
        </div>
    );
};
export default DetailLauncheCard;