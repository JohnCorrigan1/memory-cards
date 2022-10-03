import Rick from './../../assets/rick.svg'
import Morty from './../../assets/morty.svg'
import Rick_Morty from './../../assets/rick_morty.png'
import './images.css'


export default function Instructions(props){

    const mortyGame = () => {
        props.onMortySelect();
    }

    const rickGame = () => {
        props.onRickSelect();
    }

    return(
        <div className="flex flex-col justify-center items-center mt-10">
            <h1>How to play?</h1>
            <h2>Choose a mode Rick, Morty, or everyone</h2>
            <p>You will be presented a page with 10 images</p>
            <p>Click an image you haven't seen yet</p>
            <p>Everytime you click an image a new set of 10 will appear</p>
            <p>For each level there are 20 possible images you will see</p>
            <p>Get 10 correct clicks in a row to advance to the next level</p>
            <p>Advance to and complete level 3 to win</p>
            <div className='flex gap-20 mt-10'>
                <img onClick={mortyGame} className='image' src={Morty} alt="" />
                <img onClick={rickGame} className='image' src={Rick} alt="" />
                <img className='image' src={Rick_Morty} alt="" />
            </div>
        </div>
    )
}