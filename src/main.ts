import './styles/styles.css'
import './styles/header.css'
// import './styles/card.css';
import './styles/buttons.css';
import './styles/footer.css'
// import './styles/mediaQueries.css'
import {CreateCharacter} from './classes/CreateCharacter'
import dataCharacters from './utils/dataCharacters'
import { HeaderBar } from './components/HeaderBar' 
import { Buttons } from './components/Buttons';
import {RenderCharacters} from './components/RenderCharacters'
import {getIDs, getIDsAlphabetically, getIDsAlive, getIDsDead} from './utils/getData'
import { Footer } from './components/Footer';
import {animationPage} from './utils/animationPage'


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
    animationPage();
}
generatorCharacters();



//Genera el click del boton Default
const btnDefault = document.querySelector('#btnDefault') as HTMLElement;
btnDefault.addEventListener('click', () => {
    selector.innerHTML = RenderCharacters(getIDs);
    generatorCharacters();

    buttonsOrder.style.animation = "closeListButtons 1s ease forwards";
});


//Genera el click del boton Alphabetical
const btnAlphabetical = document.querySelector('#btnAlphabetical') as HTMLElement;
btnAlphabetical.addEventListener('click', () => {
    selector.innerHTML = RenderCharacters(getIDsAlphabetically);
    generatorCharacters();

    buttonsOrder.style.animation = "closeListButtons 1s ease forwards";
});


//Genera el click del boton Alive
const btnAlive = document.querySelector("#btnAlive") as HTMLElement;
const buttonsOrder = document.querySelector('#buttonsOrder') as HTMLElement;
btnAlive.addEventListener('click', () => {
    selector.innerHTML = RenderCharacters(getIDsAlive);
    generatorCharacters();

    buttonsOrder.style.animation = "closeListButtons 1s ease forwards";
})


//Genera el click del boton Dead
const btnDead = document.querySelector('#btnDead') as HTMLElement;
btnDead.addEventListener('click', () => {
    selector.innerHTML = RenderCharacters(getIDsDead);
    generatorCharacters();

    buttonsOrder.style.animation = "closeListButtons 1s ease forwards";
})


//Renderiza el Footer
const renderFooter = document.querySelector('#infoFooter') as HTMLElement;
if(renderFooter != null)
{
    renderFooter.innerHTML = Footer;
}