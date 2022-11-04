import dataCharacters from './dataCharacters'
import Stats from './interface';

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




//Get Characters Alive and Characters Dead

//Array of type Stats(My interface)
let getAlive: Stats[] = [];
let getDead: Stats[] = [];
dataCharacters.forEach(items => {
    if(items.status === "Alive")
    {   
        getAlive.push(items);
        getAlive.sort((a, b) => a.id - b.id);
    }
    if(items.status === "Dead")
    {
        getDead.push(items);
        getDead.sort((a, b) => a.id - b.id);
    }
});

//Get IDs Alive and Dead
export const getIDsAlive = getAlive.map(items => {
    return items.id;
});
export const getIDsDead = getDead.map(items => {
    return items.id;
});