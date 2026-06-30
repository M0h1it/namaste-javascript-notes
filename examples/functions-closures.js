var x = 1;
a(); //global space 
b(); //global space 
console.log(x);

function a(){
    var x= 10; // not global space 
    console.log(x);
}

function b(){
    var x =100;
    console.log(x);
}

{
    //block scope also known as compound statement
}

function x(){
    var a = 7 ;
    function y(){
        console.log(a);//closure
        //closure is a function that has access to the parent scope, even after the parent function has closed.
    }   
    y();
}
x();

// closurewithsetTimeout;

function y(){
    // for(var i = 1; i<=5; i++){
    for(var i = 1; i<=5; i++){
        setTimeout(function(){
            console.log(i); //setTimeout+closure
        }, 1000);//by this time i will be 6 so the output is 6
        //to rectify it we use let insted of var as let provide fresh copy of the variable in each iteration of the loop 
    }
}
y(); // 1

//this can be solved by using closure as well instead of using let
function y(){
    for(var i = 1; i<=5; i++){
        function closure(i){
            setTimeout(function(){
                console.log(i); //setTimeout+closure
            }, 1000);//by this time i will be 6 so the output is 6
        }
        closure(i);
    }
}