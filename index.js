/*alert("hello there");

var numOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    function handleClick(){
        alert("i got clicked");
        this.style.color="white";
    }
}


document.querySelectorAll(".drum")[0].addEventListener("click",handleClick0);
    function handleClick0(){
        var snd = new Audio("sounds/tom-1.mp3"); // buffers automatically when created
        snd.play();
    }
}
document.querySelectorAll(".drum")[1].addEventListener("click",handleClick1);
    function handleClick1(){
        var snd = new Audio("sounds/tom-2.mp3"); // buffers automatically when created
        snd.play();
    }
}
document.querySelectorAll(".drum")[2].addEventListener("click",handleClick2);
    function handleClick2(){
        var snd = new Audio("sounds/tom-3.mp3"); // buffers automatically when created
        snd.play();
    }
}
document.querySelectorAll(".drum")[3].addEventListener("click",handleClick3);
    function handleClick3(){
        var snd = new Audio("sounds/tom-4.mp3"); // buffers automatically when created
        snd.play();
    }
}
document.querySelectorAll(".drum")[4].addEventListener("click",handleClick4);
    function handleClick4(){
        var snd = new Audio("sounds/snare.mp3"); // buffers automatically when created
        snd.play();
    }
}
document.querySelectorAll(".drum")[5].addEventListener("click",handleClick5);
    function handleClick5(){
        var snd = new Audio("sounds/crash.mp3"); // buffers automatically when created
        snd.play();
    }
}
document.querySelectorAll(".drum")[6].addEventListener("click",handleClick6);
    function handleClick6(){
        var snd = new Audio("sounds/kick.mp3"); // buffers automatically when created
        snd.play();
    }
}*/




//detecting button press
var numOfDrumButtons=document.querySelectorAll(".drum").length;


for(var i=0;i<numOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick); //higher order function

    function handleClick(){
        this.style.color="white";
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
}  

//detecting keyboard press

document.addEventListener("keydown",function(event){ //callback function
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key){
    switch(key){
        case"w":
        var snd1 = new Audio("sounds/tom-1.mp3"); // buffers automatically when created
        snd1.play();
        break;

        case"a":
        var snd2 = new Audio("sounds/tom-2.mp3"); // buffers automatically when created
        snd2.play();
        break;

        case"s":
        var snd3 = new Audio("sounds/tom-3.mp3"); // buffers automatically when created
        snd3.play();
        break;

        case"d":
        var snd4 = new Audio("sounds/tom-4.mp3"); // buffers automatically when created
        snd4.play();
        break;

        case"j":
        var snare = new Audio("sounds/snare.mp3"); // buffers automatically when created
        snare.play();
        break;

        case"k":
        var crash = new Audio("sounds/crash.mp3"); // buffers automatically when created
        crash.play();
        break;

        case"l":
        var kick = new Audio("sounds/kick-bass.mp3"); // buffers automatically when created
        kick.play();
        break;

        default: console.log(buttonInnerHTML);
    }
        
}
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}