const Card = (props) => {
    const showCard = (pokemon, index) => {
        return (
            <div className="cardContainer" key={index}>
                <p><h1>{pokemon["name"]["english"]}</h1></p>
                <p><b>Id:</b> {pokemon["id"]} </p>
                <p><b>Type:</b> {pokemon["type"] + " "}</p><hr></hr>
                <p><b>Base:</b>{Object.entries(pokemon.base).map(([key, value]) => key + ":" + value + " , ")}</p>
            </div>
        )
    }
    return (
        props["Database"].map(showCard)
    )
}
export default Card;
