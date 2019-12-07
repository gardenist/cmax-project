//localStorage 는 문자열만 받을 수 있고.
// object -> json ㅠㅛ혀 바꿔서 저장
// json 오브젝트가져오기

// let post = {
//     id : ?,
//     writer:,
//     password:,
//     content


// }
class JsonLocalStorage {
    save (key, value) {
        console.log('save data'+ key, value);
        localStorage.setItem(key, JSON.stringify(value))
    }

    load (key) {
        console.log('load data'+ key);
        let value = localStorage.getItem(key);
        if(value){
            return JSON.parse(value);
        }
    }

}

module.exports = JsonLocalStorage;