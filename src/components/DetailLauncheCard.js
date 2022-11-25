import React from "react";
import "../assets/styles/DetailLaunchCard.css";
import { Link } from 'react-router-dom';
import { formatFullDate, formatDate } from '../utils/DateFormat2';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';


function DetailLauncheCard(props) {
    const {
        flight_number,
        details,
        launch_date_unix,
        launch_success,
        mission_name,
      } = props.data;

    return(
        <div>
            <section className="dark">
	            <div className="container py-4">
                    <h3> Flight Number : {flight_number}</h3>
                    <article className="postcard dark blue">

                        <div className="postcard__text">
                            <h1 className="postcard__title blue">{mission_name}</h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2020-05-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>{formatDate(launch_date_unix)}
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <Card className="text-center"> 
                                <Card.Header>
                                    <div className="">
                                        <Badge pill bg='secondary' >
                                            <span className="font-weight-bold">⏱ Launch on </span>{formatFullDate(launch_date_unix)}
                                        </Badge> 
                                    </div>
                                    <div className=" ms-auto">
                                        <Badge pill bg={launch_success ? 'success ':'danger '} >
                                            {launch_success ? 'Success ':'Failed '}
                                        </Badge> <p>  </p>
                                    </div>
                                 </Card.Header>
                                <Card.Body>
                                    <Card.Title> <h4>Detail {launch_success ? 'Success ':'Failure '}</h4>  </Card.Title>
                                    <Card.Text>
                                       <h6>{details}</h6>                                   
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                
                                 </Card.Footer>
                            </Card>
                        </div>
                    </article>
	            </div>
            </section>
        </div>
    );
};
export default DetailLauncheCard;