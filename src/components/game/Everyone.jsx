import { useState, useEffect } from 'react';
import MortyCard from '../MortyCard';
import './game.css'

export default function Everyone() {

    const [characters, setCharacters] = useState(null)

    useEffect(() => {
        async function getChars() {
            try {
                const response = await fetch(
                    "https://rickandmortyapi.com/api/character/?page=3")

                const rickandmortyapi = await response.json();

                setCharacters(rickandmortyapi.results)
            }
            catch (err) {
                alert("cannot find characters")
            }
        }
        getChars()
    }, [])


    return (
        <div className="grid-container justify-center gap-5 mt-5">
            {characters ? characters.map(char => (
                <MortyCard
                    key={char.id}>
                    <img className="" src={char.image} alt="" />
                    <h1>{char.name}</h1>
                </MortyCard>
            )) : <h1>loading...</h1>}
        </div>
    )
}