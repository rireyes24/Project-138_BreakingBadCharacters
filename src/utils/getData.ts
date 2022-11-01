import dataCharacters from './dataCharacters'

//Get IDs
const IDs = dataCharacters.map(idCharacters => {
    return idCharacters.id;
});
export const getIDs = IDs;




//Sort The Names Alphabetically
export const dataCharactersAlphabetical =  dataCharacters.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA < nameB)
    {
        return -1;
    }
    if(nameA > nameB)
    {
        return 1;
    }

    return 0;
});

//Get IDs Alphabetical Names
export const getIDsAlphabetically = dataCharactersAlphabetical.map(item => {
    return item.name, item.id;
});




//Get Alive

//usar sort y luego eliminar los datos de los muertos
//o separarlos en 2 arays diferentes
const alive = dataCharacters.map(item => {
    let newAlive = 0;
    if(item.status === "Alive")
    {
        newAlive = item.id;
    }
    return newAlive;
})

//Filtro los items vacios
export const total = alive.filter(filtro => filtro != 0);

//Get Dead
const dead = dataCharacters.map(item => {
    let newDead = 0;
    if(item.status === "Dead")
    {
        newDead = item.id
    }
    return newDead;
});

export const total2 = dead.filter(filtro => filtro != 0);


