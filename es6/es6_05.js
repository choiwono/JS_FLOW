let obj = {
    name : "crong",
    address : "Korea",
    age : 10
}

let { name : myName, age:myAge } = obj;
console.log(myName, myAge);

var news = [
    {
        "title":"sbs",
        "imgurl" : "http://abc",
        "newslist" : [
            "aaaa",
            "bbbbb"
        ]
    },
    {
        "title":"mbc",
        "imgurl":"http://mbc",
        "newlist":[
            "mmmmm",
            "bbbbb"
        ]
    }
]
/*let [sbs,] = news;
let {title,imgurl} = sbs;
console.log(sbs);
console.log(title,imgurl);

let [{title,imgurl},] = news;
console.log(title,imgurl);*/

function getNewsList([{newslist}]){
    console.log(newslist);
}
getNewsList(news);