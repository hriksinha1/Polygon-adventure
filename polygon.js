var inputs = document.querySelectorAll(".angle-input");
var checkButton = document.querySelector("#check-btn");
var outputResult = document.querySelector("#output");

checkButton.addEventListener("click", knowYourPolygon);


function calculateSumOfAngles(angle1,angle2,angle3,angle4,angle5,angle6,angle7,angle8,angle9,angle10) {

    var sumOfAngles = angle1 + angle2 + angle3 + angle4 + angle5 + angle6 + angle7 + angle8 + angle9 + angle10 ;
    return sumOfAngles;

}


function knowYourPolygon() {


    var sumOfAngles = calculateSumOfAngles (Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value), Number(inputs[3].value), Number(inputs[4].value), Number(inputs[5].value), Number(inputs[6].value), Number(inputs[7].value), Number(inputs[8].value), Number(inputs[9].value) )
    if(sumOfAngles === 1440){
        console.log("Sum of all these angles will form Decagon");
    } else if ( sumOfAngles ===1260){
        console.log("Sum of all these angles will form Nonagon");

    } else if( sumOfAngles ===1080){
        console.log("Sum of all these angles will form Octagon");

    } else if( sumOfAngles ===900){
        console.log("Sum of all these angles will form Heptagon");

    } else if( sumOfAngles === 720){
        console.log("Sum of all these angles will form Hexagon");
 
    } else if ( sumOfAngles === 540){
        console.log("Sum of all these angles will form Pentagon");

    } else if(sumOfAngles === 360){
        console.log("Sum of all these angles will form Quadrilateral");

    } else if (sumOfAngles === 180){
        console.log("Sum of all these angles will form Triangle");

    } else {
        console.log("Too small to calculate");
    }
    
}

