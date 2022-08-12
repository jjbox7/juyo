const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
    let result = 0;
    if(operator === '+') {
      result = Number(n1) + Number(n2); // '+'버튼을 눌렀을 때
    }
    else if(operator === '-') {
       result = Number(n1) - Number(n2); // '-'버튼을 눌렀을 때
    }
    else if(operator === '*') {
       result = Number(n1) * Number(n2); // '*'버튼을 눌렀을 때
    }
    if(operator === '/') {
       result = Number(n1) / Number(n2); // '/'버튼을 눌렀을 때
    }
    return String(result);
  }

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.
  
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 -     21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      if (firstOperend.textContent === '0' ){
          firstOperend.textContent = buttonContent;
      } else {
        secondOperend.textContent = buttonContent;
      }
      console.log('숫자 ' + buttonContent + ' 버튼');
    }
    if (action === 'operator') {
      operator.textContent = buttonContent;
      console.log('연산자 ' + buttonContent + ' 버튼');
    }
    if (action === 'decimal') {
      // console.log('소수점 버튼');
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
        firstOperend.textContent = 0;
        operator.textContent = '+'
        secondOperend.textContent = 0;
        calculatedResult.textContent = 0;
        count = 0;
        console.log('초기화 버튼')

    }


    if (action === 'calculate') {
      calculatedResult.textContent =calculate(firstOperend.textContent,operator.textContent,secondOperend.textContent)
      console.log('계산 버튼');
    }
  }
  
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.
  

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
        if (display.textContent === '0' || previousKey ==='operator'){
            display.textContent = buttonContent;
        } else {
        display.textContent = display.textContent + buttonContent; 
        }
        previousKey = 'Number'
    }
    if (action === 'operator') {
        //보이징 않지만, 저장이 되어 있어야 한다 -> 변수에 할당
        operatorForAdvanced = buttonContent;
        //현재 화면에 있는 숫자 저장-> 변수에 할당
        firstNum = display.textContent;
        //방금 뭐 눌렀는지도 저장을 해주자.
        previousKey = 'operator';
    }
    if (action === 'decimal') {}
    if (action === 'clear') {
        display.textContent = '0';
        firstNum = undefined;
        operatorForAdvanced = undefined;
        previousNum = undefined;
        previousKey = 'clear';
    }
    if (action === 'calculate') {
        previousNum = display.textContent;
    }
    display.textContent = calculate(firstNum,operatorForAdvanced,previousNum)
    previousKey = 'calculate';
  }

});


//calcuraor
function calculate(n1, operator, n2) {
  let result = 0;
  if(operator === '+') {
    result = Number(n1) + Number(n2); // '+'버튼을 눌렀을 때
  }
  else if(operator === '-') {
     result = Number(n1) - Number(n2); // '-'버튼을 눌렀을 때
  }
  else if(operator === '*') {
     result = Number(n1) * Number(n2); // '*'버튼을 눌렀을 때
  }
  if(operator === '/') {
     result = Number(n1) / Number(n2); // '/'버튼을 눌렀을 때
  }
  return String(result);
}

//calcuraor
function calculate(n1, operator, n2) {
  let result = 0;
  if(operator === '+') {
    result = Number(n1) + Number(n2); // '+'버튼을 눌렀을 때
  }
  else if(operator === '-') {
     result = Number(n1) - Number(n2); // '-'버튼을 눌렀을 때
  }
  else if(operator === '*') {
     result = Number(n1) * Number(n2); // '*'버튼을 눌렀을 때
  }
  if(operator === '/') {
     result = Number(n1) / Number(n2); // '/'버튼을 눌렀을 때
  }
  return String(result);
}


const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
// ! 위 코드는 수정하지 마세요.

// ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
if (target.matches('button')) {
  if (action === 'number') {
      if (display.textContent === '0' || previousKey ==='operator'){
          display.textContent = buttonContent;
      } else {
      display.textContent = display.textContent + buttonContent; 
      }
      previousKey = 'Number'
  }
  if (action === 'operator') {
      //보이징 않지만, 저장이 되어 있어야 한다 -> 변수에 할당
      operatorForAdvanced = buttonContent;
      //현재 화면에 있는 숫자 저장-> 변수에 할당
      firstNum = display.textContent;
      //방금 뭐 눌렀는지도 저장을 해주자.
      previousKey = 'operator';
  }
  if (action === 'decimal') {}
  if (action === 'clear') {
      display.textContent = '0';
      firstNum = undefined;
      operatorForAdvanced = undefined;
      previousNum = undefined;
      previousKey = 'clear';
  }
  if (action === 'calculate') {
      previousNum = display.textContent;
  }
  display.textContent = calculate(firstNum,operatorForAdvanced,previousNum)
  previousKey = 'calculate';
}
if (action === 'decimal') {}
if (action === 'clear') {
    display.textContent = '0';
    firstNum = undefined;
    operatorForAdvanced = undefined;
    previousNum = undefined;
    previousKey = 'clear';
}
if (action === 'calculate') {
    previousNum = display.textContent;
}
display.textContent = calculate(firstNum,operatorForAdvanced,previousNum)
previousKey = 'calculate';

// naive solution
// const uglyNumbers = function (n) {
//   const isUgly = (num) => {
//     num = decompose(num, 2);
//     num = decompose(num, 3);
//     num = decompose(num, 5);
//     return num === 1;
//   };

//   const decompose = (num, factor) => {
//     while (num % factor === 0) num = num / factor;
//     return num;
//   };

//   let num = 0;
//   let cnt = 0;
//   while (n > cnt) {
//     num++;
//     if (isUgly(num)) cnt++;
//   }
//   return num;
// };

