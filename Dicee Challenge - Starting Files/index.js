var p1=Math.random();
p1=Math.floor(p1*6)+1;
var p2=Math.random();
p2=Math.floor(p2*6)+1;

if(p1<p2){
    document.querySelector("h1").innerHTML="Utkarsh Win 🚩";
}
else if(p1>p2) 
{
    document.querySelector("h1").innerHTML="🚩 Abhishek Win";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
switch(p1){
    case 1:
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
        break;    
    case 2:
        document.querySelector(".img1").setAttribute("src" ,"images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
        break;
    default:
        break;   
}
switch(p2){
    case 1:
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
        break;    
    case 2:
        document.querySelector(".img2").setAttribute("src" ,"images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
        break;
    default:
        break;   
}


// alert("working");
// var p1=Math.random();
// p1=Math.floor(p1*6)+1;
// var p2=Math.random();
// p2=Math.floor(p2*6)+1;

// if(p1<p2){
//     document.querySelector("h1").innerHTML="Player 2 Win";
// }
// else if(p1>p2) 
// {
//     document.querySelector("h1").innerHTML="Player 1 Win";
// }
// else{
//     document.querySelector("h1").innerHTML="Draw";
// }
// var randomimage1="dice"+p1+".png";
// var randomimageSource="images/"+randomimage1;
// var image1=document.querySelectorAll("img")[0];
// image1.setAttribute("src",randomimageSource);

// var dicenumber2="dice"+p2+".png";   
// var diceimgesour="images/"+dicenumber2;    
// var image2=document.querySelectorAll("img")[1];   
// image2.setAttribute("src",diceimgesour);