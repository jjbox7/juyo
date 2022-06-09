// reetcode.js
// let twoSum = function(nums, target) {
//     let map = new Map();
//     map.set(nums[0],0);
//     for(let i=1;i<nums.length;i++){
//         if(map.has(target-nums[i])) return([i,map.get(target-nums[i])]);
//         else map.set(nums[i],i);
//     }
// };
// console.log(twoSum);

//#2
// var isPalindrome = function(x) {
//     const s = x.toString();
//     if (s.length === 1) {
//         return true;
//     }
//     const start = s[0];
//     const end = s[s.length - 1];
//     if (start !== end) {
//         return false;
//     }
//     if (s.length === 2) {
//         return true;
//     }
//     const subStr = s.substring(1, s.length - 1);
//     return isPalindrome(subStr);
// };

function insertDash(str) {
    let result = str[0];
    for (let i = 1; i < str.length; i++) {
      if (Number(str[i - 1]) % 2 && Number(str[i]) % 2) {
        result = result + '-';
      }
      result = result + str[i];
    }
  
    return result;
  }
  
