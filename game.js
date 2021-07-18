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
]

const grid = document.querySelector('grid')
//create the board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card  = document.createElement('img')
        card.setAttribute('src', 'assets/images/envelope100.png')
        card.setAttribute('data-id', i)
        //card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}
createBoard()