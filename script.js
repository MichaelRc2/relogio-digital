const horasElement = document.getElementById('horas') 
const minutosElement = document.getElementById('minutos') 
const segundosElement = document.getElementById('segundos') 

function newTime(){
    const date = new Date();

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    horasElement.textContent = fixTime(hours)
    minutosElement.textContent = fixTime(minutes)
    segundosElement.textContent = fixTime(seconds)
}

function fixTime(time){
    return time < 10 ? '0'+time : time
}

newTime()
setInterval(newTime, 1000)