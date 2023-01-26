import {registrarImagen} from '../utils/observer'


export const RenderCharacters = (getIDs: number[]) : string | Node | any => {

    const sectionCard = document.querySelector('#sectionCards');

    for(let i = 0; i < getIDs.length; i++)
    {
        const divCard = document.createElement('div');
        divCard.id = `BB${getIDs[i]}`;
        divCard.className = 'section_card';

        sectionCard?.append(divCard);
    }

    registrarImagen(sectionCard);
    
}

