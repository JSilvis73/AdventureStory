var upperWrkText = "hello";
var wrkImg = "./assets/images/neil-rosenstech-KG-9TUrAFsg-unsplash.jpg";

var randomNum = Math.floor(Math.random() * 10);

if (randomNum < 5) {
    upperWrkText = "Welcome Adventurer!"
}
else {
    upperWrkText = "Greetings Explorer!"
}






var upperInnerContent = upperWrkText;
var middleInnerContent = wrkImg;


$(".upper-inside").text(upperInnerContent);
$(".image").attr("src",wrkImg);
$(".lower-inside").text("Lower")