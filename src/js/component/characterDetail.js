import React from "react";
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={props.image} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Specie: {props.species}</p>
                    <p className="card-text">Gender: {props.gender}</p>
                    <p className="card-text">Origin: {props.origin}</p>
                    <p className="card-text">Location: {props.location}</p>
                </div>
                </div>
            </div>
        </div>
    )
};

CharacterDetail.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.string,
    location: PropTypes.string,
  };

export default CharacterDetail;