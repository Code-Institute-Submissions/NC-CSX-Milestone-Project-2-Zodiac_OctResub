document.addEventListener('DOMContentLoaded', () => {
//card options
const cardArray = [ 
    {
name: 'bull',
img: 'assets/images/bull100.png'
},
{
    name: 'bull',
    img: 'assets/images/bull100.png'
    },
{
name: 'chicken',
img: 'assets/images/chicken100.png'
},
{
    name: 'chicken',
    img: 'assets/images/chicken100.png'
    },
{
    name: 'dog',
img: 'assets/images/dog100.png'
},
{
    name: 'dog',
img: 'assets/images/dog100.png'
},
{
    name: 'dragon',
img: 'assets/images/dragon100.png'
},
{
    name: 'dragon',
img: 'assets/images/dragon100.png'
},
{
    name: 'goat',
img: 'assets/images/goat100.png'
},
{
    name: 'goat',
img: 'assets/images/goat100.png'
},
{
    name: 'horse',
img: 'assets/images/horse100.png'
},
{
    name: 'horse',
img: 'assets/images/horse100.png'
},
{
    name: 'monkey',
img: 'assets/images/monkey100.png'
},
{
    name: 'monkey',
img: 'assets/images/monkey100.png'
},
{
    name: 'pig',
img: 'assets/images/pig100.png'
},
{
    name: 'pig',
img: 'assets/images/pig100.png'
},
{
    name: 'rabbit',
img: 'assets/images/rabbit100.png'
},
{
    name: 'rabbit',
img: 'assets/images/rabbit100.png'
},
{
    name: 'rat',
img: 'assets/images/rat100.png'
},
{
    name: 'rat',
img: 'assets/images/rat100.png'
},
{
    name: 'snake',
img: 'assets/images/snake100.png'
},
{
    name: 'snake',
img: 'assets/images/snake100.png'
},
{
    name: 'tiger',
img: 'assets/images/tiger100.png'
},
{
    name: 'tiger',
img: 'assets/images/tiger100.png'
},
];
});

cardArray.sort(() => 0.5 - Math.random());
    

const grid = document.querySelector('grid');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];
const resultDisplay = document.querySelector('#result');

//create the board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card  = document.createElement('img');
        card.setAttribute('src', 'assets/images/envelope100.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}
//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You have a match');
        cards[optionOneId].setAttribute('src', 'assets/images/envelope100.png');
    cards[optionTwoId].setAttribute('src', 'assets/images/envelope100.png');
   cardsWon.push(cardsChosen);
} else {
    cards[optionOneId].setAttribute('src', 'assets/images/envelope100.png');
    cards[optionTwoId].setAttribute('src', 'assets/images/envelope100.png');
    alert('Sorry, try again');
}
cardsChosen = [];
cardsChosenId = [];
resultDisplay.textContent = cardsWon.length;
if (cardsWon.length ===cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations you freed them all';
    
}
}

//flip the card
function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray)[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId.img]);
    if(cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500);
    }
}

createBoard();
