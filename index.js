var wrkText = "hello";
var wrkImg = "./assets/images/neil-rosenstech-KG-9TUrAFsg-unsplash.jpg";


var upperInnerContent = wrkText;
var middleInnerContent = wrkImg;


$(".upper-inside").text(upperInnerContent);
$(".image").attr("src",wrkImg);
$(".lower-inside").text("Lower")