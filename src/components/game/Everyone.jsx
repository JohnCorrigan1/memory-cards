import { useState, useEffect } from 'react';
import MortyCard from '../MortyCard';
import './game.css'

let clicked = [];

export default function Everyone() {

    const [characters, setCharacters] = useState(null)

    const clickHandler = (e) => {
        console.log(e.target.alt)
        if(clicked.includes(e.target.alt)){
             alert("loser")
             clicked = []
        }
        else{
            clicked.push(e.target.alt)
            setCharacters(shuffle(characters))  
        } 
    }

    function shuffle(array) {
        let copy = [], n = array.length, i;
        while (n) {
          i = Math.floor(Math.random() * n--);
          copy.push(array.splice(i, 1)[0]);
        }
        return copy;
      }

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
            {characters ? characters.slice(0, 10).map(char => (
                <MortyCard
                    key={char.id}>
                    <img onClick={clickHandler} className="" src={char.image} alt={char.id} />
                    <h1>{char.name}</h1>
                </MortyCard>
            )) : <h1>loading...</h1>}
        </div>
    )
}