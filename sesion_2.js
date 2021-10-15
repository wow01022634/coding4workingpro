function operatorStudy() {
    //basic operators
    var a = 1;
    var b = 2;
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
}

function conditionalLogic() {

    //If statement
    var x = 3;
    //equal
    if (x == 2)
     { console.log("x is 2"); }
    //not equal
    if (x != 2)
      { console.log("x is not 2"); }
    //bigger than
    if (x > 2) { console.log("x is bigger than 2"); }
    //less than
    if (x < 2) { console.log("x is less than 2"); }


    //Using If Else Statement
    var y = 3;
    if (y == 2) {
        console.log('y  is 2')
    } else if (y  != 2) {
        console.log('y  is not 2')
    } else if (y  < 2) {
        console.log('y is less  than 2')
    } else {
        console.log('y is bigger than 2')
    }
}

function ArrayStudy1() {
    //1 Dimentional Array
    var wallet = ['visa', 'mastercard', 'costo']
    console.log(wallet[0]);

    //1 Dimentional Arry Looping
    var i = 0;
    while (i < dept.length) {
        console.log(wallet[i]);
        i = i + 1;
    }
    //Iterates till calculated condition is met   
    for (let i = 0; i < wallet.length; i++)
    {
        console.log(wallet[i]);
    }
}

function ArrayStudy2() {
    //2 Dimensional Array Definition
    var wallet = [
        ['visa', 'Citi'],
        ['Amex', 'Delta'],
        ['Mastercard', 'USBank'],
    ];
    //2 Dimensional Array Looping
    for (var i = 0; i < wallet.length; i++) {
        var cube = wallet[i];
        for (var j = 0; j < cube.length; j++) {
            console.log("cube[" + i + "][" + j + "] = " + cube[j]);
        }
    }
}