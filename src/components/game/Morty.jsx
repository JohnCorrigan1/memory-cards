import { useState, useEffect } from 'react';
import './game.css'
import MortyCard from "../MortyCard";

let clicked = [];

export default function Morty() {

    const [mortys, setMortys] = useState(null)

    const clickHandler = (e) => {
        console.log(e.target.alt)
        if(clicked.includes(e.target.alt)){
             alert("loser")
             clicked = []
        }
        else{
            clicked.push(e.target.alt)
            setMortys(shuffle(mortys))  
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
                    "https://rickandmortyapi.com/api/character/?page=2&name=morty"
                );
                const rickandmortyapi = await response.json();

                console.log(rickandmortyapi.results)
                setMortys(rickandmortyapi.results)
            }
            catch (err) {
                alert("Cannot find that morty")
            }
        }
        getChars()
    }, [])

    return (
        <div className="grid-container justify-center gap-5 mt-5">
            {mortys ? mortys.slice(0, 10).map(morty => (
                <MortyCard
                    key={morty.id}>
                    <img onClick={clickHandler} src={morty.image} alt={morty.id} />
                    <h1>{morty.name}</h1>
                </MortyCard>
            )) : <h1>loading...</h1>}
        </div>
    )


}