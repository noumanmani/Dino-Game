score =0;
cross=true;
audio = new Audio('music.mp3');
audiogame = new Audio('facebook.mp3');
setTimeout(()=>{
audiogame.play();
},1000);

document.onkeydown = function(e){
    if(e.keyCode == 38){
        dino=document.querySelector(".sparrow")
        dino.classList.add("animated-dino")
        setTimeout(()=>{
dino.classList.remove("animated-dino")
        },1000)
    } ;
    if(e.keyCode == 39){
        dino=document.querySelector(".sparrow")
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
        dino.style.left=dinoX + 112+ "px"
    }    
    if(e.keyCode == 37){
        dino=document.querySelector(".sparrow")
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
        dino.style.left=(dinoX -112)+"px";
    }       
}


setInterval(() => {
    dino=document.querySelector(".sparrow")
    drag=document.querySelector(".drag")
    gameover=document.querySelector(".gameover h1")

    dx  =window.parseInt(getComputedStyle(dino,null).getPropertyValue('left'))
    dy  =window.parseInt(getComputedStyle(dino,null).getPropertyValue('top')) 
    ox  =window.parseInt(getComputedStyle(drag,null).getPropertyValue('left'))
    oy  =window.parseInt(getComputedStyle(drag,null).getPropertyValue('top'))
offsetX =Math.abs(dx-ox);
offsetY =Math.abs(dx-ox);
if (offsetX <53 && offsetY<32){
    gameover.style.display = 'block';
    drag.classList.remove("drag-animation")
}
else if(offsetX< 145 && cross){
    score+=1;
    updatscore(score);
    cross=false;
    setTimeout(() => {
        cross=true;
    }, 1000);

}

}, 100);


function updatscore(score) {
    scoreCount = document.querySelector('.scoreCount')
    scoreCount.innerHTML = "your Score:" + score;
}
