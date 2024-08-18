let topsave = document.querySelector('.top_save_f') 

let second = 59
let menete = 59
let huor = 10 

let timer = setInterval(function(){
topsave.innerHTML = `Expires in:${huor}:${menete}:${second}`
second--
 
if(second == -1){
    menete--
    second =59
} 

if(menete == -1){
    huor--
    menete = 59
}

}, 1000);







const ani = document.querySelector('.ani')

window.addEventListener('load',()=>{
    ani.style.display = 'none'
})
