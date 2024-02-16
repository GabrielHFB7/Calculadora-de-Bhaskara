const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const ok = document.getElementById("btn")

function clique () {
    let numberA = Number(a.value)
    let numberB = Number(b.value)
    let numberC = Number(c.value)

let delta = Math.pow(numberB, 2) + (-1 * (4*numberA*numberC))
let x1 = ((numberB * (-1)) + Math.sqrt(delta))/(2*numberA)
let x2 = ((numberB * (-1)) - Math.sqrt(delta))/(2*numberA)

const ResultadoDelta= document.getElementById('resultD')
ResultadoDelta.value= delta

const ResultadoX1= document.getElementById('resultX1')
ResultadoX1.value= x1

const ResultadoX2= document.getElementById('resultX2')
ResultadoX2.value= x2
}

ok.onclick = clique