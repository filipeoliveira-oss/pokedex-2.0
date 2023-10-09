import { useEffect, useLayoutEffect, useState } from "react";
import Card from "../Card/card";
import './PokemonsContainer.css'
import axios from 'axios'

export default function PokemonsContainer(){

    const [pokemonList, setPokemonList] = useState([{}])
    const [nextPokemonList, setNextPokemonList] = useState('')




    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/').then((pokemonResponse)=>{
            
            setPokemonList(pokemonResponse.data.results)
            setNextPokemonList(pokemonResponse.data.next)
        })
    },[])

    return(
        <div className="PokemonsContainer">
            <div className="pokemons">
                {pokemonList.map((item) =>{
                    return(
                        <Card pokemonUrl={item.url} key={item.url}/>
                    )
                })}
            </div>
        </div>
    )
}