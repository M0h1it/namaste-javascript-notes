//async function
async function getData(){
    return "Namaste";
}

const dataPromise = getData();
dataPromise.then((res) => console.log(res));

