import { useState, useEffect } from 'react';
import MortyCard from '../MortyCard';
import './game.css'

export default function Rick(){
    const [ricks, setRicks] = useState(null)

    const clickHandler = (e) => {
        console.log(e.target.alt)
    }
    useEffect(() => {
        async function getChars() {
            try {
                const response = await fetch(
                    "https://rickandmortyapi.com/api/character/?page=2&name=rick"
                );
                const rickandmortyapi = await response.json();

                console.log(rickandmortyapi.results)
                setRicks(rickandmortyapi.results)
            }
            catch (err) {
                alert("Cannot find that rick")
            }
        }
        getChars()
    }, [])
    return (
        <div className="grid-container justify-center gap-5 mt-5">
            {ricks ? ricks.map(rick => (
                <div
                key={rick.id}
                >
                <img  onClick={clickHandler} src={rick.image} alt={rick.id} />
                    <h1>{rick.name}</h1>
                </div>
            )) : <h1>loading...</h1>}
        </div>
    )
}