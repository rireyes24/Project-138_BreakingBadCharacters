import dataCharacters from './dataCharacters'

export function animationPage()
{ 

    

    dataCharacters.forEach(items => {
        const idCard = document.querySelector(`#BB${items.id}`) as HTMLElement;
        const idInfoCard = document.querySelector(`#BBB${items.id}`) as HTMLElement;
        let saveID = "";
        saveID = idCard.id;
        let isOpen = true;

        if(isOpen == true)
        {
            idCard.addEventListener('click', () => {
                
                idCard.style.marginBottom = "140px"    
                idInfoCard.style.transform = "translateY(140px)";
                idInfoCard.style.transition = "500ms ease all"
                saveID = idInfoCard.id;
               
            })
            isOpen = false;
            console.log(isOpen);
        }
            // if(close == true)
            // {
            //     idCard.addEventListener('click', () => {
                
            //         if(saveID)
            //         {
            //             idCard.style.height = "360px"
            //             console.log(close);
            //             idInfoCard.style.transform = "translateY(0px)";
            //             idInfoCard.style.transition = "500ms ease all"
            //             close = false;
            //         }
            //     })
            // }

    })

    
 

    const dataC = dataCharacters.forEach(items => {

        const idCard = document.querySelector(`#BB${items.id}`) as HTMLElement;
        const idInfoCard = document.querySelector(`#BBB${items.id}`) as HTMLElement;
        
        let newIDCard = "B" + idCard.id;
        
        //Genero el click.
        idCard.addEventListener('click', () => {
            
            // if(newIDCard === idInfoCard.id)
            // {
            //     idCard.style.height = "520px"
    
            //     idInfoCard.style.transform = "translateY(140px)";
            //     idInfoCard.style.transition = "500ms ease all"
            //     saveID = idInfoCard.id;
                
            // } else if(saveID == idInfoCard.id)
            // {
            //     idCard.style.height = "360px"
    
            //     idInfoCard.style.transform = "translateY(0px)";
            //     idInfoCard.style.transition = "500ms ease all"
            // }
        });
    })
    
    console.log(dataC);

}