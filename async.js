//async & await
//clear style of using promise;)

const { reject } = require("async");

//1. async
function fetchUser() {
    return new Promise((resolve,reject) =>{
        resolve('ellie');
    })
};
const user = fetchUser();
user.then(console.log);
console.log(user);

async function fetchUser2() {
    return 'ellie';
}

async function getApple(){
    await DelayNode(3000);
    return 'apple'
}

async function getBanana(){
    await DelayNode(3000);
    return 'Banana'
}

async function PickFruits(){
    const apple = await getApple();
    const Banana = await getBanana();
    return `${apple} + ${Banana}` ;
}
PickFruits().then(console.log)
//trty