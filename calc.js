'use strict';
let input = document.getElementById('inp');
let vvod = document.getElementById('vvod');
let innerInp = input.innerHTML;
let result = document.getElementById('result');
const btn7 = document.getElementById('btn7');
btn7.addEventListener('click', () => {
    input.value = '7';  
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp;
});

const btn6 = document.getElementById('btn6');
btn6.addEventListener('click', () => {
    input.value = '6';
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp;
});
const btnPlus = document.getElementById('btnPlus');
btnPlus.addEventListener('click', () => {
    input.value = '+';
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp; 
})

const btn40 = document.getElementById('btn40');
btn40.addEventListener('click', () => {
    input.value = '(';
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp;
})

const btn41 = document.getElementById('btn41');
btn41.addEventListener('click', () => {
    input.value = ')';
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp;
})

const btn8 = document.getElementById('btn8');
btn8.addEventListener('click', () => {
    input.value = '8';
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp;
})

const btn9 = document.getElementById('btn9');
btn9.addEventListener('click', () => {
    input.value = '9';
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp;
})

const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
    input.value = '4';
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp;
})

const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', () => {
    input.value = '5';
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp;
})

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    input.value = '1';
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp;
})

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
    input.value = '2';
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp;
})

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
    input.value = '3';
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp;
})

const btn0 = document.getElementById('btn0');
btn0.addEventListener('click', () => {
    input.value = '0';
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp;
})

const btnDot = document.getElementById('btnDot');
btnDot.addEventListener('click', () => {
    input.value = '.';
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp;
})

const btnMinus = document.getElementById('btnMinus');
btnMinus.addEventListener('click', () => {
    input.value = '-';
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp;
})

const btnMult = document.getElementById('btnMult');
btnMult.addEventListener('click', () => {
    input.value = '*';
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp;
})

const btnDivis = document.getElementById('btnDivis');
btnDivis.addEventListener('click', () => {
    input.value = '/';
    innerInp += input.value;
    console.log(innerInp);
    vvod.value = innerInp;
})

const btnAC = document.getElementById('btnAC');
btnAC.addEventListener('click', () => {
    input.value = '';
    innerInp = input.value;
    console.log(innerInp);
    vvod.value = innerInp;
})

const btnEqu = document.getElementById('btnEqu');
btnEqu.addEventListener('click', () => {
    result.value = eval(vvod.value);


})


