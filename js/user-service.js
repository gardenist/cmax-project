// 사용자를 다루는 코드를 작성
// 회원가입, 로그인도, 로그인된 사용자를 가지고 오기

class UserService {
    getLoggedInUser() {
        // 로그인 된 것처럼 로그인 사용자 정보를 반환

        return new User('junyoung', '12345');
    }
}