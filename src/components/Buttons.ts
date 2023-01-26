 
export const buttonsAliveDead = document.createElement('div');
buttonsAliveDead.id = 'buttonsAliveDead';
buttonsAliveDead.className = 'header__buttonsAliveDead';
////////////////////////////////////////////////////////////////


const defaultBtn = document.createElement('button');
defaultBtn.id = 'btnDefault';
defaultBtn.className = 'btnOrder';
defaultBtn.innerText = 'Default';

const defaultBtnDiv = document.createElement('div');
defaultBtnDiv.appendChild(defaultBtn);
////////////////////////////////////////////////////////////////

const aliveBtn = document.createElement('button');
aliveBtn.id = 'btnAlive';
aliveBtn.className = 'btnOrder';
aliveBtn.innerText = 'Alive';

const aliveBtnDiv = document.createElement('div');
aliveBtnDiv.appendChild(aliveBtn);
////////////////////////////////////////////////////////////////

const deadBtn = document.createElement('button');
deadBtn.id = 'btnDead';
deadBtn.className = 'btnOrder';
deadBtn.innerText = 'Dead';

const deadBtnDiv = document.createElement('div');
deadBtnDiv.appendChild(deadBtn);
////////////////////////////////////////////////////////////////

const alphaBtn = document.createElement('button');
alphaBtn.id = 'btnAlpha';
alphaBtn.className = 'btnOrder';
alphaBtn.innerText = 'Alphabetical';

const alphaBtnDiv = document.createElement('div');
alphaBtnDiv.className = 'btnOrder-Alphabetic';
alphaBtnDiv.appendChild(alphaBtn);
////////////////////////////////////////////////////////////////

const familyWhiteBtn = document.createElement('button');
familyWhiteBtn.id = 'btnWhite';
familyWhiteBtn.className = 'btnOrder';
familyWhiteBtn.innerText = 'Family White';

const familyWhiteBtnDiv = document.createElement('div');
familyWhiteBtnDiv.className = 'btnOrder-FWhite';
familyWhiteBtnDiv.appendChild(familyWhiteBtn);
////////////////////////////////////////////////////////////////

const familySalamancaBtn = document.createElement('button');
familySalamancaBtn.id = 'btnSalamanca';
familySalamancaBtn.className = 'btnOrder';
familySalamancaBtn.innerText = 'Family Salamanca';

const familySalamancaBtnDiv = document.createElement('div');
familySalamancaBtnDiv.className = 'btnOrder-familySala';
familySalamancaBtnDiv.appendChild(familySalamancaBtn);
////////////////////////////////////////////////////////////////

buttonsAliveDead.append(defaultBtnDiv, aliveBtnDiv, deadBtnDiv, alphaBtnDiv, familyWhiteBtnDiv, familySalamancaBtnDiv);
