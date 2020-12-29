import React, { useState, useEffect } from 'react';

const Characters = () => {

    const [characters, setCharacters] = useState([])

    useEffect( () => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then( response => response.json())
        .then( data => setCharacters(data.results))
    }, [] ) // Solo va a ser render la primera vez

    console.log(characters)

    return (
        <div className="Characters">
            {
                characters.map( character => (
                    <h2>{character.name}</h2>
                ))
            }
            <h2>{}</h2>
        </div>
    );
}

export default Characters;