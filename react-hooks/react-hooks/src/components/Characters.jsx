import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react';
import Search from './Search'
import useCharacters from '../hooks/useCharacters'

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

const API = 'https://rickandmortyapi.com/api/character/'

const Characters = () => {

    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
    const [search, setSearch] = useState('')
    const searchInput = useRef(null)

    const characters = useCharacters(API)
    
    const handleClick = favorite => {
        dispatch({
            type: 'ADD_TO_FAVORITE',
            payload: favorite
        })
    }

    // const handleSearch = () => {
    //     setSearch(searchInput.current.value)
    // }

    const handleSearch = useCallback( () => {
        setSearch(searchInput.current.value)
    }, [])

    // const filteredUsers = characters.filter( (user) => 
    //     user.name.toLowerCase().includes(search.toLocaleLowerCase()))

    const filteredUsers = useMemo( () => 
        characters.filter( (user) => 
        user.name.toLowerCase().includes(search.toLocaleLowerCase()))
    , [characters, search]) // elementos donde se va a escuchar 

    return (
        <div className="Characters">

            <Search 
                search={search}
                searchInput={searchInput}
                handleSearch={handleSearch}/>

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