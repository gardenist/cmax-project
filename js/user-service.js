// 사용자를 다루는 코드를 작성
// 회원가입, 로그인도, 로그인된 사용자를 가지고 오기

class UserService {
    constructor() {
        this.storage = new JsonLocalStorage();
        this.session = new JsonSessionStorage();
    }

    getLoggedInUser() {
        // 세션 스토리지에 저장된 사용자 정보를 가져오기
        let loggedInUser = this.session.load('loggedInUser');
        console.log(loggedInUser);
        return loggedInUser;
    }

    signUp(username, password) {
        // User
        let user = new User(username, password);

        // 저장하기
        // 키 형식: users.{username}
        let key = 'users.' + username;
        this.storage.save(key, user);
    }

    /*
     이 로그인을 쓸 때 success는 이렇게 사용해주세요
     login('', '', function(message) { 

     }, function(message) {
         // 실패 메시지를 처리해주세요.
     })
     */
    logIn(username, password, success, failed) {
        // 사용자 정보를 가져오기
        let user = this.storage.load('users.' + username);

        // 사용자 정보가 없을 때
        if(!user) {
            // 실패 콜백에 메시지를 담아 호출하기
            failed('사용자 ' + username + '의 정보를 찾을 수 없습니다.');
        } else {
            // 사용자 정보가 존재하는 경우
            if(user.password === password) {
                // 비밀번호가 일치하는 경우
                this.session.save('loggedInUser', new User(username, password));
                success();
            } else {
                // 비밀번호가 일치하지 않는 경우
                failed('비밀번호가 일치하지 않습니다.');
            }
        }

        // username으로 찾을 수 없는 경우
        // password가 일치하지 않을 경우

        // return 값은 storage부터 읽어온 user 객체
    }
}