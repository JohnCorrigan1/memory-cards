import { useState, useEffect } from 'react';
import CharacterCard from '../ui/CharacterCard';
import './game.css'

let clicked = [];

export default function Game(props) {
    const [characters, setCharacters] = useState(null)
    const [level, setLevel] = useState(1)
    const [streak, setStreak] = useState(0)

    const clickHandler = (e) => {
        if (clicked.includes(e.target.alt)) {
            clicked = []
            setStreak(0)
            setLevel(1)
            alert("loser")
        }
        else {
            clicked.push(e.target.alt)
            setStreak(streak + 1)
            setCharacters(shuffle(characters))
            if (clicked.length === 10) {
                setLevel(level + 1)
                clicked = []
                setStreak(0)
                alert("Level complete")
            }
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
            if (props.getMode === 'everyone') {
                try {

                    const response = await fetch
                    (
                    `https://rickandmortyapi.com/api/character/?page=${level}`
                    )

                    const rickandmortyapi = await response.json();

                    setCharacters(rickandmortyapi.results)
                }
                catch (err) {
                    alert("cannot find characters")
                }
            }
            else {
                try {

                    const response = await fetch
                    (
                    `https://rickandmortyapi.com/api/character/?name=${props.getMode}&page=${level}`
                    )

                    const rickandmortyapi = await response.json();

                    setCharacters(rickandmortyapi.results)
                }
                catch (err) {
                    alert("cannot find characters")
                }
            }
        }
        getChars()
    }, [level, props.getMode])


    return (
        <div className='mr-5 ml-5 mb-5'>
            <h1 className='mt-5'>Level: {level} ({streak} / 10)</h1>
            <div className="grid-container justify-center gap-5 mt-5">
                {characters ? characters.slice(0, 10).map(char => (
                    <CharacterCard
                        key={char.id}>
                        <img onClick={clickHandler} className="" src={char.image} alt={char.id} />
                    </CharacterCard>
                )) : <h1>loading...</h1>}
            </div>
        </div>
    )
}