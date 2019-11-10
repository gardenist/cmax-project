// 컨트롤러 역할을 하는 코드를 여기에 작성
// 페이지에서 "글쓰기 버튼 클릭"과 같은 이벤트가 발생하면
// 서비스로 전달해주는 역할

// 글쓰기만 봅시다. (글쓰기 버튼을 클릭하면)

const postService = new PostService();

document.querySelector('#write').onclick = function() {
    // input id content인 태그를 가지고 와서 value를 가지고온다
    
    // (content 값)

    //  title 가져오기
    let title =  document.querySelector('#title');
    //  contetn 가져오기
    let content =  document.querySelector('#content');
    //  저장하기 
    postService.write(title.value, content.value);
    
    //  비워주기
    title.value=''; content.value='';
}