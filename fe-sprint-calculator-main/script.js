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
};
