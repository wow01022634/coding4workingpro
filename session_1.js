function myFunction() {

    console.log("hello World")
}
//basic output out of function by passing x parameter
function salesScore(x) {
    var sscore = x * 20;
    return sscore;
}
//error if you don’t pass x,y as both of them are used in the function
function salesScore(x, y) {
    var sscore = x * y * 20;
    return sscore;
}

//no error if you don’t pass y but error if you don't pass x as x is used in the function
function salesScore(x, y) {
    var sscore = x * 20;
    return sscore;
}

//how to avoid error you can provide default value in the parameter where you don't have to pass parameter even though it's is used
function salesScore(x = 0, y = 0) {
    var sscore = x * y * 20;
    return sscore;
}
