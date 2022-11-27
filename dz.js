
// DZ /////////////////////////////
const div = document.querySelectorAll('.wrapper > div')
let arrRed = []
let arrBlack = []
for(i = 0; i < div.length; i++){
    if([i]%2 ===0) {
        div[i].classList.add('red')
    } else {
        div[i].classList.add('black')
    }
}
// for(i = 0; i < arrRed.length; i++){
//     arrRed[i].classList.add('red')
// }

// for(i = 0; i < arrBlack.length; i++){
//     arrBlack[i].classList.add('black')
// }

let wrapper = document.querySelector('.wrapper')
wrapper.classList.add('wrapper')



console.log(div)
console.log(arrRed)
console.log(arrBlack)


/// DZ////////////////////////