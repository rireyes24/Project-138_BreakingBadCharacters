import Stats from '../utils/interface'


export class CreateCharacter {
    
    // id: 'BB1',
    // name: 'Walter H. White',
    // nickname: 'Heisenberg',
    // birthday: '09-07-1958',
    // status: 'Dead',
    // imageUrl: '',
    // phrase: 'I am the danger!',
    // starring: 'Bryan Cranston',


    constructor(){}

    static create({id, name, nickname, birthday, status, imageUrl, phrase, starring}: Stats)
    {
        const input = document.querySelector(`#BB${id.toString()}`) as HTMLElement

        if(input != null)
        {
            input.innerHTML = `
               

                    <div class="card-name">
                        <h1 class="card-name_name">${name.toLocaleUpperCase()}</h1>
                    </div>

                    <div class="card-image">
                        <img src="${imageUrl}" alt="${name}">
                    </div>

                    <div id="BBB${id.toString()}" class="card-stats">
                        <div class="card-stats_data">
                            <h3 class="">Nickname:</h3>
                            <h4>${nickname}</h4>
                            <h3 class="">Status:</h3>
                            <h4>${status}</h4>
                            <h3 class="">Birthday:</h3>
                            <h4>${birthday}</h4>
                            <h3 class="">Starring:</h3>
                            <h4>${starring}</h4>
                        </div>
                        <p class="card-stats_phase">${phrase}</p>
                    </div>
       
            `;
        }
    }
};
