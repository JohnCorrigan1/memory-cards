export default function Header() {
    return(
        <div className="bg-blue-400 flex justify-between pl-10 pr-10 pt-5 pb-5">
            <h1>Rick & Morty Memory Game</h1>
            <div className="flex gap-10">
                <h2>Morty</h2>
                <h2>Rick</h2>
                <h2>Everyone</h2>
            </div>
        </div>
    )
}