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

        // Card Name
        ////////////////////////////////////////////////////////////////
            const cardName = document.createElement('div');
            cardName.className = 'card-name';

            const cardName_name = document.createElement('h1');
            cardName_name.className = 'card-name_name';
            cardName_name.innerText = `${name.toLocaleUpperCase()}`;

            cardName.appendChild(cardName_name);
            
        // Card Image
        ////////////////////////////////////////////////////////////////
            const cardImage = document.createElement('div');
            cardImage.className = 'card-image';

            const image = document.createElement('img');
            image.src = `${imageUrl}`;
            image.loading = 'lazy';
            image.alt = `${name}`

            cardImage.appendChild(image);
        
        // Card Status
        ////////////////////////////////////////////////////////////////
            const cardStats = document.createElement('div');
            cardStats.id = `BBB${id.toString()}`;
            cardStats.className = 'card-stats';

            const cardStats_data = document.createElement('div');
            cardStats_data.className = 'card-stats_data';

            //nickname
            const nicknameH3 = document.createElement('h3');
            nicknameH3.innerText = 'Nickname:';
            const nicknameH4 = document.createElement('h4');
            nicknameH4.innerText = `${nickname}`;

            //status
            const statusH3 = document.createElement('h3');
            statusH3.innerText = 'Status:';
            const statusH4 = document.createElement('h4');
            statusH4.innerText = `${status}`;

            //birthday
            const birthdayH3 = document.createElement('h3');
            birthdayH3.innerText = 'Birthday:';
            const birthdayH4 = document.createElement('h4');
            birthdayH4.innerText = `${birthday}`;

            //starring
            const starringH3 = document.createElement('h3');
            starringH3.innerText = 'Starring:';
            const starringH4 = document.createElement('h4');
            starringH4.innerText = `${starring}`;

            cardStats_data.append(nicknameH3, nicknameH4, statusH3, statusH4, birthdayH3, birthdayH4, starringH3, starringH4);

            //phrase
            const phraseP = document.createElement('p');
            phraseP.className = 'card-stats_phase';
            phraseP.innerText = `${phrase}`;
           
            cardStats.append(cardStats_data, phraseP);
        

            input.append(cardName, cardImage, cardStats);
            
        }
    }
};
