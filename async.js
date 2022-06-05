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

