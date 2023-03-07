//Array of cards

const cardsArr = [
   {name: "a", image: "css/images/a.png"},
   {name: "b", image: "css/images/b.png"},
   {name: "c", image: "css/images/c.png"},
   {name: "d", image: "css/images/d.png"},
   {name: "a", image: "css/images/a.png"},
   {name: "b", image: "css/images/b.png"},
   {name: "c", image: "css/images/c.png"},
   {name: "d", image: "css/images/d.png"}
];
console.log(cardsArr)


//const cards = document.getElementsByClassName('grid')
const myGrid = document.querySelector('.grid');

for (let i = 0; i < cardsArr.length; i++) {
    let card = document.createElement('img');
    card.setAttribute('src', 'css/images/questionmark.png');
    card.setAttribute('data-id', i);

    myGrid.appendChild(card);

    card.addEventListener('click', showCard)


    
}


function showCard() {
    const cardSelected = [];
    let cardId = this.getAttribute('data-id');
    this.setAttribute('src', cardsArr[cardId].image);
    //we're pushing the name of the array into the card selected
    cardSelected.push(cardsArr[cardId].name);

    
    //console.log(cardsArr[cardId].name);
    //console.log('CLICKED', cardId);
}

