// 계층 구조 혹은 MVC와 같은 패턴에서 Model을 담당하는 코드

// 사용자
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

// 게시물
class Post {
    // 비구조화 문법(Destructuring)
    constructor(id, {username}, title, content) {
        this.id = id;
        this.username = username;
        this.title = title;
        this.content = content;
        // 작성시각
        this.createdAt = new Date();
    }
}

// 댓글
class Comment {
    constructor({/* post 객체를 넣어주세요 */ id}, 
        {/* user 객체를 넣어주세요 */ username },
        content) {
        this.postId = id;
        this.username = username;
        this.content = content;
    }
}

module.exports = {
    User,
    Post,
    Comment
};