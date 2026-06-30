//Promise APIs
// 1. Promise.all
// 2. Promise.allSettled
// 3. Promise.race
// 4. Promise.any

//Promise.all
const p1 = new Promise((resolve, reject) => {   
    setTimeout(() => {
        resolve("Promise 1 success");
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 success");
    }, 2000);
}
);
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 success");
    }, 3000);
});

Promise.all([p1, p2, p3])
    .then((results) => {
        console.log("All promises resolved:", results);
    })
    .catch((error) => {
        console.error("One or more promises rejected:", error);
    });

//Promise.allSettled
Promise.allSettled([p1, p2, p3])
    .then((results) => {
        console.log("All promises settled:", results);
    })
    .catch((error) => {
        console.error("One or more promises rejected:", error);
    });

//promise.race
Promise.race([p1, p2, p3])
    .then((result) => {
        console.log("First promise resolved:", result);
    })
    .catch((error) => {
        console.error("One or more promises rejected:", error);
    });

//promise.any
Promise.any([p1, p2, p3])
    .then((result) => {
        console.log("First promise resolved:", result);
    })
    .catch((error) => {
        console.error("All promises rejected:", error);
        console.log(error.errors); // Log the errors array
    });
    