// console.log("namaste");
// setTimeout(function (){
//     console.log("hello world");
// },5000)

// console.log("Season 2");

// const cart = ["shoes"," pants", "kurta"];

api.createorder(cart,function(){

    api.proceedTopayment(function(){

        api.showorderSummary(function(){
            console.log("order placed successfully")
        })

    })

})


//promimses
// const cart = ["shoes"," pants", "kurta"];

// const promise = createorder(cart);

// promise.then(function(){ // promise chaining 
//     return proceedTopayment();
// }).then(function(){
//     return showorderSummary();
// }).then(function(){
//     console.log("order placed successfully")
// }).catch(function(){
//     console.log("some error occured")
// })

// const GITHUM_API = "https://api.github.com/users";

// const user = fetch(GITHUM_API);

// console.log(user);


//promise creation
const cart = ["shoes"," pants", "kurta"];

const promise = createorder(cart);

promise.then(function(){
    console.log(orderId)
    // return proceedTopayment(orderId);
})
.catch(function(err){
    console.log("some error occured");
    console.log(err.message);
})

function createorder(cart){
    const pr = new Promise(function(resolve, reject){
        if(!validCart(cart)){
            const err = new Error("invalid cart");
            reject(err);
        }
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 2000) 
        }
    });
}

function validCart(cart){
    return true;
}
