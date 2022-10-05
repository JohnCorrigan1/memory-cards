import './images.css'

export default function CharacterCard(props){
    return(
        <div className="card p-5 flex justify-center items-center bg-slate-300 rounded-lg shadow-md shadow-black">
            {props.children}
        </div>
    )
}