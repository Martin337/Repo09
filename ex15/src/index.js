// Only change code below this line
function myDoWhile(){

    var myNumbers = "";
    var i = 0;
    do{
        myNumbers += i;
        if(i <= 8){
            myNumbers += ", ";
        }
        i++;
    }while (i <= 9)
    return myNumbers;
}

console.log(myDoWhile());
// Only change code above this line
module.exports = myDoWhile;