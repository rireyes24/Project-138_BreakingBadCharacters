import dataCharacters from './dataCharacters'


//Get Alive
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

console.log(total);
    


const dead = dataCharacters.map(item => {
    let newDead = 0;
    if(item.status === "Dead")
    {
        newDead = item.id
    }
    return newDead;
});

export const total2 = dead.filter(filtro => filtro != 0);
