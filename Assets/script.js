const colorBtn = document.querySelector('.color-btn');

const bodybckgrnd = document.querySelector('body');

//Array that hold colors

const color = ['yellow','green','red','#3b5998'];

colorBtn.addEventListener('click', changecolor);

function changecolor() {
   let random = Math.floor(Math.random()*color.length)
   bodybckgrnd.style.backgroundColor = color[random];
}
