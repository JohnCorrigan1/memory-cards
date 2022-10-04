export default function MortyCard(props){
    return(
        <div className="p-5 bg-blue-300 rounded-lg shadow-md shadow-emerald-600">
            {props.children}
        </div>
    )
}