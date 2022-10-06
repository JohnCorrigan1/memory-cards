import './instructions.css'

export default function CharacterCard(props){
    return(
        <div className="card p-5 flex justify-center items-center bg-slate-200 rounded-lg shadow-md shadow-slate-600">
            {props.children}
        </div>
    )
}