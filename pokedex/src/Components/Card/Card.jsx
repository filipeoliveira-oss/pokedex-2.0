import './card.css'
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function Card(pokemonUrl){

    var url = pokemonUrl.pokemonUrl;
    const [pokemonInfo, setPokemonInfo] = useState({name: '', frontimage: '', cardbg:''})

    useEffect(() =>{
        axios.get(url).then((pokemonUrlResponse)=>{
            var id = url.substring(url.length - 3).replace(/\D/g,'')
            setPokemonInfo({
                name: pokemonUrlResponse.data.name, 
                frontimage: pokemonUrlResponse.data.sprites.other.dream_world.front_default, 
                cardbg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            })
        })
    },[])


    return(
        <div className="card">
            {/* <img className="logo" src={logo} alt="" /> */}
            <h3 className="logo">{pokemonInfo.name}</h3>
            <img className="front-image" src={pokemonInfo.frontimage} alt="" />
            <img src={pokemonInfo.cardbg} alt="" className="cardbg" />
        </div>
    )

}