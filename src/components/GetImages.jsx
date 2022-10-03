import { useEffect, useState } from "react";

import MortyCard from "./MortyCard";

export default function GetImages() {

    const [mortys, setMortys] = useState(null)

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
        <div className="gird grid-cols-2">

        {mortys ? mortys.map(morty => (
            <MortyCard
            key={morty.id}>
            <img className="" src={morty.image} alt="" />
            <h1>{morty.name}</h1>
            </MortyCard>
        )) : <h1>loading...</h1>}
        </div>
    )
}