
// Card Flip


// const card = document.querySelectorAll('.card')
// card.forEach(element => {
//         element.addEventListener('click', function() {
//             console.log('event fired')
//             for (let i = 0; i < 2; i++) {
//                 console.log("Looping")
//                 element.classList.toggle('is-flipped')
//             }  
//         }, {once: true} )
//     })

// create loop to only allow two cards to be flipped before reseting the game
const card = document.querySelectorAll('.card')
card.forEach(element => {
    element.addEventListener('click', function() {
        element.classList.toggle('is-flipped')
    }, {
        once: true
    })
})
