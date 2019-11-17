

/*
 PostService는 게시글 다루는 서비스 로직입니다.
 - 게시글 작성
 - 게시글 조회
 - 게시글 수정
 - 게시글 삭제
 
 C R U D
 Create 
 Read/Retrieve
 Update
 Delete
 */
class PostService {
    constructor() {
        this.storage = new JsonLocalStorage();
        this.userService = new UserService();
    }

getNextID() {
    return this.storage.load('posts.nextId') || 1;
}

    write(title, content) {
        // ID
        // ID sequence (1, 2, 3, 4, ...)

        // 로컬스토리지로부터 ID를 가지고 온다.
        // 키가 posts.nextId 값을 가지고 온다.
        // 만약 ID가 없다면 기본값으로 1을 설정한다.
        let nextId = this.storage.load('posts.nextId') || 1;

        // 사용자 정보를 가지고 온다.
        let user = this.userService.getLoggedInUser(); // junyoung

        // 가져온 ID는 post의 ID로 사용하고,
        // post 객체를 생성한다.
        let post = new Post(nextId, user, title, content);

        // post를 저장한다. -> 
        // post 정보를 key - ??? 에 저장한다.
        // posts.id
        this.storage.save('posts.' + nextId, post);

        // 가져온 ID에 1을 더해서 다시 로컬 스토리지에 저장해둔다.
        // (그래야 다음에 post를 작성할 때 그대로 사용할 수 있으므로)
        this.storage.save('posts.nextId', nextId + 1);
    }

    read(id) {
        let post = this.storage.load('posts.' + id);
        return post;
    }

    readAll() {

    }

    update() {

    }

    delete() {

    }
}