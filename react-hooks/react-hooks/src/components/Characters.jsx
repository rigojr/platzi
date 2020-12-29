import React, { useState, useEffect, useReducer, useMemo } from 'react';

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state
    }
}

const Characters = () => {

    const [characters, setCharacters] = useState([])
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
    const [search, setSearch] = useState('')

    useEffect( () => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then( response => response.json())
        .then( data => setCharacters(data.results))
    }, [] ) // Solo va a ser render la primera vez

    const handleClick = favorite => {
        dispatch({
            type: 'ADD_TO_FAVORITE',
            payload: favorite
        })
    }

    const handleSearch = event => {
        setSearch(event.target.value)
    }

    // const filteredUsers = characters.filter( (user) => 
    //     user.name.toLowerCase().includes(search.toLocaleLowerCase()))

    const filteredUsers = useMemo( () => 
        characters.filter( (user) => 
        user.name.toLowerCase().includes(search.toLocaleLowerCase()))
    , [characters, search]) // elementos donde se va a escuchar 

    return (
        <div className="Characters">
            <div className="busqueda">
                <input type="text" value={search} onChange={handleSearch}/>
            </div>
            <h2>Personajes Favoritos</h2>
            {
                favorites.favorites.map( favorite => <h2 key={favorite.id}>{favorite.name}</h2>)
            }
            <h2>Todos los personajes</h2>
            {
                filteredUsers.map( character => (
                    <React.Fragment key={character.name}>
                        <h2>{character.name}</h2>
                        <button 
                            type="button"
                            onClick={() => handleClick(character)}>Agregar a Favorito</button>
                    </React.Fragment>
                ))
            }
        </div>
    );
}

export default Characters;