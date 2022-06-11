// // Fetch를 사용
// fetch('http://52.78.213.9:3000/messages%27)
//     .then (function(response) {
//         return response.json();
//     })
//     .then(function (json) {
//         ...
// });
// XMLHttpRequest를 사용
var xhr = new XMLHttpRequest();
xhr.open('get', 'http://52.78.213.9:3000/messages%27);

xhr.onreadystatechange = function(){
    if(xhr.readyState !== 4) return;
    // readyState 4: 완료

    if(xhr.status === 200) {
        // status 200: 성공
        console.log(xhr.responseText); // 서버로부터 온 응답
    } else {
        console.log('에러: ' + xhr.status); // 요청 도중 에러 발생
    }
}

xhr.send(); // 요청 전송