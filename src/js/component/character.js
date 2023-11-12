import React from "react";
import PropTypes from 'prop-types';

const Character = (props) => {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.gender}</p>
                <a href="#" className={`btn btn-outline-${props.status == 'Alive' ? 'success' : 'danger'}`}>More info</a>
            </div>
        </div>
    )
};

Character.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    status: PropTypes.string,
  };

export default Character;