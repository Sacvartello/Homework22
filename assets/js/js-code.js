//1
const btn1 = document.querySelector('#btn1')
btn1.addEventListener('click', clickerForBtn1)
function clickerForBtn1 (){
    alert('Привіт тобі, клацальщик!');

}
//2
const a = document.querySelector('a')
a.addEventListener('click', clickerForA)
function clickerForA (){
    const btn2 = document.createElement('button')
    btn2.textContent = 'button'
    document.body.append(btn2)
    a.removeEventListener('click', clickerForA)
}
//3
const lamp = document.querySelector('.lamp')
const btnOn = document.querySelector('#btnOn')
const btnOff = document.querySelector('#btnOff')
btnOn.addEventListener('click', clickerForBtnOn)
btnOff.addEventListener('click', clickerForBtnOff)
function clickerForBtnOn(){
    lamp.style.backgroundColor = 'rgb(255, 241, 114)'
    lamp.style.border = '1px, solid, white'
}
function clickerForBtnOff(){
    lamp.style.backgroundColor = 'gray'
    lamp.style.border = '1px, solid, black'
}