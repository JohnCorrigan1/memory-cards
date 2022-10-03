import { useState, useEffect } from 'react';
import MortyCard from '../MortyCard';
import './game.css'

export default function Rick(){
    const [ricks, setRicks] = useState(null)

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
                <MortyCard
                    key={rick.id}>
                    <img className="" src={rick.image} alt="" />
                    <h1>{rick.name}</h1>
                </MortyCard>
            )) : <h1>loading...</h1>}
        </div>
    )
}