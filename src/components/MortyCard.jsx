export default function MortyCard(props){
    return(
        <div className="p-5 bg-blue-300">
            {props.children}
        </div>
    )
}