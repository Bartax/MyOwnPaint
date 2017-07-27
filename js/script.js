const canvas = document.querySelector('#drawArea');
const ctx = canvas.getContext('2d');
canvas.width = 500; //szerokość pola po ktorym się maluje
canvas.height = 400; //wysokość pola po ktorym się maluje
ctx.lineJoin = 'round'; //tworzy kształt zakończenia linii
ctx.lineCap = 'round'; // w sumie chuja robi z tego co widzę
ctx.lineWidth = 10; // ustala szerokość malowanej linii

var isDrawing = false;
var lastX = 0;
var lastY = 0;

//SELECTING CLICKED COLOR
var red = document.getElementById('red'),
    brown = document.getElementById('brown'),
    yellow = document.getElementById('yellow'),
    green = document.getElementById('green'),
    blue = document.getElementById('blue');

red.addEventListener('click', function(){
    ctx.strokeStyle = '#ed1515';
});
brown.addEventListener('click', function(){
    ctx.strokeStyle = '#ca6e0c';
});
yellow.addEventListener('click', function(){
    ctx.strokeStyle = '#fff64d';
});
green.addEventListener('click', function(){
    ctx.strokeStyle = '#67ff4d';
});
blue.addEventListener('click', function(){
    ctx.strokeStyle = '#4da3ff';
});
    

function draw(e){
    if(!isDrawing) return;
    
    ctx.strokeStyle = '';
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
};
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

document.getElementById('eraser').addEventListener('click', function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clearRect kasuje bazgroły
});





