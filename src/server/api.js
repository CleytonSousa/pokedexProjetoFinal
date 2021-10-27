export const searchPokemon = async (pokemon) => {
    try{
        if(pokemon === null || pokemon === '' || pokemon === undefined){
            return
        } else {
            let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const response = await fetch(url)
            const data = await response.json()
            return data;
        }
        
    } catch (err){
        console.log(err)
    }
}

export const getPokemons = async (limit=20, offset=0) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}$offset=${offset}`
        const response = await fetch(url)
        const data = await response.json()
        return data;
    } catch (err){
        console.log(err)
    }
}

export const getPokemonData = async (url) => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data;
    } catch(err){
        console.log(err)
    }
}