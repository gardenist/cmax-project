// 사용자를 다루는 코드를 작성
// 회원가입, 로그인도, 로그인된 사용자를 가지고 오기

class UserService {
    constructor() {
        this.storage = new JsonLocalStorage();
    }

    getLoggedInUser() {
        // 로그인 된 것처럼 로그인 사용자 정보를 반환

        return new User('junyoung', '12345');
    }

    signUp(username, password) {
        // User
        let user = new User(username, password);

        // 저장하기
        // 키 형식: users.{username}
        let key = 'users.' + username;
        this.storage.save(key, user);
    }

    logIn(username, password) {
        // username으로 찾을 수 없는 경우
        // password가 일치하지 않을 경우

        // return 값은 storage부터 읽어온 user 객체
    }
}