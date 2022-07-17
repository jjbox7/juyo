const element = <h1>Hello, world!</h1>;
// 위에 희한한 태그 문법은 문자열도, HTML도 아닙니다.
// \

// jsx란
// JSX라 하며 JavaScript를 확장한 문법이다.
// UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용할 것을 권장함.
// JSX라고 하면 템플릿 언어가 떠오를 수도 있지만, JavaScript의 모든 기능이 포함되어 있다.

//JSX는 React “엘리먼트(element)” 를 생성한다. 다음 섹션에서는 DOM에 어떻게 렌더링하는지 알아보자. 아래를 보면 JSX를 시작하기 위해 필요한 기본사항을 찾으실 수 있다.

// JSX란?
// React는 JSX 사용이 필수가 아니지만, 대부분의 사람은 JavaScript 코드 안에서 UI 관련 작업을 할 때 시각적으로 더 도움
// React는 별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는 대신, 둘 다 포함하는 “컴포넌트”라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리
// React가 더욱 도움이 되는 에러 및 경고 메시지를 표시할 수 있게 해줌


// JSX에 표현식 포함
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root'));
// );JSX의 중괄호 안에는 유효한 모든 JavaScript 표현식을 넣을 수 있다.
//예를 들어 2 + 2, user.firstName 또는 formatName(user) 등은 모두 유효한 JavaScript 표현식

// JavaScript 함수 호출의 결과인 formatName(user)을 <h1> 엘리먼트에 포함할때
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
  
  ReactDOM.render(
    element,
    document.getElementById('root')
  );


//   JSX도 표현식
// 컴파일이 끝나면, JSX 표현식이 정규 JavaScript 함수 호출이 되고 JavaScript 객체로 인식
// JSX를 if 구문 및 for loop 안에 사용하고, 변수에 할당하고, 인자로서 받아들이고, 함수로부터 반환
function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
// JSX 속성 정의
// 어트리뷰트에 따옴표를 이용해 문자열 리터럴을 정의
const element = <a href="https://www.reactjs.org"> link </a>;

// 중괄호를 사용하여 어트리뷰트에 JavaScript 표현식을 삽입
const element = <img src={user.avatarUrl}></img>;
// 어트리뷰트에 JavaScript 표현식을 삽입할 때 중괄호 주변에 따옴표를 입력하면 안됨. 따옴표(문자열 값에 사용) 또는
// 중괄호(표현식에 사용) 중 하나만 사용하고, 동일한 어트리뷰트에 두 가지를 동시에 사용하면 안됨

// JSX로 자식 정의
// 태그가 비어있다면 XML처럼 /> 를 이용해 바로 닫아줘야함
const element = <img src={user.avatarUrl} />;

// JSX 태그는 자식을 포함
const element = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );

//   JSX는 주입 공격을 방지
//JSX에 사용자 입력을 삽입하는 것은 안전
const title = response.potentiallyMaliciousInput;
// 이것은 안전합니다.
const element = <h1>{title}</h1>;
// 기본적으로 React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프 하므로, 애플리케이션에서 명시적으로 작성되지 않은 내용은 주입되지 않는다.
//  모든 항목은 렌더링 되기 전에 문자열로 변환됩니다. 이런 특성으로 인해 XSS (cross-site-scripting) 공격을 방지

// //JSX는 객체를 표현
// Babel은 JSX를 React.createElement() 호출로 컴파일
const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );

  React.createElement()//는 버그가 없는 코드를 작성하는 데 도움이 되도록 몇 가지 검사를 수행하며, 기본적으로 다음과 같은 객체를 생성
  const element = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
  };
//   이객체를 “React 엘리먼트”라고 하며, 화면에서 보고 싶은 것을 나타내는 표현이라 생각하면 됩니다. React는 이 객체를 읽어서, DOM을 구성하고 최신 상태로 유지하는 데 사용