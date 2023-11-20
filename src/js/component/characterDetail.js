import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
    return (
        <div className={`card p-3 border-2 border-outline ${props.status == 'Alive' ? 'border-success' : 'border-danger'}`}>
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
                    <p className={`card-text text-${props.status == 'Alive' ? 'success' : 'danger'}`}>Status: {props.status}</p>
                    <Link to="/" className="btn btn-outline-dark">Back</Link>
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
    status: PropTypes.string,
  };

export default CharacterDetail;