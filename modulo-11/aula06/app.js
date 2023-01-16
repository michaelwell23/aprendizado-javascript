const getPokemons = async () => {
  const bulbasaur = fetch('https://pokeapi.co/api/v2/pokemon/1')
  const charmander = fetch('https://pokeapi.co/api/v2/pokemon/4')
  const squirtle = fetch('https://pokeapi.co/api/v2/pokemon/7')

  const results = await Promise.all([bulbasaur, charmander, squirtle])
  results.forEach(async response => console.log(await response.json()))
}

getPokemons()

// TRY AND CATCH
try{
  console.log(oi)
}catch(error){
  if(error.name === 'ReferenceError' && error.message === 'oi is not defined'){
    const oi = 'const oi criada'
    console.log(oi)
  }
}
console.log('oi')

// TRY AND CATCH IN REQUEST'S
const getUsers = async() => {
  try{
    const response = await fetch('./json/todoss.json')
    if(!response.ok){
      throw new Error('Não foi possível obter os dados')
    }
    return response.json()
  }catch(error){
    console.log(error.message)
  }
}

const logUsers = async () => {
  const users = await getUsers()
  console.log(users)
}

logUsers()