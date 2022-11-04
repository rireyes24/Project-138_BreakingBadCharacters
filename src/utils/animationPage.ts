import dataCharacters from './dataCharacters'

export function animationPage()
{
    dataCharacters.forEach(items => {
        const idCard = document.querySelector(`#BB${items.id}`) as HTMLElement;
        const idInfoCard = document.querySelector(`#BBB${items.id}`) as HTMLElement;
        idCard.addEventListener('click', () => {
            const newIDCard = "B" + idCard.id;
            if(newIDCard === idInfoCard.id)
            {
                idCard.style.height = "520px"
    
                idInfoCard.style.transform = "translateY(140px)";
                idInfoCard.style.transition = "500ms ease all"
            }
        });
    })
}