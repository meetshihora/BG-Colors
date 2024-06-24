const randomcolor = function(){
    const hax = '0123456789ABCDEF'
    let color = '#'
    for (i=0;i<6;i++){
        color += hax[Math.floor(Math.random()*16)]
    }
    return color
} 
let intervalId 
const startChangingColor = function(){
    intervalId = setInterval(changeBgColor,1000)
    function changeBgColor() {
        document.body.style.backgroundColor = randomcolor()
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)