// let str = '100'
// let num = 100
// AND 연산자
// console.log(str === num)
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// let isStudent = true;
// let isFemale = true;

// console.log(isStudent && isFemale)
// console.log(isStudent && !isFemale)
// console.log(!isStudent && isFemale)
// console.log(!isStudent && !isFemale)


// let isStudent = true;
// let isFemale = false;

// console.log(isStudent && isFemale)
// console.log(isStudent && !isFemale)
// console.log(!isStudent && isFemale)
// console.log(!isStudent && !isFemale)
// AND 연산자(&&)를 사용했을 경우 두 조건이 모두 truthy 해야만 true, 그렇지 않으면 false가 출력됩니다.

// OR 연산자

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// let isStudent = true;
// let isFemale = true;

// console.log(isStudent || isFemale)
// console.log(isStudent || !isFemale)
// console.log(!isStudent || isFemale)
// console.log(!isStudent || !isFemale)

// let isStudent = true;
// let isFemale = false;

// console.log(isStudent || isFemale)
// console.log(isStudent || !isFemale)
// console.log(!isStudent || isFemale)
// console.log(!isStudent || !isFemale)
// OR연산자(||)를 사용했을 경우 두 조건 중 하나라도 truthy한 값일 경우 true, 그렇지 않으면 false가 출력됩니다.

// // NOT 연산자

// console.log(!true)
// console.log(!false)

// console.log(!true)
// console.log(!false)
// let isStudent = true;
// let isFemale = false;

// console.log(!isStudent)
// console.log(!isFemale)

// let isStudent = true;
// let isFemale = false;

// console.log(!!isStudent)
// console.log(!!isFemale)

// let isStudent = true;
// let isFemale = false;

// console.log(!!!isStudent)
// console.log(!!!isFemale)
// NOT연산자는 결과가 true이면 false를, false이면 true를 반환합니다. 2개 이상을 중첩하는 것도 가능합니다.

//삼각형 세변을 입력받아 직각 삼각형 안자 요뷰룰 리턴할때
// js에서 x의 제곱을 구하는 방법은 3가지 다. 
// arr.sort는 금지
//제곱을 구할 때 는 변수를 그대로 사용해야 함

//수도코드 작성시
//세변을 입력받아 직각 삼각형 여부 파악
//제곱근을 구하는 방식 3가지를 각 변수에 담는다.
//제곱근을 구하는 방식 1 pow1 = side1*side1
// 제곱근을 구하는 방식2 pow2 = side2**2
// 제곱근을 구하는 방식3 pow3 = math.pow(side3,2)

// 제곱근 변수를 활용해서 직각 삼각형을 공식을 활용해서 조건을 변수에 담는다.
//pow1이 클경우 type_A = pow1 === pow2+pow3
//pow2이 클경우 type_B = pow2 === pow1+pow3
//pow3이 클경우 type_C = pow3 === pow1+pow2

// function pytha(side1,side2,side3){
//     let pow1 = side1*side1
//     let pow2 = side2**2
//     let pow3 = Math.pow(side3,2)

//     let type_A = pow1 === pow2 + pow3
//     let type_B = pow2 === pow1 + pow3
//     let type_C = pow3 === pow1 + pow2
    
//     return type_A || type_B || type_C 
// }
//function takeLetters(num, str) {
  //   if (num >= str.length || str === '') {
  //     return str;
  //   }
  
  //   return str.slice(0, num);
  // }
  // function listPrimes(num) {
  //   let result = '2';
  //   for (let candi = 3; candi <= num; candi += 2) {
  //     let isPrime = true;
  //     let sqrt = parseInt(Math.sqrt(candi));
  //     for (let divider = 3; divider <= sqrt; divider += 2) {
  //       if (candi % divider === 0) {
  //         isPrime = false;
  //         break;
  //       }
  //     }
  
  //     if (isPrime) {
  //       result = `${result}-${candi}`;
  //     }
  //   }
  
  //   return result;
  // }

