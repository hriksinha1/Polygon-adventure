var inputs = document.querySelectorAll(".angle-inputs");
var checkButton = document.querySelector("#check-btn");
var outputResult = document.querySelector("#output");

checkButton.addEventListener("click", knowPolygon);


function calculateSumOfAngles(angle1,angle2,angle3,angle4,angle5,angle6,angle7,angle8,angle9,angle10) {

    var sumOfAngles = angle1 + angle2 + angle3 + angle4 + angle5 + angle6 + angle7 + angle8 + angle9 + angle10 ;
    console.log(sumOfAngles);

}


function knowPolygon() {
    console.log("Checking");
}