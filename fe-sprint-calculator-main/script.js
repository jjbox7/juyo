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
