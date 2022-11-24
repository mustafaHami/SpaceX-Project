import React from "react";
import "../assets/styles/LaunchesCard.css";
import { Link } from 'react-router-dom';


function LaunchesCard(props) {
    const {
        links: { mission_patch_small },
        flight_number,
      } = props.data;

    return(
        <div>
            <Link to={`/launches/${flight_number}`}>
            <section className="dark">
	            <div className="container py-4">
                    <article className="postcard dark blue">
                        <img className="postcard__img" src={mission_patch_small} alt="Image Title" />
                        <div className="postcard__text">
                            <h1 className="postcard__title blue">Capsule Title</h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2020-05-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item"><i className="fas fa-tag mr-2"></i>Tag1</li>
                                <li className="tag__item"><i className="fas fa-clock mr-2"></i>Tag2</li>
                                <li className="tag__item play blue">
                                    <i className="fas fa-play mr-2"></i>Tag3
                                </li>
                            </ul>
                        </div>
                    </article>
	            </div>
            </section>
            </Link>
        </div>
    );
};
export default LaunchesCard;