// O(N)
const uglyNumbers = function (n) {
  // 매번 나눗셈 연산을 하는 것이 비효율적이므로
  // 이미 구한 수에서부터 구한다.

  const uglyNumbers = [1];
  let idx2 = 0, 
    idx3 = 0,
    idx5 = 0;

  for (let i = 0; i < n; i++) {
    // 1. 가장 작은 수인 1에 2, 3, 5를 곱한 수 중에 가장 작은 수를 구한다.
    // 2. 2가 선택됨.
    // 3. 2는 가장 작은 수 1에 곱해졌으므로
    //   3.1 이제 2는 그 다음 작은 수인 2에 곱해지고
    //   3.2 3, 5는 여전히 가장 작은 수에 곱해진다.
    // 4. 3에서 가장 작은 수는 3. 3은 이제 다음으로 작은 수인 2에 곱혀진다.
    // 5. 반복
    const nextMultipleOf2 = uglyNumbers[idx2] * 2;
    const nextMultipleOf3 = uglyNumbers[idx3] * 3;
    const nextMultipleOf5 = uglyNumbers[idx5] * 5;
    const nextUglyNum = Math.min(
      nextMultipleOf2,
      nextMultipleOf3,
      nextMultipleOf5
    );
    uglyNumbers.push(nextUglyNum);

    // 같은 수를 중복해서 저장할 수 있으므로,
    // 각각 별도의 조건문으로 작성해야 한다.
    //  2 * 3 = 6
    //  3 * 2 = 6
    if (nextUglyNum === nextMultipleOf2) idx2++;
    if (nextUglyNum === nextMultipleOf3) idx3++;
    if (nextUglyNum === nextMultipleOf5) idx5++;
  }
  return uglyNumbers[n - 1];
};
//calcuraor
function calculate(n1, operator, n2) {
  let result = 0;
  if(operator === '+') {
    result = Number(n1) + Number(n2); // '+'버튼을 눌렀을 때
  }
  else if(operator === '-') {
     result = Number(n1) - Number(n2); // '-'버튼을 눌렀을 때
  }
  else if(operator === '*') {
     result = Number(n1) * Number(n2); // '*'버튼을 눌렀을 때
  }
  if(operator === '/') {
     result = Number(n1) / Number(n2); // '/'버튼을 눌렀을 때
  }
  return String(result);
}
function orderOfPresentation(N, K) {
  // 조의 개수 N, 발표 순서 K

  // N은 최대 12입니다.
  // 발표 순서를 만드는 것은 순열(permutation)이므로, 발표 순서의 최대 크기는 12!입니다.
  // 이는 약 4억 8천만에 해당하며, 일반적인 수행 속도 상한(약 1억)을 훨씬 상회하므로 순열을 전부 생성하는 것은 올바른 접근 방법이 아닙니다.

  const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  // 발표 순서를 담는 변수 생성
  let order = 0;
  
  // N개의 조 중에, 어떠한 조가 이미 포함되었는지 확인하기 위해 배열을 생성합니다.
  // 만약 N이 3이라면 [false, false, false, false]로 생성됩니다.
  // 제일 첫 번째는 더미 데이터입니다. (인덱스는 0부터 시작하지만 조는 1부터 시작하기 때문에)
  const isUsed = Array(N + 1).fill(false);
  
  // K의 길이만큼 순회합니다.
  for (let i = 0; i < K.length; i++) {
    // K의 i번째 조를 변수에 담습니다.
    const num = K[i];
    // 사용했는지 판별하기 위해 isUsed에 체크합니다. (중복이 아니기 때문에)
    isUsed[num] = true;
    // num보다 앞에 올 수 있는 수들의 배열을 복제해서,
    const candidates = isUsed.slice(1, num);
    // 이 중에서 아직 사용되지 않은 수의 개수를 구합니다.
    const validCnt = candidates.filter((el) => el === false).length;
    // 아직 사용되지 않은 수, 그 전까지의 모든 경우의 수를 카운트합니다.
    const formerCnt = validCnt * factorial(N - i - 1);
    // order에 추가합니다.
    order = order + formerCnt;

    /**
     * 설명을 덧붙이자면,
     * 만약 K가 [2, 3, 1]이라고 가정했을 때, 첫 번째 num은 2가 될 것입니다.
     * 2가 제일 앞에 있다고 가정한다면, 앞자리가 2의 차례가 오기 전에 1의 모든 경우의 수를 구했을 것이고,
     * 1의 모든 경우의 수를 지금부터 구하게 됩니다.
     * 
     * 그렇다면, IsUsed 배열은 이렇게 됩니다. [false(더미), false, true, false]
     * candidates 배열은 이렇게 됩니다. => [false]
     * validCnt는 이렇게 됩니다. => 1
     * formerCnt는 이렇게 됩니다. => 1 * factorial(3 - 0 - 1) // i는 0부터 시작하기 때문에 N에서 남아 있는 수를 구할 때 - 1이 추가로 필요합니다.
     * order는 2를 추가합니다.
     * 
     * 두 번째를 순회했을 땐, num이 3이 됩니다.
     * 그렇다면, IsUsed 배열은 이렇게 됩니다. [false(더미), false, true, true]
     * candidates 배열은 이렇게 됩니다. => [false]
     * validCnt는 이렇게 됩니다 => 1
     * formerCnt는 이렇게 됩니다 => 1 * factorial(3 - 1 - 1)
     * order는 1을 추가합니다. (3)
     * 
     * 세 번째를 순회했을 땐, num이 1이 됩니다.
     * IsUsed 배열은 이렇게 됩니다. [false, true, true, true]
     * candidates 배열은 []이고, validCnt는 0이 되어, formerCnt는 0이 됩니다.
     * 
     * 발표 순서는 0부터 시작하기 때문에 0, 1, 2, 3으로
     * 결과적으로, 값은 3이 됩니다.
     */
  }
  
  return order;
}
const binarySearch = function (arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let middle = parseInt((right + left) / 2);
    if (arr[middle] === target) {
      return middle;
    }
    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};
const powerSet = function (str) {
  // 정렬
  const sorted = str.split('').sort();

  // 중복 제거
  const deduplicated = sorted.reduce((acc, item) => {
    if (acc[acc.length - 1] === item) {
      return acc;
    } else {
      return acc.concat(item);
    }
  });

  let subSets = [];
  const pickOrNot = (idx, subset) => {
    // base case
    if (idx === deduplicated.length) {
      // 마지막 문자까지 검토한 경우
      subSets.push(subset);
      return;
    }

    // recursive case
    // idx번째 문자가 포함되지 않는 경우
    pickOrNot(idx + 1, subset);

    // idx번째 문자가 포함되는 경우
    pickOrNot(idx + 1, subset + deduplicated[idx]);
  };

  pickOrNot(0, '');

  return subSets.sort();
};
// naive solution
// const insertionSort = function (arr) {
//   let sorted = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] >= sorted[i - 1]) {
//       sorted.push(arr[i]);
//     } else {
//       for (let j = 0; j < i; j++) {
//         if (arr[i] <= sorted[j]) {
//           const left = sorted.slice(0, j);
//           const right = sorted.slice(j);
//           sorted = left.concat(arr[i], right);
//           break;
//         }
//       }
//     }
//   }

//   return sorted;
// };

const insertionSort = function (arr, transform = (item) => item) {
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (transform(arr[i]) >= transform(sorted[i - 1])) {
      sorted.push(arr[i]);
    } else {
      for (let j = 0; j < i; j++) {
        if (transform(arr[i]) <= transform(sorted[j])) {
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }

  return sorted;
};
// naive solution
// const quickSort = function (arr) {
//   if (arr.length <= 1) return arr;

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] <= pivot) left.push(arr[i]);
//     else right.push(arr[i]);
//   }

//   const lSorted = quickSort(left);
//   const rSorted = quickSort(right);
//   return [...lSorted, pivot, ...rSorted];
// };

function quickSort(arr, transform = (item) => item) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (transform(arr[i]) < transform(pivot)) left.push(arr[i]);
    else right.push(arr[i]);
  }

  const lSorted = quickSort(left, transform);
  const rSorted = quickSort(right, transform);
  return [...lSorted, pivot, ...rSorted];
}

