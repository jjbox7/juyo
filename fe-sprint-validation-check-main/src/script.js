// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
console.log('잘 불려왔니')
let elinputUsername = document.querySelector('#username')
console.log(elinputUsername)


let elFailMessage = document.querySelector('.failure-message')
let elSuseesMessage = document.querySelector('.succes-message')


elFailMessage.classList.remove('hide')
// elFailMessage.getElementsByClassName.display = 'none'
// elinputUsername.value = '김코딩'
elinputUsername.onkeyup = function(){
  if(isMoreThan4Length(elinputUsername.value)){
    elSuseesMessage.classList.remove('hide')
    //성공 메세지가 보여야 함
    elFailMessage.classList.add('hide')
    //실패 메세지가 보여야함
  }
  else {
    elSuseesMessage.classList.add('hide')
    // 성공 메세지가 보여야함
    elFailMessage.classList.remove('hide')
    // 실패 메세지가 보여야함
  }

  //---------------------------
  // if(isMoreThan4Length(elinputUsername.value)){
  //   console.log ('네글자 보다 크네')
  // }
  // else {
  //   console.log('짧다')
  // }
  //-----------------------------

function isMoreThan4Length(value) {
  return value.length >= 4
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
}

function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
}
}