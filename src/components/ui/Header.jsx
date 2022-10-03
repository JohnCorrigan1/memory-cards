import './header.css'

export default function Header(props) {

    const backToHome = () => {
        props.onHomeSelect()
    }

    const loadMorty = () => {
        props.onMortySelect()    
    }

    const loadRick = () => {
        props.onRickSelect()
    }

    return(
        <div className="bg-blue-400 flex justify-between pl-10 pr-10 pt-5 pb-5">
            <h1 onClick={backToHome} className="title">Rick & Morty Memory Game</h1>
            <div className="flex gap-10">
                <h2 className="title" onClick={loadMorty}>Morty</h2>
                <h2 className='title' onClick={loadRick}>Rick</h2>
                <h2>Everyone</h2>
            </div>
        </div>
    )
}