const merge = function (left, right) {
  let merged = [];
  let leftIdx = 0,
    rightIdx = 0;
  const size = left.length + right.length;

  for (let i = 0; i < size; i++) {
    if (leftIdx >= left.length) {
      merged.push(right[rightIdx]);
      rightIdx++;
    } else if (rightIdx >= right.length || left[leftIdx] <= right[rightIdx]) {
      merged.push(left[leftIdx]);
      leftIdx++;
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return merged;
};

const mergeSort = function (arr) {
  if (arr.length < 2) return arr;
  const middle = parseInt(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  const merged = merge(left, right);
  return merged;
};
function getMax(arr) {
  return arr.reduce((max, item) => {
    if (item > max) return item;
    return max;
  }, 0);
}

function countingSort(arr, radix) {
  const N = arr.length;
  const output = Array(N).fill(0);
  const count = Array(10).fill(0);

  // 현재 자리수를 기준으로 0~9의 개수를 센다.
  arr.forEach((item) => {
    const idx = Math.floor(item / radix) % 10;
    count[idx]++;
  });

  // count[i]가 i까지의 누적 개수가 되도록 만든다.
  count.reduce((totalNum, num, idx) => {
    count[idx] = totalNum + num;
    return totalNum + num;
  });

  // 아래 속성이 유지되도록 하기 위해 배열을 거꾸로 순회한다.
  //  1. 가장 큰 값을 먼저 본다.
  //  2. 가장 큰 값을 가장 마지막에 놓는다.
  let i = N - 1;
  while (i >= 0) {
    const idx = Math.floor(arr[i] / radix) % 10;
    // count[idx]: 현재 radix의 idx까지 누적 개수
    // count[idx]개만큼 있으므로, 인덱스는 count[idx] - 1
    output[count[idx] - 1] = arr[i];
    count[idx] -= 1;
    i--;
  }

  return output;
}

// naive solution
// 양의 정수만 정렬 가능
// function radixSort(arr) {
//   const max = getMax(arr);
//   let radix = 1;
//   while (parseInt(max / radix) > 0) {
//     arr = countingSort(arr, radix);
//     radix *= 10;
//   }
//   return arr;
// }

// 음의 정수를 포함한 기수 정렬
// 1. 주어진 배열을 음수 부분과 양수 부분으로 나눈다.
// 2. 음수는 절대값을 기준으로, 즉 양수로 변환하여 기수 정렬한다.
// 3. 양수를 정렬한다.
// 4. 정렬된 음수 부분을 다시 음수로 바꾸고 순서를 뒤짚는다.
// 5. 음수 부분과 양수 부분을 붙인다.
function radixSort(arr) {
  let left = [];
  let right = [];
  arr.forEach((item) => {
    if (item >= 0) right.push(item);
    else left.push(item * -1);
  });

  let max = getMax(left);
  let radix = 1;
  while (parseInt(max / radix) > 0) {
    left = countingSort(left, radix);
    radix *= 10;
  }

  max = getMax(right);
  radix = 1;
  while (parseInt(max / radix) > 0) {
    right = countingSort(right, radix);
    radix *= 10;
  }

  return left
    .reverse()
    .map((item) => item * -1)
    .concat(right);
}
const robotPath = function (room, src, dst) {
  const aux = (M, N, candi, step) => {
    // 현재 위치
    const [row, col] = candi;

    // 배열의 범위를 벗어난 경우
    if (row < 0 || row >= M || col < 0 || col >= N) return;

    if (room[row][col] === 0 || room[row][col] > step) {
      room[row][col] = step;
    } else {
      // 장애물(1)이거나 이미 최소 시간(1)으로 통과가 가능한 경우
      return;
    }

    // dfs로 4가지 방향에 대해 탐색을 한다.
    // 완전탐색을 해야하므로 bfs나 dfs가 큰 차이가 없다.
    // bfs의 경우 목적지에 도착하는 경우 탐색을 중단해도 되므로,
    // 약간 더 효율적이다.
    aux(M, N, [row + 1, col], step + 1); // 상
    aux(M, N, [row - 1, col], step + 1); // 하
    aux(M, N, [row, col - 1], step + 1); // 좌
    aux(M, N, [row, col + 1], step + 1); // 우
  };

  // 로봇이 서 있는 위치를 1로 초기화하면 (다시 방문하지 않기 위해서),
  // 바로 옆 통로는 2가 된다.
  // 계산이 완료된 후에 최종값에 1을 빼주면 된다.
  aux(room.length, room[0].length, src, 1);

  const [r, c] = dst;
  return room[r][c] - 1;
};// naive solution: O(N^2)
// const LSCS = function (arr) {
//   let max = -100000;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = arr[i];
//     if (sum > max) max = sum;
//     for (let j = i + 1; j < arr.length; j++) {
//       sum = sum + arr[j];
//       if (sum > max) max = sum;
//     }
//   }
//   return max;
// };

// dynamic programming: O(N)
const LSCS = function (arr) {
  let subArrSum = 0; // 연속 배열의 합
  let max = Number.MIN_SAFE_INTEGER; // 정답의 후보를 저장
  for (let i = 0; i < arr.length; i++) {
    subArrSum = subArrSum + arr[i];
    if (subArrSum > max) max = subArrSum;

    // 연속된 구간의 합이 음수인 경우,
    // 해당 부분은 버리고 다시 시작해도 된다.
    if (subArrSum < 0) {
      subArrSum = 0;
    }
  }

  return max;
};

// also dynamic 2: O(N)
// const LSCS = function (arr) {
//   let subArrSum = arr[0];
//   let max = arr[0]; // 정답의 후보를 저장
//   for (let i = 1; i < arr.length; i++) {
//     // subArrSum는 바로 직전의 요소까지 검토했을 때 가장 연속합
//     // 연속합에 추가로 검토하는 요소, 즉 arr[i]를 더하는 것보다
//     // arr[i] 하나의 값이 더 큰 경우 (subArrSum가 음수일 경우)
//     // subArrSum를 버리는 게 좋다.
//     // 쭉 더해서 음수인 부분은 굳이 더할 필요가 없다.
//     subArrSum = Math.max(subArrSum + arr[i], arr[i]);
//     max = Math.max(max, subArrSum);
//   }

//   return max;
// };

const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  // bfs 구현을 위해 큐를 선언한다.
  // enQueue, deQueue시마다 인덱싱을 다시 하지 않기 위해
  // 순환 큐(circular queue)로 구현한다.
  // queue의 가능한 최대 크기만큼 배열을 선언한다.
  // 문제의 특성에 따라 큐에는 좌표 평면의 한 점이 삽입되고, 한번 삽입된 요소는 두 번 다시 삽입되지 않는다.
  const R = village.length;
  const C = village[0].length;
  const matrix = createMatrix(village);
  const MOVES = [
    [-1, 0], // UP
    [1, 0], // DOWN
    [0, 1], // RIGHT
    [0, -1], // LEFT
  ];
  const MAX_SIZE = R * C; // 가능한 모든 좌표의 크기만큼 큐가 선언되었으므로, 사실 순환큐일 필요는 없다.
  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;
  const queue = Array(MAX_SIZE);
  let front = 0;
  let rear = 0;
  const isEmpty = (queue) => front === rear;
  const enQueue = (queue, pos) => {
    // 실행 중에 큐가 가득차지는 않기 때문에 별도의 조건문을 작성할 필요가 없다.
    queue[rear] = pos;
    // 모듈러스 연산을 할 필요도 사실 없다.
    rear = (rear + 1) % MAX_SIZE;
  };
  const deQueue = (queue) => {
    const pos = queue[front];
    // 모듈러스 연산을 할 필요도 사실 없다.
    front = (front + 1) % MAX_SIZE;
    return pos;
  };

  let cnt = 0;
  enQueue(queue, [row, col]);
  // 소문이 퍼지는 데 걸리는 시간을 저장한다.
  matrix[row][col] = 0;
  while (isEmpty(queue) === false) {
    // 큐의 가장 앞 자리의 좌표를 얻는다.
    const [row, col] = deQueue(queue);
    cnt = matrix[row][col];

    // 현재 지점을 기준으로 네 방향을 검토한다.
    MOVES.forEach((move) => {
      const [rDiff, cDiff] = move;
      const nextRow = row + rDiff;
      const nextCol = col + cDiff;
      if (isValid(nextRow, nextCol) && matrix[nextRow][nextCol] === '1') {
        enQueue(queue, [nextRow, nextCol]);
        matrix[nextRow][nextCol] = matrix[row][col] + 1;
      }
    });
  }
  return cnt;
};
// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법

  // 1) 임시 변수를 활용한 방법
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2) Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3) XOR 연산을 활용한 방법
  // arr이 reference type이라 가능
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item);
  let curIdx = heap.length - 1;
  let pIdx = getParentIdx(curIdx);
  while (pIdx >= 0 && heap[curIdx] > heap[pIdx]) {
    swap(curIdx, pIdx, heap);
    curIdx = pIdx;
    pIdx = getParentIdx(curIdx);
  }
  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};
// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item);
  if (heap.length > 1) {
    let curIdx = heap.length - 1;
    let pIdx = getParentIdx(curIdx);
    while (pIdx >= 0 && heap[curIdx] < heap[pIdx]) {
      swap(curIdx, pIdx, heap);
      curIdx = pIdx;
      pIdx = getParentIdx(curIdx);
    }
  }
  return heap;
}

function removeRoot(heap) {
  // TODO: 여기에 코드를 작성합니다.
  swap(0, heap.length - 1, heap);
  heap.pop();
  if (heap.length === 0) return [];

  let curIdx;
  let minIdx = 0;
  while (curIdx !== minIdx) {
    curIdx = minIdx;
    let left = curIdx * 2 + 1;
    let right = curIdx * 2 + 2;
    if (left < heap.length && heap[left] < heap[minIdx]) {
      minIdx = left;
    }

    if (right < heap.length && heap[right] < heap[minIdx]) {
      minIdx = right;
    }

    swap(curIdx, minIdx, heap);
  }

  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  // TODO: 여기에 코드를 작성합니다.
  const sorted = [];
  while (minHeap.length > 0) {
    sorted.push(minHeap[0]);
    minHeap = removeRoot(minHeap);
  }
  return sorted;
};
// naive solution: O(N) (search only)
// const rangeMinimum = function (arr, ranges) {
//   return ranges.map((range) => {
//     const [start, end] = range;
//     let min = Number.MAX_SAFE_INTEGER;
//     for (let i = start; i <= end; i++) {
//       if (arr[i] < min) min = arr[i];
//     }
//     return min;
//   });
// };

// solution with segment tree: O(logN) (search only)
// object implementaion
const rangeMinimum = function (arr, ranges) {
  // ts: tree start. te: tree end
  // arr의 ts부터 te까지를 tree로 만든다.
  const createMinTree = (arr, ts, te) => {
    // base case
    if (ts === te) {
      return { value: arr[ts] };
    }

    // recursive case
    // 현재 범위를 절반을 기준으로 왼쪽과 오른쪽으로 나눈다
    const mid = parseInt((ts + te) / 2);
    const left = createMinTree(arr, ts, mid);
    const right = createMinTree(arr, mid + 1, te);

    return {
      value: Math.min(left.value, right.value),
      left,
      right,
    };
  };
  const tree = createMinTree(arr, 0, arr.length - 1);

  // rs: range start, re: reange end
  const findMin = (ts, te, rs, re, tree) => {
    // 현재 tree와 구간이 정확히 일치하거나
    // 구간이 tree를 포함할 경우
    if (rs <= ts && te <= re) {
      return tree.value;
    }

    // 현재 tree에 주어진 구간이 겹치지 않는 경우
    if (te < rs || re < ts) {
      return Number.MAX_SAFE_INTEGER;
    }

    // 겹치는 부분이 존재하는 경우
    const mid = parseInt((ts + te) / 2);
    return Math.min(
      findMin(ts, mid, rs, re, tree.left), //
      findMin(mid + 1, te, rs, re, tree.right)
    );
  };

  const mins = ranges.map((range) => {
    const [start, end] = range;
    return findMin(0, arr.length - 1, start, end, tree);
  });
  return mins;
};

// solution with segment tree: O(logN) (search only)
// array implementaion
// const rangeMinimum = function (arr, ranges) {
//   const createMinTree = (arr, ts, te, tree, idx) => {
//     if (ts === te) {
//       tree[idx] = arr[ts];
//       return arr[ts];
//     }

//     const mid = Math.floor((ts + te) / 2);
//     tree[idx] = Math.min(
//       createMinTree(arr, ts, mid, tree, idx * 2 + 1), //
//       createMinTree(arr, mid + 1, te, tree, idx * 2 + 2)
//     );

//     return tree[idx];
//   };

//   // 트리 전체의 높이(루트 노트에서 가장 깊은 리프 노드까지의 거리)를 구하고
//   // 전체 배열의 크기를 구한다.
//   const height = Math.ceil(Math.log2(arr.length));
//   const size = Math.pow(2, height + 1) - 1;
//   const tree = Array(size).fill(null);
//   createMinTree(arr, 0, arr.length - 1, tree, 0);

//   const findMin = (ts, te, rs, re, idx) => {
//     if (rs <= ts && te <= re) {
//       return tree[idx];
//     }

//     if (te < rs || re < ts) {
//       return Number.MAX_SAFE_INTEGER;
//     }

//     const mid = parseInt((ts + te) / 2);
//     return Math.min(
//       findMin(ts, mid, rs, re, 2 * idx + 1), //
//       findMin(mid + 1, te, rs, re, 2 * idx + 2)
//     );
//   };

//   const mins = ranges.map((range) => {
//     const [start, end] = range;
//     return findMin(0, arr.length - 1, start, end, 0);
//   });
//   return mins;
// };
// naive solution: O(2^N)
// 배열의 각 요소에 대해서 선택, 무시의 2가지 선택이 가능
// const LIS = function (arr) {
//   // 현재 검토할 차례인 배열의 '인덱스'와
//   // 이전에 선택된 요소의 '값'을 인자로 전달한다.
//   const pickOrNot = (idx, before) => {
//     // base case
//     // 가장 짧은 LIS의 길이는 1이다. 모든 요소는 그 자체로 길이 1인 부분 서열이다.
//     if (idx === arr.length) return 1;

//     // recursive case
//     // (초기값인 Number.MAX_SAFE_INTEGER를 포함해) 이전에 선택된 요소와 비교를 한다.
//     const adder = arr[idx] > before ? 1 : 0;
//     return Math.max(
//       // 1) 현재 요소를 선택한다.
//       //  1-1) adder === 1: 현재 요소를 이전에 선택된 요소 뒤에 이어지는 요소로 생각해 LIS의 길이에 1을 더한다.
//       //  1-2) adder === 0: 현재 요소를 이어지는 요소로 생각할 수 없는 경우. 이전 요소를 건너뛰고 LIS의 처음 또는 중간 요소로 현재 요소를 선택한다.
//       adder + pickOrNot(idx + 1, arr[idx]), // concat or restart
//       // 2) 현재 요소를 무시한다.
//       pickOrNot(idx + 1, before) // ignore
//     );
//   };
//   // 첫 번째 요소의 이전 요소는 없기 때문에 매우 큰 값을 이전 값으로 설정한다.
//   // 첫 번째 요소부터 시작하는 LIS를 검사하는 효과를 갖는다.
//   return pickOrNot(0, Number.MAX_SAFE_INTEGER);
// };

// dynamic programming with memoization: O(N^2)
// const LIS = function (arr) {
//   // memo[i]는 i부터 시작하는 LIS의 길이를 저장
//   const memo = Array(arr.length).fill(-1);
//   // 마지막 요소부터 시작하는 LIS는 1이 유일하다.
//   memo[memo.length - 1] = 1;
//   const calculateLIS = (idx) => {
//     if (memo[idx] !== -1) return memo[idx];

//     let max = 1;
//     for (let i = idx + 1; i < arr.length; i++) {
//       const len = calculateLIS(i);
//       // idx와 i가 연결되지 않을 수도 있다.
//       if (arr[idx] < arr[i]) {
//         // i부터 시작하는 LIS를 연결할 수 있는 경우
//         max = Math.max(max, len + 1);
//       }
//       // i부터 시작하는 LIS가 더 길 수도 있다.
//       // idx부터 시작하는 LIS를 구해야 하므로, 무시한다.
//     }
//     memo[idx] = max;
//     return memo[idx];
//   };
//   calculateLIS(0);
//   // 가장 긴 길이를 구한다.
//   return Math.max(...memo);
// };

