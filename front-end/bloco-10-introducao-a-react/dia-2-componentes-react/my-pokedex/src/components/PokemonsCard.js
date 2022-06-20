import React from "react";
import pokemonsList from "../services/data";

class PokemonsCard extends React.Component {
    render() {
        return (
            <div className="geral">
                {pokemonsList.map((char) => (
                    <div className="pokeCard">
                        <img src={char.image} alt="name" />
                        <p>{char.name}</p>
                        <p>{char.type}</p>
                        <p>Average weight: {char.averageWeight.value}
                            {char.averageWeight.measurementUnit} </p>
                    </div>   
                ))}
            </div>
        )
    }
}

export default PokemonsCard;