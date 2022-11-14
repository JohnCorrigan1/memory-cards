import Rick from './../../assets/rick.svg'
import Morty from './../../assets/morty.svg'
import Rick_Morty from './../../assets/rick_morty.png'
import './instructions.css'


export default function Instructions(props) {

    const mortyGame = () => {
        props.onMortySelect();
    }

    const rickGame = () => {
        props.onRickSelect();
    }

    const everyoneGame = () => {
        props.onEveryoneSelect();
    }

    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className='text-xl font-bold mr-6'>How to play?</h1>
            <ul>
            <li>Choose a mode Rick, Morty, or everyone</li>
            <li>You will be presented a page with 10 images</li>
            <li>You must click an image that you have not clicked before</li>
            <li>On every click a new set of 10 images will appear</li>
            <li>There are 20 possible images for each level</li>
            <li>Get 10 in a row to advance to the next level</li>
            <li>Complete level 3 to win</li>
            </ul>
            <div className='modes mt-10'>
                <img onClick={mortyGame} className='image' src={Morty} alt="" />
                <img onClick={rickGame} className='image' src={Rick} alt="" />
                <div className='both'>
                    <img onClick={everyoneGame} className='image' src={Rick_Morty} alt="" />
                </div>
            </div>
        </div>
    )
}