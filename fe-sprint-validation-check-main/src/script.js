// // 동영상 강의에 나온 코드를 그대로 실습하세요
// // TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
// let elinputUsername = document.querySelector('#username')


// let elFailMessage = document.querySelector('.failure-message')
// let elSuseesMessage = document.querySelector('.succes-message')


// elFailMessage.classList.remove('hide')
// // elFailMessage.getElementsByClassName.display = 'none'
// // elinputUsername.value = '김코딩'
// elinputUsername.onkeyup = function(){
//   if(isMoreThan4Length(elinputUsername.value)){
//     elSuseesMessage.classList.remove('hide')
//     //성공 메세지가 보여야 함
//     elFailMessage.classList.add('hide')
//     //실패 메세지가 보여야함
//   }
//   else {
//     elSuseesMessage.classList.add('hide')
//     // 성공 메세지가 보여야함
//     elFailMessage.classList.remove('hide')
//     // 실패 메세지가 보여야함
//   }

//   //---------------------------
//   // if(isMoreThan4Length(elinputUsername.value)){
//   //   console.log ('네글자 보다 크네')
//   // }
//   // else {
//   //   console.log('짧다')
//   // }
//   //-----------------------------

// function isMoreThan4Length(value) {
//   return value.length >= 4
//   // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
// }

// function isMatch (password1, password2) {
//   // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
// }
// }

// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let elInputUsername = document.querySelector('#username')

let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')

let inputpassword = document.querySelector('#password')
let inputCheckPassword = document.querySelector('#password-retype') 
let mismatchMSG = document.querySelector(".mismatch-message")


elInputUsername.onkeyup = function () {
  if (isMoreThan4Length(elInputUsername.value)) {
    // 성공 메세지가 보여야 함
    elSuccessMessage.classList.remove('hide')
    // 실패 메세지가 보여야 함
    elFailureMessage.classList.add('hide')
  } 
  else {
    // 성공 메세지가 보여야 함
    elSuccessMessage.classList.add('hide')

    // 실패 메세지가 보여야 함
    elFailureMessage.classList.remove('hide')
  }

}
function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4
}
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  // expect 함수 
function isMatch (password1,password2){
  return password1 === password2
}

inputCheckPassword .onkeyup = function () {
    if (isMatch(inputpassword.value, inputCheckPassword.value)){
      mismatchMSG.classList.add('hide');
    } else {
      mismatchMSG.classList.remove('hide');
    }
}

