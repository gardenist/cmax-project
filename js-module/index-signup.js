const UserService = require('./user-service');

// signUp 버튼을 누르면 이벤트 핸들러 호출하기
let signUpButton = document.getElementById('signUp');

signUpButton.onclick = function() {
    // username 가져오기
    let username = document.querySelector('#username').value;

    // password 가져오기
    let password = document.querySelector('#password').value;

    // 필수 입력란 체크하기 - 둘 다 필수임
    // TODO

    // username이 중복되지 않는지
    // 기존에 저장된 정보 중에서 username으로 조회했을 때
    // 결과가 있는 경우 
    // TODO

    // 저장하기
    let userService = new UserService();
    userService.signUp(username, password);

    // 로그인 페이지로 이동 (login.html 파일)
    location.href = "./login.html";
}