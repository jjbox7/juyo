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

// naive solution: O(N^3)
// function longestPalindrome(str) {
//   if (str.length <= 1) return str.length;

//   const checkPalindrome = function (str) {
//     const half = parseInt(str.length / 2);
//     for (let i = 0; i < half; i++) {
//       if (str[i] !== str[str.length - 1 - i]) return false;
//     }
//     return true;
//   };

//   // 길이가 긴 순서대로 부분 문자열을 만들어 검사한다.
//   for (let len = str.length; len >= 1; len--) {
//     // 길이 len인 부분 문자열들의 시작 인덱스를 구한다.
//     // 예. 전체 길이가 100이고, 부분 문자열의 길이가 10인 경우,
//     // 부분 문자열 (시작인덱스 ~ 마지막 인덱스)
//     //  90 ~ 99, 89 ~ 98, 88 ~ 97, ..., 1 ~ 10, 0 ~ 9
//     for (let startIdx = str.length - len; startIdx >= 0; startIdx--) {
//       // slice의 특성을 고려한 마지막 인덱스 + 1 을 저장
//       const endIdx = startIdx + len;
//       const subStr = str.substring(startIdx, endIdx);
//       const result = checkPalindrome(subStr);
//       if (result === true) return len;
//     }
//   }
// }

function longestPalindrome(str) {
  if (str.length < 2) return str.length;

  const LENGTH = str.length;
  const isPalindrome = Array(LENGTH)
    .fill(false)
    .map((_) => Array(LENGTH).fill(false));
  // 언더바는 잘못된 코드가 아닙니다.
  // 언더바는 어떤 매개변수는 전달되어도 무시하겠다는 의미로 사용됩니다.

  let maxLen = 1;
  // 길이가 1인 회문
  for (let i = 0; i < LENGTH; i++) isPalindrome[i][i] = true;

  // 길이가 2인 회문
  for (let i = 0; i < LENGTH - 1; i++) {
    if (str[i] === str[i + 1]) {
      isPalindrome[i][i + 1] = true;
      maxLen = 2;
    }
  }

  // 길이가 3 이상인 회문
  for (let len = 3; len <= LENGTH; len++) {
    for (let startIdx = 0; startIdx <= LENGTH - len; startIdx++) {
      const endIdx = startIdx + len - 1;
      if (
        isPalindrome[startIdx + 1][endIdx - 1] === true &&
        str[startIdx] === str[endIdx]
      ) {
        isPalindrome[startIdx][endIdx] = true;
        maxLen = len;
      }
    }
  }

  return maxLen;
}

function isGreaterThan(num1, num2) {
  // TODO: 여기에 코드를 작성합니다.
  if (num1<num2) {
    return true
  }
  else {
    return false
  }
}
class Queue {
  //가장 앞에 있는 요소를 front,
  //가장 뒤에 있는 요소를 rear 라고 했을 때
  //queue constructor 생성
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }
  // queue의 사이즈를 구합니다.
  // queue는 추가될 때, rear의 값이 커지고 삭제 될 때, front가 변경이 때문에, 각 값을 알아야 size를 구할 수 있습니다.
  size() {
    return this.rear - this.front;
  }
  // queue에 element를 추가합니다.
  // 새롭게 추가될 요소의 인덱스를 나타내는 this.rear를 키로, 요소를 값으로 하여 storage에 할당합니다. this.rear은 다음 인덱스를 가리키게 하여 새로운 요소에 대비합니다.
  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear += 1;
  }
  // queue에서 element를 제거 한 뒤 해당 element를 반환합니다.
  // 만약 size가 0이라면 아무 일도 일어나지 않습니다.
  // this.front+1로 가장 앞에 있는 요소를 다시 설정한 후 변수에 저장하고, 큐에서 삭제합니다.
  dequeue() {
    if (this.size() === 0) {
      return;
    }
    const result = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;
    return result;
  }
}function browserStack(actions, start) {
  // start 인자가 string이 아닌 것들은 전부 false로 리턴합니다.
  if(typeof start !== 'string') return false;

  // 뒤로 가기와 앞으로 가기 스택의 변수를 설정합니다
  let prevStack = [];
  let nextStack = [];
  let current = start;
  
  // actions 배열을 전부 탐색하기 위해 반복문을 설정합니다.
  for(let i = 0; i < actions.length; i++) {
    // 만약 actions 배열의 요소가 -1이고(뒤로가기를 눌렀고), prevStack의 길이가 0이 아닐 때(이전으로 돌아가는 페이지가 있다면)
    if(actions[i] === -1 && prevStack.length !== 0) {

      // prevStack에서 pop한 요소를 prevPage로 할당합니다.
      // nextStack에 current를 삽입합니다.
      // current를 prevPage에 할당합니다.
      let prevPage = prevStack.pop();
      nextStack.push(current);
      current = prevPage;

      // 만약 actions 배열의 요소가 1이고(앞으로가기를 눌렀고), nextStack의 길이가 0이 아닐 때(다음으로 넘어가는 페이지가 있다면)
    } else if(actions[i] === 1 && nextStack.length !== 0) {

      // nextStack에서 pop한 요소를 nextPage로 할당합니다.
      // prevStack에 current를 삽입합니다.
      // current를 nextPage에 할당합니다.
      let nextPage = nextStack.pop();
      prevStack.push(current);
      current = nextPage;

      // 만약 actions 배열의 요소가 알파벳이라면 (새로운 페이지라면)
    } else if(typeof actions[i] === 'string') {
      
      // prevStack에 current를 삽입합니다.
      // current에 현재 알파벳 요소를 할당합니다.
      // 새로운 페이지는 앞으로 갈 수 없기 때문에 nextStack을 비웁니다.
      prevStack.push(current);
      current = actions[i];
      nextStack = [];
    }

    // 이외엔, 동작하지 않습니다.
  }
  
  // 배열에 prevStack, current, nextStack을 순서대로 담아 반환합니다.
  return [prevStack, current, nextStack];
}function paveBox(boxes) {
  let answer = [];
  
  // boxes 배열이 0보다 클 때까지 반복합니다.
  while(boxes.length > 0){
      let finishIndex = boxes.findIndex(fn => boxes[0] < fn);
      
      if(finishIndex === -1){
          // 만약 찾지 못했다면 answer에 boxes 배열의 길이를 넣은 후, boxes 내부의 요소를 전부 삭제합니다.
          answer.push(boxes.length);
          boxes.splice(0, boxes.length);

      } else {
          // 만약 찾았다면, 해당 인덱스를 answer에 넣고, boxes에서 그만큼 제외합니다.
          answer.push(finishIndex);
          boxes.splice(0, finishIndex);
      }
  }

  // 결과물을 반환합니다.
  return Math.max(...answer);
}