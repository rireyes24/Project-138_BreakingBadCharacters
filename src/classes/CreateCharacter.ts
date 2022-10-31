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
                <section class="section_card">

                    <div class="card-name">
                        <h1 class="card-name_name">${name}</h1>
                    </div>

                    <div class="card-image">
                        <img src="${imageUrl}" alt="${name}">
                    </div>

                    <div class="card-stats">
                        <div class="card-stats_data">
                            <h3 class="">Nickname: <span>${nickname}</span></h3>
                            <h3 class="">Status: <span>${status}</span></h3>
                            <h3 class="">Birthday: <span>${birthday}</span></h3>
                            <h3 class="">Starring: <span>${starring}</span></h3>
                        </div>
                        <p class="card-stats_phase">${phrase}</p>
                    </div>
                </section>
            `;
        }
    }
};
