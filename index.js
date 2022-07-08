console.log('hello world')

//list of compliments that can be used
let compArr = [`You look great!`,`I like your shirt!`,`Hey! Nice smile!`,`You're doing fantastic!`,`You look like a million bucks!`,`Lookin' good!`,`You inspire people!`,`You're a great friend!`,`I think you are awesome!`,`You are very kind!`,`You can do anything!`,`You're such a thoughtful person!`,`You never cease to amaze me!`,`You're fearless!`,`I love your sense of style!`,`Your smile lights up a room`]

//function that ties in with the compliment-btn in index.html
const addComp = (evt) => {
    evt.preventDefault()
    let randomComp = Math.floor(Math.random()* compArr.length)
    let oP = document.querySelector('#output')
    oP.value = compArr[randomComp]  
}

//Event listening for button click to execute addComp function
document.querySelector('#compliment-btn').addEventListener('click',addComp)
