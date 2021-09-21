// Only change code below this line
function myForLoop1(){
    var evenNumbers = "";
    for(var i = 0; i < 5; i++){
        evenNumbers += i*2;
        if(i < 4){
            evenNumbers += ", ";
        }
    }
    return evenNumbers;
}

function myForLoop2(){
    var evenInverseNumbers = "";
    for(var i = 4; i >= 0; i--){
        evenInverseNumbers += i*2;
        if(i > 0){
            evenInverseNumbers += ", ";
        }
    }
    return evenInverseNumbers;
}
console.log(myForLoop1());
console.log(myForLoop2());
// Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
};