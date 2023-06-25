var upperWrkText = "hello";
var wrkImg = "./assets/images/neil-rosenstech-KG-9TUrAFsg-unsplash.jpg";
var lowerWrkText = "Action List";



var randomNum = Math.floor(Math.random() * 10);

if (randomNum < 5) {
    upperWrkText = "Welcome Adventurer!";
    lowerWrkText = "What do you choose to do?";
   
}
else {
    upperWrkText = "Greetings Explorer!";
    lowerWrkText = "We must take action!";
    
}






var upperInnerContent = upperWrkText;
var middleInnerContent = wrkImg;


$(".upper-inside").text(upperInnerContent);
$(".image").attr("src",wrkImg);
$(".lower-inside").text(lowerWrkText);