코플릿21문제
  debugger; makeMarginalString("flower")

  // TODO: 여기에 코드를 작성합니다.
  // 문자열을 입력받는다 
  // 문자열을 처음부터 한글자 씩 다시 작성
  // 입력값: string 타입의 문자열   ex ) 'flower
  // 출력값 : 한글자를 추가할때마다 부부적으로 완성된 문자열을 전부 이어붙인 문자열 ex) 'fflfloflowfloweflower'
  // 0 : ''
  // 1 : '' + f
  // 2 : '' + fl
  // 3 : '' + fl + flo
  // 4 : '' + fl + flo + flow
  // 5 : '' + fl + flo + flow + flowe 
  // 6 : '' + fl + flo + flow + flowe + flower
  // 변수 선언하고 빈문자열 할당
  // 이중반복문 사용
  // 첫번쨰 반복문-> 반복횟수 결정 -> 'flower' -> 문자의 개수만큼 반복
  // 두번쨰 반복문-> 몇개의 문자를 더해줄건지 결정

  // function computePower(base, exponent) {
  //   // TODO: 여기에 코드를 작성합니다.
  //   let answer = 1
  //   for (i = 1; i <= exponent; i++){
  //     answer *= base
  //   }
  //   return answer
  // // }
  
  // function characterAndNumber(word) {
  //   // TODO: 여기에 코드를 작성합니다. 
  //   let answer = ""
  //   for (let i = 0; i < word.length;  i++){
  //     answer = answer + word[i] + i
  //   }
  //   return answer
  // }
  // function getAllElementsButNth(arr, n) {
  //   // TODO: 여기에 코드를 작성합니다.
  //   arr.splice(n, 1)
  //   return arr
  // }
  
  // function createPhoneNumber(arr) {
  //   // TODO: 여기에 코드를 작성합니다.
  //   let head = '(010)';
  //   const len = arr.length;
  //   const body = arr.slice(len - 8, len - 4).join('');
  //   const tail = arr.slice(len - 4, len).join('');
  
  //   if (len === 11) {
  //     head = `(${arr.slice(0, 3).join('')})`;
  //   }
  //   function fibonacci(num) {
  //     let fibNum = [];
    
  //     for (let i = 0; i <= num; i++) {
  //       if (i === 0) {
  //         fibNum.push(0);
  //       } else if (i === 1) {
  //         fibNum.push(1);
  //       } else {
  //         fibNum.push(fibNum[i - 2] + fibNum[i - 1]);
  //       }
  //     }
    
  //     return fibNum;
  //   }
    
  function* fibonacci() { // 생성기 함수
    let [prev, curr] = [1, 1];
    while (true) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
  }
  
  for (let n of fibonacci()) {
    console.log(n);
    // 1000에서 수열을 자름
    if (n >= 1000) {
      break;
    }
  }
  Object.prototype.objCustom = function () {};
  Array.prototype.arrCustom = function () {};
  
  let iterable = [3, 5, 7];
  iterable.foo = "hello";
  
  for (let i in iterable) {
    console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
  }
  
  for (let i of iterable) {
    console.log(i); // logs 3, 5, 7
  }

  function countAllCharacters(str) {
    // TODO: 여기에 코드를 작성합니다.
    let obj = [];
    for (let i = 0; i < str.length; i++) {
      let key =str[i];
      if (key in obj){
        obj[key] = obj[key] + 1;
      } else if (!(key in obj)){
        obj[key] = 1;
      }
    }
    return obj;
  }

  function addObjectProperty(obj1, property, obj2) {
    // 여기에 코드를 작성합니다
      obj1[property] = obj2;
  }
  function isPersonOldEnoughToVote(person) {
    // TODO: 여기에 코드를 작성합니다.
    if (person.age >=18 ){
      return true;
    }
    return false
  }

  function getAllButLastElementOfProperty(obj, key) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
    for (let prop in obj){
      result[prop] = obj[prop];
    }
    if (Array.isArray(obj[key])){
      return result[key].slice(0,result[key].length-1);
    }else{
      return [];
    }
  }

  function getValueOfNthElement(arr, num) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length === 0){
      return 'no name'
    }
    if (arr.length <= num){
      return arr[arr.length-1]['name']
    } else if (arr[num]){
      return arr[num]['name']
    }
  }
  function countNumberOfKeys(obj) {
    // TODO: 여기에 코드를 작성합니다.
    let n = Object.keys(obj);
    return n.length;
  }
  

  
  // 총 5개의 작업을 3명이서 작업한다고 가정한다.
// 첫번째 작업자는 최대 3개의 작업을 할 수 있다.
// (jobs, workersNum)으로 표기하면, (jobs는 작업량이 아닌 작업의 인덱스만 표기한다고 한다)
// 처음은 ([0, 1, 2, 3, 4], 3)인 상태이다.
//  1) 첫번째 작업자가 1개의 작업을 하고 나머지 작업을 2명이 작업
//    => ([1, 2, 3, 4], 2)
//  2) 첫번째 작업자가 2개의 작업을 하고 나머지 작업을 2명이 작업
//    => ([2, 3, 4], 2)
//  3) 첫번째 작업자가 3개의 작업을 하고 나머지 작업을 2명이 작업
//    => ([3, 4], 2)
// 아래 두 가지 경우를 통해, 문제가 중복되어 계산된다는 것을 알 수 있다.
//  1-1) 첫번째 작업자가 1개의 작업을 하고, 그 다음 작업자가 2개의 작업을 한 경우
//    => ([3, 4], 1)
//  2-1) 첫번째 작업자가 2개의 작업을 하고, 그 다음 작업자가 1개의 작업을 한 경우
//    => ([3, 4], 1)
// 메모이제이션을 통해 중복 계산을 피한다.
const jobAllocation = function (jobs, workersNum) {
  // memo[i][j]는 i번째 worker가 j번째 job부터 작업한다고 할 때,
  // 최대 작업량이 최소가 되는 분배에서의 최대 작업량을 저장한다.
  // i, j 모두 인덱스이므로 0부터 시작
  const memo = [];
  for (let i = 0; i < workersNum; i++) memo.push(Array(jobs.length).fill(-1));
  // 마지막 작업자는 남아있는 모든 작업을 다 해야하므로 쉽게 계산이 가능하다.
  // 마지막 작업자는 최대 나머지 작업자의 수만큼을 제외한 일만 할 수 있다.
  let workload = 0;
  for (let i = jobs.length - 1; i >= workersNum - 1; i--) {
    workload = workload + jobs[i];
    memo[workersNum - 1][i] = workload;
  }

  const aux = (workerIdx, jobIdx, jobs, left) => {
    // 이미 계산한 적이 있는 경우, 다시 풀지 않는다
    // 마지막 작업자의 작업량을 전부 계산했으므로, 탈출 조건을 굳이 작성하지 않아도 된다.
    if (memo[workerIdx][jobIdx] !== -1) return memo[workerIdx][jobIdx];

    let workload = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = jobIdx; i < jobs.length - left; i++) {
      workload = workload + jobs[i];
      // 가장 많이 일하는 사람의 작업량을 구한다.
      const hardest = Math.max(
        workload,
        aux(workerIdx + 1, i + 1, jobs, left - 1)
      );
      // 그 작업량이 최소화되는 분배에서 최대 작업량을 구한다.
      min = Math.min(min, hardest);
    }
    memo[workerIdx][jobIdx] = min;
    return min;
  };

  return aux(0, 0, jobs, workersNum - 1);
};

  
