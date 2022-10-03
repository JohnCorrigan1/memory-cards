import { useState, useEffect } from 'react';
import MortyCard from '../MortyCard';
import './game.css'

let clicked = [];

export default function Rick(){
    const [ricks, setRicks] = useState(null)

    const clickHandler = (e) => {
        console.log(e.target.alt)
        if(clicked.includes(e.target.alt)){
             alert("loser")
             clicked = []
        }
        else{
            clicked.push(e.target.alt)
            setRicks(shuffle(ricks))  
        } 
    }

    function shuffle(array) {
        let copy = [], n = array.length, i;
        // While there remain elements to shuffle…
        while (n) {
          // Pick a remaining element…
          i = Math.floor(Math.random() * n--);
          // And move it to the new array.
          copy.push(array.splice(i, 1)[0]);
        }
      
        return copy;
      }

    useEffect(() => {
        async function getChars() {
            try {
                const response = await fetch(
                    "https://rickandmortyapi.com/api/character/?page=3&name=rick"
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
            {ricks ? ricks.slice(0, 10).map(rick => (
                <MortyCard
                key={rick.id}
                >
                <img  onClick={clickHandler} src={rick.image} alt={rick.id} />
                    <h1>{rick.name}</h1>
                </MortyCard>
            )) : <h1>loading...</h1>}
        </div>
    )
}