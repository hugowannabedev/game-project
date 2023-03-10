

//Array of cards

const cardsArr = [
   {name: "a", checked: false, image: "css/images/a.png"},
   {name: "b", checked: false, image: "css/images/b.png"},
   {name: "c", checked: false, image: "css/images/c.png"},
   {name: "d", checked: false, image: "css/images/d.png"},
   {name: "e", checked: false, image: "css/images/e.png"},
   {name: "f", checked: false, image: "css/images/f.png"},
   {name: "a", checked: false, image: "css/images/a.png"},
   {name: "b", checked: false, image: "css/images/b.png"},
   {name: "c", checked: false, image: "css/images/c.png"},
   {name: "d", checked: false, image: "css/images/d.png"},
   {name: "e", checked: false, image: "css/images/e.png"},
   {name: "f", checked: false, image: "css/images/f.png"}
];
console.log(cardsArr)

//to randomize the cards
function shuffle () {
    cardsArr.sort(() => 0.5 - Math.random());
} 


const myGrid = document.querySelector('.grid');

for (let i = 0; i < cardsArr.length; i++) {
    
    let card = document.createElement('img');
    card.setAttribute('src', 'css/images/questionmark.png');
    card.setAttribute('data-id', i);
    card.classList.add("card") //css class .card
    myGrid.appendChild(card);
    
    card.addEventListener('click', showCard);
}


let isFirstAttempt = true;
let firstAttempt = null;
let firstCardElement = null;
let disableClick = false;

function showCard() {
    const cardId = this.getAttribute('data-id');

    if (disableClick) {
        return;
    }
    
    if (isFirstAttempt) { //checking if it's the first attempt
        firstCardElement = this; // in order to reuse the 'this', is being kept in a variable
        firstAttempt = cardsArr[cardId];
        firstAttempt.checked = true;
        this.setAttribute('src', firstAttempt.image);
        isFirstAttempt = false;
        console.log('firstAttempt')
    }else {
        const secondAttempt = cardsArr[cardId];
        //show image of second attempt
        this.setAttribute('src', secondAttempt.image);
        console.log('secondAttempt')
        
        
        if (firstAttempt.name === secondAttempt.name) { 
            secondAttempt.checked = true;
            this.removeEventListener('click', showCard);
            console.log('secondAttempt.checked = true')
            let areAllChecked = true; //we're assuming that all cards are checked
            for (let i = 0; i < cardsArr.length; i++) {
                if (cardsArr[i].checked === false) {
                    areAllChecked = false;
                }
            }
            if (areAllChecked) { //which means that all the pairs were found
                console.log('game over')
                //const endElement = document.getElementById("end");
                //console.log(endElement)
                //endElement.classList.remove("hidden");
                //endElement.innerText = "Not bad my friend... Press the button and play again";
                
                restart(); //calling the function in order to reset the game
                shuffle(); //
                alert('Not bad my friend... Press RESTART and play again');
            }
            
        }
         else {

            disableClick = true;
            setTimeout (() => {
                firstAttempt.checked = false;
                this.setAttribute('src', 'css/images/questionmark.png');
                firstCardElement.setAttribute('src', 'css/images/questionmark.png');
                console.log('image back to questionmark');
                disableClick = false;
             }, 1000)
            console.log('firstAttempt = false')
            //turn back the image
        }    
        
        isFirstAttempt = true;
        console.log(cardsArr)
    }
    
}

 //game restart section
 function restart () {
    const restartButton = document.getElementById("restart");
    restartButton.addEventListener("click", () => {
        console.log('restart')

        //const endElement = document.getElementById("end");
        //endElement.classList.add("hidden");

        const cardsReset = document.getElementsByClassName("card");
        for (let i = 0; i < cardsReset.length; i++) {
            cardsReset[i].setAttribute('src', 'css/images/questionmark.png')
            cardsReset[i].addEventListener("click", showCard);
            cardsArr[i].checked = false;
            
        }
    })
 }
 

