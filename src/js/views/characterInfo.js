import React, {useEffect, useState} from "react";
import CharacterDetail from "../component/characterDetail";
import { useParams } from "react-router-dom";

const CharacterInfo = () => {
    const params = useParams()
    const [character, setCharacter] = useState()
    
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${params.characterid}`)
        .then(response => response.json())
        .then(response => setCharacter(response))
    }, [] )

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8">
                    {
                        character ? 
                        <CharacterDetail
                            image={character.image}
                            name={character.name}
                            species={character.species}
                            gender={character.gender}
                            origin={character.origin.name}
                            location={character.location.name}
                            status={character.status}
                    /> : "Cargando..."
                    }
                </div>
            </div>
        </div>
    )
}

export default CharacterInfo;