// dynamic programming with tabulation: O(N^2)
const LIS = function (arr) {
  const N = arr.length;
  // lis[i]는 i에서 끝나는 LIS의 길이를 저장
  // 최소한 각 요소 하나로 LIS를 만들 수 있으므로 1로 초기화한다.
  const lis = Array(N).fill(1);
  for (let i = 1; i < N; i++) {
    // i에서 끝나는 LIS의 길이
    for (let j = 0; j < i; j++) {
      // i 이전의 인덱스만 검사하면 된다.
      // i는 1부터 시작하므로, 짧은 길이부터 검사한다. (bottom-up 방식)
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }
  return Math.max(...lis);
};
// naive solution: O(2^N)
// 두 문자열의 길이(m, n)가 같다고 가정할 경우에 한함
// 최악의 경우는 일치하는 문자가 전혀 없을 경우이고 이때는 한쪽 문자열의 끝까지 비교해야 하므로 2^n 만큼의 시간이 걸린다.
// const LCS = function (str1, str2) {
//   // str1.slice 또는 str1.substring은 O(N)만큼의 오버헤드가 추가된다.
//   // 비교는 인덱스만 알아도 충분하다.
//   // left: str1의 인덱스, right: str2의 인덱스, len: 현재까지 만든 LCS의 길이
//   const compareOneByOne = (left, right) => {
//     // base case
//     // 더 이상 비교가 불가능한 경우
//     if (left === str1.length || right === str2.length) return 0;

//     // 일치하는 문자가 있는 경우
//     // 인덱스를 공통으로 이동하고, 길이를 1개 추가한다.
//     if (str1[left] === str2[right]) {
//       return 1 + compareOneByOne(left + 1, right + 1);
//     }

//     // 일치하는 문자가 없는 경우
//     // 길이는 그대로고, str1과 str2 중에서 어느 쪽의 문자를 포기할지 정해야한다.
//     // 양쪽다 가능성이 있으므로 양쪽을 모두 탐색하고 그 중 큰 값을 선택한다.
//     return Math.max(
//       compareOneByOne(left + 1, right), //
//       compareOneByOne(left, right + 1)
//     );
//   };

//   return compareOneByOne(0, 0);
// };

// dynamic programming: O(M * N)
// memoization을 활용해 중복 계산되는 문제를 제거한다.
// LCS('ABCD', 'ACEB')의 경우 재귀 호출을 적어보면 아래와 같다.
// => 1) LCS('BCD', 'CEB')
//  => 1-1) LCS('CD', 'CEB'), 1-2) LCS('BCD', 'EB')
//    => 1-1-1) LCS('D', 'CEB'), 1-1-2) LCS('CD', 'EB')
//    => 1-2-1) LCS('CD', 'EB'), 1-2-2) LCS('BCD', 'B')
// 더 볼 필요 없이 1-1-2)와 1-2-1)은 같은 문제임을 알 수 있다.
const LCS = function (str1, str2) {
  const M = str1.length;
  const N = str2.length;
  const memo = [];
  // 중복 계산을 방지하기 위해 left, right
  for (let i = 0; i < M + 1; i++) memo.push(Array(N + 1).fill(-1));

  const compareOneByOne = (left, right, len) => {
    if (memo[left][right] !== -1) return memo[left][right];

    if (left === str1.length || right === str2.length) return 0;

    if (str1[left] === str2[right]) {
      memo[left][right] = 1 + compareOneByOne(left + 1, right + 1, len + 1);
      return memo[left][right];
    }

    memo[left][right] = Math.max(
      compareOneByOne(left + 1, right, len), //
      compareOneByOne(left, right + 1, len)
    );
    return memo[left][right];
  };

  return compareOneByOne(0, 0, 0);
};

// dynamic programming: O(M * N)
// tabulation(테이블에 정리)을 활용해 bottom-up 방식으로 해결
// const LCS = function (str1, str2) {
//   const M = str1.length;
//   const N = str2.length;
//   // table[i][j]는 str1.slice(0, i)와 str2.slice(0, j)의 LCS를 저장
//   // str1.slice(0, i)는 0부터 i 바로 직전까지를 의미함 (i까지가 아님에 주의)
//   const table = [];
//   for (let i = 0; i < M + 1; i++) table.push(Array(N + 1).fill(-1));

//   for (let i = 0; i <= M; i++) {
//     for (let j = 0; j <= N; j++) {
//       if (i === 0 || j === 0) {
//         // i 또는 j가 0인 경우, 한쪽 문자열이 길이가 0이라는 의미이다.
//         // LCS가 존재할 수 없으므로, 0을 저장한다.
//         table[i][j] = 0;
//       } else if (str1[i - 1] === str2[j - 1]) {
//         // 두 문자가 같은 경우
//         // 양쪽 문자열의 인덱스가 한 개씩 이전인 상태에서 만들 수 있는 LCS의 길이보다 1만큼 더 길다.
//         table[i][j] = 1 + table[i - 1][j - 1];
//       } else {
//         // 두 문자가 같지 않은 경우
//         // 둘 중 한쪽을 포기하는 경우에 만들 수 있는 LCS의 길이를 따른다.
//         table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
//       }
//     }
//   }
//   return table[M][N];
// };
const isPrime = (num) => {
  if (num % 2 === 0) return false;
  let sqrt = parseInt(Math.sqrt(num));
  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

// 4자리 수를 받아서 각 자리수의 수들의 배열로 변환하는 함수
//  let output = splitNum(3359);
//  console.log(output); // --> [3, 3, 5, 9]
const splitNum = (num) => {
  const digits = num.toString().split('');
  return digits.map((d) => Number(d));
};

// 길이의 4의 수 배열을 받아서, 4자리의 수로 변환하는 함수
//  let output = splitNum([3, 3, 5, 9]);
//  console.log(output); // --> 3359
const joinDigits = (digits) => Number(digits.join(''));

const primePassword = (curPwd, newPwd) => {
  if (curPwd === newPwd) return 0;
  // bfs를 위해 queue를 선언
  let front = 0;
  let rear = 0;
  const queue = [];
  const isEmpty = (queue) => front === rear;
  const enQueue = (queue, item) => {
    queue.push(item);
    rear++;
  };
  const deQueue = (queue) => {
    return queue[front++];
    // const item = queue[front];
    // front++;
    // return item;
  };

  // 각 4자리의 방문 여부를 저장하는 배열
  // 한 번 방문한 수(가장 최소의 동작으로 만든 수)는 다시 방문할 필요가 없다.
  const isVisited = Array(10000).fill(false);
  isVisited[curPwd] = true;
  // bfs를 위한 시작점
  // 큐에는 [필요한 동작 수, 비밀번호]가 저장된다.
  enQueue(queue, [0, curPwd]);
  // bfs는 큐가 빌(empty) 때까지 탐색한다.
  while (isEmpty(queue) === false) {
    const [step, num] = deQueue(queue);
    // 각 자리수 마다 변경이 가능하므로 4번의 반복이 필요하다.
    for (let i = 0; i < 4; i++) {
      const digits = splitNum(num);
      // 0부터 9까지 시도한다.
      for (let d = 0; d < 10; d++) {
        // 각 자리수마다 원래 있던 수(digits[i])는 피해야 한다.
        if (d !== digits[i]) {
          // 현재 자리수의 수를 변경하고,
          digits[i] = d;
          // 변경한 후 4자리 수를 구한다.
          const next = joinDigits(digits);
          // 만약 이 수가 새 비밀번호와 같다면 리턴한다.
          // next는 deQueue된 num으로부터 1단계 다음에 도달한 수이다.
          if (next === newPwd) return step + 1;
          // 1,000보다 큰 소수여야 하고, 방문된 적이 없어야 한다.
          if (next > 1000 && isPrime(next) && isVisited[next] === false) {
            // 방문 여부를 표시하고,
            isVisited[next] = true;
            // 큐에 넣는다.
            enQueue(queue, [step + 1, next]);
          }
        }
      }
    }
  }

  // 큐가 빌 때까지, 즉 모든 경우의 수를 탐색할 때까지 리턴되지 않은 경우
  // 현재 비밀번호에서 새 비밀번호를 만들 수 없다.
  return -1;
};
// naive solution
const LPS3 = function (str) {
  if (str.length < 2) return 0;

  // 문자열을 두 부분으로 나누고
  // 부분 문자열을 쉽게 구하기 위해
  // 왼쪽 부분의 마지막 인덱스와 오른쪽 부분의 첫 인덱스를 저장

  let halfSize = Math.floor(str.length / 2);
  // 문자열의 길이가 홀수일 수 있으므로, 올림한다.
  let rightStart = Math.ceil(str.length / 2);

  // 가장 긴 LPS 후보부터 차례대로 검사한다
  for (let offset = 0; offset < halfSize; offset++) {
    let matched = true;
    for (let i = 0; i < halfSize - offset; i++) {
      if (str[i] !== str[rightStart + offset + i]) {
        matched = false;
        break;
      }
    }
    if (matched) return halfSize - offset;
  }

  // LPS가 없는 경우
  return 0;
};

// naive solution2
const LPS = function (str) {
  if (str.length < 2) return 0;

  // 문자열을 두 부분으로 나누고
  // 각 부분의 첫 인덱스를 저장
  let leftIdx = 0;
  // 문자열의 길이가 홀수일 수 있으므로, 올림한다.
  let rightIdx = Math.ceil(str.length / 2);

  while (rightIdx < str.length) {
    if (str[leftIdx] == str[rightIdx]) {
      // LPS 검사를 시작한 위치부터 지금까지 계속 같은 경우
      // 다음 문자도 같은지 확인하기 위해 인덱스를 이동한다.
      leftIdx++;
      rightIdx++;
    } else {
      // leftIdx가 0인 경우, 단순히 rightIdx를 1 증가 (suffix의 시작점을 뒤로 한 칸 이동)
      // prefix, suffix가 계속 일치하다가 중간에서 일치하지 않는 경우에도,
      // 현재 suffix의 시작점을 뒤로 한 칸 이동한다.
      rightIdx = rightIdx - leftIdx + 1;
      leftIdx = 0;
    }
  }

  // LPS가 없는 경우
  return leftIdx;
};

// // dynamic solution: O(N)
// // non-overlapping 조건을 제거하고 lps를 구한다.
// // lps는 주어진 문자열에서 아래 조건을 만족하는 가장 긴 접두어(prefix)의 길이를 의미한다.
// //  - 해당 접두어는 주어진 문자열의 접미어(suffix)이기도 하다.
// // 이때, 문자열 자기 자신은 그 자체로 prefix이자 suffix인데, 이는 고려 대상에서 제외한다.
// const LPS = function (str) {
//   // lps[i]는 0부터 i까지의 부분 문자열, 즉 str.slice(0, i + 1)에서 lps의 길이를 저장한다.
//   const lps = Array(str.length);
//   // lps[0]은 길이가 1인 문자열의 lps의 길이이므로 항상 0이다. (자기 자신 포함 금지)
//   lps[0] = 0;
//   let leftIdx = 0;
//   let rightIdx = 1;
//   // lps[i]를 1부터, 즉 문자열의 길이가 2일때부터 차례대로 구한다.
//   while (rightIdx < str.length) {
//     if (str[leftIdx] === str[rightIdx] && rightIdx >= str.length / 2) {
//       // 가장 단순한 경우를 생각해보면, 쉽게 이해할 수 있다.
//       // 1) 길이가 2 경우
//       // 2) 길이가 3 이상인데 전부 같은 문자인 경우
//       // 0부터 leftIdx까지 매칭이 되었으므로 매칭된 길이는 leftIdx + 1이다.
//       leftIdx++;
//       lps[rightIdx] = leftIdx;
//       rightIdx++;
//     } else {
//       // 중간에 매칭이 되지 않은 경우, leftIdx를 조정한다.
//       // 현재 lps[0]부터 lps[rightIdx - 1]까지 계산이 완료된 상태이다.
//       // 처음부터 다시 prefix, suffix 매칭을 하는 것이 원칙이지만
//       // 앞서 계산한 결과인 lps 배열을 통해 처음으로 되돌아갈 필요는 없다.

//       // 예. aaabaaaa
//       // 현재 leftIdx는 2, rigthIdx는 3, lps는 [0, 1, 2]인 상태라고 가정해보자.
//       // leftIdx가 1일 때까지, 즉 현재 leftIdx 직전(leftIdx - 1)까지는 매칭이 되었다.
//       if (leftIdx !== 0) {
//         leftIdx = lps[leftIdx - 1];
//         // Also, note that we do
//         // not increment i here
//       } else {
//         // rightIdx가 1인 경우, 즉 첫 iteration일 경우
//         // lps[rightIdx]가 0인 것은 명백하다. (예. ab)
//         // leftIdx가 0이라는 것은 처음부터 prefix, suffix 매칭을 하는 경우이다.
//         //
//         // lps가 존재하지 않는 경우이다.
//         lps[rightIdx] = 0;
//         rightIdx++;
//       }
//     }
//   }
//   const res = lps[lps.length - 1];
//   return res > str.length / 2 ? Math.floor(str.length / 2) : res;
// };
const inequalityNumber = function (signs) {
  const aux = (idx, signs, nums, digits, isVisited) => {
    if (idx === signs.length) {
      // 부등호 수를 만든 경우
      return parseInt(nums.join(''));
    }

    const sign = signs[idx];
    for (let i = 0; i < digits.length; i++) {
      // 숫자를 차례대로 검토한다.
      // max를 구할 때는 9부터, min을 구할 때는 0부터
      const right = digits[i];
      // 이전 단계에서 사용한 숫자인 경우 스킵
      if (isVisited[right]) continue;

      // 첫번째 숫자가 아닌 경우에는 조건이 중요하다.
      if (idx >= 0) {
        // 항상 바로 직전의 숫자와 비교하면 된다.
        const left = nums[nums.length - 1];
        if (sign === '<' && left >= right) continue;
        if (sign === '>' && left <= right) continue;
      }

      // 조건을 만족하거나 첫번째 숫자인 경우
      isVisited[right] = true;
      const target = aux(idx + 1, signs, nums.concat(right), digits, isVisited);
      if (target !== undefined) {
        // 부등호 수를 이미 찾은 경우 탐색을 더 할 필요가 없다.
        return target;
      }
      // 탐색에 실패한 경우, 시도한 숫자의 상태(사용중)를 원래대로(사용안함) 바꿔놔야 한다.
      isVisited[right] = false;
    }

    return undefined;
  };

  signs = signs.split(' ');
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // arr.reverse()는 in-place 함수(데이터 직접 변경)이므로 min과 max의 순서는 중요하다.
  const min = aux(-1, signs, [], digits, Array(10).fill(false));
  const max = aux(-1, signs, [], digits.reverse(), Array(10).fill(false));
  return max - min;
};
const spiralTraversal = function (matrix) {
  // 각 방향마다 row와 col의 변화를 저장
  const RIGHT = [0, 1];
  const DOWN = [1, 0];
  const LEFT = [0, -1];
  const UP = [-1, 0];
  // 각 방향을 위한 lookup table
  const MOVES = [RIGHT, DOWN, LEFT, UP];
  const M = matrix.length;
  const N = matrix[0].length;
  const isValid = (row, col) => row >= 0 && row < M && col >= 0 && col < N;

  let cnt = 0;
  let row = 0,
    col = -1;
  let direction = 0;
  let result = '';
  while (cnt < M * N) {
    const move = MOVES[direction];
    const [rd, cd] = move;

    row = row + rd;
    col = col + cd;
    while (isValid(row, col) && matrix[row][col] !== false) {
      result = result + matrix[row][col];
      // 한 요소를 두 번 접근하지 않게 하기 위해서, 접근된 요소를 false로 변경한다.
      matrix[row][col] = false;
      row = row + rd;
      col = col + cd;
      cnt++;
    }
    // row, col 이 행렬의 범위를 벗어났기 때문에,
    // 진행된 방향의 반대로 한 칸 이동한다.
    row = row - rd;
    col = col - cd;

    // 각 방향이 순환되기 때문에 모듈러 연산을 사용한다.
    direction = (direction + 1) % 4;
  }
  return result;
};
const robotPath2 = function (room, src, sDir, dst, dDir) {
  // 가로와 세로의 길이
  const R = room.length;
  const C = room[0].length;
  // 4가지 방향: 위(1), 오른쪽(2), 아래(3), 왼쪽(4)
  // 차례대로 [방향, 상하이동, 좌우이동]
  const MOVES = [
    [1, -1, 0], // UP
    [2, 0, 1], // RIGHT
    [3, 1, 0], // DOWN
    [4, 0, -1], // LEFT
  ];

  // 좌표가 유효한 좌표인지 확인하는 함수
  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;

  // 각 위치별 최소의 동작으로 도달 가능한 경우의 방향을 저장
  const directions = [];
  // 각 위치별 최소 동작의 수를 저장. 편의상 거리(dist)로 표현
  const dist = [];
  for (let row = 0; row < R; row++) {
    directions.push(Array(C).fill(0));
    dist.push(Array(C).fill(Number.MAX_SAFE_INTEGER));
  }

  // bfs 구현을 위해 큐를 선언한다.
  const queue = Array(R * C);
  let front = 0;
  let rear = 0;
  const isEmpty = (queue) => front === rear;
  const enQueue = (queue, pos) => {
    queue[rear] = pos;
    rear++;
  };
  const deQueue = (queue) => {
    return queue[front++];
  };

  // 출발 지점의 좌표
  const [sRow, sCol] = src;
  directions[sRow][sCol] = sDir;
  dist[sRow][sCol] = 0;

  // 목표 지점의 좌표
  const [dRow, dCol] = dst;

  enQueue(queue, [sRow, sCol]);
  while (isEmpty(queue) === false) {
    const [row, col] = deQueue(queue);
    const dir = directions[row][col];

    for (move of MOVES) {
      const [nDir, rDiff, cDiff] = move;
      // 이동할 좌표
      const nRow = row + rDiff;
      const nCol = col + cDiff;

      // 유효한 좌표가 아니거나
      // 해당 좌표가 장애물(1)인 경우 건너뛴다.
      if (isValid(nRow, nCol) === false || room[nRow][nCol] === 1) continue;

      // 현재 위치의 방향과 목표 위치의 방향과의 차이
      const dDiff = Math.abs(nDir - dir);
      let candidate;
      if (dDiff === 0) {
        // 차이가 없는 경우
        // 출발 지점에서의 방향과 이동하려는 방향이 같은 경우
        // 직진만 하면 되지만 그러기 위해서는 1로 초기화 되어야 한다.
        candidate = dist[row][col] || 1;
      } else if (dDiff === 2) {
        // 2번 회전해야 하는 경우: 회전 2 + 직진 1
        candidate = dist[row][col] + 3;
      } else {
        // 1번만 회전해도 되는 경우: 회전 1 + 직진 1
        candidate = dist[row][col] + 2;
      }

      if (nRow === dRow && nCol === dCol) {
        // 다음에 도달하는 곳이 목표 지점인 경우
        // 목표 방향까지 고려해서 필요한 거리를 계산한다.
        const dDiff = Math.abs(nDir - dDir);
        if (dDiff === 0) {
          candidate = candidate;
        } else if (dDiff === 2) {
          candidate = candidate + 2;
        } else {
          candidate = candidate + 1;
        }
      }

      if (candidate < dist[nRow][nCol]) {
        // 유망한 좌표는 큐에 삽입한다.
        enQueue(queue, [nRow, nCol]);
        dist[nRow][nCol] = candidate;
        // 방향은 전부 같다.
        directions[nRow][nCol] = nDir;
      }
    }
  }

  return dist[dRow][dCol];
};
// naive solution: O(N^2)
// const largestRectangularArea = function (histogram) {
//   let largest = 0;
//   // 모든 연속된 부분 히스토그램을 고려한다.
//   // 밑변의 길이를 부분 히스토그램의 길이로 고정하면, 높이는 가장 낮은 막대의 높이가 된다.
//   for (let left = 0; left < histogram.length; left++) {
//     // 길이가 1인 막대로 만들 수 있는 직사각형의 넓이는 막대의 높이와 같다.
//     let min = histogram[left];
//     for (let right = left; right < histogram.length; right++) {
//       // left부터 right까지의 히스토그램의 막대 중 가장 낮은 막대의 높이를 구한다.
//       if (histogram[right] < min) min = histogram[right];
//       // 해당 구간(left ~ right)의 막대를 전부 포함해서 만들 수 있는 직사각형의 넓이를 구한다.
//       let area = min * (right - left + 1);
//       // 매번 구한 면적을 기존의 면적과 비교해 갱신한다.
//       if (area > largest) largest = area;
//     }
//   }
//   return largest;
// };

// divide and conquer: O(N * logN)
const largestRectangularArea = function (histogram) {
  const createMinIdxTree = (arr, ts, te) => {
    // 가장 작은 값의 '인덱스'를 구하기 위한 구간 트리
    if (ts === te) return { idx: ts, val: arr[ts] };

    const mid = parseInt((ts + te) / 2);
    const left = createMinIdxTree(arr, ts, mid);
    const right = createMinIdxTree(arr, mid + 1, te);

    return {
      val: Math.min(left.val, right.val),
      idx: left.val < right.val ? left.idx : right.idx,
      left,
      right,
    };
  };
  const tree = createMinIdxTree(histogram, 0, histogram.length - 1);

  const getMinIdx = (ts, te, rs, re, tree) => {
    if (rs <= ts && te <= re) return tree.idx;
    if (te < rs || re < ts) return rs;

    const mid = parseInt((ts + te) / 2);
    const left = getMinIdx(ts, mid, rs, re, tree.left);
    const right = getMinIdx(mid + 1, te, rs, re, tree.right);
    return histogram[left] < histogram[right] ? left : right;
  };

  const getRangeArea = (start, end) => {
    if (start > end) return 0;
    // 현재 구간에서 가장 작은 막대를 찾는다.
    // 가장 작은 막대이므로 구간의 길이 * 높이만큼의 직사각형을 만들 수 있다. (첫번째 후보)
    const minIdx = getMinIdx(0, histogram.length - 1, start, end, tree);

    // 가장 작은 막대를 기준으로 왼쪽, 오른쪽 부분에 존재하는 모든 막대의 높이가 더 크다.
    // 재귀적으로 왼쪽 부분과 오른쪽 부분,
    // 즉 해당 구간에서 가장 작은 막대를 제외해서 만들 수 있는 가장 큰 직사각형의 넓이를 구한다.
    return Math.max(
      (end - start + 1) * histogram[minIdx], // 첫번째 후보
      getRangeArea(start, minIdx - 1),
      getRangeArea(minIdx + 1, end)
    );
  };

  return getRangeArea(0, histogram.length - 1);
};
// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
  const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
  const dist = Math.sqrt(yDiffSquared + xDiffSquared);
  return Math.round(dist * 100);
}

// naive solution: O(N^2)
// 모든 쌍을 비교하는 방법
// const closestPairOfPoints = function (points) {
//   let min = Number.MAX_SAFE_INTEGER;
//   for (let src = 0; src < points.length; src++) {
//     for (let dst = src + 1; dst < points.length; dst++) {
//       const dist = calculateDistance(points[src], points[dst]);
//       min = Math.min(min, dist);
//     }
//   }
//   return min;
// };

const merge = function (left, right, comparator = (item) => item) {
  let merged = [];
  let leftIdx = 0,
    rightIdx = 0;
  const size = left.length + right.length;

  for (let i = 0; i < size; i++) {
    if (leftIdx >= left.length) {
      merged.push(right[rightIdx]);
      rightIdx++;
    } else if (
      rightIdx >= right.length ||
      comparator(left[leftIdx]) <= comparator(right[rightIdx])
    ) {
      merged.push(left[leftIdx]);
      leftIdx++;
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return merged;
};

const mergeSort = function (arr, comparator) {
  const aux = (start, end) => {
    if (start >= end) return [arr[start]];
    const mid = Math.floor((start + end) / 2);
    const left = aux(start, mid);
    const right = aux(mid + 1, end);
    return merge(left, right, comparator);
  };
  return aux(0, arr.length - 1);
};

// divide and conquer: O(N * logN)
const closestPairOfPoints = function (points) {
  const bruteForce = (start, end, sorted) => {
    // naive solution과 동일한 로직
    // 모든 쌍을 비교한다. 3개 이하에 대해서만 호출되므로 크게 비효율적이지 않다.
    let min = Number.MAX_SAFE_INTEGER;
    for (let src = start; src <= end; src++) {
      for (let dst = src + 1; dst <= end; dst++) {
        const dist = calculateDistance(sorted[src], sorted[dst]);
        min = Math.min(min, dist);
      }
    }
    return min;
  };

  const closestCrossing = (mid, sorted, min) => {
    // 가운데(mid)를 기준으로
    const strip = [];
    const midX = sorted[mid][1];
    let lIdx = mid - 1;
    let rIdx = mid + 1;

    // 왼쪽과 오른쪽 부분에서 가장 가까운 두 점 사이의 거리가 min으로 주어진다.
    // 가운데를 기준으로 오직 x좌표만을 기준으로 min보다 가까운 좌표만 고려한다.
    // y좌표가 같다고 가정하면, 최소한 이 조건(x좌표 기준 min 이하)을 만족해야하기 때문이다.
    // y좌표가 같을 경우 두 점 사이의 거리는 x축 좌표 간의 거리다.
    // 단, 소수점 계산을 피하기 위해 두 점 사이의 거리에 100을 곱하고 있으므로 동일한 기준을 적용해야 한다.

    // sorted는 x축을 기준으로 정렬되어 있기 때문에,
    // mid를 기준으로 가까운 거리부터 최소 기준(min보다는 가까워야 함)을 만족할 때까지만 탐색을 하면 된다.
    while (
      rIdx < sorted.length &&
      Math.abs(midX - sorted[rIdx][1]) * 100 < min
    ) {
      rIdx++;
    }
    while (lIdx >= 0 && Math.abs(midX - sorted[lIdx][1]) * 100 < min) {
      lIdx--;
    }

    // while 탈출하기 위한 조건을 보면,
    // lIdx는 1을 더해야 하고, rIdx는 1을 줄여야 한다.
    // 아래 구간에 대해서 brute force를 적용한다.
    for (let i = lIdx + 1; i < rIdx; i++) {
      for (let j = i + 1; j < rIdx; j++) {
        min = Math.min(min, calculateDistance(sorted[i], sorted[j]));
      }
    }
    return min;
  };

  const closestFrom = (start, end, size, sorted) => {
    if (size <= 3) {
      // 최소 두 개 이상의 점이 있어야 거리를 계산할 수 있다.
      //  1) 모든 점의 개수가 4개일 경우, 각각 2개로 나눌 수 있다.
      //  2) 모든 점의 개수가 5개일 경우, 각각 2, 3개로 나눌 수 있다. 3개인 경우 더 나눌 수 없다.
      return bruteForce(start, end, sorted);
    }
    // 가운데를 기준으로 분할한 뒤 재귀적으로 문제를 해결한다.
    const mid = Math.floor((start + end) / 2);
    // 왼쪽, 오른쪽으로 나뉜 부분에서 각각 가장 가까운 두 점 사이의 거리를 구한다.
    const minLeft = closestFrom(start, mid, mid - start + 1, sorted);
    const minRight = closestFrom(mid + 1, end, end - mid, sorted);

    // 전체 영역에서 가장 가까운 두 점 사이의 거리는 아래 중 하나다.
    //  1) 위에서 구한 두 거리(minLeft, minRight)
    //  2) 가운데를 가로지르는 두 점 사이의 거리
    // 먼저 1)중에서 더 짧은 거리를 구한다. 최종 정답은 이보다 작거나 같아야 한다.
    let min = Math.min(minLeft, minRight);
    return closestCrossing(mid, sorted, min);
  };

  // x좌표를 기준으로 정렬한다.
  const sorted = mergeSort(points.slice(0), (item) => item[1]);
  return closestFrom(0, sorted.length - 1, sorted.length, sorted);
};
// 최대 공약수(유클리드 호제법: Euclidean algorithm)
function gcd(m, n) {
  if (m % n === 0) return n;
  return gcd(n, m % n);
}

function divideChocolateStick(M, N) {
  const result = [];
  // 최대공약수를 구한다.
  // M, N의 순서는 상관없다.
  const GCD = gcd(M, N);
  let temp = 0; //

  // 약수는 대칭적이므로 제곱근까지만 반복해도 된다.
  // 예) 36의 약수는 1, 2, 3, 4, 6, 9, 12, 18, 36이다.
  // 제곱근을 기준으로 양쪽의 값 하나씩 곱했을 때 36이 되기 때문에
  // 제곱근 보다 큰 약수는 제곱근보다 작은 약수에서 구할 수 있다.
  const sqrt = Math.floor(Math.sqrt(GCD));
  for (let left = 1; left <= sqrt; left++) {
    if (GCD % left === 0) {
      // 최대공약수의 약수인 경우 중 제곱근 보다 작은 약수의 경우
      result.push([left, M / left, N / left]);
      if (left * left < GCD) {
        // 제곱근이 아닌 경우(제곱근 보다 작은)
        right = GCD / left; // 최대 공약수를 제곱근이 아닌 수로 나누면 제곱근 보다 큰 약수를 구할 수 있다.
        result.push([right, M / right, N / right]);
      }
    }
  }

  // '빼빼로를 받게 되는 직원의 수'를 기준으로 오름차순으로 정렬
  result.sort((op1, op2) => op1[0] - op2[0]);

  return result;
}
