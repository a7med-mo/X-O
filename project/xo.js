let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');
let as = document.getElementById('as')
let xo = 'x';




function title(){

    if(xo == 'x'){
        as.innerHTML ='start X';
    }
    else if(xo == 'o'){
        as.innerHTML ='start O';
    }
    else{
        as.innerHTML ='reload';
    }
}




function square(){
    setInterval(() => {as.innerHTML +='.';}, 900);
    setTimeout(function(){location.reload();},3000)
}


function stop() {
    if (box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML && box3.innerHTML != '') {
        box1.style.backgroundColor = '#000';
        box1.style.color = '#fff';
        box2.style.backgroundColor = '#000';
        box2.style.color = '#fff';
        box3.style.backgroundColor = '#000';
        box3.style.color = '#fff';
        xo = 'stop';
        square();

    }
    else if (box4.innerHTML === box5.innerHTML && box5.innerHTML === box6.innerHTML && box6.innerHTML != '') {
        box4.style.backgroundColor = '#000';
        box4.style.color = '#fff';
        box5.style.backgroundColor = '#000';
        box5.style.color = '#fff';
        box6.style.backgroundColor = '#000';
        box6.style.color = '#fff';
        xo = 'stop';
        square();
    }
    else if (box7.innerHTML === box8.innerHTML && box8.innerHTML === box9.innerHTML && box9.innerHTML != '') {
        box7.style.backgroundColor = '#000';
        box7.style.color = '#fff';
        box8.style.backgroundColor = '#000';
        box8.style.color = '#fff';
        box9.style.backgroundColor = '#000';
        box9.style.color = '#fff';
        xo = 'stop';
        square();
    }


    else if (box1.innerHTML === box4.innerHTML && box4.innerHTML === box7.innerHTML && box7.innerHTML != '') {
        box1.style.backgroundColor = '#000';
        box1.style.color = '#fff';
        box4.style.backgroundColor = '#000';
        box4.style.color = '#fff';
        box7.style.backgroundColor = '#000';
        box7.style.color = '#fff';
        xo = 'stop';
        square();
    }
    else if (box2.innerHTML === box5.innerHTML && box5.innerHTML === box8.innerHTML && box8.innerHTML != '') {
        box2.style.backgroundColor = '#000';
        box2.style.color = '#fff';
        box5.style.backgroundColor = '#000';
        box5.style.color = '#fff';
        box8.style.backgroundColor = '#000';
        box8.style.color = '#fff';
        xo = 'stop';
        square();
    }
    else if (box3.innerHTML === box6.innerHTML && box6.innerHTML === box9.innerHTML && box9.innerHTML != '') {
        box3.style.backgroundColor = '#000';
        box3.style.color = '#fff';
        box6.style.backgroundColor = '#000';
        box6.style.color = '#fff';
        box9.style.backgroundColor = '#000';
        box9.style.color = '#fff';
        xo = 'stop';
        square();
    }

    else if (box1.innerHTML === box5.innerHTML && box5.innerHTML === box9.innerHTML && box9.innerHTML != '') {
        box1.style.backgroundColor = '#000';
        box1.style.color = '#fff';
        box5.style.backgroundColor = '#000';
        box5.style.color = '#fff';
        box9.style.backgroundColor = '#000';
        box9.style.color = '#fff';
        xo = 'stop';
        square();
    }
    else if (box3.innerHTML === box5.innerHTML && box5.innerHTML === box7.innerHTML && box7.innerHTML != '') {
        box3.style.backgroundColor = '#000';
        box3.style.color = '#fff';
        box5.style.backgroundColor = '#000';
        box5.style.color = '#fff';
        box7.style.backgroundColor = '#000';
        box7.style.color = '#fff';
        xo = 'stop';
        square();
    }

    else if (box1.innerHTML != '' && box2.innerHTML != '' && box3.innerHTML != '' && box4.innerHTML != '' && box5.innerHTML != '' && box6.innerHTML != '' && box7.innerHTML != '' && box8.innerHTML != '' && box9.innerHTML != '') {
        xo = 'stop';
        squar = 'true';
        square();
    }
   
}

function getBox(id) {

    let box = document.getElementById(id);


    if (xo === 'x' && box.innerHTML === '') {

        box.innerHTML = 'X';
        xo = 'o';
    }
    else if (xo === 'o' && box.innerHTML === '') {
        box.innerHTML = 'O';
        xo = 'x';
    }
    stop();
    title();
}








