const cmax = {
    storage : new CmaxStorage()
}  

//글 저장하기
function write(title, content){
   let list = readPosts();
    //저기 키에다가 모든 글을 저장
    //list를 한번도 ㅆ지 않은 경우는 새로 생성
    
    //서버에 글쓰기
    list.push({
        title: title,
        content: content
    })

    cmax.storage.save('post.list', list)
}

//글 목록 불러오기
function readPosts(){
   let list = cmax.storage.load('post.list') 
    //저기 키에다가 모든 글을 저장
    //list를 한번도 ㅆ지 않은 경우는 새로 생성
    if(!list){
        list = [];
    }

    return list;
}