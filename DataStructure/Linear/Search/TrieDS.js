class trienode{
    constructor(){
        this.childs = new Array(26).fill(null);
        this.endOfWord = false;
        this.ltr = '';
    }

    setSelfLetter(ltr){
        this.letter = ltr;
    }
}

var root;

function insert(k){
    k = k.toLowerCase();
    var lvl = 0, length = k.length, idx;
    var crawler = root;

    for(lvl = 0; lvl < length; lvl++){
        idx = k[lvl].charCodeAt(0) - 'a'.charCodeAt(0);
        if(crawler.childs[idx] == null) crawler.childs[idx] = new trienode();
        crawler = crawler.childs[idx]
        crawler.setSelfLetter(k[lvl])
    }
    crawler.endOfWord = true
}

function search(k){
    k = k.toLowerCase();
    var lvl = 0, length = k.length, idx;
    var crawler = root;
    for(; lvl < length; lvl++){
        idx = k[lvl].charCodeAt(0) - 'a'.charCodeAt(0);
        if(crawler.childs[idx] === null) return false;
        crawler = crawler.childs[idx]
    }

    return crawler.endOfWord
}

root =  new trienode();
insert("Sun")
insert("Sundance")
insert("John")
insert("Johnny")

console.log(search("johzn"))

