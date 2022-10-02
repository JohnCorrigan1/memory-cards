export default function MortyCard(props){
    return(
        <div className="p-5 bg-blue-300 min-w-1/5">
            {props.children}
        </div>
    )
}