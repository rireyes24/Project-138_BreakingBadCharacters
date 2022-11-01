import './styles/styles-header.css'
import './styles/styles-card.css';
import './styles/styles-buttons.css';
import './styles/styles-footer.css'
import {CreateCharacter} from './classes/CreateCharacter'
import dataCharacters from './utils/dataCharacters'
import { HeaderBar } from './components/HeaderBar' 
import { Buttons } from './components/Buttons';
import {RenderCharacters} from './components/RenderCharacters'
import {total, total2} from './utils/getData'
import { Footer } from './components/Footer';
import {getIDs, getIDsAlphabetically} from './utils/getData';




//Renderiza la barra del Header
export const renderHeader = document.querySelector('#headerBar') as HTMLElement;
if(renderHeader != null){
    renderHeader.innerHTML = HeaderBar;
}

//Renderiza los Buttons
export const inputButtons = document.querySelector('#buttons') as HTMLElement;
if(inputButtons != null)
{
    inputButtons.innerHTML = Buttons;
}

//Renderiza las Cards
const selector = document.querySelector('#sectionCards') as HTMLElement;
if(selector != null)
{
    selector.innerHTML = RenderCharacters(getIDs);
}

//Crea los personajes
function generatorCharacters()
{
    dataCharacters.forEach(items => {
        CreateCharacter.create(items);
    })
    
}
generatorCharacters();



//Genera el click del boton Default
const btnDefault = document.querySelector('#btnDefault') as HTMLElement;
btnDefault.addEventListener('click', () => {
    selector.innerHTML = RenderCharacters(getIDs);
    generatorCharacters();
});


//Genera el click del boton Alphabetical
const btnAlphabetical = document.querySelector('#btnAlphabetical') as HTMLElement;
btnAlphabetical.addEventListener('click', () => {
    selector.innerHTML = RenderCharacters(getIDsAlphabetically);
    generatorCharacters();
});




//Renderiza el Footer
const renderFooter = document.querySelector('#infoFooter') as HTMLElement;
if(renderFooter != null)
{
    renderFooter.innerHTML = Footer;
}




//Genera el CLick de el boton Alive.
const btnAlive = document.querySelector("#btnAlive") as HTMLElement;
btnAlive.addEventListener('click', () => {
   
    total.forEach(items => {
        CreateCharacter.create(dataCharacters[items])
        const divAlive =  document.querySelector(`#BB${items}`) as HTMLElement;
        divAlive.style.display = 'block';
    });
    total2.forEach(items => {
        const divDead = document.querySelector(`#BB${items}`) as HTMLElement;
        divDead.style.display = 'none';
    });
    console.log();
});

//Genera el click de el boton Dead
const btnDead = document.querySelector('#btnDead') as HTMLElement;
btnDead.addEventListener('click', () => {
    total2.forEach(items => {
        CreateCharacter.create(dataCharacters[items])
        const divDead = document.querySelector(`#BB${items}`) as HTMLElement;
        divDead.style.display = 'block';
    });
    total.forEach(items => {
        const divAlive =  document.querySelector(`#BB${items}`) as HTMLElement;
        divAlive.style.display = 'none';
    });
})