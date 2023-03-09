


//Array of cards
const cardsArr = [
   {name: "a", checked: false, image: "css/images/a.png"},
   {name: "b", checked: false, image: "css/images/b.png"},
   {name: "c", checked: false, image: "css/images/c.png"},
   {name: "d", checked: false, image: "css/images/d.png"},
   {name: "a", checked: false, image: "css/images/a.png"},
   {name: "b", checked: false, image: "css/images/b.png"},
   {name: "c", checked: false, image: "css/images/c.png"},
   {name: "d", checked: false, image: "css/images/d.png"}
];
console.log(cardsArr)

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
            card.removeEventListener('click', showCard);
            console.log('secondAttempt.checked = true')
            let areAllChecked = true; //we're assuming that all cards are checked
            for (let i = 0; i < cardsArr.length; i++) {
                if (cardsArr[i].checked === false) {
                    areAllChecked = false;
                }
            }
            if (areAllChecked) { //which means that all the pairs were found
                console.log('game over')
                const endElement = document.getElementById("end");
                console.log(endElement)
                endElement.innerText = "Not bad my friend... Press the button start again";
                
                restart(); //calling the function
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

        const cardsReset = document.getElementsByClassName("card");
        for (let i = 0; i < cardsReset.length; i++) {
            cardsReset[i].setAttribute('src', 'css/images/questionmark.png')

            cardsReset.addEventListener("click", showCard);
        }

    })
 }
 

