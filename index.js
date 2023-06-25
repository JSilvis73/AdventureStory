var upperWrkText = "hello";
var wrkImg = "";
var lowerWrkText = ["1: Stand ground!", 
" 2: Run!"];



var randomNum = Math.floor(Math.random() * 10);

if (randomNum < 5) {
    upperWrkText = "Welcome Adventurer!";
    wrkImg = "./assets/images/neil-rosenstech-KG-9TUrAFsg-unsplash.jpg"
    lowerWrkText = ["1: Stand ground!", 
" 2: Run!"];
   
}
else {
    upperWrkText = "Greetings Explorer!";
    wrkImg = "./assets/images/angel-luciano--hWwL0n3_As-unsplash.jpg"
    lowerWrkText = ["1: FIGHT!", 
" 2: Cower!?"];
    
}






var upperInnerContent = upperWrkText;
var middleInnerContent = wrkImg;


$(".upper-inside").text(upperInnerContent);
$(".image").attr("src",wrkImg);
$(".lower-inside").text(lowerWrkText);


// Functions