class JsonSessionStorage {
    save (key, value) {
        console.log('save session data'+ key, value);
        sessionStorage.setItem(key, JSON.stringify(value))
    }

    load (key) {
        console.log('load session data'+ key);
        let value = sessionStorage.getItem(key);
        if(value){
            return JSON.parse(value);
        }
    }

}

module.exports = JsonSessionStorage;