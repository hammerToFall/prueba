import React from "react";
import CharacterDetail from "../component/characterDetail";
import { useParams } from "react-router-dom";

const CharacterInfo = () => {
    const params = useParams();

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {params.characterid}
                    <CharacterDetail />
                </div>
            </div>
        </div>
    )
}

export default CharacterInfo;