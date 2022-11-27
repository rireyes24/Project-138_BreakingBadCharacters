import dataCharacters from './dataCharacters'




export function animationPage()
{ 
    const buttonOrderBy = document.querySelector('#buttonOrderBy') as HTMLElement;
    const buttonsOrder = document.querySelector('#buttonsOrder') as HTMLElement;
    const sectionListButtons = document.querySelector('.sectionListButtons') as HTMLElement;
    const btnOrder = document.querySelector('.btnOrder') as HTMLElement;
    let isClick = true;


    buttonOrderBy.addEventListener('click', () => {

        //Click ON, Click OFF
        if(isClick === true){ 
            isClick = false;
            buttonsOrder.style.animation = "openListButtons 1s ease forwards";
            sectionListButtons.style.zIndex = "8";
            
        }else{
            isClick = true;
            buttonsOrder.style.animation = "closeListButtons 1s ease forwards";
            buttonsOrder.style.transition = "transform 1s ease";
        }
    });
}


